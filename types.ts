/**
 * Types for the entries in `kleeja-4-catalog.json`.
 */

/** Kind of catalog entry. */
export type CatalogItemType = 'plugin' | 'style';

/** A text value provided in each supported language. */
export interface LocalizedText {
    en: string;
    ar: string;
    [key: string]: string;
}

/** Range of Kleeja versions an item is compatible with. */
export interface KleejaVersionRange {
    min: string;
    max: string;
}

/** The downloadable release of an item. */
export interface CatalogItemFile {
    version: string;
    /** Direct URL to the release archive. */
    url: string;
}

/** A single entry of the catalog. */
export interface CatalogItem {
    type: CatalogItemType;
    /** Unique machine name, also used as the item's folder name. */
    name: string;
    /** Absolute URL of the item's icon. */
    icon: string;
    title: LocalizedText;
    description: LocalizedText;
    developer: string;
    /** Homepage of the item, empty string when there is none. */
    website: string;
    kleeja_version: KleejaVersionRange;
    file: CatalogItemFile;
    /** Style an item builds on top of, e.g. `"bootstrap"`. Only used by styles. */
    depend_on?: string;
    /** Comma separated plugin names the item needs, empty string when none. */
    plugins_required?: string;
}

/** The whole `kleeja-4-catalog.json` document. */
export type Catalog = CatalogItem[];
