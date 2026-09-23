import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "kj_x_sendfile",
    "icon": "https://raw.githubusercontent.com/kleeja/kj-x-sendfile/master/icon.png",
    "title": {
        "en": "Kleeja X SendFile",
        "ar": "كليجا إكس سيند فايل"
    },
    "description": {
        "en": "Enable x-sendfile or X-Accel-Redirect for both Apache or Nginx for better performance.",
        "ar": "كليجا إكس سيند فايل"
    },
    "developer": "Kleeja Team",
    "website": "",
    "kleeja_version": {
        "min": "3.0",
        "max": "3.9"
    },
    "file": {
        "version": "1.0",
        "url": "https://github.com/kleeja/kj-x-sendfile/archive/1.0.zip"
    }
} satisfies CatalogItem
