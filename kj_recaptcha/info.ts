import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "kj_recaptcha",
    "icon": "https://raw.githubusercontent.com/kleeja/kj_recaptcha/main/icon.png",
    "title": {
        "en": "KJ reCaptcha",
        "ar": "كليجا ريكابتشا"
    },
    "description": {
        "en": "Add reCaptcha to Kleeja",
        "ar": "إضافة ريكابتشا لكليجا"
    },
    "developer": "Kleeja Team",
    "website": "https://github.com/kleeja/kj_recaptcha",
    "kleeja_version": {
        "min": "4.0.0",
        "max": "4.9.9"
    },
    "file": {
        "version": "2.0",
        "url": "https://github.com/kleeja/kj_recaptcha/archive/2.0.zip"
    }
} satisfies CatalogItem
