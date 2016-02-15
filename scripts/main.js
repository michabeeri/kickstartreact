requirejs.config({
    baseUrl: 'dist',
    paths: {
        react: "../node_modules/react/dist/react",
        'react-dom': "../node_modules/react-dom/dist/react-dom",
        babel: "https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min",
        lodash: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash',
        datejs: "http://www.datejs.com/build/date",
        'react-addons-linked-state-mixin': "../node_modules/react-addons-linked-state-mixin/index"
    }
});

requirejs(["ReactEx"], function(TodoModule) {
});
