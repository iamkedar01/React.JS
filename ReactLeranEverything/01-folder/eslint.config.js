import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
// This the file we set some rule to while programming or devloping Project that while help in the Merage the project 

// example : In team two people writeing the code frontend , backend , they need to write the same synatx that will help to merage 
//like writeing the string in the ' ' or " " also we can write in bcaklt ` ` These can cause the error or it become more complex while merageing the program
//Thats why in eslint.config.js file we write the set rule to Every to follow whole writeing the code 