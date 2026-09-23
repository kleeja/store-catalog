import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "kj_ftp",
    "icon": "https://raw.githubusercontent.com/kleeja/kj-ftp/master/icon.png",
    "title": {
        "en": "Kleeja Multi-FTP Uploading",
        "ar": "تحميل FTP متعدد"
    },
    "description": {
        "en": "Add Multi-FTP support to Kleeja",
        "ar": "إضافة دعم التحميل لعدة FTP  في كليجا"
    },
    "developer": "Kleeja Team",
    "website": "",
    "kleeja_version": {
        "min": "3.0",
        "max": "3.9"
    },
    "file": {
        "version": "1.1.1",
        "url": "https://github.com/kleeja/kj-ftp/archive/1.1.1.zip"
    }
} satisfies CatalogItem
