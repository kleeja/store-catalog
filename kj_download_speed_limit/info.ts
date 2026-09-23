import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "kj_download_speed_limit",
    "icon": "https://raw.githubusercontent.com/kleeja/kj-download-speed-limit/master/icon.png",
    "title": {
        "en": "KJ Download Speed Limit",
        "ar": "تحديد سرعة التحميل"
    },
    "description": {
        "en": "Limit files download speed for each group",
        "ar": "تحديد سرعة تحميل الملفات لكل مجموعة"
    },
    "developer": "Kleeja Team",
    "website": "",
    "kleeja_version": {
        "min": "3.0",
        "max": "3.9"
    },
    "file": {
        "version": "1.1",
        "url": "https://github.com/kleeja/kj-download-speed-limit/archive/1.1.zip"
    }
} satisfies CatalogItem
