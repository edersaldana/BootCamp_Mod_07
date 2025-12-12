import { Home, ShoppingCart, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cart-store";
import { useState } from "react";

export const Header = () => {
  const { cart } = useCartStore();
  const [openCart, setOpenCart] = useState<boolean>(false);

  const addOne = useCartStore((state) => state.addOne);
  const removeOne = useCartStore((state) => state.removeOne);
  const removeProduct = useCartStore((state) => state.removeProduct);

  return (
    <div className="relative flex px-4 items-center justify-between h-16 bg-red-500 text-white">
      <Link to={"/"}>
        <Home />
      </Link>

      <div className="flex items-center gap-4">
        <Link to={"/products"}>Tienda</Link>
        <button
          className="cursor-pointer relative"
          onClick={() => setOpenCart(!openCart)}
        >
          <ShoppingCart />
          <label className="bg-blue-600 text-xs rounded-full w-4 h-4 absolute -top-2 -right-2">
            {cart.length}
          </label>
        </button>
      </div>

      {openCart && (
        <div className="absolute right-5 top-14 max-w-[290px] bg-white text-black border border-gray-950/30 h-fit rounded-lg flex flex-col gap-6 p-3">
          {cart.map((product) => (
            <div key={product.id} className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-11 w-12 rounded-lg"
              />
              <h3 className="text-xs">{product.title}</h3>


              <p className="flex text-center text-">Cantidad: {product.quantity}</p>

              <div className="absolute right-10 top-16 w-[80px] h-[20px] rounded-lg bg-gray-300 border border-gray-200 flex items-center justify-between px-2">
                <button
                  onClick={() => addOne(product.id)}
                  className="w-4 h-4 rounded-full border border-gray-100 text-blue-600 flex items-center justify-center text-sm">
                  +
                </button>

                <button
                  onClick={() => removeOne(product.id)}
                  className="w-4 h-4 rounded-full border border-gray-100 text-green-600 flex items-center justify-center text-sm">
                  -
                </button>
              </div>
              
              <button onClick={() => removeProduct(product.id)} className="text-red-500"><Trash size={20} /></button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
