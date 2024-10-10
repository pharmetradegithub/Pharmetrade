import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Landing2 from "./Landing2";
import Sliders from "./Sliders";
import banner1 from "../../../assets/BannerText1.png";
import banner2 from "../../../assets/BannerText2.jpg";
import banner3 from "../../../assets/BannerText3.jpg";
import banner4 from "../../../assets/BannerText4.jpg";
import "./Landing.css";
import { useSelector } from "react-redux";

function Landing({ topMargin, wishList, addCart }) {
  const BannerData = useSelector((state) => state.banner.banner);
  console.log(BannerData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Auto play slides
    autoplaySpeed: 3000, // Slide change interval (3 seconds)
  };

  return (
    <div className="w-full font-sans">
      <div className="w-full">
        <div
          className="h-fit"
          style={{
            marginTop: `${topMargin}px`,
          }}
        >
          <div className="w-full relative h-[350px] overflow-hidden">
            {BannerData.length > 0 ? (
              <Slider {...settings}>
                {BannerData.map((item, index) => (
                  <div key={index}>
                    <img
                      src={item.imageUrl}
                      alt={`Carousel Image ${index + 1}`}
                      className="w-full h-[350px] Largest:h-[350px] Largest:object-fill "
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <p className="text-center text-gray-500">No banners available</p>
            )}
          </div>
        </div>
        <div className="w-full bg-slate-200 px-6">
          <Landing2 addCart={addCart} wishList={wishList} />
          <Sliders addCart={addCart} wishList={wishList} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
