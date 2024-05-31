import React from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch hook
import { addToCart } from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';
 const Cart = (props) => {
  const dispatch = useDispatch(); // Initialize dispatch

 

  let foodItems = props.foodItem;
  // Check if options is defined and not null before using Object.keys()

  const handleCart = () => {
    // Create the item object to be added to the cart
    const item = {
      name: foodItems.name,
      img: foodItems.img,
      description:foodItems.description,
      CategoryName:foodItems.CategoryName
    };

    // Dispatch the action to add the item to the cart
    dispatch(addToCart(item));
    
  };
  return (
    <div className='d-flex '>
      <div className="">
        <div className="card bg-dark text-white" style={{ width: "18rem", maxHeight: "360px" }}>
          <img src={foodItems.img} className="card-img-top" alt="..." style={{ height: "150px", objectFit: "fill" }} />
          <div className="card-body">
            <h5 className="card-title ">{foodItems.name}</h5>
            <div className="container w-100">
              <hr />

              {localStorage.getItem("authToken")?
              
              <div className='d-flex justify-content-center'><button className='btn btn-success ms-2 justify-content-center' onClick={handleCart}>
                <Link className='text-white text-decoration-none' to='/cartelement'>BOOK MARK</Link>
                </button></div>
              
              :''}
              


            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cart;