import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "phpbb_integration",
    "icon": "https://raw.githubusercontent.com/kleeja/phpbb_integration/main/icon.png",
    "title": {
        "en": "phpBB Integration",
        "ar": "التكامل مع phpBB"
    },
    "description": {
        "en": "phpBB Membership Integration",
        "ar": "التكامل مع عضويات phpBB"
    },
    "developer": "Kleeja Team",
    "website": "https://github.com/kleeja/phpbb_integration",
    "kleeja_version": {
        "min": "4.0.0",
        "max": "4.9.9"
    },
    "file": {
        "version": "2.0",
        "url": "https://github.com/kleeja/phpbb_integration/archive/2.0.zip"
    }
} satisfies CatalogItem
