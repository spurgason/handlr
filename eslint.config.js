import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
    {
        files: ["**/*.{js,mjs,cjs,vue}"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            globals: globals.browser,
        },
        rules: {
            // Common JS rules
            'indent': ['error', 4],
            'no-unused-vars': 'warn',
            'no-console': 'warn',
            'eqeqeq': 'error',
            'curly': 'error',
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            'comma-dangle': ['error', 'always-multiline'],
            'no-trailing-spaces': 'error',
            'eol-last': ['error', 'always'],
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
            'space-before-function-paren': ['error', 'never'],
            'arrow-spacing': ['error', { before: true, after: true }],
            'keyword-spacing': ['error', { before: true, after: true }],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],

            // Vue-specific rules
            'vue/no-unused-vars': 'warn',
            'vue/no-multiple-template-root': 'off',
            'vue/require-default-prop': 'off',
            'vue/no-v-html': 'off',
            'vue/attribute-hyphenation': ['error', 'always'],
            'vue/html-closing-bracket-newline': ['error', {
                singleline: 'never',
                multiline: 'always',
            }],
            'vue/html-indent': ['error', 4],
            'vue/max-attributes-per-line': ['error', {
                singleline: 3,
                multiline: 1,
            }],
            'vue/mustache-interpolation-spacing': ['error', 'always'],
            'vue/no-multi-spaces': 'error',
            'vue/no-spaces-around-equal-signs-in-attribute': 'error',
            'vue/prop-name-casing': ['error', 'camelCase'],
            'vue/singleline-html-element-content-newline': 'off',
            'vue/this-in-template': 'error',
            'vue/html-self-closing': ['error', {
                html: {
                    void: 'never',
                    normal: 'always',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            }],
            'vue/require-prop-types': 'off',
            'vue/script-indent': ['error', 4, {
                'baseIndent': 1,
                'switchCase': 1,
                'ignores': ['ImportDeclaration', 'FunctionDeclaration', 'ObjectExpression', 'CallExpression']
            }],
            'vue/component-definition-name-casing': ['error', 'PascalCase'],
            'vue/component-name-in-template-casing': ['error', 'PascalCase'],
            'vue/multi-word-component-names': 'off',

            // Prettier rules
            'prettier/prettier': 'error'
        },
    },
    prettier,
    prettierPlugin,
    ...pluginVue.configs["flat/essential"],
    pluginJs.configs.recommended,
];
