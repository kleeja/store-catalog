import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "pdf_viewer",
    "icon": "https://raw.githubusercontent.com/kleeja/pdf-viewer/master/icon.png",
    "title": {
        "en": "PDF Viewer",
        "ar": "عارض بي دي أف"
    },
    "description": {
        "en": "Integrate a PDF viewer in download page",
        "ar": "عرض عارض ملفات بي دي اف في صفحة التحميل"
    },
    "developer": "Kleeja Team",
    "website": "",
    "kleeja_version": {
        "min": "3.0",
        "max": "3.9"
    },
    "file": {
        "version": "1.1",
        "url": "https://github.com/kleeja/pdf-viewer/archive/1.1.zip"
    }
} satisfies CatalogItem
