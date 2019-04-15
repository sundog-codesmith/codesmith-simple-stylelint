'use strict';
const path = require('path');

module.exports = function (codesmith) {
    codesmith.setGenerator('simple-stylelint', {
        description: 'create stylelint for 🚧💩',
        questions: [
            {
                type: 'checkbox',
                name: 'extends',
                message: 'What config standard do you like?',
                choices: [
                    {name: 'stylelint-config-standard', value: 'stylelint-config-standard', checked: true},
                ]
            }
        ],
        actions: [
            `this is a comment`,
            'this is another comment',
            {
                type: 'add',
                path: 'stylelint.config.js',
                templateFile: 'templates/stylelint.config.js',
                abortOnFail: true
            },
            {
                type: 'shell',
                command: 'yarn add stylelint stylelint-config-standard'
            }
        ]
    });
};
