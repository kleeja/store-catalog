import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "thumbs_generator",
    "icon": "./Masmak/images/plugin.png",
    "title": {
        "en": "Thumbnails Generator",
        "ar": "توليد الصور المصغرة المفقودة"
    },
    "description": {
        "en": "A maintenance plugin, to generate missing thumbnails.",
        "ar": "اضافة صيانة عند الحاجة, لإنشاء الصور المصغرة المفقودة"
    },
    "developer": "Kleeja Team",
    "website": "",
    "kleeja_version": {
        "min": "3.1",
        "max": "3.9"
    },
    "file": {
        "version": "1.0",
        "url": "https://github.com/kleeja/thumbs_generator/archive/1.0.zip"
    }
} satisfies CatalogItem
