import one from "../assets/c1.jpg"
import two from "../assets/c2.jpg"
import three from "../assets/c3.jpg"
import four from "../assets/c4.jpg"
function Products() {
    return (
        <div class="products">
            <div class="products__card">
                <img src={one}></img>
                <h3>Master Python 2024</h3>
                <p>Sandy Col</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>1999 <del>499</del></p>
            </div>
            <div class="products__card">
                <img src={two}></img>
                <h3>Master Python 2024</h3>
                <p>Sandy Col</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>1999 <del>499</del></p>
            </div>
            <div class="products__card">
                <img src={three}></img>
                <h3>Master Python 2024</h3>
                <p>Sandy Col</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>1999 <del>499</del></p>
            </div>
            <div class="products__card">
                <img src={four}></img>
                <h3>Master Python 2024</h3>
                <p>Sandy Col</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>1999 <del>499</del></p>
            </div>
        </div>
    )
}
export default Products