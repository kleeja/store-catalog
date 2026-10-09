import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "pdf_viewer",
    "icon": "https://raw.githubusercontent.com/kleeja/pdf_viewer/main/icon.png",
    "title": {
        "en": "PDF Viewer",
        "ar": "عارض بي دي أف"
    },
    "description": {
        "en": "Integrate a PDF viewer in download page",
        "ar": "عرض عارض ملفات بي دي اف في صفحة التحميل"
    },
    "developer": "Kleeja Team",
    "website": "https://kleeja.net",
    "kleeja_version": {
        "min": "4.0.0",
        "max": "4.9.9"
    },
    "file": {
        "version": "2.0",
        "url": "https://github.com/kleeja/pdf_viewer/archive/2.0.zip"
    }
} satisfies CatalogItem
