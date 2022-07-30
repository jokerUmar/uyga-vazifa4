import "./footer.css"

let Footer = () =>{

    return (

        <footer className="">
            <div className="container">

                <div className="footer-left">
                    <div className="logo-about">
                        <img src="./img/logo.png" alt="" />
                        <p>Pojok Baca Probolinggo</p>
                    </div>

                    <div className="network">
                        <img src="./img/nsta.png"     width={"24px"} alt="" />
                        <img src="./img/facebook.png" width={"24px"} alt="" />
                        <img src="./img/youtube.png"  width={"24px"} alt="" />

                    </div>

                </div>

                <div className="footer-contact">
                    <ul>
                        <li><p>Kontak</p></li>
                        <li><a href="">Email</a></li>
                        <li><a href="">Alamat</a></li>
                        <li><a href="">No. Rekening</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <ul>
                        <li><p>Tentang Kami</p></li>
                        <li><a href="">Umum</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <ul>
                        <li><p>Galery</p></li>
                        <li><a href="">Kegiatan 2018</a></li>
                        <li><a href="">Kegiatan 2019</a></li>
                        <li><a href="">Kegiatan 2020</a></li>
                        <li><a href="">Kegiatan 2021</a></li>
                    </ul>
                </div>
            </div>

                
            <div className="footer-bottom">
                <div className="container">
                    <img src="./img/vector.png"></img>
                    <p>Pojok Baca Probolinggo 2022</p>
                </div>
            </div>

            
        </footer>
        
    )

}

export default Footer