"use strict";
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: 'eslint-config-standard',
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                // TypeScript has this functionality by default:
                'no-undef': 'off',
                // Rules replaced by @typescript-eslint versions:
                camelcase: 'off',
                indent: 'off',
                'no-array-constructor': 'off',
                'no-empty-function': 'off',
                'no-unused-vars': 'off',
                'no-use-before-define': 'off',
                'no-useless-constructor': 'off',
                'require-await': 'off',
                // @typescript-eslint versions of Standard.js rules:
                '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
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
                '@typescript-eslint/no-array-constructor': 'error',
                '@typescript-eslint/no-empty-function': 'error',
                '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
                '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: false, typedefs: false }],
                '@typescript-eslint/no-useless-constructor': 'error',
                '@typescript-eslint/require-await': 'error',
                // New Typescript-only rules:
                '@typescript-eslint/adjacent-overload-signatures': 'error',
                '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
                '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
                '@typescript-eslint/consistent-type-assertions': [
                    'error',
                    {
                        assertionStyle: 'as',
                        objectLiteralTypeAssertions: 'never'
                    }
                ],
                '@typescript-eslint/explicit-function-return-type': ['error', {
                        allowExpressions: true,
                        allowHigherOrderFunctions: true,
                        allowTypedFunctionExpressions: true
                    }],
                '@typescript-eslint/member-delimiter-style': [
                    'error',
                    {
                        multiline: { delimiter: 'none' },
                        singleline: { delimiter: 'comma', requireLast: false }
                    }
                ],
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
                '@typescript-eslint/no-var-requires': 'error',
                '@typescript-eslint/prefer-function-type': 'error',
                '@typescript-eslint/prefer-readonly': 'error',
                '@typescript-eslint/promise-function-async': 'error',
                '@typescript-eslint/require-array-sort-compare': 'error',
                '@typescript-eslint/restrict-plus-operands': 'error',
                '@typescript-eslint/strict-boolean-expressions': 'error',
                '@typescript-eslint/triple-slash-reference': ['error', { lib: 'never', path: 'never', types: 'never' }],
                '@typescript-eslint/type-annotation-spacing': 'error'
            }
        }
    ]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQUFTO0lBQ1AsTUFBTSxFQUFFLDJCQUEyQjtJQUNuQyxPQUFPLEVBQUUsd0JBQXdCO0lBQ2pDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO0lBQy9CLFNBQVMsRUFBRTtRQUNUO1lBQ0UsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztZQUN4QixLQUFLLEVBQUU7Z0JBQ0wsZ0RBQWdEO2dCQUNoRCxVQUFVLEVBQUUsS0FBSztnQkFFakIsaURBQWlEO2dCQUNqRCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2Isc0JBQXNCLEVBQUUsS0FBSztnQkFDN0IsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZ0JBQWdCLEVBQUUsS0FBSztnQkFDdkIsc0JBQXNCLEVBQUUsS0FBSztnQkFDN0Isd0JBQXdCLEVBQUUsS0FBSztnQkFDL0IsZUFBZSxFQUFFLEtBQUs7Z0JBRXRCLG9EQUFvRDtnQkFDcEQsOEJBQThCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQ2xFLDJCQUEyQixFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTt3QkFDeEMsVUFBVSxFQUFFLENBQUM7d0JBQ2Isa0JBQWtCLEVBQUUsQ0FBQzt3QkFDckIsYUFBYSxFQUFFLENBQUM7d0JBQ2hCLGdCQUFnQixFQUFFLENBQUM7d0JBQ25CLG1CQUFtQixFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO3dCQUMvQyxrQkFBa0IsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTt3QkFDOUMsY0FBYyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRTt3QkFDaEMsZUFBZSxFQUFFLENBQUM7d0JBQ2xCLGdCQUFnQixFQUFFLENBQUM7d0JBQ25CLGlCQUFpQixFQUFFLENBQUM7d0JBQ3BCLHNCQUFzQixFQUFFLEtBQUs7d0JBQzdCLGNBQWMsRUFBRSxLQUFLO3FCQUN0QixDQUFDO2dCQUNGLHlDQUF5QyxFQUFFLE9BQU87Z0JBQ2xELHNDQUFzQyxFQUFFLE9BQU87Z0JBQy9DLG1DQUFtQyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUNoRSx5Q0FBeUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFDN0gsMkNBQTJDLEVBQUUsT0FBTztnQkFDcEQsa0NBQWtDLEVBQUUsT0FBTztnQkFFM0MsNkJBQTZCO2dCQUM3QixpREFBaUQsRUFBRSxPQUFPO2dCQUMxRCwrQkFBK0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQztnQkFDdkUsZ0RBQWdELEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO2dCQUN4RSwrQ0FBK0MsRUFBRTtvQkFDL0MsT0FBTztvQkFDUDt3QkFDRSxjQUFjLEVBQUUsSUFBSTt3QkFDcEIsMkJBQTJCLEVBQUUsT0FBTztxQkFDckM7aUJBQ0Y7Z0JBQ0Qsa0RBQWtELEVBQUUsQ0FBQyxPQUFPLEVBQUU7d0JBQzVELGdCQUFnQixFQUFFLElBQUk7d0JBQ3RCLHlCQUF5QixFQUFFLElBQUk7d0JBQy9CLDZCQUE2QixFQUFFLElBQUk7cUJBQ3BDLENBQUM7Z0JBQ0YsMkNBQTJDLEVBQUU7b0JBQzNDLE9BQU87b0JBQ1A7d0JBQ0UsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTt3QkFDaEMsVUFBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO3FCQUN2RDtpQkFDRjtnQkFDRCx1Q0FBdUMsRUFBRSxPQUFPO2dCQUNoRCx3Q0FBd0MsRUFBRSxPQUFPO2dCQUNqRCx5Q0FBeUMsRUFBRSxPQUFPO2dCQUNsRCxvQ0FBb0MsRUFBRSxPQUFPO2dCQUM3QyxtQ0FBbUMsRUFBRSxPQUFPO2dCQUM1Qyx3Q0FBd0MsRUFBRSxPQUFPO2dCQUNqRCxpQ0FBaUMsRUFBRSxPQUFPO2dCQUMxQywwQ0FBMEMsRUFBRSxPQUFPO2dCQUNuRCxrQ0FBa0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDO2dCQUMzRSxrREFBa0QsRUFBRSxPQUFPO2dCQUMzRCxvQ0FBb0MsRUFBRSxPQUFPO2dCQUM3Qyx5Q0FBeUMsRUFBRSxPQUFPO2dCQUNsRCxvQ0FBb0MsRUFBRSxPQUFPO2dCQUM3QywyQ0FBMkMsRUFBRSxPQUFPO2dCQUNwRCwrQ0FBK0MsRUFBRSxPQUFPO2dCQUN4RCwyQ0FBMkMsRUFBRSxPQUFPO2dCQUNwRCwrQ0FBK0MsRUFBRSxPQUFPO2dCQUN4RCwyQ0FBMkMsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQ3ZHLDRDQUE0QyxFQUFFLE9BQU87YUFDdEQ7U0FDRjtLQUNGO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCA9IHtcbiAgcGFyc2VyOiAnQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlcicsXG4gIGV4dGVuZHM6ICdlc2xpbnQtY29uZmlnLXN0YW5kYXJkJyxcbiAgcGx1Z2luczogWydAdHlwZXNjcmlwdC1lc2xpbnQnXSxcbiAgb3ZlcnJpZGVzOiBbXG4gICAge1xuICAgICAgZmlsZXM6IFsnKi50cycsICcqLnRzeCddLFxuICAgICAgcnVsZXM6IHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCBoYXMgdGhpcyBmdW5jdGlvbmFsaXR5IGJ5IGRlZmF1bHQ6XG4gICAgICAgICduby11bmRlZic6ICdvZmYnLFxuXG4gICAgICAgIC8vIFJ1bGVzIHJlcGxhY2VkIGJ5IEB0eXBlc2NyaXB0LWVzbGludCB2ZXJzaW9uczpcbiAgICAgICAgY2FtZWxjYXNlOiAnb2ZmJyxcbiAgICAgICAgaW5kZW50OiAnb2ZmJyxcbiAgICAgICAgJ25vLWFycmF5LWNvbnN0cnVjdG9yJzogJ29mZicsXG4gICAgICAgICduby1lbXB0eS1mdW5jdGlvbic6ICdvZmYnLFxuICAgICAgICAnbm8tdW51c2VkLXZhcnMnOiAnb2ZmJyxcbiAgICAgICAgJ25vLXVzZS1iZWZvcmUtZGVmaW5lJzogJ29mZicsXG4gICAgICAgICduby11c2VsZXNzLWNvbnN0cnVjdG9yJzogJ29mZicsXG4gICAgICAgICdyZXF1aXJlLWF3YWl0JzogJ29mZicsXG5cbiAgICAgICAgLy8gQHR5cGVzY3JpcHQtZXNsaW50IHZlcnNpb25zIG9mIFN0YW5kYXJkLmpzIHJ1bGVzOlxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZSc6IFsnZXJyb3InLCB7IHByb3BlcnRpZXM6ICduZXZlcicgfV0sXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvaW5kZW50JzogWydlcnJvcicsIDIsIHtcbiAgICAgICAgICBTd2l0Y2hDYXNlOiAxLFxuICAgICAgICAgIFZhcmlhYmxlRGVjbGFyYXRvcjogMSxcbiAgICAgICAgICBvdXRlcklJRkVCb2R5OiAxLFxuICAgICAgICAgIE1lbWJlckV4cHJlc3Npb246IDEsXG4gICAgICAgICAgRnVuY3Rpb25EZWNsYXJhdGlvbjogeyBwYXJhbWV0ZXJzOiAxLCBib2R5OiAxIH0sXG4gICAgICAgICAgRnVuY3Rpb25FeHByZXNzaW9uOiB7IHBhcmFtZXRlcnM6IDEsIGJvZHk6IDEgfSxcbiAgICAgICAgICBDYWxsRXhwcmVzc2lvbjogeyBhcmd1bWVudHM6IDEgfSxcbiAgICAgICAgICBBcnJheUV4cHJlc3Npb246IDEsXG4gICAgICAgICAgT2JqZWN0RXhwcmVzc2lvbjogMSxcbiAgICAgICAgICBJbXBvcnREZWNsYXJhdGlvbjogMSxcbiAgICAgICAgICBmbGF0VGVybmFyeUV4cHJlc3Npb25zOiBmYWxzZSxcbiAgICAgICAgICBpZ25vcmVDb21tZW50czogZmFsc2VcbiAgICAgICAgfV0sXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tYXJyYXktY29uc3RydWN0b3InOiAnZXJyb3InLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uJzogJ2Vycm9yJyxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyc6IFsnZXJyb3InLCB7IGFyZ3M6ICdub25lJyB9XSxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSc6IFsnZXJyb3InLCB7IGZ1bmN0aW9uczogZmFsc2UsIGNsYXNzZXM6IGZhbHNlLCB2YXJpYWJsZXM6IGZhbHNlLCB0eXBlZGVmczogZmFsc2UgfV0sXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlbGVzcy1jb25zdHJ1Y3Rvcic6ICdlcnJvcicsXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdCc6ICdlcnJvcicsXG5cbiAgICAgICAgLy8gTmV3IFR5cGVzY3JpcHQtb25seSBydWxlczpcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9hZGphY2VudC1vdmVybG9hZC1zaWduYXR1cmVzJzogJ2Vycm9yJyxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9hcnJheS10eXBlJzogWydlcnJvcicsIHsgZGVmYXVsdDogJ2FycmF5LXNpbXBsZScgfV0sXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvY29uc2lzdGVudC10eXBlLWRlZmluaXRpb25zJzogWydlcnJvcicsICdpbnRlcmZhY2UnXSxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9jb25zaXN0ZW50LXR5cGUtYXNzZXJ0aW9ucyc6IFtcbiAgICAgICAgICAnZXJyb3InLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFzc2VydGlvblN0eWxlOiAnYXMnLFxuICAgICAgICAgICAgb2JqZWN0TGl0ZXJhbFR5cGVBc3NlcnRpb25zOiAnbmV2ZXInXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlJzogWydlcnJvcicsIHtcbiAgICAgICAgICBhbGxvd0V4cHJlc3Npb25zOiB0cnVlLFxuICAgICAgICAgIGFsbG93SGlnaGVyT3JkZXJGdW5jdGlvbnM6IHRydWUsXG4gICAgICAgICAgYWxsb3dUeXBlZEZ1bmN0aW9uRXhwcmVzc2lvbnM6IHRydWVcbiAgICAgICAgfV0sXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLWRlbGltaXRlci1zdHlsZSc6IFtcbiAgICAgICAgICAnZXJyb3InLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG11bHRpbGluZTogeyBkZWxpbWl0ZXI6ICdub25lJyB9LFxuICAgICAgICAgICAgc2luZ2xlbGluZTogeyBkZWxpbWl0ZXI6ICdjb21tYScsIHJlcXVpcmVMYXN0OiBmYWxzZSB9XG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWludGVyZmFjZSc6ICdlcnJvcicsXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXh0cmFuZW91cy1jbGFzcyc6ICdlcnJvcicsXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXMnOiAnZXJyb3InLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLWZvci1pbi1hcnJheSc6ICdlcnJvcicsXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbWlzdXNlZC1uZXcnOiAnZXJyb3InLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLW1pc3VzZWQtcHJvbWlzZXMnOiAnZXJyb3InLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZSc6ICdlcnJvcicsXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uJzogJ2Vycm9yJyxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzJzogWydlcnJvcicsIHsgYWxsb3dEZXN0cnVjdHVyaW5nOiB0cnVlIH1dLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLXVubmVjZXNzYXJ5LXR5cGUtYXNzZXJ0aW9uJzogJ2Vycm9yJyxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXMnOiAnZXJyb3InLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1mdW5jdGlvbi10eXBlJzogJ2Vycm9yJyxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItcmVhZG9ubHknOiAnZXJyb3InLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMnOiAnZXJyb3InLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L3JlcXVpcmUtYXJyYXktc29ydC1jb21wYXJlJzogJ2Vycm9yJyxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9yZXN0cmljdC1wbHVzLW9wZXJhbmRzJzogJ2Vycm9yJyxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9zdHJpY3QtYm9vbGVhbi1leHByZXNzaW9ucyc6ICdlcnJvcicsXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvdHJpcGxlLXNsYXNoLXJlZmVyZW5jZSc6IFsnZXJyb3InLCB7IGxpYjogJ25ldmVyJywgcGF0aDogJ25ldmVyJywgdHlwZXM6ICduZXZlcicgfV0sXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvdHlwZS1hbm5vdGF0aW9uLXNwYWNpbmcnOiAnZXJyb3InXG4gICAgICB9XG4gICAgfVxuICBdXG59XG4iXX0=