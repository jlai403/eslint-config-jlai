export default {
	'env': {
		'es2022': true
	},
	'parserOptions': {
		'sourceType': 'module',
		'ecmaVersion': 2022
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
  'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		// eslint:recommended from https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
		'constructor-super': 'error',
		'for-direction': 'error',
		'getter-return': 'error',
		'no-async-promise-executor': 'error',
		'no-case-declarations': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-const-assign': 'error',
		'no-constant-condition': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-empty-pattern': 'error',
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-semi': 'error',
		'no-fallthrough': 'error',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-import-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-loss-of-precision': 'error',
		'no-misleading-character-class': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-new-symbol': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-prototype-builtins': 'error',
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-self-assign': 'error',
		'no-setter-return': 'error',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'error',
		'no-this-before-super': 'error',
		'no-undef': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-unused-labels': 'error',
		'no-unused-vars': ['error', { 
			'args': 'after-used',
			'destructuredArrayIgnorePattern': '^_'
		}], // disable args
		'no-useless-backreference': 'error',
		'no-useless-catch': 'error',
		'no-useless-escape': 'error',
		'no-with': 'error',
		'require-yield': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'error'
	},
	'overrides': [{
		'files': ['*.ts'],
		'parser': '@typescript-eslint/parser',
		'parserOptions': {
			'project': ['./tsconfig.json']
		},
		'rules': {
			// NOTE: these are extended by @typescript-eslint rules
			'block-spacing': 'off', // NOTE: extended by @typescript-eslint/block-spacing
			'brace-style': 'off', // NOTE: extended by @typescript-eslint/brace-style
			'comma-dangle': 'off', // NOTE: extended by @typescript-eslint/comma-dangle
			'comma-spacing': 'off', // NOTE: extended by @typescript-eslint/comma-spacing
			'default-param-last': 'off', // NOTE: extended by @typescript-eslint/default-param-last
			'dot-notation': 'off', // NOTE: extended by @typescript-eslint/dot-notation
			'func-call-spacing': 'off', // NOTE: extended by @typescript-eslint/func-call-spacing
			'indent': 'off', // NOTE: extended by @typescript-eslint/indent
			'init-declarations': 'off', // NOTE: extended by @typescript-eslint/init-declarations
			'key-spacing': 'off', // NOTE: extended by @typescript-eslint/key-spacing
			'keyword-spacing': 'off', // NOTE: extended by @typescript-eslint/keyword-spacing
			'lines-around-comment': 'off', // NOTE: extended by @typescript-eslint/lines-around-comment
			'lines-between-class-members': 'off', // NOTE: extended by @typescript-eslint/lines-between-class-members
			'no-array-constructor': 'off', // NOTE: extended by @typescript-eslint/no-array-constructor
			'no-dupe-class-members': 'off', // NOTE: extended by @typescript-eslint/no-dupe-class-members
			'no-duplicate-imports': 'off', // NOTE: extended by @typescript-eslint/no-duplicate-imports
			'no-empty-function': 'off', // NOTE: extended by @typescript-eslint/no-empty-function
			'no-extra-parens': 'off', // NOTE: extended by @typescript-eslint/no-extra-parens
			'no-extra-semi': 'off', // NOTE: extended by @typescript-eslint/no-extra-semi
			'no-implied-eval': 'off', // NOTE: extended by @typescript-eslint/no-implied-eval
			'no-invalid-this': 'off', // NOTE: extended by @typescript-eslint/no-invalid-this
			'no-loop-func': 'off', // NOTE: extended by @typescript-eslint/no-loop-func
			'no-loss-of-precision': 'off', // NOTE: extended by @typescript-eslint/no-loss-of-precision
			'no-magic-numbers': 'off', // NOTE: extended by @typescript-eslint/no-magic-numbers
			'no-redeclare': 'off', // NOTE: extended by @typescript-eslint/no-redeclare
			'no-restricted-imports': 'off', // NOTE: extended by @typescript-eslint/no-restricted-imports
			'no-return-await': 'off', // NOTE: extended by @typescript-eslint/return-await
			'no-shadow': 'off', // NOTE: extended by @typescript-eslint/no-shadow
			'no-throw-literal': 'off', // NOTE: extended by @typescript-eslint/no-throw-literal
			'no-unused-expressions': 'off', // NOTE: extended by @typescript-eslint/no-unused-expressions
			'no-unused-vars': 'off', // NOTE: extended by @typescript-eslint/no-unused-vars
			'no-use-before-define': 'off', // NOTE: extended by @typescript-eslint/no-use-before-define
			'no-useless-constructor': 'off', // NOTE: extended by @typescript-eslint/no-useless-constructor
			'object-curly-spacing': 'off', // NOTE: extended by @typescript-eslint/object-curly-spacing
			'padding-line-between-statements': 'off', // NOTE: extended by @typescript-eslint/padding-line-between-statements
			'quotes': 'off', // NOTE: extended by @typescript-eslint/quotes
			'require-await': 'off', // NOTE: extended by @typescript-eslint/require-await
			'semi': 'off', // NOTE: extended by @typescript-eslint/semi
			'space-before-blocks': 'off', // NOTE: extended by @typescript-eslint/space-before-blocks
			'space-before-function-paren': 'off', // NOTE: extended by @typescript-eslint/space-before-function-paren
			'space-infix-ops': 'off', // NOTE: extended by @typescript-eslint/space-infix-ops

			/* --- TYPESCRIPT (v5.55.0) --- */
			'@typescript-eslint/adjacent-overload-signatures': 'error',
			'@typescript-eslint/array-type': ['error', {'default': 'array', 'readonly': 'array'}],
			'@typescript-eslint/await-thenable': 'error',
			'@typescript-eslint/ban-ts-comment': ['error', {'ts-expect-error': true, 'ts-ignore': true, 'ts-nocheck': true, 'ts-check': true, 'minimumDescriptionLength': 3}],
			'@typescript-eslint/ban-tslint-comment': 'error',
			'@typescript-eslint/ban-types': ['error', {'types': {}, 'extendDefaults': true}],
			'@typescript-eslint/block-spacing': ['error', 'never'],
			'@typescript-eslint/brace-style': ['error', '1tbs', {'allowSingleLine': true}],
			'@typescript-eslint/class-literal-property-style': ['error', 'fields'],
			'@typescript-eslint/comma-dangle': ['error', {'arrays': 'never', 'objects': 'never', 'imports': 'never', 'exports': 'never', 'functions': 'never', 'enums': 'never', 'generics': 'never', 'tuples': 'never'}],
			'@typescript-eslint/comma-spacing': ['error', {'before': false, 'after': true}],
			'@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
			'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
			'@typescript-eslint/consistent-type-assertions': ['error', { 'assertionStyle': 'as', 'objectLiteralTypeAssertions': 'allow-as-parameter' }],
			'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
			'@typescript-eslint/consistent-type-exports': ['error', {'fixMixedExportsWithInlineTypeSpecifier': true}],
			'@typescript-eslint/consistent-type-imports': ['error', {'prefer': 'type-imports', 'disallowTypeAnnotations': true, 'fixStyle': 'inline-type-imports'}],
			'@typescript-eslint/default-param-last': 'error',
			'@typescript-eslint/dot-notation': ['error', {'allowKeywords': true, 'allowPattern': '', 'allowPrivateClassPropertyAccess': false, 'allowProtectedClassPropertyAccess': false, 'allowIndexSignaturePropertyAccess': false}],
			'@typescript-eslint/explicit-function-return-type': ['error', {'allowExpressions': true}],
			'@typescript-eslint/explicit-member-accessibility': ['error', {'accessibility': 'implicit', 'overrides': {}, 'ignoredMethodNames': []}],
			'@typescript-eslint/explicit-module-boundary-types': ['error', {'allowArgumentsExplicitlyTypedAsAny': false, 'allowDirectConstAssertionInArrowFunctions': false, 'allowHigherOrderFunctions': false, 'allowTypedFunctionExpressions': false, 'allowedNames': []}],
			'@typescript-eslint/func-call-spacing': ['error', 'never'],
			'@typescript-eslint/indent': ['error', 'tab', {'SwitchCase': 1, 'VariableDeclarator': 1, 'outerIIFEBody': 1, 'MemberExpression': 1, 'FunctionDeclaration': {'parameters': 1, 'body': 1}, 'FunctionExpression': {'parameters': 1, 'body': 1}, 'StaticBlock': {'body': 1}, 'CallExpression': {'arguments': 1}, 'ArrayExpression': 1, 'ObjectExpression': 1, 'ImportDeclaration': 1, 'flatTernaryExpressions': false, 'offsetTernaryExpressions': false, 'ignoredNodes': [], 'ignoreComments': false}], //NOTE: broken
			'@typescript-eslint/init-declarations': ['error', 'always'],
			'@typescript-eslint/key-spacing': ['error', {'beforeColon': false, 'afterColon': true, 'mode': 'strict'}], //NOTE: too aggressive; false positives on interfaces
			'@typescript-eslint/keyword-spacing': ['error', {'before': true, 'after': true}],
			'@typescript-eslint/lines-around-comment': 'off',
			'@typescript-eslint/lines-between-class-members': 'off',
			'@typescript-eslint/member-delimiter-style': ['error', {'multiline': {'delimiter': 'semi', 'requireLast': true}, 'singleline': {'delimiter': 'semi', 'requireLast': true}, 'overrides': {'interface': {}, 'typeLiteral': {}}, 'multilineDetection': 'brackets'}],
			'@typescript-eslint/member-ordering': 'off',
			'@typescript-eslint/method-signature-style': ['error', 'property'],
			'@typescript-eslint/naming-convention': 'off',
			'@typescript-eslint/no-array-constructor': 'error',
			'@typescript-eslint/no-base-to-string': ['error', {'ignoredTypeNames': []}],
			'@typescript-eslint/no-confusing-non-null-assertion': 'error',
			'@typescript-eslint/no-confusing-void-expression': ['error', {'ignoreArrowShorthand': true, 'ignoreVoidOperator': false}],
			'@typescript-eslint/no-dupe-class-members': 'error',
			'@typescript-eslint/no-duplicate-enum-values': 'error',
			'@typescript-eslint/no-duplicate-imports': ['error', {'includeExports': true}],
			'@typescript-eslint/no-dynamic-delete': 'error',
			'@typescript-eslint/no-empty-function': ['error', {'allow': ['overrideMethods']}],
			'@typescript-eslint/no-empty-interface': ['error', {'allowSingleExtends': false}],
			'@typescript-eslint/no-explicit-any': ['error', {'fixToUnknown': false, 'ignoreRestArgs': false}],
			'@typescript-eslint/no-extra-non-null-assertion': 'error',
			'@typescript-eslint/no-extra-parens': ['error', 'all', {'conditionalAssign': true, 'nestedBinaryExpressions': false, 'returnAssign': true, 'ignoreJSX': 'none', 'enforceForArrowConditionals': true, 'enforceForSequenceExpressions': true, 'enforceForNewInMemberExpressions': true, 'enforceForFunctionPrototypeMethods': true, 'allowParensAfterCommentPattern': ''}],
			'@typescript-eslint/no-extra-semi': 'error',
			'@typescript-eslint/no-extraneous-class': ['error', {'allowConstructorOnly': false, 'allowEmpty': false, 'allowStaticOnly': false, 'allowWithDecorator': false}],
			'@typescript-eslint/no-floating-promises': ['error', {'ignoreVoid': true, 'ignoreIIFE': false}],
			'@typescript-eslint/no-for-in-array': 'error',
			'@typescript-eslint/no-implied-eval': 'error',
			'@typescript-eslint/no-import-type-side-effects': 'error',
			'@typescript-eslint/no-inferrable-types': ['error', {'ignoreParameters': false, 'ignoreProperties': false}],
			'@typescript-eslint/no-invalid-this': ['error', {'capIsConstructor': true}],
			'@typescript-eslint/no-invalid-void-type': ['error', {'allowInGenericTypeArguments': ['Promise'], 'allowAsThisParameter': false}],
			'@typescript-eslint/no-loop-func': 'error',
			'@typescript-eslint/no-loss-of-precision': 'error',
			'@typescript-eslint/no-magic-numbers': ['error', {'detectObjects': true, 'enforceConst': true, 'ignore': [-1, 0, 1, 2], 'ignoreArrayIndexes': false, 'ignoreDefaultValues': false, 'ignoreClassFieldInitialValues': false, 'ignoreNumericLiteralTypes': false, 'ignoreEnums': false, 'ignoreReadonlyClassProperties': false, 'ignoreTypeIndexes': false}],
			'@typescript-eslint/no-meaningless-void-operator': ['error', {'checkNever': false}],
			'@typescript-eslint/no-misused-new': 'error',
			'@typescript-eslint/no-misused-promises': ['error', {'checksConditionals': true, 'checksVoidReturn': true, 'checksSpreads': true}],
			'@typescript-eslint/no-mixed-enums': 'error',
			'@typescript-eslint/no-namespace': ['error', {'allowDeclarations': false, 'allowDefinitionFiles': false}],
			'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
			'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
			'@typescript-eslint/no-non-null-assertion': 'error',
			'@typescript-eslint/no-redeclare': ['error', {'builtinGlobals': true, 'ignoreDeclarationMerge': false}],
			'@typescript-eslint/no-redundant-type-constituents': 'error',
			'@typescript-eslint/no-require-imports': 'error',
			'@typescript-eslint/no-restricted-imports': 'off',
			'@typescript-eslint/no-shadow': ['error', {'builtinGlobals': true, 'hoist': 'all', 'allow': [], 'ignoreOnInitialization': false, 'ignoreTypeValueShadow': false, 'ignoreFunctionTypeParameterNameValueShadow': false}],
			'@typescript-eslint/no-this-alias': ['error', {'allowDestructuring': true, 'allowedNames': []}],
			'@typescript-eslint/no-throw-literal': ['error', {'allowThrowingAny': false, 'allowThrowingUnknown': false}],
			'@typescript-eslint/no-type-alias': ['error', {'allowAliases': 'in-unions', 'allowCallbacks': 'never', 'allowConditionalTypes': 'never', 'allowConstructors': 'never', 'allowLiterals': 'never', 'allowMappedTypes': 'never', 'allowTupleTypes': 'always', 'allowGenerics': 'never'}],
			'@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error', {'allowComparingNullableBooleansToTrue': false, 'allowComparingNullableBooleansToFalse': false}],
			'@typescript-eslint/no-unnecessary-condition': ['error', {'allowConstantLoopConditions': false, 'allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing': false}],
			'@typescript-eslint/no-unnecessary-qualifier': 'error',
			'@typescript-eslint/no-unnecessary-type-arguments': 'error',
			'@typescript-eslint/no-unnecessary-type-assertion': ['error', {'typesToIgnore': []}],
			'@typescript-eslint/no-unnecessary-type-constraint': 'error',
			'@typescript-eslint/no-unsafe-argument': 'error',
			'@typescript-eslint/no-unsafe-assignment': 'error',
			'@typescript-eslint/no-unsafe-call': 'error',
			'@typescript-eslint/no-unsafe-declaration-merging': 'error',
			'@typescript-eslint/no-unsafe-member-access': 'error',
			'@typescript-eslint/no-unsafe-return': 'error',
			'@typescript-eslint/no-unused-expressions': ['error', {'allowShortCircuit': false, 'allowTernary': false, 'allowTaggedTemplates': false, 'enforceForJSX': true}],
			'@typescript-eslint/no-unused-vars': ['error', {'vars': 'all', 'varsIgnorePattern': '', 'args': 'none', 'ignoreRestSiblings': false, 'argsIgnorePattern': '', 'caughtErrors': 'all', 'caughtErrorsIgnorePattern': '', 'destructuredArrayIgnorePattern': ''}],
			'@typescript-eslint/no-use-before-define': ['error', {'functions': true, 'classes': true, 'enums': true, 'variables': true, 'typedefs': false, 'ignoreTypeReferences': false, 'allowNamedExports': false}],
			'@typescript-eslint/no-useless-constructor': 'error',
			'@typescript-eslint/no-useless-empty-export': 'error',
			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/non-nullable-type-assertion-style': 'error',
			'@typescript-eslint/padding-line-between-statements': 'off',
			'@typescript-eslint/parameter-properties': ['error', {'allow': [], 'prefer': 'class-property'}],
			'@typescript-eslint/prefer-as-const': 'error',
			'@typescript-eslint/prefer-enum-initializers': 'error',
			'@typescript-eslint/prefer-for-of': 'error',
			'@typescript-eslint/prefer-function-type': 'error',
			'@typescript-eslint/prefer-includes': 'error',
			'@typescript-eslint/prefer-literal-enum-member': ['error', {'allowBitwiseExpressions': false}],
			'@typescript-eslint/prefer-namespace-keyword': 'error',
			'@typescript-eslint/prefer-nullish-coalescing': ['error', {'ignoreConditionalTests': false, 'ignoreTernaryTests': false, 'ignoreMixedLogicalExpressions': false, 'allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing': false}],
			'@typescript-eslint/prefer-optional-chain': 'error',
			'@typescript-eslint/prefer-readonly-parameter-types': 'off',
			'@typescript-eslint/prefer-readonly': ['error', {'onlyInlineLambdas': false}],
			'@typescript-eslint/prefer-reduce-type-parameter': 'error',
			'@typescript-eslint/prefer-regexp-exec': 'error',
			'@typescript-eslint/prefer-return-this-type': 'error',
			'@typescript-eslint/prefer-string-starts-ends-with': 'error',
			'@typescript-eslint/prefer-ts-expect-error': 'error',
			'@typescript-eslint/promise-function-async': ['error', {'allowAny': false, 'allowedPromiseNames': [], 'checkArrowFunctions': true, 'checkFunctionDeclarations': true, 'checkFunctionExpressions': true, 'checkMethodDeclarations': true}],
			'@typescript-eslint/quotes': ['error', 'single', {'avoidEscape': false, 'allowTemplateLiterals': false}],
			'@typescript-eslint/require-array-sort-compare': ['error', {'ignoreStringArrays': false}],
			'@typescript-eslint/require-await': 'error',
			'@typescript-eslint/restrict-plus-operands': ['error', {'checkCompoundAssignments': true, 'allowAny': false}],
			'@typescript-eslint/restrict-template-expressions': ['error', {'allowNumber': true, 'allowBoolean': false, 'allowAny': false, 'allowNullish': false, 'allowRegExp': false}],
			'@typescript-eslint/return-await': ['error', 'never'],
			'@typescript-eslint/semi': ['error', 'always', {'omitLastInOneLineBlock': false}],
			'@typescript-eslint/sort-type-constituents': 'off',
			'@typescript-eslint/space-before-blocks': ['error', {'keywords': 'always', 'functions': 'always', 'classes': 'always'}],
			'@typescript-eslint/space-before-function-paren': ['error', {'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always'}],
			'@typescript-eslint/space-infix-ops': 'off',
			'@typescript-eslint/strict-boolean-expressions': ['error', {'allowString': false, 'allowNumber': true, 'allowNullableObject': true, 'allowNullableBoolean': false, 'allowNullableString': false, 'allowNullableNumber': false, 'allowNullableEnum': false, 'allowAny': false, 'allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing': false}],
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
			'@typescript-eslint/triple-slash-reference': ['error', {'lib': 'always', 'path': 'never', 'types': 'prefer-import'}],
			'@typescript-eslint/type-annotation-spacing': ['error'],
			'@typescript-eslint/typedef': 'off',
			'@typescript-eslint/unbound-method': ['error', {'ignoreStatic': false}],
			'@typescript-eslint/unified-signatures': ['error', {'ignoreDifferentlyNamedParameters': false}]
		}
	}],
}