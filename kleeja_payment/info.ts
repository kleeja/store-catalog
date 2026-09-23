import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "kleeja_payment",
    "icon": "https://raw.githubusercontent.com/kleeja/kleeja_payment/master/icon.png",
    "title": {
        "en": "Kleeja Payment",
        "ar": "مدفوعات كليجا"
    },
    "description": {
        "en": "Selling Files and Premium Groups",
        "ar": "بيع الملفات والمجموعات المميزة"
    },
    "developer": "Kleeja Team",
    "website": "https://kleeja.net",
    "kleeja_version": {
        "min": "3.1.5",
        "max": "3.9"
    },
    "file": {
        "version": "1.2.8",
        "url": "https://github.com/kleeja/kleeja_payment/archive/1.2.8.zip"
    }
} satisfies CatalogItem
