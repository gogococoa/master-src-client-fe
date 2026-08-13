/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-css-modules'],
    rules: {
        // 'selector-class-pattern': [
        //     '^[a-z][a-zA-Z0-9]*$',
        //     {
        //         message: 'Expected class selector to be camelCase',
        //     },
        // ],
        'selector-class-pattern': null
    },
};
