function Header(){
    return(
        <header>
        <div class="title">
            <h1>Udemy</h1>
        </div>

        <div class="search">
            <i class="fa-solid fa-magnifying-glass" style={{color: "#0a0a0a:"}}></i>
            <input placeholder="search anything here..."></input>
        </div>

        <div class="icon">
            <div class="icon__course">Courses
                <p>no coursed seleted</p>
            </div>
            <div class="icon__learning">My Learnings
                <p>no coursed purchased</p>
            </div>
            <i class="fa-solid fa-cart-shopping" style={{color: "#161717"}}></i>
            <i class="fa-solid fa-bell" style={{color: "#121212"}}></i>
            <i class="fa-solid fa-user"style={{color: "#121212"}}></i>
        </div>
    </header>
    )
}

export default Header;