import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ButtonCategory = ({ categories, onCategorySelect }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.product_type
          } className="px-1">
            <button
              onClick={() => onCategorySelect(category.product_type)}
              className="text-xs border-solid border-pink-200 hover:bg-gray-200 hover:border-gray-300 py-3 rounded-full hover:text-black whitespace-nowrap w-full"
            >
              {category.name}
            </button>
          </div>
        ))}
      </Slider>
  );
};  

export default ButtonCategory;
