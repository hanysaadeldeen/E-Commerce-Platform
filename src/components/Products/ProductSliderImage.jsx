
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slickPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
};
const ProductSliderImage = (image) => {

    return (
        <div>
            <Slider {...settings} className="grid gap-2 ">
                {
                    image.image && image.image.map((img, index) => {
                        return (
                            <div className="" key={index}>
                                <img src={img} className=" " alt="one" />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default ProductSliderImage