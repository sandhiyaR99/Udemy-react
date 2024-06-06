import one from "../assets/simg.jpg"
function Image(){
    return(
        <>
        <div class="image">
            <img src={one}></img>
            <div class="image__offer">
                <h3>Get ahead, stay ahead.</h3>
                <p>Courses as low as ₹449 ends May 10.</p>
            </div>
        </div>
        </>
    )
}
export default Image