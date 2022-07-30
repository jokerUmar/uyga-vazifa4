import './titles.css'

let Titles = () =>{

    return (

        <section className='titles'>
            <div className="container">
            
            <p className='titles__name'> <span className='titles-span'>Pojok Baca</span> Probolinggo </p>
            <h1 className='titles__title'>Pinjam Buku Secara <span className='titles-span'>Gratis</span> untuk Masyarakat  </h1>

            <div className='titles-box'>
                <button className='titles__search'>Cari Judul Buku <img src="./img/titles-btn2.png" width={"19px"} alt="" /> </button>
                <button className='titles__connect'>Donasi dengan Kami <img src="./img/titles-btn.png" alt="" /> </button>
            </div> 

            </div>
        </section>

    )

}

export default Titles 