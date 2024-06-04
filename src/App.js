  import './App.css';
  import Home from './screens/Home';
  import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom'
  import { Login } from './screens/Login';
  import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';
  import { Signup } from './screens/Signup';
  import CartElement  from './components/CartElement';
  import { Provider } from 'react-redux';
  import store from './redux/Store';
  import { About } from './components/About';

  function App() {
    return (
      // Provide Redux store to the entire app
      <Provider store={store}>
        <Router>
            {/* Set up React Router for navigation */}
          <div>
            {/* Define routes for different components */}
            <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/login' element={<Login/>}></Route>
              <Route exact path='/createuser' element={<Signup/>}></Route>
              <Route exact path='/cartelement' element={<CartElement/>}></Route>
              <Route exact path='/about' element={<About/>}></Route>
            </Routes>
          </div>
        </Router>
      </Provider>
        
    );
  }

  export default App;
