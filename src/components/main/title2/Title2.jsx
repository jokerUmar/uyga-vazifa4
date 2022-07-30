import './title2.css'

let Title2 = () =>{

return(

<div className="container">

    <h1 className='title2__title'>
        Kenapa Kita <span className='span1'>Harus</span> Membaca Buku?
    </h1>

    <div className='title2-box'>

        <div className="title2-card">
            <p>“Aku rela dipenjara asalkan <span className='title2-span1'>bersama buku</span>, karena dengan buku <span
                    className='title2-span1'>aku bebas</span> ”</p>
            <div className='title2-card-box'>
                <img src="./img/mohammad.png" width={"80px"} height={"80px"} alt="" />
                <span className='data'>
                    <p>Mohammad Hatta</p>
                    <i>Wakil Presiden Indonesia Pertama</i>
                </span>
            </div>
        </div>

        <div className="title2-card">
            <p>“Cuma perlu <span className='title2-span1'>satu buku</span> untuk jatuh cinta pada membaca, Cari Buku
                itu! <span className='title2-span1'> Mari jatuh cinta!</span></p>
            <div className='title2-card-box'>
                <img src="./img/najva.png" width={"80px"} height={"80px"} alt="" />
                <span className='data'>
                    <p>Najwa Shihab</p>
                    <i>Duta Membaca</i>
                </span>
            </div>
        </div>

    </div>


    <div className="statistic">

        <div className="container">

            <div className="statistic-card">
                <img src="./img/ellipse.png" width={"80px"} alt="" />
                <span>
                    <p>500+</p>
                    <i>Judul Buku</i>
                </span>
            </div>
            <div className="statistic-card">
                <img src="./img/ellipse.png" width={"80px"} alt="" />
                <span>
                    <p>$0</p>
                    <i>Gratis Peminjaman</i>
                </span>
            </div>
            <div className="statistic-card">
                <img src="./img/ellipse.png" width={"80px"} alt="" />
                <span>
                    <p>5</p>
                    <i>Kegiatan Rutin</i>
                </span>
            </div>

        </div>

    </div>




    <div>

        <div className='about'>

            <div className="container">

                <div className='about-titles'>
                    <span>
                        <h1>Apa Kata Mereka?</h1>
                        <i>Mereka yang telah menjadi pengunjung tetap kami</i>
                    </span>
                    <i>Selengkapnya</i>
                </div>

                <div className='title2-box about-box'>

                    <div className="title2-card about-card about-card1 ">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <div className='title2-card-box'>
                            <img className='about-card-img' src="./img/guy.png" width={"80px"} height={"80px"} alt="" />
                            <span className='data'>
                                <p>Guy Hawkins</p>
                                <i>32 Tahun, Karyawan</i>
                            </span>
                        </div>
                    </div>

                    <div className="title2-card about-card">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <div className='title2-card-box'>
                            <img src="./img/brokkiyn.png" className='about-card-img' width={"80px"} height={"80px"}
                                alt="" />
                            <span className='data'>
                                <p>Brooklyn Simmons</p>
                                <i>20 Tahun, Mahasiswa</i>
                            </span>
                        </div>
                    </div>

                </div>



            </div>

        </div>


        <div className='about about2'>

            <div className="container">

                <div className='about-titles'>
                    <span>
                        <h1>Kegiatan Pojok Baca Probolinggo</h1>
                        <i>Intip kegiatan yang telah kami selenggarakan </i>
                    </span>
                    <i>Selengkapnya</i>
                </div>

                <div className="box-card-img">
                    <img src="./img/about1.png" width={"300px"} alt="" />
                    <img src="./img/about2.png" width={"300px"} alt="" />
                    <img src="./img/about3.png" width={"300px"} alt="" />
                </div>

            </div>

        </div>
    </div>


    <div className="contact">
        <h2>
            Ingin <span className='d1'>Membantu</span> Meningkatkan Literasi Anak-Anak Sekitar Kita?
        </h2>

        <i className='contact-italic'>Percayakan melalui kegiatan kita</i>
        <button className='contact-btn1'>Donasi dengan Kami <img src="./img/connect1.png" alt="" /> </button>
        <i className='contact-italic'>Atau</i>
        <button className='contact-btn2' >Hubungi Kami <img src="./img/watsapp.png" alt="" /></button>
    </div>

</div>

)

}

export default Title2