import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/AppStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./components/CartPage";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      }, {
        path: "/products",
        element: <ProductList />,
      },
    ],
  }
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Header></Header> */}
        <NavBar></NavBar>
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
