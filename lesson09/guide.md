# Lesson 01 Start Here (review it if needed)

# Lesson 02 App & JSX (review it if needed)

# Lesson 03 Components (review it if needed)

# Lesson 04 CSS Styles (review it if needed)

# Lesson 05 Click Events (review it if needed)

# Lesson 06 useState Hook (review it if needed)

# Lesson 07 Lists & Keys (review it if needed)

# Lesson 08 Props & Drop Drilling (review it if needed)

# Lesson 09 Control Component
    -   if react-icons are in devdependencies then remove it and keep it in regular dependencies
        - npm i react-icons --save-prod (//prod is production it removes it and put it in the regular)
    -   remove the key={item.id} from <li className="item" key={item.id}> because it is already added to ItemList.js as component

    -   when refresh, it is reloading the default, it should reload from localstorage
        - create AddItem.js and get boiler plate
        - add import for FaPlus - import { FaPlus } from 'react-icons/fa';
            <form className='addForm'>
                <label htmlFor="addItem">Add Item</label>
                <input autoFocus id="addItem" type="text" placeholder='Add Item' required/>
                <button type='submit' aria-label='Add Item'><FaPlus /></button>
            </form>
        - import it in the App.js - import AddItem from "./AddItem";
        - add AddItem component at the return just below the Header in App.js
            - made some css styles there for this add form
        - setup useState for addForm at App.js
        - add handleSubmit(e) to handle the new item
        - and add props at the return too
        - add destructure to the AddItem.js
        - add control components in the input
            - value={newItem} onChange={(e) => setNewItem(e.target.value) }
            - and add onSubmit={handleSubmit} to the <form> as well
        - setup addItem() just below the useState for addForm like the other handles
        - in order to make clear, setup for the setItems and call it 
        - remove all default items from the useState and add localStorage getItem there

    -   Create searchItem.js and create form there
        -   then add useState at App.js
        -   import the SearchItem too
        -   add components for the SearchItem there
        -   add css for SearchItem to index.css
        -   add destructure to SearchItem.js
        -   update Content component in App.js for the high-level Search
        -   add hook to the AddItem.js
            -   import { useRef } from "react"; and add some other related to this
