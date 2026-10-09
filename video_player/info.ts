import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "video_player",
    "icon": "https://raw.githubusercontent.com/kleeja/video_player/main/icon.png",
    "title": {
        "en": "Video & Audio Player",
        "ar": "مشغل فيديو وصوت"
    },
    "description": {
        "en": "Integrate a video player in download page",
        "ar": "عرض مشغل فيديو في صفحة التحميل"
    },
    "developer": "Kleeja Team",
    "website": "",
    "kleeja_version": {
        "min": "4.0.0",
        "max": "4.9.9"
    },
    "file": {
        "version": "2.0",
        "url": "https://github.com/kleeja/video_player/archive/2.0.zip"
    }
} satisfies CatalogItem
