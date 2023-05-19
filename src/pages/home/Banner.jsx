import React from "react";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import img from "../../assets/banner.png";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img} className="w-full h-[600px]" />
        <div className="absolute flex items-center px-20  justify-center text-white">
          <div className="w-1/2">
            <h2 className="text-5xl font-bold mb-5  bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
              {" "}
              Adventure with our Enchanting Animal Toys and Playsets
            </h2>
            <p className="text-gray-400">
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
          <div className="w-1/2">
            <img src={img1} className="w-full" alt="" />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
          <a href="#3" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img} className="w-full h-[600px]" />
        <div className="absolute flex items-center px-20  justify-center text-white">
          <div className="w-1/2">
            <h2 className="text-5xl font-bold mb-5 bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">
              {" "}
              Embark on a Safari of Imagination with Amazing Animal Toys
            </h2>
            <p className="text-gray-400">
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
            <button className="btn  bg-gradient-to-r from-sky-500 to-indigo-500 mt-4">
              Explore more{" "}
              <FaAngleRight className="text-lg ml-2"></FaAngleRight>
            </button>
          </div>
          <div className="w-1/2">
            <img src={img2} className="w-full" alt="" />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img} className="w-full h-[600px]" />
        <div className="absolute flex items-center px-20  justify-center text-white">
          <div className="w-1/2">
            <h2 className="text-5xl font-bold mb-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
              {" "}
              Unleash the Magic of the Animal Kingdom with our Toy Collection
            </h2>
            <p className="text-gray-400">
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
          <div className="w-1/2">
            <img src={img3} className="w-full" alt="" />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
