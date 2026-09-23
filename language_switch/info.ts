import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "language_switch",
    "icon": "https://raw.githubusercontent.com/kleeja/language-switch/master/icon.png",
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
        "min": "3.0",
        "max": "3.9"
    },
    "file": {
        "version": "1.1",
        "url": "https://github.com/kleeja/language-switch/archive/1.1.zip"
    }
} satisfies CatalogItem
