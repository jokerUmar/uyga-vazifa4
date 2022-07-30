import './header.css'
function Header() {
return (

<header>
    <div className="container">
       
        <a href="" className="logo-link">
            <img src="./img/logo.png" alt="" width={"60px"} className="logo-img" />
        </a>

        <nav>
            <ul className="list">
                <li><a className="list__item" href="#">Beranda</a></li>
                <li><a className="list__item" href="#">Koleksi</a></li>
                <li><a className="list__item" href="#">Syarat dan Ketentuan</a></li>
                <li><a className="list__item" href="#">Kontak</a></li>
            </ul>
        </nav>

    <button className="header__btn">Masuk</button>

    </div>
</header>

)
}

export default Header