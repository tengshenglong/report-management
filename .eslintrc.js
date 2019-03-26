module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
  //  "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-script-url": "off", // 关闭a标签href无url的告警
        "jsx-a11y/anchor-is-valid": "off", // 关闭jsx a标签无效的告警
        "jsx-a11y/anchor-has-content": "off" ,// 关闭jsx a标签无内容的告警

            "skipLibCheck": true,
            "resolveJsonModule": true,
            "isolatedModules": true,
            "noEmit": true,
            "target": "es5",
            "module": "esnext",
            "strict": false,
            "importHelpers": true,
            "esModuleInterop": true,
            "outDir": "build",
            "lib": [
                "es5",
                "es6",
                "dom",
                "es2015.core",
                "es2015.collection",
                "es2015.generator",
                "es2015.iterable",
                "es2015.promise",
                "es2015.proxy",
                "es2015.reflect",
                "es2015.symbol",
                "es2015.symbol.wellknown",
                "esnext.asynciterable",
                "esnext",
                "dom.iterable",
                "scripthost"
            ],
            "experimentalDecorators": true,
            "sourceMap": true,
            "allowJs": true,
            "jsx": "preserve",
            "allowSyntheticDefaultImports": true,
            "moduleResolution": "node",
            "rootDir": "src",
            "forceConsistentCasingInFileNames": true,
            "noImplicitReturns": true,
            "noImplicitThis": true,
            "noImplicitAny": false,
            "strictNullChecks": true,
            "suppressImplicitAnyIndexErrors": true,
            "noUnusedLocals": true

    }
};