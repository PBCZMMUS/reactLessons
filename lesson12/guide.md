# Lesson 01 Start Here (review it if needed)

# Lesson 02 App & JSX (review it if needed)

# Lesson 03 Components (review it if needed)

# Lesson 04 CSS Styles (review it if needed)

# Lesson 05 Click Events (review it if needed)

# Lesson 06 useState Hook (review it if needed)

# Lesson 07 Lists & Keys (review it if needed)

# Lesson 08 Props & Drop Drilling (review it if needed)

# Lesson 09 Control Component (review it if needed)

# Lesson 10 Add Color Name

# Lesson 11 useEffect

# Lesson 12 
    -   Create data/db.json 
    -   setup json server - npx json-server -p 3500 -w data/db.json
    -   after install, copy the Endpoints: like http://localhost:3500/items
    -   setup it in the App.js - const API_URL = 'http://localhost:3500/items';

    -   remove JSON.parse(localStorage.getItem ..) and leave only [] there
    -   leave useEffect(()) as below
        -   useEffect(() => {
            }, []);
        -   update this with async await function
        -   wrap the <Content> with <main> and make fragment tag without the name 'main'

    -   if @babel warning come up on npm start, then uninstall it the problematic one
        -   npm uninstall @babel/plugin-proposal-private-property-in-object
