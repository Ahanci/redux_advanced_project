import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux/es/exports';

function App() {
  const showCart= useSelector((state)=>state.ui.cartIsVisible);
  const cart=useSelector((state)=> state.cart);
  
  useEffect(()=>{ // WITH TIS STRUCTURE WE USE UPDATED DATA FROM REDUX STORE AND KEEP OUR DATABASE UPDATED
fetch('https://redux-cart-75518-default-rtdb.firebaseio.com/cart.json', {method: 'PUT', body: JSON.stringify(cart)}) // WITH THIS METHOD DATA OVERWRITE TO OLD DATA, BUT IF WE USED 'POST' METHOD OUR DATA WOULD ADDED TO BOTTOM OF OLD DATA
  }, [cart]);

  return (
    <Layout>
     {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
