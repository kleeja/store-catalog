import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "kj_smtp_mailer",
    "icon": "https://raw.githubusercontent.com/kleeja/kj_smtp_mailer/main/icon.png",
    "title": {
        "en": "Kleeja SMTP Mailer",
        "ar": "برنامج إرسال البريد الإلكتروني SMTP من Kleeja'"
    },
    "description": {
        "en": "Send mails through your own SMTP server instead of the PHP mail function",
        "ar": "إرسال رسائل البريد الإلكتروني باستخدام خادم SMTP مخصص بدلًا من دالة mail في PHP',"
    },
    "developer": "Kleeja Team",
    "website": "https://github.com/kleeja/kj_smtp_mailer",
    "kleeja_version": {
        "min": "4.0.0",
        "max": "4.9.9"
    },
    "file": {
        "version": "1.4",
        "url": "https://github.com/kleeja/kj_smtp_mailer/releases/download/1.4/kj_smtp_mailer-1.4.zip",
    }
} satisfies CatalogItem
