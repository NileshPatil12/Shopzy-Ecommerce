import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex ">

      <div className="w-1/2">
      <div className="grid  xs:gridcols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>
      </div>

      <div className="w-1/2 h-1/2 p-2 mx-auto my-10 space-y-10 space-x-5">

        <div className="flex flex-col  gap-4 items-center  w-auto h-auto justify-center ">
          <div className="font-bold align">Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col justify-between gap-4 items-center w-full m-4">
          <p>Total Amount: <span className="text-green-600 font-semibold">${totalAmount}</span> </p>
          <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex justify-center items-center">
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
