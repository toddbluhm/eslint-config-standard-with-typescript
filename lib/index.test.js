"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const _1 = __importDefault(require("."));
ava_1.default('export', (t) => {
    const expected = {
        parser: '@typescript-eslint/parser',
        extends: 'eslint-config-standard',
        plugins: ['@typescript-eslint'],
        overrides: [
            {
                files: ['*.ts', '*.tsx'],
                rules: {
                    camelcase: 'off',
                    indent: 'off',
                    'no-array-constructor': 'off',
                    'no-empty-function': 'off',
                    'no-undef': 'off',
                    'no-unused-vars': 'off',
                    'no-use-before-define': 'off',
                    'no-useless-constructor': 'off',
                    'require-await': 'off',
                    '@typescript-eslint/adjacent-overload-signatures': 'error',
                    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
                    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
                    '@typescript-eslint/consistent-type-assertions': [
                        'error',
                        {
                            assertionStyle: 'as',
                            objectLiteralTypeAssertions: 'never'
                        }
                    ],
                    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
                    '@typescript-eslint/explicit-function-return-type': ['error', {
                            allowExpressions: true,
                            allowHigherOrderFunctions: true,
                            allowTypedFunctionExpressions: true
                        }],
                    '@typescript-eslint/indent': ['error', 2, {
                            SwitchCase: 1,
                            VariableDeclarator: 1,
                            outerIIFEBody: 1,
                            MemberExpression: 1,
                            FunctionDeclaration: { parameters: 1, body: 1 },
                            FunctionExpression: { parameters: 1, body: 1 },
                            CallExpression: { arguments: 1 },
                            ArrayExpression: 1,
                            ObjectExpression: 1,
                            ImportDeclaration: 1,
                            flatTernaryExpressions: false,
                            ignoreComments: false
                        }],
                    '@typescript-eslint/member-delimiter-style': [
                        'error',
                        {
                            multiline: { delimiter: 'none' },
                            singleline: { delimiter: 'comma', requireLast: false }
                        }
                    ],
                    '@typescript-eslint/no-array-constructor': 'error',
                    '@typescript-eslint/no-empty-function': 'error',
                    '@typescript-eslint/no-empty-interface': 'error',
                    '@typescript-eslint/no-extraneous-class': 'error',
                    '@typescript-eslint/no-floating-promises': 'error',
                    '@typescript-eslint/no-for-in-array': 'error',
                    '@typescript-eslint/no-misused-new': 'error',
                    '@typescript-eslint/no-misused-promises': 'error',
                    '@typescript-eslint/no-namespace': 'error',
                    '@typescript-eslint/no-non-null-assertion': 'error',
                    '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
                    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
                    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
                    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: false, typedefs: false }],
                    '@typescript-eslint/no-useless-constructor': 'error',
                    '@typescript-eslint/no-var-requires': 'error',
                    '@typescript-eslint/prefer-function-type': 'error',
                    '@typescript-eslint/prefer-readonly': 'error',
                    '@typescript-eslint/promise-function-async': 'error',
                    '@typescript-eslint/restrict-plus-operands': 'error',
                    '@typescript-eslint/require-array-sort-compare': 'error',
                    '@typescript-eslint/require-await': 'error',
                    '@typescript-eslint/strict-boolean-expressions': 'error',
                    '@typescript-eslint/triple-slash-reference': ['error', { lib: 'never', path: 'never', types: 'never' }],
                    '@typescript-eslint/type-annotation-spacing': 'error'
                }
            }
        ]
    };
    t.deepEqual(_1.default, expected);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXNCO0FBQ3RCLHlDQUF3QjtBQUV4QixhQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFRLEVBQUU7SUFDekIsTUFBTSxRQUFRLEdBQUc7UUFDZixNQUFNLEVBQUUsMkJBQTJCO1FBQ25DLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDL0IsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztnQkFDeEIsS0FBSyxFQUFFO29CQUNMLFNBQVMsRUFBRSxLQUFLO29CQUNoQixNQUFNLEVBQUUsS0FBSztvQkFDYixzQkFBc0IsRUFBRSxLQUFLO29CQUM3QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixVQUFVLEVBQUUsS0FBSztvQkFDakIsZ0JBQWdCLEVBQUUsS0FBSztvQkFDdkIsc0JBQXNCLEVBQUUsS0FBSztvQkFDN0Isd0JBQXdCLEVBQUUsS0FBSztvQkFDL0IsZUFBZSxFQUFFLEtBQUs7b0JBQ3RCLGlEQUFpRCxFQUFFLE9BQU87b0JBQzFELCtCQUErQixFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDO29CQUN2RSw4QkFBOEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQztvQkFDbEUsK0NBQStDLEVBQUU7d0JBQy9DLE9BQU87d0JBQ1A7NEJBQ0UsY0FBYyxFQUFFLElBQUk7NEJBQ3BCLDJCQUEyQixFQUFFLE9BQU87eUJBQ3JDO3FCQUNGO29CQUNELGdEQUFnRCxFQUFFLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztvQkFDeEUsa0RBQWtELEVBQUUsQ0FBQyxPQUFPLEVBQUU7NEJBQzVELGdCQUFnQixFQUFFLElBQUk7NEJBQ3RCLHlCQUF5QixFQUFFLElBQUk7NEJBQy9CLDZCQUE2QixFQUFFLElBQUk7eUJBQ3BDLENBQUM7b0JBQ0YsMkJBQTJCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFOzRCQUN4QyxVQUFVLEVBQUUsQ0FBQzs0QkFDYixrQkFBa0IsRUFBRSxDQUFDOzRCQUNyQixhQUFhLEVBQUUsQ0FBQzs0QkFDaEIsZ0JBQWdCLEVBQUUsQ0FBQzs0QkFDbkIsbUJBQW1CLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7NEJBQy9DLGtCQUFrQixFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFOzRCQUM5QyxjQUFjLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFOzRCQUNoQyxlQUFlLEVBQUUsQ0FBQzs0QkFDbEIsZ0JBQWdCLEVBQUUsQ0FBQzs0QkFDbkIsaUJBQWlCLEVBQUUsQ0FBQzs0QkFDcEIsc0JBQXNCLEVBQUUsS0FBSzs0QkFDN0IsY0FBYyxFQUFFLEtBQUs7eUJBQ3RCLENBQUM7b0JBQ0YsMkNBQTJDLEVBQUU7d0JBQzNDLE9BQU87d0JBQ1A7NEJBQ0UsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTs0QkFDaEMsVUFBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO3lCQUN2RDtxQkFDRjtvQkFDRCx5Q0FBeUMsRUFBRSxPQUFPO29CQUNsRCxzQ0FBc0MsRUFBRSxPQUFPO29CQUMvQyx1Q0FBdUMsRUFBRSxPQUFPO29CQUNoRCx3Q0FBd0MsRUFBRSxPQUFPO29CQUNqRCx5Q0FBeUMsRUFBRSxPQUFPO29CQUNsRCxvQ0FBb0MsRUFBRSxPQUFPO29CQUM3QyxtQ0FBbUMsRUFBRSxPQUFPO29CQUM1Qyx3Q0FBd0MsRUFBRSxPQUFPO29CQUNqRCxpQ0FBaUMsRUFBRSxPQUFPO29CQUMxQywwQ0FBMEMsRUFBRSxPQUFPO29CQUNuRCxrQ0FBa0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDO29CQUMzRSxrREFBa0QsRUFBRSxPQUFPO29CQUMzRCxtQ0FBbUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztvQkFDaEUseUNBQXlDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7b0JBQzdILDJDQUEyQyxFQUFFLE9BQU87b0JBQ3BELG9DQUFvQyxFQUFFLE9BQU87b0JBQzdDLHlDQUF5QyxFQUFFLE9BQU87b0JBQ2xELG9DQUFvQyxFQUFFLE9BQU87b0JBQzdDLDJDQUEyQyxFQUFFLE9BQU87b0JBQ3BELDJDQUEyQyxFQUFFLE9BQU87b0JBQ3BELCtDQUErQyxFQUFFLE9BQU87b0JBQ3hELGtDQUFrQyxFQUFFLE9BQU87b0JBQzNDLCtDQUErQyxFQUFFLE9BQU87b0JBQ3hELDJDQUEyQyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztvQkFDdkcsNENBQTRDLEVBQUUsT0FBTztpQkFDdEQ7YUFDRjtTQUNGO0tBQ0YsQ0FBQTtJQUVELENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRlc3QgZnJvbSAnYXZhJ1xuaW1wb3J0IGV4cG9ydGVkIGZyb20gJy4nXG5cbnRlc3QoJ2V4cG9ydCcsICh0KTogdm9pZCA9PiB7XG4gIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgIHBhcnNlcjogJ0B0eXBlc2NyaXB0LWVzbGludC9wYXJzZXInLFxuICAgIGV4dGVuZHM6ICdlc2xpbnQtY29uZmlnLXN0YW5kYXJkJyxcbiAgICBwbHVnaW5zOiBbJ0B0eXBlc2NyaXB0LWVzbGludCddLFxuICAgIG92ZXJyaWRlczogW1xuICAgICAge1xuICAgICAgICBmaWxlczogWycqLnRzJywgJyoudHN4J10sXG4gICAgICAgIHJ1bGVzOiB7XG4gICAgICAgICAgY2FtZWxjYXNlOiAnb2ZmJyxcbiAgICAgICAgICBpbmRlbnQ6ICdvZmYnLFxuICAgICAgICAgICduby1hcnJheS1jb25zdHJ1Y3Rvcic6ICdvZmYnLFxuICAgICAgICAgICduby1lbXB0eS1mdW5jdGlvbic6ICdvZmYnLFxuICAgICAgICAgICduby11bmRlZic6ICdvZmYnLFxuICAgICAgICAgICduby11bnVzZWQtdmFycyc6ICdvZmYnLFxuICAgICAgICAgICduby11c2UtYmVmb3JlLWRlZmluZSc6ICdvZmYnLFxuICAgICAgICAgICduby11c2VsZXNzLWNvbnN0cnVjdG9yJzogJ29mZicsXG4gICAgICAgICAgJ3JlcXVpcmUtYXdhaXQnOiAnb2ZmJyxcbiAgICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L2FkamFjZW50LW92ZXJsb2FkLXNpZ25hdHVyZXMnOiAnZXJyb3InLFxuICAgICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvYXJyYXktdHlwZSc6IFsnZXJyb3InLCB7IGRlZmF1bHQ6ICdhcnJheS1zaW1wbGUnIH1dLFxuICAgICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlJzogWydlcnJvcicsIHsgcHJvcGVydGllczogJ25ldmVyJyB9XSxcbiAgICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L2NvbnNpc3RlbnQtdHlwZS1hc3NlcnRpb25zJzogW1xuICAgICAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXNzZXJ0aW9uU3R5bGU6ICdhcycsXG4gICAgICAgICAgICAgIG9iamVjdExpdGVyYWxUeXBlQXNzZXJ0aW9uczogJ25ldmVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9jb25zaXN0ZW50LXR5cGUtZGVmaW5pdGlvbnMnOiBbJ2Vycm9yJywgJ2ludGVyZmFjZSddLFxuICAgICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUnOiBbJ2Vycm9yJywge1xuICAgICAgICAgICAgYWxsb3dFeHByZXNzaW9uczogdHJ1ZSxcbiAgICAgICAgICAgIGFsbG93SGlnaGVyT3JkZXJGdW5jdGlvbnM6IHRydWUsXG4gICAgICAgICAgICBhbGxvd1R5cGVkRnVuY3Rpb25FeHByZXNzaW9uczogdHJ1ZVxuICAgICAgICAgIH1dLFxuICAgICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvaW5kZW50JzogWydlcnJvcicsIDIsIHtcbiAgICAgICAgICAgIFN3aXRjaENhc2U6IDEsXG4gICAgICAgICAgICBWYXJpYWJsZURlY2xhcmF0b3I6IDEsXG4gICAgICAgICAgICBvdXRlcklJRkVCb2R5OiAxLFxuICAgICAgICAgICAgTWVtYmVyRXhwcmVzc2lvbjogMSxcbiAgICAgICAgICAgIEZ1bmN0aW9uRGVjbGFyYXRpb246IHsgcGFyYW1ldGVyczogMSwgYm9keTogMSB9LFxuICAgICAgICAgICAgRnVuY3Rpb25FeHByZXNzaW9uOiB7IHBhcmFtZXRlcnM6IDEsIGJvZHk6IDEgfSxcbiAgICAgICAgICAgIENhbGxFeHByZXNzaW9uOiB7IGFyZ3VtZW50czogMSB9LFxuICAgICAgICAgICAgQXJyYXlFeHByZXNzaW9uOiAxLFxuICAgICAgICAgICAgT2JqZWN0RXhwcmVzc2lvbjogMSxcbiAgICAgICAgICAgIEltcG9ydERlY2xhcmF0aW9uOiAxLFxuICAgICAgICAgICAgZmxhdFRlcm5hcnlFeHByZXNzaW9uczogZmFsc2UsXG4gICAgICAgICAgICBpZ25vcmVDb21tZW50czogZmFsc2VcbiAgICAgICAgICB9XSxcbiAgICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1kZWxpbWl0ZXItc3R5bGUnOiBbXG4gICAgICAgICAgICAnZXJyb3InLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtdWx0aWxpbmU6IHsgZGVsaW1pdGVyOiAnbm9uZScgfSxcbiAgICAgICAgICAgICAgc2luZ2xlbGluZTogeyBkZWxpbWl0ZXI6ICdjb21tYScsIHJlcXVpcmVMYXN0OiBmYWxzZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLWFycmF5LWNvbnN0cnVjdG9yJzogJ2Vycm9yJyxcbiAgICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uJzogJ2Vycm9yJyxcbiAgICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWludGVyZmFjZSc6ICdlcnJvcicsXG4gICAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1leHRyYW5lb3VzLWNsYXNzJzogJ2Vycm9yJyxcbiAgICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzJzogJ2Vycm9yJyxcbiAgICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLWZvci1pbi1hcnJheSc6ICdlcnJvcicsXG4gICAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1taXN1c2VkLW5ldyc6ICdlcnJvcicsXG4gICAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1taXN1c2VkLXByb21pc2VzJzogJ2Vycm9yJyxcbiAgICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZSc6ICdlcnJvcicsXG4gICAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb24nOiAnZXJyb3InLFxuICAgICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhcyc6IFsnZXJyb3InLCB7IGFsbG93RGVzdHJ1Y3R1cmluZzogdHJ1ZSB9XSxcbiAgICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLXVubmVjZXNzYXJ5LXR5cGUtYXNzZXJ0aW9uJzogJ2Vycm9yJyxcbiAgICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzJzogWydlcnJvcicsIHsgYXJnczogJ25vbmUnIH1dLFxuICAgICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUnOiBbJ2Vycm9yJywgeyBmdW5jdGlvbnM6IGZhbHNlLCBjbGFzc2VzOiBmYWxzZSwgdmFyaWFibGVzOiBmYWxzZSwgdHlwZWRlZnM6IGZhbHNlIH1dLFxuICAgICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlbGVzcy1jb25zdHJ1Y3Rvcic6ICdlcnJvcicsXG4gICAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXMnOiAnZXJyb3InLFxuICAgICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLWZ1bmN0aW9uLXR5cGUnOiAnZXJyb3InLFxuICAgICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXJlYWRvbmx5JzogJ2Vycm9yJyxcbiAgICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMnOiAnZXJyb3InLFxuICAgICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvcmVzdHJpY3QtcGx1cy1vcGVyYW5kcyc6ICdlcnJvcicsXG4gICAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9yZXF1aXJlLWFycmF5LXNvcnQtY29tcGFyZSc6ICdlcnJvcicsXG4gICAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9yZXF1aXJlLWF3YWl0JzogJ2Vycm9yJyxcbiAgICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L3N0cmljdC1ib29sZWFuLWV4cHJlc3Npb25zJzogJ2Vycm9yJyxcbiAgICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L3RyaXBsZS1zbGFzaC1yZWZlcmVuY2UnOiBbJ2Vycm9yJywgeyBsaWI6ICduZXZlcicsIHBhdGg6ICduZXZlcicsIHR5cGVzOiAnbmV2ZXInIH1dLFxuICAgICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvdHlwZS1hbm5vdGF0aW9uLXNwYWNpbmcnOiAnZXJyb3InXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICB0LmRlZXBFcXVhbChleHBvcnRlZCwgZXhwZWN0ZWQpXG59KVxuIl19