import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "kjp_account_charger",
    "icon": "./Damask/images/plugin.png",
    "title": {
        "en": "Account Top-up for Kleeja Payment",
        "ar": "شحن الرصيد لنظام كليجة للدفع الإلكتروني"
    },
    "description": {
        "en": "Charge user accounts when KJPay exists and the group have recaive profits permissions",
        "ar": "قم بشحن حسابات المستخدمين عند وجود اضافة مدفوعات كليجا"
    },
    "developer": "Kleeja Team",
    "website": "https://github.com/kleeja/kjp_account_charger",
    "kleeja_version": {
        "min": "4.0.0",
        "max": "4.9.9"
    },
    "file": {
        "version": "2.0",
        "url": "https://github.com/kleeja/kjp_account_charger/archive/2.0.zip"
    }
} satisfies CatalogItem
