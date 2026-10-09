import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "language_switch",
    "icon": "https://raw.githubusercontent.com/kleeja/language_switch/main/icon.png",
    "title": {
        "en": "Language Switch",
        "ar": "تغيير اللغة"
    },
    "description": {
        "en": "A language switch box in the top of every page",
        "ar": "صندوق تغيير لغة في أعلى كل صفحة"
    },
    "developer": "Kleeja Team",
    "website": "",
    "kleeja_version": {
        "min": "4.0.0",
        "max": "4.9.9"
    },
    "file": {
        "version": "2.0",
        "url": "https://github.com/kleeja/language_switch/archive/2.0.zip"
    }
} satisfies CatalogItem
