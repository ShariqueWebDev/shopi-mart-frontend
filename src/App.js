import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Category from "./components/Category/Category"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import Newsletter from "./components/Footer/Newsletter/Newsletter"
import AppContext from "./utils/context"
import About from "./components/About/About"
import BannerPara from './components/ReadFiles/BannerPara'
import SuccessPage from "./components/SuccessPage/SuccessPage"
import Alert from "./components/Footer/Newsletter/Alert/Alert"

function App() {
    return (
        <AppContext>
            <Header />
            {/* <BannerPara/> */}
            <Alert/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/category/:id" element={<Category />} />
                <Route exact path="/product/:id" element={<SingleProduct />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/read" element={<BannerPara />} />
                <Route exact path="/success" element={<SuccessPage />} />
            </Routes>
            <Newsletter />
            <Footer />
        </AppContext>
    )
}

export default App;
