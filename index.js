module.exports = {
    extends: ["stylelint-config-standard"],
    plugins: ["stylelint-order"],
    rules: {
        "block-closing-brace-newline-before": "always",
        "block-opening-brace-newline-after": "always",
        "color-hex-length": "long",
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-single-line-max-declarations": 2,
        "declaration-colon-newline-after": null,
        indentation: 4,
        "length-zero-no-unit": null,
        "order/order": ["declarations", "custom-properties"],
        "order/properties-alphabetical-order": true,
        "no-empty-source": null,
        "rule-empty-line-before": "always",
        "selector-pseudo-element-no-unknown": [
            true,
            {
                ignorePseudoElements: ["v-deep"]
            }
        ]
    }
};
