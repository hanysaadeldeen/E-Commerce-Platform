
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WishListehook from "../../Hook/wishLish/WishListehook";
import ProductCard from "./ProductCard";

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

const SliderForRecommend = (products) => {

    let product = products.product

    const [, wishLish] = WishListehook()

    return (
        <div className="mt-3 ">
            {
                product ? <Slider {...settings} className="grid gap-3">
                    {
                        product.slice(0, 8).map((product) => {
                            return (
                                <div key={product._id} className="px-2">
                                    <ProductCard wishLish={wishLish} item={product} />
                                </div>
                            )
                        })}
                </Slider> : null}

        </div>
    )
}
export default SliderForRecommend