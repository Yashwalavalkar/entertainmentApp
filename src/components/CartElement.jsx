//this is an cartelment that can be added in the bookmark page
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartElement = () => {
  //this is an redux bookmak data
  const cartItems = useSelector((state) => state.cartItems);

  //this is an movie data
  let obj = {
    "THE 100": "https://www.youtube.com/embed/aDrsItJ_HU4?si=TG9yOwf6Bn0T6D0l",
    "NINJA TURTLES":
      "https://www.youtube.com/embed/VZZ0PnDZdZk?si=hobJnJM7gDrXhxzA",
    AQUAMAN: "https://www.youtube.com/embed/WDkg3h8PCVU?si=vwy8MAi1Z1KXhgKS",
    "CAPTION MARVEL":
      "https://www.youtube.com/embed/Z1BCujX3pw8?si=wsTepdPvqw2NKeFl",
    "AQUA-MAN": "https://www.youtube.com/embed/nA7-qKCg3B8?si=ZzHQOd0KcZoGKkCh",
    "BLACK-MAN":
      "https://www.youtube.com/embed/BV-WEb2oxLk?si=uunma0BM_xxxqL-f",
    JOKER: "https://www.youtube.com/embed/zAGVQLHvwOY?si=zB4kfZ5iq3nSE1cG",
    "FANTACY FOOTBALL":
      "https://www.youtube.com/embed/YBYL63SKwUA?si=3Igcm5CDyUNMieMf",
    TURBO: "https://www.youtube.com/embed/gH1kstAfb5g?si=GItWPYcpw1kbLjQV",
    CARS: "https://www.youtube.com/embed/W_H7_tDHFE8?si=V0-JFFLOGZrQZanZ",
    "DOG WAY HOME":
      "https://www.youtube.com/embed/1pKdCHvH310?si=I8LdzxQlZXOxzRUT",
    MONSTER: "https://www.youtube.com/embed/QxrQ6BaijAY?si=LxaEWlevj7MpEK1P",
    "ARROW CREW":
      "https://www.youtube.com/embed/XaV0CGuRa3Q?si=uYYppu0MQqp4xx4M",
    "DARE DEVIL":
      "https://www.youtube.com/embed/jAy6NJ_D5vU?si=oGDjXmqweU6rMlCU",
    "SPIDER HOME COMING":
      "https://www.youtube.com/embed/xuaChFO2Q0Y?si=cCAdyLyWoQskOrqc",
  };

  let start = {
    "THE 100": "1700",
    "NINJA TURTLES": "1800",
    AQUAMAN: "2013",
    "CAPTION MARVEL": "2015",
    "AQUA-MAN": "2016",
    "BLACK-MAN": "2018",
    JOKER: "2018",
    "FANTACY FOOTBALL": "2010",
    TURBO: "2006",
    CARS: "2003",
    "DOG WAY HOME": "2003",
    MONSTER: "2004",
    "ARROW CREW": "2006",
    "DARE DEVIL": "2001",
    "SPIDER HOME COMING": "2019",
  };

  let end = {
    "THE 100": "1710",
    "NINJA TURTLES": "1810",
    AQUAMAN: "2014",
    "CAPTION MARVEL": "2016",
    "AQUA-MAN": "2017",
    "BLACK-MAN": "2020",
    JOKER: "2020",
    "FANTACY FOOTBALL": "2012",
    TURBO: "2007",
    CARS: "2004",
    "DOG WAY HOME": "2005",
    MONSTER: "2005",
    "ARROW CREW": "2007",
    "DARE DEVIL": "2002",
    "SPIDER HOME COMING": "2021",
  };

  let language = {
    lang: "English",
  };
  let status = {
    st: "N/A",
  };
  return (
    <div>
      <div className="bg-dark container mt-3" style={{ height: "100px" }}>
        <div className="row align-items-center h-100">
          <div className="col">
            <div className="btn bg-white text-success mx-1">
              <Link to="/" className="text-decoration-none">
                <b>Home</b>
              </Link>
            </div>
          </div>
          <div className="col text-end">
            <h1 className="mb-0" style={{ color: "cyan" }}>
              BOOK MARKS
            </h1>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        {cartItems && cartItems.length > 0 ? (
          <div className="row">
            {cartItems.map((item, index) => (
              <div key={index} className="col-12 mb-3">
                <div
                  className="card bg-dark text-white p-2"
                  style={{ height: "auto" }}
                >
                  <div className="row g-0">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                      <iframe
                        src={obj[item.name]}
                        width="100%"
                        height="200"
                        title="video to display"
                        allowFullScreen
                        autoPlay
                        
                        style={{ maxWidth: "600px" }}
                      ></iframe>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h6 className="card-title">{item.CategoryName}</h6>
                        <div className="d-flex">
                          <div className="me-5">
                            <h6>Language</h6>
                            {language.lang}
                          </div>
                          <div className="me-5">
                            <h6>Year</h6>
                            {start[item.name]}
                          </div>
                          <div className="me-5">
                            <h6>status</h6>
                            {status.st}
                          </div>
                        </div>
                        <hr />
                        <p>{item.description}</p>
                      </div>
                      <div className="row">
                        <div className="co-sm-6">
                          <div className="btn bg-white text-success mx-1">
                            {start[item.name]}
                          </div>

                          <div className="btn bg-white text-success mx-1">
                            {end[item.name]}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
    </div>
  );
};

export default CartElement;
