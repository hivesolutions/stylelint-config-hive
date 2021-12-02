module.exports = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-standard-scss",
        "stylelint-config-html/vue"
    ],
    plugins: ["stylelint-order"],
    rules: {
        indentation: 4,
        "alpha-value-notation": "number",
        "at-rule-no-vendor-prefix": null,
        "block-closing-brace-newline-before": "always",
        "block-opening-brace-newline-after": "always",
        "color-function-notation": "legacy",
        "color-hex-length": "long",
        "color-named": "never",
        "declaration-block-no-redundant-longhand-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-single-line-max-declarations": 2,
        "declaration-colon-newline-after": null,
        "font-family-name-quotes": "always-unless-keyword",
        "length-zero-no-unit": null,
        "order/order": ["declarations", "custom-properties"],
        "order/properties-alphabetical-order": true,
        "max-line-length": 180,
        "no-empty-source": null,
        "no-descending-specificity": null,
        "property-no-vendor-prefix": null,
        "rule-empty-line-before": "always",
        "scss/dollar-variable-empty-line-before": null,
        "scss/at-import-partial-extension": null,
        "selector-no-vendor-prefix": null,
        "shorthand-property-no-redundant-values": null,
        "selector-pseudo-element-no-unknown": [
            true,
            {
                ignorePseudoElements: ["v-deep"]
            }
        ],
        "value-no-vendor-prefix": null
    }
};
