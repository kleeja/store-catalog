import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "kjp_account_charger",
    "icon": "./Masmak/images/plugin.png",
    "title": {
        "en": "KJPay Account Charger",
        "ar": "تعبئة حساب"
    },
    "description": {
        "en": "Charge user accounts when KJPay exists and the group have recaive profits permissions",
        "ar": "قم بشحن حسابات المستخدمين عند وجود اضافة مدفوعات كليجا"
    },
    "developer": "Kleeja Team",
    "website": "https://github.com/kleeja/kjp_account_charger",
    "kleeja_version": {
        "min": "3.1.5",
        "max": "3.9"
    },
    "file": {
        "version": "1.0.1",
        "url": "https://github.com/kleeja/kjp_account_charger/archive/1.0.1.zip"
    }
} satisfies CatalogItem
