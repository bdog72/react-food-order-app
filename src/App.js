//
//

import React, { Fragment } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
// import React, { useState } from 'react';

const App = () => {
  // const [] = useState(false);

  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;

// import { useState } from 'react';

// import Header from './components/Layout/Header';
// import Meals from './components/Meals/Meals';
// import Cart from './components/Cart/Cart';
// import CartProvider from './store/CartProvider';

// function App() {
//   const [cartIsShown, setCartIsShown] = useState(false);

//   const showCartHandler = () => {
//     setCartIsShown(true);
//   };

//   const hideCartHandler = () => {
//     setCartIsShown(false);
//   };

//   return (
//     <CartProvider>
//       {cartIsShown && <Cart onClose={hideCartHandler} />}
//       <Header onShowCart={showCartHandler} />
//       <main>
//         <Meals />
//       </main>
//     </CartProvider>
//   );
// }

// export default App;
