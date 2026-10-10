import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "kleeja_payment",
    "icon": "https://raw.githubusercontent.com/kleeja/kleeja_payment/main/icon.png",
    "title": {
        "en": "Kleeja Payment",
        "ar": "نظام كليجة للدفع الإلكتروني"
    },
    "description": {
        "en": "Selling Files and Premium Groups",
        "ar": "بيع الملفات والمجموعات المميزة"
    },
    "developer": "Kleeja Team",
    "website": "https://github.com/kleeja/kleeja_payment",
    "kleeja_version": {
        "min": "4.0.0",
        "max": "4.9.9"
    },
    "file": {
        "version": "2.0.4",
        "url": "https://github.com/kleeja/kleeja_payment/releases/download/2.0.4/kleeja_payment-2.0.4.zip"
    }
} satisfies CatalogItem
