import { Cards } from "../../components/Cards";
import { Header } from "../../components/Header";

import { useSelector } from "react-redux";

export default function Cart () {
  const cartTotal = useSelector((state) => state.products.cartTotal)
  const cartItems = useSelector((state) => state.products.cartItems)
  
  return (
    <>
      <Header itemsAdd={cartTotal}/>

      <div>
        <h1>Você tem {cartTotal} itens no seu carrinho</h1>

        <div className="grid grid-cols-4 gap-3">
         {cartItems.map(item => (
           <Cards 
            key={item.id} 
            id={item.id}
            product_image={item.product_image}
            product_name={item.product_name}
            product_price={item.product_price}
         />
         ))}
        </div>
      </div>
    </>
  )
}