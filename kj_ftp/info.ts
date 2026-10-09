import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "kj_ftp",
    "icon": "https://raw.githubusercontent.com/kleeja/kj_ftp/main/icon.png",
    "title": {
        "en": "Kleeja Multi-FTP Uploading",
        "ar": "تحميل FTP متعدد"
    },
    "description": {
        "en": "Add Multi-FTP support to Kleeja",
        "ar": "إضافة دعم التحميل لعدة FTP  في كليجا"
    },
    "developer": "Kleeja Team",
    "website": "https://github.com/kleeja/kj_ftp",
    "kleeja_version": {
        "min": "4.0.0",
        "max": "4.9.9"
    },
    "file": {
        "version": "2.0",
        "url": "https://github.com/kleeja/kj_ftp/archive/2.0.zip"
    }
} satisfies CatalogItem
