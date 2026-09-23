import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "klj_adfly",
    "icon": "https://raw.githubusercontent.com/kleeja/klj-adfly/master/icon.png",
    "title": {
        "en": "adf.ly for Kleeja",
        "ar": "روابط adf.ly لكليجا"
    },
    "description": {
        "en": "Generate a links using adf.ly service",
        "ar": "دعم Adf.ly في كليجا وإنشاء روابط ربحية تلقائياً"
    },
    "developer": "Kleeja Team",
    "website": "",
    "kleeja_version": {
        "min": "3.0",
        "max": "3.9"
    },
    "file": {
        "version": "1.2",
        "url": "https://github.com/kleeja/klj-adfly/archive/1.2.zip"
    }
} satisfies CatalogItem
