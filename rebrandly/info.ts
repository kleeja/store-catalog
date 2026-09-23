import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "rebrandly",
    "icon": "https://raw.githubusercontent.com/kleeja/rebrandly/master/icon.png",
    "title": {
        "en": "Rebrandly for Kleeja",
        "ar": "Rebrandly لكليجا"
    },
    "description": {
        "en": "Generate a short links using Rebrandly service",
        "ar": "إنشاء روابط قصيرة من خدمة Rebrandly "
    },
    "developer": "Kleeja Team",
    "website": "",
    "kleeja_version": {
        "min": "3.0",
        "max": "3.9"
    },
    "file": {
        "version": "1.0",
        "url": "https://github.com/kleeja/rebrandly/archive/1.0.zip"
    }
} satisfies CatalogItem
