import "../assets/css/cart.css"
// updated to be .. instead of .
let items = [
{id: 1, name:"Item A", quantity: 1},
{id: 2, name:"Item B", quantity: 2},
{id: 3, name:"Item C", quantity: 1},
{id: 4, name:"Item D", quantity: 3},

]






// made export within this line below
export default function Cart() {
   return(
      <div className="cart-item-div">
         <img className="item-img" src="" alt="" />
         <h3>{items[0].name}</h3>
         <p>{items[0].id}</p>
         <p>`You have ${items[0].quantity}`</p>
      </div>

   ) 
}