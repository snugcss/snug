module.exports = {
    // - Stylelint Standard Configを読み込み [git]https://github.com/stylelint/stylelint-config-standard
    "extends": "stylelint-config-standard",

    // - CSSのプロパティを自動ソートするプラグイン
    "plugins": [
        "stylelint-order"
    ],

    // - CSSのプロパティを自動ソートするプラグインの設定
    "rules": {
        "order/order": [
            "custom-properties",
            "declarations"
        ],
        "at-rule-no-unknown":[true, {
            "ignoreAtRules": ["value", "for", "media", "if", "each", "mixin", "content", "include", "function", "import", "else", "extend"] // - 配列内のプロパティは除外
        }],
        "order/properties-alphabetical-order": true, // アルファベット順に並べ替える
        "indentation": 2, // - インデントを指定
        "string-quotes": "double", // - 文字列の引用符をシングルで括るかかダブルで括るか
        "color-hex-case": "lower", // - 16進数のカラーコードを大文字か小文字か
        "color-hex-length": "short", // - 16進数のカラーコードを省略するか否か
        "color-named": "never", // - 名前付きカラーを強制するかどうか
        "selector-combinator-space-after": "always", // - セレクタの組み合わせの直後にスペースを許可するか否か
        "declaration-block-trailing-semicolon": "always", //  - ブロック内の最後のセミコロンを禁止
        "declaration-colon-space-before": "never", // - コロンの直前にスペースを入れることを許可するか否か
        "declaration-colon-space-after": "always", // - コロンの直後にスペースを入れることを許可するか否か
        "number-leading-zero": "never", // - 1未満の少数の先頭の0を許可するか否か
        "no-duplicate-selectors": null,
    }
}