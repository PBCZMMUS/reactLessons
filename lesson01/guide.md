# Lesson 1

## React အတွက် ကြိုတင်ပြုလုပ်ရန်များ

- install node
- install 'React Developer Tools' extension from on store.chrome.web
- install VS Code

  - node -v (check the node version)

- run in terminal: npx create-react-app lesson01
- install ES7-React/Redux... ext in VS Code
- go to code / settings / settings (find emmet -> emmet: include languages -> javascript javascript)
  eere

- cd my-app / code .
- git init

Remove some of the following codes from src/index.js
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

- reportWebVitals(); - import reportWebVitals from './reportWebVitals';

Remove the following from src:

- App.test.js,
- reportWebVitals.js,
- setupTests.js (not using them)

Added the following to the package.json

- "devDependencies": {
  "@babel/plugin-proposal-private-property-in-object": "^7.21.11"
  }

- run: npm start
- Go to App.js and made some changes and see it
