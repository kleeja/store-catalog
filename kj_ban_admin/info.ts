import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "kj_ban_admin",
    "icon": "https://raw.githubusercontent.com/kleeja/kj_ban_admin/main/icon.png",
    "title": {
        "en": "Kleeja Admin Firewall",
        "ar": "جدار أمني للوحة كليجا"
    },
    "description": {
        "en": "Ban a user after so many invalid login attempts to Kleeja control panel",
        "ar": "حظر أي مستخدم يحاول الدخول للوحة كليجا بعد عدة محاولات خاطئة"
    },
    "developer": "Kleeja Team",
    "website": "https://github.com/kleeja/kj_ban_admin",
    "kleeja_version": {
        "min": "4.0.0",
        "max": "4.9.9"
    },
    "file": {
        "version": "1.1",
        "url": "https://github.com/kleeja/kj_ban_admin/archive/1.1.zip"
    }
} satisfies CatalogItem
