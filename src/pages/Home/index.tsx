import { Cards } from "../../components/Cards";
import { Header } from "../../components/Header";
import { Container } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/features/loadProduct";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state)
  const cartTotal = useSelector((state) => state.products.cartTotal);
  console.log(cartTotal, 'cart total')

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <Container>
      <Header itemsAdd={cartTotal}/>
     <div className="mt-5 p-10">
      <div className="grid grid-cols-4 gap-3">
        {/* cards here */}
        {state?.products?.items?.map(item => {
          return (
            <Cards 
              key={item.id} 
              id={item.id}
              product_image={item.product_image}
              product_name={item.product_name}
              product_price={item.product_price}
            />
          )
        })}
      </div>
     </div>
    </Container>
  )
}