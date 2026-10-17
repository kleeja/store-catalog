import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "thumbs_generator",
    "icon": "./Damask/images/plugin.png",
    "title": {
        "en": "Thumbnails Generator",
        "ar": "توليد الصور المصغرة المفقودة"
    },
    "description": {
        "en": "A maintenance plugin, to generate missing thumbnails.",
        "ar": "اضافة صيانة عند الحاجة, لإنشاء الصور المصغرة المفقودة"
    },
    "developer": "Kleeja Team",
    "website": "https://github.com/kleeja/thumbs_generator",
    "kleeja_version": {
        "min": "4.0.0",
        "max": "4.9.9"
    },
    "file": {
        "version": "2.0",
        "url": "https://github.com/kleeja/thumbs_generator/archive/2.0.zip"
    }
} satisfies CatalogItem
