
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import WishListehook from "../../Hook/wishLish/WishListehook";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slickPlay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            }
        },
    ]
};

export const SliderImg = (products) => {


    let product = products.products
    const [, wishLish] = WishListehook()

    return (
        <div className="mt-3 ">
            {
                product ? <Slider {...settings} className="grid gap-3">
                    {
                        product.map((product) => {
                            return (
                                <div className="px-2" key={product._id}>
                                    <ProductCard wishLish={wishLish} item={product} />
                                </div>
                            )
                        })}
                </Slider> : null}
        </div>
    )
}
