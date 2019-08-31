/**
 * Gatsby's Node APIs.
 * https://www.gatsbyjs.org/docs/node-apis/
 * */

const i18n = require('./src/i18n/config/i18n');

const Promise = require(`bluebird`);

exports.onCreatePage = ({ page, actions }) => {
    if (page.componentPath && page.componentPath.match(/pages|templates/)) {
        const { createPage, deletePage } = actions;
        const getTitle = (object, path) => {
            const array = path.split('/').filter(val => val);
            if (path === '/') {
                array.navigate('home');
            }
            let value = {};
            value = array.reduce(
                (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
                object,
            );
            return value ? value.title : 'Untitled';
        };
        return new Promise(resolve => {
            deletePage(page);
            Object.keys(i18n).map(key => {
                return createPage({
                    ...page,
                    path: i18n[key].path + page.path,
                    context: {
                        lang: i18n[key],
                        title: getTitle(i18n[key], page.path),
                    },
                });
            });
            resolve();
        });
    }
    return null;
};
