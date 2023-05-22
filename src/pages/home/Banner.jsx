import React, { useEffect } from "react";
import AOS from "aos";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import img from "../../assets/banner.png";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img} className="w-full lg:h-[600px]" />
        <div className="absolute flex lg:flex-row flex-col  py-14 lg:py-0 items-center lg:px-20 px-8  justify-center text-white">
          <div
            className="lg:w-1/2 "
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl pb-2 lg:text-5xl font-bold mb-5  bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
              Adventure with our Enchanting Animal Toys and Playsets
            </h2>
            <p className="text-gray-400 text-sm lg:text-base">
              Step into the enchanting world of Creatures of Wonder, where the
              magic of animals comes to life through our captivating collection
              of toys and playsets. Our mission is to inspire a deep
              appreciation for the natural world while fostering imaginative
              play and educational experiences. Our carefully curated selection
              features a diverse array of animal toys, ranging from cuddly plush
              companions to realistic figurines and interactive playsets. Each
              toy is crafted with meticulous attention to detail, ensuring an
              authentic and engaging play experience for children of all ages.
            </p>
            <button className="btn  bg-gradient-to-r from-cyan-500 to-blue-500 mt-4">
              Explore more{" "}
              <FaAngleRight className="text-lg ml-2"></FaAngleRight>
            </button>
          </div>
          <div className="lg:w-1/2 hidden lg:block">
            <img src={img1} className="w-full" alt="" />
          </div>
        </div>
        <div className="absolute lg:flex hidden justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#3" className="btn   btn-circle btn-md ">
            ❮
          </a>
          <a href="#slide2" className="btn   btn-circle btn-md ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img} className="w-full lg:h-[600px]" />
        <div className="absolute lg:flex items-center px-8 py-14 lg:py-0 lg:px-20  justify-center text-white">
          <div className="lg:w-1/2">
            <h2 className="lg:text-5xl pb-2 text-3xl font-bold mb-5 bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">
              {" "}
              Embark on a Safari of Imagination with Amazing Animal Toys
            </h2>
            <p className="text-gray-400 text-sm lg:text-base">
              Step into the enchanting world of Creatures of Wonder, where the
              magic of animals comes to life through our captivating collection
              of toys and playsets. Our mission is to inspire a deep
              appreciation for the natural world while fostering imaginative
              play and educational experiences. Our carefully curated selection
              features a diverse array of animal toys, ranging from cuddly plush
              companions to realistic figurines and interactive playsets. Each
              toy is crafted with meticulous attention to detail, ensuring an
              authentic and engaging play experience for children of all ages.
            </p>
            <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 mt-4">
              Explore more{" "}
              <FaAngleRight className="text-lg ml-2"></FaAngleRight>
            </button>
          </div>
          <div className="lg:w-1/2">
            <img src={img2} className="w-full hidden lg:block" alt="" />
          </div>
        </div>
        <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn  btn-circle  ">
            ❮
          </a>
          <a href="#slide3" className="btn  btn-circle ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img} className="w-full h-[600px]" />
        <div className="absolute flex items-center px-8 py-14 lg:py-0 lg:px-20  justify-center text-white">
          <div className="lg:w-1/2 w-full">
            <h2 className="lg:text-5xl pb-2 text-3xl font-bold mb-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
              {" "}
              Unleash the Magic of the Animal Kingdom with our Toy Collection
            </h2>
            <p className="text-gray-400 lg:text-base text-sm">
              Step into the enchanting world of Creatures of Wonder, where the
              magic of animals comes to life through our captivating collection
              of toys and playsets. Our mission is to inspire a deep
              appreciation for the natural world while fostering imaginative
              play and educational experiences. Our carefully curated selection
              features a diverse array of animal toys, ranging from cuddly plush
              companions to realistic figurines and interactive playsets. Each
              toy is crafted with meticulous attention to detail, ensuring an
              authentic and engaging play experience for children of all ages.
            </p>
            <button className="btn  bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-4">
              Explore more{" "}
              <FaAngleRight className="text-lg ml-2"></FaAngleRight>
            </button>
          </div>
          <div className="lg:w-1/2 w-full hidden lg:block">
            <img src={img3} className="w-full" alt="" />
          </div>
        </div>
        <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2  left-5 right-5 top-1/2">
          <a href="#slide2" className="btn  btn-circle ">
            ❮
          </a>
          <a href="#slide1" className="btn  btn-circle  ">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
