# Lesson 01 Start Here (review it if needed)

# Lesson 02 App & JSX (review it if needed)

# Lesson 03 Components (review it if needed)

# Lesson 04 CSS Styles (review it if needed)

# Lesson 05 Click Events (review it if needed)

# Lesson 06 useState Hook (review it if needed)

# Lesson 07 Lists & Keys (review it if needed)

# Lesson 08 Props & Drop Drilling (review it if needed)

# Lesson 09 Adding & Searching newItem/s (review it if needed)

# Lesson 10 Add Color Name

    -   just leave three files in basic, App.js, index.css and index.js
    -   App.js
        -   function App() {
                return (
                    <div className="App"></div>
                );
            }
            export default App;

    -   Create components like Square.js and Input.js
    -   Import them into App.js and add the componenets there too
    -   Update the Square.js and Input.js with props
    -   add useState to App.js

    -   if @babel warning come up on npm start, then uninstall it the problematic one
        -   npm uninstall @babel/plugin-proposal-private-property-in-object
    
    -   add one more useState for hexValue
    -   add props to Square and Input 
    -   run npm i colornames -S // -S makes sure not to devdependencies 
    -   add import colorNames to Input.js to translate the e.target
    -   add one more useState for darkText with darkBG
    -   add one more props into Square and Input for color check with ternary operator
        -   add button to the Input
