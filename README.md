# Development

### Link to Deployed Website
https://feralferret224.github.io/final-development/

### Goal and Value of the Application
This is a simple application used to buy clothes from the retailer Fashion Haus. Users can sort, filter, and add/remove items from their cart. They can filter by style and color, and they can sort by rating and price.

### Usability Principles Considered
To account for memorability, I opted to use labels in lieu of symbols in many places. Additionally, I used a layout that is common on many marketplace websites, which feature the filters and sort options on the lefthand side of the page. With regard to error prevention, I disabled the remove button when it should be impossible to remove an item from the cart to prevent a negative balance.

### Organization of Components
The App component is the primary component. It contains the sort, filter, and cart functionality. The App component also contains the StoreGrid component, which organizes the item cards into a grid. Each item card is a StoreItem component. Additionally, the items in the cart are CartItem components.

### How Data is Passed Down Through Components
The App component contains the add and remove functions, as well as the item and cart data. The add and remove functions and the item and cart data are passed to the StoreGrid, which passes them to the StoreItems. The StoreItem uses the item data to populate the item card, and uses the functions and cart data to give the item card's add and remove buttons correct functionality based on the amount of the item in the cart. The App component also passes the cart information to the CartItem components, and the CartItem components use the data to populate correctly.

### How the User Triggers State Changes
The user triggers state changes using state variables, useEffect hooks, and the passing of props to components. The cart is controlled by a state variable, and when there is an item added to the cart, the CartItems are rerendered. Additionally, the card of the item that's be added to the cart is rerendered depending on the cart contents as well. The metric the user is sorting by is also a state variable, and when it's changed, it rerenders the order of the item cards. The displayed items are also kept in a state variable, which is updated by the filters. 
