import type { CatalogItem } from "../types"

export default {
    "type": "plugin",
    "name": "kj_smtp_mailer",
    "icon": "https://raw.githubusercontent.com/kleeja-official/kj_smtp_mailer/master/icon.png",
    "title": {
        "en": "Kleeja SMTP Mailer",
        "ar": "برنامج إرسال البريد الإلكتروني SMTP من Kleeja'"
    },
    "description": {
        "en": "Send mails through your own SMTP server instead of the PHP mail function",
        "ar": "إرسال رسائل البريد الإلكتروني باستخدام خادم SMTP مخصص بدلًا من دالة mail في PHP',"
    },
    "developer": "Kleeja Team",
    "website": "https://kleeja.net",
    "kleeja_version": {
        "min": "3.2.6",
        "max": "3.9"
    },
    "file": {
        "version": "1.0",
        "url": "https://github.com/kleeja-official/kj_smtp_mailer/releases/download/1.0/kj_smtp_mailer-1.0.zip",
    }
} satisfies CatalogItem
