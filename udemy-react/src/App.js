import Header from "./components/header";
import Categories from "./components/Categories";
import Image from "./components/Image";
import Recommends from "./components/Recommends";
import Populer from "./components/popular";
import Topics from "./components/Topics";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <Image></Image>
            <Recommends></Recommends>
            <Topics></Topics>
            <Populer></Populer>
            <Footer></Footer>
        </div>
    )
}
export default App;