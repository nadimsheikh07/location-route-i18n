const path = require("path");

module.exports = {
    debug: process.env.NODE_ENV === 'development',
    i18n: {

        defaultLocale: 'default',
        locales: ['default', 'en', 'hi', 'ar'],
        localeDetection: true,
        ns: ["common"],
        defaultNS: "common",
    },
    localePath: path.resolve('./public/locales'),
};