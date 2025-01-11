# Lesson 01 (review it if needed)

# Lesson 02 (review it if needed)

# Lesson 03 (review it if needed)

# Lesson 04 (review it if needed)

# Lesson 05 (review it if needed)

# Lesson 06 (review it if needed)

# Lesson 07 
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