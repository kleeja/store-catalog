import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "phpbb_integration",
    "icon": "https://raw.githubusercontent.com/kleeja/phpbb-integration/master/icon.png",
    "title": {
        "en": "phpBB Integration",
        "ar": "التكامل مع phpBB"
    },
    "description": {
        "en": "phpBB Membership Integration",
        "ar": "التكامل مع عضويات phpBB"
    },
    "developer": "Kleeja Team",
    "website": "",
    "kleeja_version": {
        "min": "3.1",
        "max": "3.9"
    },
    "file": {
        "version": "1.0.5",
        "url": "https://github.com/kleeja/phpbb-integration/archive/1.0.5.zip"
    }
} satisfies CatalogItem
