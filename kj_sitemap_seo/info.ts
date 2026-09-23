import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "kj_sitemap_seo",
    "icon": "https://raw.githubusercontent.com/kleeja/kj-sitemap-seo/master/icon.png",
    "title": {
        "en": "KJ SiteMap SEO",
        "ar": "كليجا سايت ماب سيو"
    },
    "description": {
        "en": "Generate a sitemap and promote your content by notifying (ping) the search engine once at every new content addition to Kleeja",
        "ar": "إنشاء سايت ماب لكليجا وإمكانية بينق محركات البحث بعد كل إضافة محتوى جديد"
    },
    "developer": "Kleeja Team",
    "website": "",
    "kleeja_version": {
        "min": "3.0",
        "max": "3.9"
    },
    "file": {
        "version": "1.0.1",
        "url": "https://github.com/kleeja/kj-sitemap-seo/archive/1.0.1.zip"
    }
} satisfies CatalogItem
