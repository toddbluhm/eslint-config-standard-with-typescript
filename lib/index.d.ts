declare const _default: {
    parser: string;
    extends: string;
    plugins: string[];
    overrides: {
        files: string[];
        rules: {
            'no-undef': string;
            camelcase: string;
            indent: string;
            'no-array-constructor': string;
            'no-empty-function': string;
            'no-unused-vars': string;
            'no-use-before-define': string;
            'no-useless-constructor': string;
            'require-await': string;
            '@typescript-eslint/camelcase': (string | {
                properties: string;
            })[];
            '@typescript-eslint/indent': (string | number | {
                SwitchCase: number;
                VariableDeclarator: number;
                outerIIFEBody: number;
                MemberExpression: number;
                FunctionDeclaration: {
                    parameters: number;
                    body: number;
                };
                FunctionExpression: {
                    parameters: number;
                    body: number;
                };
                CallExpression: {
                    arguments: number;
                };
                ArrayExpression: number;
                ObjectExpression: number;
                ImportDeclaration: number;
                flatTernaryExpressions: boolean;
                ignoreComments: boolean;
            })[];
            '@typescript-eslint/no-array-constructor': string;
            '@typescript-eslint/no-empty-function': string;
            '@typescript-eslint/no-unused-vars': (string | {
                args: string;
            })[];
            '@typescript-eslint/no-use-before-define': (string | {
                functions: boolean;
                classes: boolean;
                variables: boolean;
                typedefs: boolean;
            })[];
            '@typescript-eslint/no-useless-constructor': string;
            '@typescript-eslint/require-await': string;
            '@typescript-eslint/adjacent-overload-signatures': string;
            '@typescript-eslint/array-type': (string | {
                default: string;
            })[];
            '@typescript-eslint/consistent-type-definitions': string[];
            '@typescript-eslint/consistent-type-assertions': (string | {
                assertionStyle: string;
                objectLiteralTypeAssertions: string;
            })[];
            '@typescript-eslint/explicit-function-return-type': (string | {
                allowExpressions: boolean;
                allowHigherOrderFunctions: boolean;
                allowTypedFunctionExpressions: boolean;
            })[];
            '@typescript-eslint/member-delimiter-style': (string | {
                multiline: {
                    delimiter: string;
                };
                singleline: {
                    delimiter: string;
                    requireLast: boolean;
                };
            })[];
            '@typescript-eslint/no-empty-interface': string;
            '@typescript-eslint/no-extraneous-class': string;
            '@typescript-eslint/no-floating-promises': string;
            '@typescript-eslint/no-for-in-array': string;
            '@typescript-eslint/no-misused-new': string;
            '@typescript-eslint/no-misused-promises': string;
            '@typescript-eslint/no-namespace': string;
            '@typescript-eslint/no-non-null-assertion': string;
            '@typescript-eslint/no-this-alias': (string | {
                allowDestructuring: boolean;
            })[];
            '@typescript-eslint/no-unnecessary-type-assertion': string;
            '@typescript-eslint/no-var-requires': string;
            '@typescript-eslint/prefer-function-type': string;
            '@typescript-eslint/prefer-readonly': string;
            '@typescript-eslint/promise-function-async': string;
            '@typescript-eslint/require-array-sort-compare': string;
            '@typescript-eslint/restrict-plus-operands': string;
            '@typescript-eslint/strict-boolean-expressions': string;
            '@typescript-eslint/triple-slash-reference': (string | {
                lib: string;
                path: string;
                types: string;
            })[];
            '@typescript-eslint/type-annotation-spacing': string;
        };
    }[];
};
export = _default;
