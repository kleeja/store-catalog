import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "kj_download_speed_limit",
    "icon": "https://raw.githubusercontent.com/kleeja/kj_download_speed_limit/main/icon.png",
    "title": {
        "en": "KJ Download Speed Limit",
        "ar": "تحديد سرعة التحميل"
    },
    "description": {
        "en": "Limit files download speed for each group",
        "ar": "تحديد سرعة تحميل الملفات لكل مجموعة"
    },
    "developer": "Kleeja Team",
    "website": "https://github.com/kleeja/kj_download_speed_limit",
    "kleeja_version": {
        "min": "4.0.0",
        "max": "4.9.9"
    },
    "file": {
        "version": "1.2",
        "url": "https://github.com/kleeja/kj_download_speed_limit/archive/1.2.zip"
    }
} satisfies CatalogItem
