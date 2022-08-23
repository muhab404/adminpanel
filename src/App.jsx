import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ModalContextProvider } from "./context/ModalContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { CartContextProvider } from "./context/CartContext";
import Footer from "./components/footer/Footer";
import ScrollArrow from "./components/scrollArrow/ScrollArrow";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/NotFound";
import { CartProvider } from "react-use-cart";
import KetoAdmin from "./components/admin/keto/Keto";
import VeganAdmin from "./components/admin/vegan/Vegan";
import ChickenAdmin from "./components/admin/chicken/Chicken";
import SnackAdmin from "./components/admin/snack/Snack";
import FruitsAdmin from "./components/admin/fruits/Fruits";
import MeatAdmin from "./components/admin/meat/Meat";
import BakeAdmin from "./components/admin/bakaries/Bakeries";
import VegetablesAdmin from "./components/admin/vegetables/Vegetables";
import HomeAdmin from "./components/admin/home/HomeAdmin";

function App() {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <CartContextProvider>
          <CartProvider>
            <FavoritesProvider>
              {/* <Modal /> */}
              <ScrollArrow />
              <Navbar />
              <Routes>
                <Route path="*" exact={true} element={<NotFound />} />
                <Route
                  path="keto"
                  element={<KetoAdmin />}
                ></Route>
                <Route
                  path="vegan"
                  element={<VeganAdmin />}
                ></Route>
                <Route
                  path="chicken"
                  element={<ChickenAdmin />}
                ></Route>
                <Route
                  path="snack"
                  element={<SnackAdmin />}
                ></Route>
                <Route
                  path="fruits"
                  element={<FruitsAdmin />}
                ></Route>
                <Route
                  path="bake"
                  element={<BakeAdmin />}
                ></Route>
                <Route
                  path="meat"
                  element={<MeatAdmin />}
                ></Route>
                {/* <Route path="/" element={<HomeAdmin />}></Route> */}
                <Route path="/adminpaneltest" element={<HomeAdmin />}></Route>
                <Route
                  path="vegetables"
                  element={<VegetablesAdmin />}
                ></Route>
              </Routes>
              <Footer />
            </FavoritesProvider>
          </CartProvider>
        </CartContextProvider>
      </ModalContextProvider>
    </AuthContextProvider>
  );
}

export default App;
