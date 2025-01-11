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
    -   add useEffect at App.js
        -   import React, { useState, useEffect } from "react";
        -   useEffect(() => {
                console.log('load time')
                localStorage.setItem("shoppinglist", JSON.stringify(items));
            }, [items]);
        -   remove the setAndSaveItems() and
        -   change addItem and handles the setAndSaveItems with setItems
    