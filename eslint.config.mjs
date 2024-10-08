import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";

export default [
    js.configs.recommended,
    {
        plugins: {
            "@typescript-eslint": typescriptEslint,
            "@stylistic": stylistic
        },
        languageOptions: {
            globals: {},
            ecmaVersion: 2022,
            sourceType: "module",
        },
        rules: {},
    },
    {
        files: ["**/*.ts", "**/*.mts"],
        languageOptions: {
            parser: typescriptParser,
            ecmaVersion: 2022,
            sourceType: "script",
            parserOptions: {
                project: ["./tsconfig.json"],
            },
        },
        rules: {
            // these are extended by @typescript-eslint rules
            "block-spacing": "off", // NOTE: extended by @typescript-eslint/block-spacing
            "brace-style": "off", // NOTE: extended by @typescript-eslint/brace-style
            "comma-dangle": "off", // NOTE: extended by @typescript-eslint/comma-dangle
            "comma-spacing": "off", // NOTE: extended by @typescript-eslint/comma-spacing
            "default-param-last": "off", // NOTE: extended by @typescript-eslint/default-param-last
            "dot-notation": "off", // NOTE: extended by @typescript-eslint/dot-notation
            "func-call-spacing": "off", // NOTE: extended by @typescript-eslint/func-call-spacing
            "indent": "off", // NOTE: extended by @typescript-eslint/indent
            "init-declarations": "off", // NOTE: extended by @typescript-eslint/init-declarations
            "key-spacing": "off", // NOTE: extended by @typescript-eslint/key-spacing
            "keyword-spacing": "off", // NOTE: extended by @typescript-eslint/keyword-spacing
            "lines-around-comment": "off", // NOTE: extended by @typescript-eslint/lines-around-comment
            "lines-between-class-members": "off", // NOTE: extended by @typescript-eslint/lines-between-class-members
            "no-array-constructor": "off", // NOTE: extended by @typescript-eslint/no-array-constructor
            "no-dupe-class-members": "off", // NOTE: extended by @typescript-eslint/no-dupe-class-members
            "no-empty-function": "off", // NOTE: extended by @typescript-eslint/no-empty-function
            "no-extra-parens": "off", // NOTE: extended by @typescript-eslint/no-extra-parens
            "no-extra-semi": "off", // NOTE: extended by @typescript-eslint/no-extra-semi
            "no-implied-eval": "off", // NOTE: extended by @typescript-eslint/no-implied-eval
            "no-invalid-this": "off", // NOTE: extended by @typescript-eslint/no-invalid-this
            "no-loop-func": "off", // NOTE: extended by @typescript-eslint/no-loop-func
            "no-loss-of-precision": "off", // NOTE: extended by @typescript-eslint/no-loss-of-precision
            "no-magic-numbers": "off", // NOTE: extended by @typescript-eslint/no-magic-numbers
            "no-redeclare": "off", // NOTE: extended by @typescript-eslint/no-redeclare
            "no-restricted-imports": "off", // NOTE: extended by @typescript-eslint/no-restricted-imports
            "no-return-await": "off", // NOTE: extended by @typescript-eslint/return-await
            "no-shadow": "off", // NOTE: extended by @typescript-eslint/no-shadow
            "no-throw-literal": "off", // NOTE: extended by @typescript-eslint/no-throw-literal
            "no-unused-expressions": "off", // NOTE: extended by @typescript-eslint/no-unused-expressions
            "no-unused-vars": "off", // NOTE: extended by @typescript-eslint/no-unused-vars
            "no-use-before-define": "off", // NOTE: extended by @typescript-eslint/no-use-before-define
            "no-useless-constructor": "off", // NOTE: extended by @typescript-eslint/no-useless-constructor
            "object-curly-spacing": "off", // NOTE: extended by @typescript-eslint/object-curly-spacing
            "padding-line-between-statements": "off", // NOTE: extended by @typescript-eslint/padding-line-between-statements
            "quotes": "off", // NOTE: extended by @typescript-eslint/quotes
            "require-await": "off", // NOTE: extended by @typescript-eslint/require-await
            "semi": "off", // NOTE: extended by @typescript-eslint/semi
            "space-before-blocks": "off", // NOTE: extended by @typescript-eslint/space-before-blocks
            "space-before-function-paren": "off", // NOTE: extended by @typescript-eslint/space-before-function-paren
            "space-infix-ops": "off", // NOTE: extended by @typescript-eslint/space-infix-ops
            "no-console": "error",

            "@stylistic/indent": ["error", 2],
            "@stylistic/brace-style": ["error", "1tbs", {"allowSingleLine": true}],
            "@stylistic/comma-dangle": ["error", "never"],
            "@stylistic/comma-spacing": ["error", {"before": false, "after": true}],
            "@stylistic/func-call-spacing": ["error", "never"],
            "@stylistic/indent": ["error", "tab", {"SwitchCase": 1, "VariableDeclarator": 1, "outerIIFEBody": 1, "MemberExpression": 1, "FunctionDeclaration": {"parameters": 1, "body": 1}, "FunctionExpression": {"parameters": 1, "body": 1}, "StaticBlock": {"body": 1}, "CallExpression": {"arguments": 1}, "ArrayExpression": 1, "ObjectExpression": 1, "ImportDeclaration": 1, "flatTernaryExpressions": false, "offsetTernaryExpressions": false, "ignoredNodes": [], "ignoreComments": false}], //NOTE: broken
            "@stylistic/key-spacing": ["error", {"beforeColon": false, "afterColon": true, "mode": "strict"}], //NOTE: too aggressive; false positives on interfaces
            "@stylistic/keyword-spacing": ["error", {"before": true, "after": true}],
            "@stylistic/member-delimiter-style": ["error", {"multiline": {"delimiter": "semi", "requireLast": true}, "singleline": {"delimiter": "semi", "requireLast": true}, "overrides": {"interface": {}, "typeLiteral": {}}, "multilineDetection": "brackets"}],
            "@stylistic/no-extra-parens": ["error", "all", {"conditionalAssign": true, "nestedBinaryExpressions": false, "returnAssign": true, "ignoreJSX": "none", "enforceForArrowConditionals": true, "enforceForSequenceExpressions": true, "enforceForNewInMemberExpressions": true, "enforceForFunctionPrototypeMethods": true, "allowParensAfterCommentPattern": ""}],
            "@stylistic/no-extra-semi": "error",
            "@stylistic/quotes": ["error", "single", {"avoidEscape": true, "allowTemplateLiterals": false}],
            "@stylistic/semi": ["error", "always", {"omitLastInOneLineBlock": false}],
            "@stylistic/space-before-blocks": ["error", {"keywords": "always", "functions": "always", "classes": "always"}],
            "@stylistic/space-before-function-paren": ["error", {"anonymous": "never", "named": "never", "asyncArrow": "always"}],
            "@stylistic/space-infix-ops": "off",
            "@stylistic/type-annotation-spacing": ["error"],

            /* --- TYPESCRIPT (v7.0.2) --- */
            "@typescript-eslint/adjacent-overload-signatures": "error",
            "@typescript-eslint/array-type": ["error", {"default": "array", "readonly": "array"}],
            "@typescript-eslint/await-thenable": "error",
            "@typescript-eslint/ban-ts-comment": ["error", {"ts-expect-error": true, "ts-ignore": true, "ts-nocheck": true, "ts-check": true, "minimumDescriptionLength": 3}],
            "@typescript-eslint/ban-tslint-comment": "error",
            "@typescript-eslint/class-literal-property-style": ["error", "fields"],
            "@typescript-eslint/consistent-generic-constructors": ["error", "constructor"],
            "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
            "@typescript-eslint/consistent-type-assertions": ["error", { "assertionStyle": "as", "objectLiteralTypeAssertions": "allow-as-parameter" }],
            "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
            "@typescript-eslint/consistent-type-exports": ["error", {"fixMixedExportsWithInlineTypeSpecifier": true}],
            "@typescript-eslint/consistent-type-imports": ["error", {"prefer": "type-imports", "disallowTypeAnnotations": true, "fixStyle": "inline-type-imports"}],
            "@typescript-eslint/default-param-last": "error",
            "@typescript-eslint/dot-notation": ["error", {"allowKeywords": true, "allowPattern": "", "allowPrivateClassPropertyAccess": false, "allowProtectedClassPropertyAccess": false, "allowIndexSignaturePropertyAccess": false}],
            "@typescript-eslint/explicit-function-return-type": ["error", {"allowExpressions": true}],
            "@typescript-eslint/explicit-member-accessibility": ["error", {"accessibility": "no-public", "overrides": {}, "ignoredMethodNames": []}],
            "@typescript-eslint/explicit-module-boundary-types": ["error", {"allowArgumentsExplicitlyTypedAsAny": false, "allowDirectConstAssertionInArrowFunctions": false, "allowHigherOrderFunctions": false, "allowTypedFunctionExpressions": false, "allowedNames": []}],
            "@typescript-eslint/init-declarations": ["error", "always"],
            "@typescript-eslint/lines-around-comment": "off",
            "@typescript-eslint/lines-between-class-members": "off",
            "@typescript-eslint/member-ordering": "off",
            "@typescript-eslint/method-signature-style": ["error", "property"],
            "@typescript-eslint/naming-convention": "off",
            "@typescript-eslint/no-array-constructor": "error",
            "@typescript-eslint/no-base-to-string": ["error", {"ignoredTypeNames": []}],
            "@typescript-eslint/no-confusing-non-null-assertion": "error",
            "@typescript-eslint/no-confusing-void-expression": ["error", {"ignoreArrowShorthand": true, "ignoreVoidOperator": false}],
            "@typescript-eslint/no-dupe-class-members": "error",
            "@typescript-eslint/no-duplicate-enum-values": "error",
            "@typescript-eslint/no-dynamic-delete": "error",
            "@typescript-eslint/no-empty-function": ["error", {"allow": ["overrideMethods"]}],
            "@typescript-eslint/no-empty-interface": ["error", {"allowSingleExtends": false}],
            "@typescript-eslint/no-explicit-any": ["error", {"fixToUnknown": false, "ignoreRestArgs": false}],
            "@typescript-eslint/no-extra-non-null-assertion": "error",
            "@typescript-eslint/no-extraneous-class": ["error", {"allowConstructorOnly": false, "allowEmpty": false, "allowStaticOnly": false, "allowWithDecorator": false}],
            "@typescript-eslint/no-floating-promises": ["error", {"ignoreVoid": true, "ignoreIIFE": false}],
            "@typescript-eslint/no-for-in-array": "error",
            "@typescript-eslint/no-implied-eval": "error",
            "@typescript-eslint/no-import-type-side-effects": "error",
            "@typescript-eslint/no-inferrable-types": ["error", {"ignoreParameters": false, "ignoreProperties": false}],
            "@typescript-eslint/no-invalid-this": ["error", {"capIsConstructor": true}],
            "@typescript-eslint/no-invalid-void-type": ["error", {"allowInGenericTypeArguments": ["Promise"], "allowAsThisParameter": false}],
            "@typescript-eslint/no-loop-func": "error",
            "@typescript-eslint/no-loss-of-precision": "error",
            "@typescript-eslint/no-magic-numbers": ["error", {"detectObjects": true, "enforceConst": true, "ignore": [-1, 0, 1, 2], "ignoreArrayIndexes": false, "ignoreDefaultValues": false, "ignoreClassFieldInitialValues": false, "ignoreNumericLiteralTypes": false, "ignoreEnums": false, "ignoreReadonlyClassProperties": false, "ignoreTypeIndexes": false}],
            "@typescript-eslint/no-meaningless-void-operator": ["error", {"checkNever": false}],
            "@typescript-eslint/no-misused-new": "error",
            "@typescript-eslint/no-misused-promises": ["error", {"checksConditionals": true, "checksVoidReturn": false, "checksSpreads": true}],
            "@typescript-eslint/no-mixed-enums": "error",
            "@typescript-eslint/no-namespace": ["error", {"allowDeclarations": false, "allowDefinitionFiles": false}],
            "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
            "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
            "@typescript-eslint/no-non-null-assertion": "error",
            "@typescript-eslint/no-redeclare": ["error", {"builtinGlobals": true, "ignoreDeclarationMerge": false}],
            "@typescript-eslint/no-redundant-type-constituents": "error",
            "@typescript-eslint/no-require-imports": "error",
            "@typescript-eslint/no-restricted-imports": "off",
            "@typescript-eslint/no-shadow": ["error", {"builtinGlobals": true, "hoist": "all", "allow": [], "ignoreOnInitialization": false, "ignoreTypeValueShadow": false, "ignoreFunctionTypeParameterNameValueShadow": false}],
            "@typescript-eslint/no-this-alias": ["error", {"allowDestructuring": true, "allowedNames": []}],
            // "@typescript-eslint/no-throw-literal": ["error", {"allowThrowingAny": false, "allowThrowingUnknown": false}],
            "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error", {"allowComparingNullableBooleansToTrue": false, "allowComparingNullableBooleansToFalse": false}],
            "@typescript-eslint/no-unnecessary-condition": ["error", {"allowConstantLoopConditions": false, "allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false}],
            "@typescript-eslint/no-unnecessary-qualifier": "error",
            "@typescript-eslint/no-unnecessary-type-arguments": "error",
            "@typescript-eslint/no-unnecessary-type-assertion": ["error", {"typesToIgnore": []}],
            "@typescript-eslint/no-unnecessary-type-constraint": "error",
            "@typescript-eslint/no-unsafe-argument": "error",
            "@typescript-eslint/no-unsafe-assignment": "error",
            "@typescript-eslint/no-unsafe-call": "error",
            "@typescript-eslint/no-unsafe-declaration-merging": "error",
            "@typescript-eslint/no-unsafe-member-access": "error",
            "@typescript-eslint/no-unsafe-return": "error",
            "@typescript-eslint/no-unused-expressions": ["error", {"allowShortCircuit": false, "allowTernary": false, "allowTaggedTemplates": false, "enforceForJSX": true}],
            "@typescript-eslint/no-unused-vars": ["error", {"vars": "all", "varsIgnorePattern": "^_", "args": "all", "ignoreRestSiblings": true, "argsIgnorePattern": "^_", "caughtErrors": "all", "caughtErrorsIgnorePattern": "^_", "destructuredArrayIgnorePattern": "^_"}],
            "@typescript-eslint/no-use-before-define": ["error", {"functions": true, "classes": true, "enums": true, "variables": true, "typedefs": false, "ignoreTypeReferences": false, "allowNamedExports": false}],
            "@typescript-eslint/no-useless-constructor": "error",
            "@typescript-eslint/no-useless-empty-export": "error",
            "@typescript-eslint/no-var-requires": "error",
            "@typescript-eslint/non-nullable-type-assertion-style": "error",
            "@typescript-eslint/padding-line-between-statements": "off",
            "@typescript-eslint/parameter-properties": ["error", {"allow": [], "prefer": "class-property"}],
            "@typescript-eslint/prefer-as-const": "error",
            "@typescript-eslint/prefer-enum-initializers": "error",
            "@typescript-eslint/prefer-for-of": "error",
            "@typescript-eslint/prefer-function-type": "error",
            "@typescript-eslint/prefer-includes": "error",
            "@typescript-eslint/prefer-literal-enum-member": ["error", {"allowBitwiseExpressions": false}],
            "@typescript-eslint/prefer-namespace-keyword": "error",
            "@typescript-eslint/prefer-nullish-coalescing": ["error", {"ignoreConditionalTests": false, "ignoreTernaryTests": false, "ignoreMixedLogicalExpressions": false, "allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false}],
            "@typescript-eslint/prefer-optional-chain": "error",
            "@typescript-eslint/prefer-readonly-parameter-types": "off",
            "@typescript-eslint/prefer-readonly": ["error", {"onlyInlineLambdas": false}],
            "@typescript-eslint/prefer-reduce-type-parameter": "error",
            "@typescript-eslint/prefer-regexp-exec": "error",
            "@typescript-eslint/prefer-return-this-type": "error",
            "@typescript-eslint/prefer-string-starts-ends-with": "error",
            "@typescript-eslint/prefer-ts-expect-error": "error",
            "@typescript-eslint/promise-function-async": ["error", {"allowAny": false, "allowedPromiseNames": [], "checkArrowFunctions": true, "checkFunctionDeclarations": true, "checkFunctionExpressions": true, "checkMethodDeclarations": true}],
            "@typescript-eslint/require-array-sort-compare": ["error", {"ignoreStringArrays": false}],
            "@typescript-eslint/require-await": "error",
            "@typescript-eslint/restrict-plus-operands": ["error", {"skipCompoundAssignments": false, "allowAny": false}],
            "@typescript-eslint/restrict-template-expressions": ["error", {"allowNumber": true, "allowBoolean": false, "allowAny": false, "allowNullish": false, "allowRegExp": false}],
            "@typescript-eslint/return-await": ["error", "never"],
            "@typescript-eslint/sort-type-constituents": "off",
            "@typescript-eslint/strict-boolean-expressions": ["error", {"allowString": false, "allowNumber": true, "allowNullableObject": true, "allowNullableBoolean": false, "allowNullableString": false, "allowNullableNumber": false, "allowNullableEnum": false, "allowAny": false, "allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false}],
            "@typescript-eslint/switch-exhaustiveness-check": "error",
            "@typescript-eslint/triple-slash-reference": ["error", {"lib": "always", "path": "never", "types": "prefer-import"}],
            "@typescript-eslint/typedef": "off",
            "@typescript-eslint/unbound-method": ["error", {"ignoreStatic": false}],
            "@typescript-eslint/unified-signatures": ["error", {"ignoreDifferentlyNamedParameters": false}]
        },
    },
    {
        files: ["**/*.spec.ts", "**/*.spec.mts"],
        rules: {
            "@typescript-eslint/no-invalid-this": "off",
            "@typescript-eslint/no-magic-numbers": "off",
        },
    },
];