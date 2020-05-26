module.exports = {
    "root": true,
    "extends": "standard",
    "rules": {
        "semi": ["error", "always"],
        "indent": ["error", 4],
        "space-before-function-paren": ["error", "never"],
        "no-trailing-spaces": ["error", { "skipBlankLines": true }],
        "no-multiple-empty-lines": ["error", { "max": 4, "maxEOF": 2 }],
        "spaced-comment": ["off"]
    }
};