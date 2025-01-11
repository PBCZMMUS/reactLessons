# Lesson 01 Start Here (review it if needed)

# Lesson 02 App & JSX (review it if needed)

# Lesson 03 Components (review it if needed)

# Lesson 04 CSS Styles (review it if needed)

# Lesson 05 Click Events (review it if needed)

# Lesson 06 useState Hook (review it if needed)

# Lesson 07 Lists & Keys (review it if needed)

# Lesson 08 Props & Drop Drilling
    - Do NOT forget to install react-icons [npm install react-icons --save]
    -   at the index.css, update main justify-content: flex-start;
    -   at the App.js, update the <Header title="Groceries"/>

    -   Header.js and App.js with props
        -   const Header = () => to //-with-// const Header = (props) => 
        -   <h1>Groceries List</h1> //-with-// <h1>{props.title}</h1>

        -   OR by destructuring 
        -   const Header = ({ title }) => 
        -   <h1>{title}</h1>

        -   at the App.js, update like <Header title="Groceries"/> //-with-// <Header title="Groceries List"/>

        -   Update with default props like in Header.js
            -   const Header = ({ title = "Groceries List"}) => 
        -   Remove title="Groceries List" from App.js
            -   <Header />
        -   the default will show up there

    -   Content.js and App.js with props
        -   move items, setItems and two of handle functions from Content.js to App.js
        -   update <Content items={items} setItems={setItems} handleCheck={handleCheck} handleDelete={handleDelete}/> in App.js return
        -   add destructure in the Content.js
        -   import useState in App.js - import React, {useState} from "react";
        -   remove useState from Content.js - import { useState } from "react";

    -   Footer.js and App.js with props
        -   update <Footer length={items.length} /> to App.js
        -   add to Footer.js 
            -   const Footer = ({ length }) => 
            -   <p>{ length } List {length === 1 || length === 0 ? "Item" : "Items"}</p>

    -   Create ItemList.js to work with Content.js (props drilling: App -> Content -> ItemList)
        -   type rafce for boiler plate (because of ES7-React/Redux ext in VS)
        -   add props from the parent Content.js
        -   cut and paste the entire ul to ItemList.js
        -   import the ItemList to Content.js
        -   add props into the Content.js like
            -   <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
        -   move import trash icon to ItemList.js

    -   Again create LineItem.js
        -   type rafce for boiler plate
        -   move the import Font Awesome Trash Icon from the parent to child LineItem.js
            -   import { FaTrashAlt } from "react-icons/fa";
        -   cut all li items from parent and paste into child LineItem.js
        -   add all props components to the child
            -   { item, handleCheck, handleDelete } //drop s from items because in key={item.id}
        -   add components to the parent ItemList.js
            -   <LineItem key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete} />
