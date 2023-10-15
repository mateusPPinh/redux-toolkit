import { Header } from "../../components/Header";

import { useSelector } from "react-redux";

export default function Cart () {
  const cartTotal = useSelector((state) => state.products.cartTotal)
  const cartItems = useSelector((state) => state.products.cartItems)
  const finalPrice = useSelector((state) => state.products.finalPrice)

  return (
    <>
      <Header itemsAdd={cartTotal}/>

      <div className="mt-5 p-10">
        <h1 className="mb-4 font-bold text-2xl text-slate-500">Você tem {cartTotal} itens no seu carrinho</h1>

        {cartItems.map(i => (
          <div className="mt-10">
          <div className="w-full place-content-center border-2 border-gray-400 grid grid-cols-3 gap-3 p-10">
            <div className="flex flex-col">
              <strong>Nome do Produto</strong>
              <span>* {i.product_name}</span>
            </div>

            <div className="flex flex-col">
              <strong>Valor dos produto</strong>
              <span>R$ {i.product_price}</span>
            </div>

            <div className="flex flex-col">
              <strong>Quantidade de itens:</strong>
              <span>* 2</span>
            </div>
          </div>
          
          {/* total div */}
        </div>
        ))}
        <div className="mt-4">
          <h1 className="text-3xl">O total da sua compra foi: R$ {finalPrice}</h1>
        </div>
      </div>
    </>
  )
}