module.exports = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-standard-scss",
        "stylelint-config-html/vue"
    ],
    plugins: ["stylelint-order"],
    rules: {
        indentation: 4,
        "block-closing-brace-newline-before": "always",
        "block-opening-brace-newline-after": "always",
        "color-hex-length": "long",
        "color-named": "never",
        "declaration-block-no-redundant-longhand-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-single-line-max-declarations": 2,
        "declaration-colon-newline-after": null,
        "length-zero-no-unit": null,
        "order/order": ["declarations", "custom-properties"],
        "order/properties-alphabetical-order": true,
        "no-empty-source": null,
        "no-descending-specificity": null,
        "rule-empty-line-before": "always",
        "shorthand-property-no-redundant-values": null,
        "property-no-vendor-prefix": null,
        "at-rule-no-vendor-prefix": null,
        "value-no-vendor-prefix": null,
        "selector-no-vendor-prefix": null,
        "font-family-name-quotes": "always-unless-keyword",
        "alpha-value-notation": "number",
        "color-function-notation": "legacy",
        "scss/dollar-variable-empty-line-before": null,
        "scss/at-import-partial-extension": null,
        "selector-pseudo-element-no-unknown": [
            true,
            {
                ignorePseudoElements: ["v-deep"]
            }
        ]
    }
};
