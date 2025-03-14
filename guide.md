# Lesson 01 Start Here

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

# Lesson 02 App & JSX

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

# Lesson 03 Components

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

# Lesson 04 CSS Styles

- go to styled-components.com and your choice to use it
- OR go inline style using two curly braces and camelCase, see it in the Header
- Or use internal style, see it in the Header

- We are NOT using inline or internal style, so
  - Delete App.css and logo.svg
  - Update index.css with our own style, and make sure in include the following in the index.js
    - import './index.css';

# Lesson 05 Click Events 
- Update the Content.js with click events
  -  <p onDoubleClick={handleClick}>Hello {nameChange()}!</p>
  -  <button onClick={handleClick}>Click It</button>
  -  <button onClick={() => handleClick2('Rangoon')}>Click It</button>
  -  <button onClick={(e) => handleClick3(e)}>Click It</button>
  -  <p style={{color: "blue", fontWeight: "bold"}}>{message}</p>

# Lesson 06 useState Hook
- Update the Content.js with useState
1.	“Change Name” Button:
	•	Displays a new name randomly chosen from the array (Mandalay, Yangon, Myanmar).
2.	Click Count Button:
	•	Increments the count every time you click.
	•	Displays the total number of clicks on the button itself.

# Lesson 07 Lists & Keys 
- remove all click events from previous lesson 6
- remove setCount useState as well
- change setName useState with an array
    - look at the Conponents -> Content -> hooks/State
- go to npmjs.com -> React Icon
Step 1: Install
    - npm install react-icons --save
    - OR
    - npm install react-icons -D //-D is same as --save

Step 2: Name Import
    - import { FaTrashAlt } from 'react-icons/fa'; // Font Awesome icons
    - import { MdHome } from 'react-icons/md'; // Material Design icons
    - import { AiFillHeart } from 'react-icons/ai'; // Ant Design icons

Step 3: Using Other Icon Packs:
The react-icons package provides access to multiple icon libraries. The prefix before each icon (e.g., Fa, Md, Ai) determines the library:
	•	fa: Font Awesome
	•	md: Material Design
	•	ai: Ant Design
	•	io: Ionicons
	•	gi: Game Icons
	•	wi: Weather Icons
	•	fi: Feather Icons
	•	and many more.
Refer to the react-icons documentation for a full list of supported libraries.

    - change button with FaTrashAlt 
    - add more css for this and run the app and see it

    - add localStorage
    - add a message if the list is empty just before the <ul>

# Lesson 08 Props & Drop Drilling

# Lesson 09 Controlled Form Inputs
# Lesson 10 Project Challenge
# Lesson 11 useEffect Hook
# Lesson 12 JSON Server

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
