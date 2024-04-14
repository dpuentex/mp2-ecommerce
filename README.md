<!-- 
If you right click the readme in the file list and
click open preview, you can see how this will look. 

you will need this extension from microsoft.
for a proper preview
https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server
-->



# mp2-ecommerce
Collaborators: \
[Mohammad Zuiter](https://github.com/moefingers) \
[Diego Puente](https://github.com/dpuentex) \
[Harrison Pursley](https://github.com/HarrisonPursley)\
[Jeffery Grigsby](https://github.com/JefferyG00) \
A beautiful ecommerce website with basic functionality.

<!-- design -->
## Prototypes
![Prototype Home](./_design/Home.png)

## Dev Notes
- config folder containing sequelize config has not been inccluded in git ignore purposely for now.
## Ultra priority:
- Cart model
- Hosting
- cart controller
- better search api
- read binary image from db

### [Models](https://docs.google.com/spreadsheets/d/1QfpH7j5gNQoXloyshFjNvAq97LzJzVPM_XfwJFtSe18/edit#gid=0) for SQL database
- spreadsheet
- migrations
- models


## High priority:
- Jeffery, Diego please on hover I want cart panel to appear, and when clicked, there is navigation to the cart page itself
### All Pages
- nav bar 

### home page

- search component (with submit) 
- hot items component 

### store page
- adding stuff to cart 
- avg rate for each item 
- image for item 

### cart page
- display items in cart

### item page
- ratings 
- avg ratings 
- image collection 



## Low priority: 
- glow in the back following mouse
- implement bcrypt
#### nav bar
- make animation for navbar
- improve favicon.ico
- optional navbar items 

# Changelog / Completed
- added add remove buttons on product page to add and remove items from cart
- added in stock / out of stock on product cards
- added the most incredible seeder
- added dynamic category list dropdown from browse depending on store
- nav bar changes depending on status of application
- added count of items in cart
- improved home button functionality
- added best seller array
- added conditional homepage where if a store is selected you will see some more detailed info about it otherwise you'll see options for the stores
- added images column to stores in model and migration and some null placeholders in seeders
- added more data to storeData array to keep track of active store
- dynamic rendering of store selection on homepage
- updated title
- made favicon and placed in public
- Added primary categories to store data
- moved CartContext to ContextList and added StoreContext
- started changelog 4/14/2024