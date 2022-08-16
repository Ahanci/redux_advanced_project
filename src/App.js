import { useEffect, Fragment } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import Notification from './components/UI/Notification';
import { sendCartData } from './components/store/cart-slice';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  //   useEffect(()=>{ // WITH TIS STRUCTURE WE USE UPDATED DATA FROM REDUX STORE AND KEEP OUR DATABASE UPDATED
  // fetch('https://redux-cart-75518-default-rtdb.firebaseio.com/cart.json', {method: 'PUT', body: JSON.stringify(cart)}) // WITH THIS METHOD DATA OVERWRITE TO OLD DATA, BUT IF WE USED 'POST' METHOD OUR DATA WOULD ADDED TO BOTTOM OF OLD DATA
  //   }, [cart]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]); 

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
