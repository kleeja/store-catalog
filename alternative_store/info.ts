import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "alternative_store",
    "icon": "./Masmak/images/plugin.png",
    "title": {
        "en": "Alternative Store",
        "ar": "المتجر البديل"
    },
    "description": {
        "en": "Alternative Store for Kleeja <a href='https://github.com/kleeja/alternative_store/releases/download/1.0/alternative_store.zip' target='_blank'>Click here to download it</a>",
        "ar": "المتجر البديل لكليجا <a href='https://github.com/kleeja/alternative_store/releases/download/1.0/alternative_store.zip' target='_blank'>أضغط هنا للتحميل</a>"
    },
    "developer": "Kleeja Team",
    "website": "https://github.com/kleeja/alternative_store",
    "kleeja_version": {
        "min": "3.1.1",
        "max": "3.9"
    },
    "file": {
        "version": "1.1",
        "url": "https://github.com/kleeja/alternative_store/archive/1.1.zip"
    }
} satisfies CatalogItem
