import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "kj_x_sendfile",
    "icon": "https://raw.githubusercontent.com/kleeja/kj_x_sendfile/main/icon.png",
    "title": {
        "en": "Kleeja X SendFile",
        "ar": "كليجا إكس سيند فايل"
    },
    "description": {
        "en": "Enable x-sendfile or X-Accel-Redirect for both Apache or Nginx for better performance.",
        "ar": "كليجا إكس سيند فايل"
    },
    "developer": "Kleeja Team",
    "website": "https://github.com/kleeja/kj_x_sendfile",
    "kleeja_version": {
        "min": "4.0.0",
        "max": "4.9.9"
    },
    "file": {
        "version": "1.1",
        "url": "https://github.com/kleeja/kj-x-sendfile/archive/1.1.zip"
    }
} satisfies CatalogItem
