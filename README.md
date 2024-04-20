<!-- 
If you right click the readme in the file list and
click open preview, you can see how this will look. 

you will need this extension from microsoft.
for a proper preview
https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server
-->



# mp2-ecommerce

[Visit Deployment](https://shepherd.d1d9yratg7bxyv.amplifyapp.com/)

Collaborators: \
[Mohammad Zuiter](https://github.com/moefingers) \
[Diego Puente](https://github.com/dpuentex) \
[Harrison Pursley](https://github.com/HarrisonPursley)\
[Jeffery Grigsby](https://github.com/JefferyG00) \
A beautiful ecommerce website with basic functionality.

Involuntary Collaborator: \
[David Tang](https://github.com/dvtng/) for providing  [(jss library 2011 for retrieving and setting css stylesheet rules)](https://github.com/dvtng/jss)


## Todo:
- best seller page
- - custom card theme for each store?
- cart page
- - ability to remove all items from cart
- - all item subtotal
- - show source store name in cart
- home page
- - preview best sellers?
- cart panel
- - ability to remove items from cart in panel?
- admin page
- checkbox behavior options

### [Model Sheets](https://docs.google.com/spreadsheets/d/1QfpH7j5gNQoXloyshFjNvAq97LzJzVPM_XfwJFtSe18/edit#gid=0) for SQL database
- spreadsheet
- migrations
- models


### stretch
- custom page for each item
- avg rate for each item 
- image for item 


## Low priority:
- remove unused imports
- Clicking quickly between pick a store and then a store produces the about us page for main site..
- add style column to store and render different style from database depending on store 
- glow in the back following mouse
- implement bcrypt
- blur won't apply to dropdowns 
- improve favicon.ico
- optimize unused columns in models and create proper associations.. haven't really found a need though

# active 
- render style from store model per product

# Changelog / Completed
- about any store lives on shopping page for that store
- about us now lives on main page
- removed about us 
- partial formatting of bestseller page
- added style column to store model as json mode/migration/seeder
- renamed images column to image in product model/migration/seeder
- updated readme
- removed test buttons
- updated seeder
- changed store model and product model in backend
- renamed CategoryContext to DetectedCategoryContext and added logic to detect categories based on what items have instead of retrieving from storedata based on store table
- added logic to require one of each category 
- fixed filters not updating results AND the soft loop that caused
- fixed filters not updating results
- refined search / filter functionality 
- removed fetch product function from product page in favor of fetching once on page load
- reformatted dropdowns to no longer use states but rather css hover selectors
- updated all files to use CartItemDataContext instead of CartContext and addressed all the horrible consequences of that. Within this update, the cart and cart panel were updated to no longer make fetches on each render and instead base their data on the context which was set by a single initial fetch of products. Not dissimilar at all to fetching the store
- updated backend to include /products/all route and updated front end to fetch on that path
- changed width to fit content of aboutusfull.css children to fix odd mouse-over behavior
- updated about us in seeder for store 3 to be different than store 2
- separated store selection logic out into previously mentioned other function stored in context
- added fetch product and select store context
- added little transitions on mouse overs on about us page for about us full
- redid sizing on about us page for an individual store
- stopped fetch on detailedpage, aboutus in favor of selectstore function retreived from context
- added random loading message on home page fetch with cool pulsing effect
- added separate function for selecting stores to avoid fetch on each navigation
- updated and fromatted contexts in app.jsx as well as updated getStores function to be stored in FetchStoresContext all over the application
- jeffery got cart page in a nice column for future iterations
- going with previous changes on filters... diego organized them and did their css
- same styles on cart as well
- added many glow transitions to filter dropdown in checkbox.css and browsepage.css to applied to product page
- added blur to dropdowns and navbar and updated opacity
- reworked DetailedPage.jsx to use new storeData format
- updated useEffect to reduce spamming in Home.jsx and DetailedPage.jsx and AboutUs.jsx
- reworked ListStoresPage to also use fetchStores function from context
- reworked navigation bar onclicks to use fetchStores function retreived from context FetchStoresContext
- begun implementing 
- redid functionality on storedata state now it's [storeid, storetable, storeindex]
- fixed softloop when rapidly selecting different stores
- begun work on best seller functionality
- variable rename in fetchProducts function in product page for clarity 
- updated exposed password for db and gitignore
- deployed frontend
- deployed backend
- deployed sql db
- added on click events for buttons in about-us for categories
- added proper destructuring for cartcontext in cart.jsx
- repaired get /products/productbyarray/:array in product controller.. arraywithnorepeats was having a problem.
- repaired problem where selecting all categories would not show any filters
- added about us for main page seperate from about us for each page
- renamed browse to all categories and implemented option to display all categories
- navigate to select store if none is selected
- temporary rename of checkbox component
- added dynamic generation of filter boxes on product page
- refactored fetch store into function in a usecontext
- added redirect if manual navigation to about-us page without selecting store first
- fixed error to retreive cart items
- changed categories in seed
- category context
- added functionality and formatting to category
- added item totals in cart
- formatting on add remove buttons on product cards
- added add remove buttons on product cards to add and remove items from cart
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