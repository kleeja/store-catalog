/**
 * Rebuilds `kleeja-4-catalog.json` from every `<name>/info.ts` in the repository.
 *
 * Run with: npx tsx scripts/build-catalog.ts
 */
import { existsSync } from 'node:fs'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import type { Catalog, CatalogItem } from '../types'

const root = resolve(import.meta.dirname, '..')
const catalogPath = join(root, 'kleeja-4-catalog.json')
/** The old catalog. It is left untouched and only seeds the item order until `kleeja-4-catalog.json` exists. */
const legacyCatalogPath = join(root, 'catalog.json')

/** Folders that never hold a catalog item. */
const ignored = new Set(['node_modules', 'scripts'])

/** Loads the default export of every `<folder>/info.ts`. */
async function readItems(): Promise<CatalogItem[]> {
    const entries = await readdir(root, { withFileTypes: true })
    const items: CatalogItem[] = []

    for (const entry of entries) {
        if (!entry.isDirectory() || entry.name.startsWith('.') || ignored.has(entry.name)) continue

        const infoPath = join(root, entry.name, 'info.ts')
        if (!existsSync(infoPath)) continue

        const item = (await import(pathToFileURL(infoPath).href)).default as CatalogItem
        if (!item?.name) throw new Error(`${entry.name}/info.ts has no default export with a "name"`)
        if (item.name !== entry.name) throw new Error(`${entry.name}/info.ts declares the name "${item.name}"`)

        items.push(item)
    }

    return items
}

/** The catalog at `path` as it is committed right now, or null when it is missing or unreadable. */
async function readCatalog(path: string): Promise<{ names: string[], eol: string } | null> {
    if (!existsSync(path)) return null
    try {
        const raw = await readFile(path, 'utf8')
        return {
            names: (JSON.parse(raw) as Catalog).map(item => item.name),
            // Keep whichever line ending the file already uses.
            eol: raw.includes('\r\n') ? '\r\n' : '\n',
        }
    } catch {
        return null
    }
}

const items = await readItems()
if (items.length === 0) throw new Error('no <name>/info.ts files found, refusing to write an empty catalog')

const current = await readCatalog(catalogPath) ?? await readCatalog(legacyCatalogPath)
const order = current?.names ?? []
const rank = (item: CatalogItem) => {
    const index = order.indexOf(item.name)
    return index === -1 ? order.length : index
}

// Known items keep their place, new ones are appended in alphabetical order.
items.sort((a, b) => rank(a) - rank(b) || a.name.localeCompare(b.name))

const json = JSON.stringify(items, null, 4)
await writeFile(catalogPath, current?.eol === '\r\n' ? json.replace(/\n/g, '\r\n') : json)
console.log(`wrote ${items.length} items to kleeja-4-catalog.json`)
