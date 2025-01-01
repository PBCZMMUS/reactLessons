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

# Lesson 2

Edit src/App.js

- In App.js, within the header, just below the <a>tag, you can write like

  - <p>Hello</p> 		//ok
  - <p>{ "Dave" }</p>	//ok
  - <p>{ 1 }</p>		//ok
  - <p>{[1,2,3]}</p>	//ok
  - <p>[1,2,3]</p>		//ok
  - <p>{{a: 1, b: 2, c: 3}}</p> // error (refresh the borwser and see the error)

  - const name = "Dave"
  - <p>{ name }</p>		//ok

  - <p>{ true === false }</p>	//Won't show up (boolean)
  - <p>{ 2 === 4 }</p>			//Won't show up (boolean)
  - {/_<p>{ name }</p>_/} //Won't show up (comments) shift+option+a for comments on/off

  - const x = function(){...}
  - <p>{x()}</p>		//ok

  - const nameChange = function(){
    const names = ["Mandalay", "Yangon", "Myanmar"];
    const name = Math.floor(Math.random() \* 3);
    return names[name];
    }
  - And call the nameChange() inside the next function block

# Chapter 3

- create src/Header.js
- command+shift+p -> type -> rafce (it will create Header for you) [React Arrow Function Component with Export]
- import to App.js
  - import Header from './Header';
- Remove import Logo
- Remove all header in the return and

  - inject new Header there like <Header />

- Create Content.js
- import to App.js
  - import Content from './Content';
  - inject new Content there like <Content />

- Create Footer.js
- import to App.js
  - import Footer from './Footer';
  - inject new Footer there like <Footer />

- after installed 'React Developer Tools' in VS Code
  - right click on the opened browser and click inspect
  - choose 'Components' and see there

# Chapter 4

- go to styled-components.com and your choice to use it
- OR go inline style using two curly braces and camelCase, see it in the Header
- Or use internal style, see it in the Header

- We are NOT using inline or internal style, so
  - delete App.css and logo.svg


### ============================

- npm uninstall -g create-react-app
- npx clear-npx-cache
- npx create-react-app my-app
  (if some problem persists, run: npm install web-vitals, and start again)

If that doesn't help, then try out Vite. Its almost a 1-to-1 replacement for CRA. It will get you started hopefully.

- npm create vite@latest my_project -- --template react-ts
  - cd my_project -> npm install -> npm run dev

### Note: Use npx create-react-app

- if:
  - You’re a beginner looking for a straightforward React setup.
  - You don’t need advanced configurations or modern tooling.

Note: Use npm create vite

- if:
  - You want faster builds and development speed.
  - You need flexibility and support for modern tools.
  - You’re exploring frameworks other than React.
