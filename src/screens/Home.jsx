//here the first all the data is imported and then export to the app.js page
import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "../components/Cart";
 const Home = () => {

  const [foodCategory,setFoodCategory]=useState([]);
  const [foodItem,setFoodItem]=useState([]);

  const [search,setsearch]=useState('');
  
  const loadData= async ()=>{
    let response = await fetch("http://localhost:8080/api/fooddata",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      }
    });
    response=await response.json();
    setFoodItem(response[0])
    setFoodCategory(response[1])
  }

  useEffect(()=>{
    loadData()
  },[])

  return (
    <div style={{backgroundColor: "rgb(400, 245, 350)"}}>
      <div className="sticky-top"><Navbar/> </div>
    <div id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{objectFit:"contain !important"}}> 
          <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e)=>{
                  setsearch(e.target.value);
                }}
              />
              
            </div>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://th.bing.com/th/id/R.a8f227c108c7ecfdd51ef599b8804b08?rik=X4P9mdXNFOi6%2fA&riu=http%3a%2f%2fwww.impawards.com%2f2021%2fposters%2fgodzilla_vs_kong_ver19_xxlg.jpg&ehk=kyJ4a0zaaSYZ5WCbe%2fAJlJEYyBZ512dGMq5shLqkruw%3d&risl=&pid=ImgRaw&r=0"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://th.bing.com/th/id/R.64f97917cd7617e8c0603f722c6bf47b?rik=7GQe2M9Sn4NA8A&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f8%2f8%2f0%2f184522.jpg&ehk=frZ14DgQGbYkdgxujMm2%2bBscNyBusTtdfHYmxKXvgaw%3d&risl=&pid=ImgRaw&r=0"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://th.bing.com/th/id/R.e4ed7eed0f21b16b913323915d9d388d?rik=JyQDBMVr5Jj%2fWg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f0%2fb%2f6%2f1495701-beautiful-4k-movie-wallpapers-2700x1519-for-windows.jpg&ehk=PidArJjxVKp6flt3vxqshQnFpSIqOcQxAcM5gRT8lnA%3d&risl=&pid=ImgRaw&r=0"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://wallpaperaccess.com/full/37972.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>


          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>





    <div className="container">
    {
  foodCategory.length !== 0
    ? foodCategory.map((data) => (
        <div key={data._id} className="row mb-3">
          <div>
            <div className="fs-3 m-3">{data.CategoryName}</div>
            <hr />
            <div className="row">
            {foodItem.length !== 0 ? (
              foodItem
                .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))) 
                .map((filteredItem) => (
                  
                  <div key={filteredItem._id} className="col-12 col-md-6 col-lg-3 m-3">
                    {console.log(filteredItem)}
                    <Cart 
                    foodItem={filteredItem}
                    options={filteredItem.options[0]}
                    />
                  </div>
                ))
            ) : (
              <div>no such data found</div>
            )}
            </div>
            
          </div>
        </div>
      ))
    : ""
}


    </div>
    <div> <Footer/></div>
    </div>
  );
};
export default Home