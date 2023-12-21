module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "ignorePatterns": ["node_modules", "dist", "build"],
    "extends": ["airbnb", "airbnb/hooks", "plugin:react/jsx-runtime", "prettier"],
    "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
      },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "plugins": ["react", "jsx-a11y", "import", "react-hooks", "prettier"],
    "rules": {
        "no-plusplus": "off"
    },
    "settings": {
        "version": "detect",
        "import/resolver": {
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"],
            "moduleDirectory": ["node_modules", "src/"]
          }
        }
      }
}
