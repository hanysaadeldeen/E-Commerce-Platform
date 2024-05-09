// import { Link } from "react-router-dom"
import Slider from "react-slick";
import img1 from "../../assets/image/test8.jpg"
import img2 from "../../assets/image/last.jpg"
import img3 from "../../assets/image/test3.jpg"
var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slickPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
};
const Landing = () => {

    return (
        // <div className="landing">
        //     <div className="container">
        //         <div className="">
        //             <div className="info w-1/2 max-md:w-full">
        //                 <h1 className="text-[#465b52]  text-4xl max-md:text-3xl mb-2 font-bold   capitalize">trade-in-offer</h1>
        //                 <h1 className="font-bold  capitalize  text-[30px] max-md:text-2xl  " >super value deals <span className="text-[#DC4732]">on all products</span> </h1>
        //                 <p className="text-[#088178]  font-bold text-[30px] capitalize mb-6 max-md:text-3xl">by one and you will take <span>70% off! </span> </p>
        //                 <Link to={"/ShopProductPage"} className="text-xl " >Shop Now</Link>
        //             </div>
        //         </div>
        //     </div>
        // </div >
        <Slider {...settings} className="pt-12 ladn xl:h-screen overflow-hidden ">

            <img src={img3} alt="" className="w-fit" />
            <img src={img1} alt="" className="w-fit" />
            <img src={img2} alt="" className="w-fit" />
        </Slider>


    )
}

export default Landing