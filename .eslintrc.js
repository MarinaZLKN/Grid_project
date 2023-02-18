module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    "extends": [
        "prettier",
    ],
    "rules": {
        "jsx-quotes": [
            1,
            "prefer-double"
        ]
    },
    "plugins": [
        "prettier",
        "import",
        "html",
    ]
};