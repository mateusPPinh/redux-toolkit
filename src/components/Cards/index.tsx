import { useDispatch, useSelector } from "react-redux";
import {increase, decrease} from '../../store/features/loadProduct'

interface ICardsProps {
  product_image?: string;
  product_name?: string;
  product_price?: string;
  id?: number;
}

export function Cards(props: ICardsProps) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.cartItems);

  const isProductInCart = cartItems.some(item => item.id === props.id);

  const handleButtonClick = () => {
    if (isProductInCart) {
      dispatch(decrease({ id: props.id }));
    } else {
      dispatch(increase({ id: props.id }));
    }
  }

  return (
    <div className="w-96 p-8 bg-indigo-100">
      <img 
        className="w-50 rounded-md"
        src={props.product_image}
        alt="Awesome nike shoes" 
      />

      <span className="font-bold">{props.product_name}</span>
      <p>R$: {props.product_price}</p>
      <button 
        className="bg-orange-300 w-full pb-4 rounded-md justify-center align-middle"
        onClick={handleButtonClick}
      >
        {isProductInCart ? 'Remove from your cart' : 'Add to your cart'}
      </button>
    </div>
  )
}

Cards.defaultProps = {
  product_image: 'https://imgnike-a.akamaihd.net/1920x1920/02559351.jpg',
  product_name: 'Nike Air 1980',
  product_price: '345,32',
}