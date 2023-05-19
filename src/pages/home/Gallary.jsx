import React from "react";
import Marquee from "react-fast-marquee";
import img2 from "../../assets/gallary/gallary2.jpg";
import img3 from "../../assets/gallary/gallary3.jpg";
import img4 from "../../assets/gallary/gallary4.jpg";
import img5 from "../../assets/gallary/gallary5.jpg";
const Gallary = () => {
  return (
    <div>
      <div className="text-center mt-20 mb-12">
        <h2 className=" text-4xl font-bold  bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
          A Visual Adventure into the World of Toys!
        </h2>

        <div className="w-full">
          <p className="text-gray-500 text-sm w-1/2 mx-auto mt-3">
            Welcome to Toy Hub, where imagination comes to life! Explore our
            captivating image gallery showcasing a wide array of delightful toys
            that will enchant children and bring joy to collectors of all ages
          </p>
        </div>
      </div>
      <div className="border-r-0 border-l-0 border-t-2 border-b-2   border-blue-500 p-3 mb-20 ">
        <Marquee pauseOnHover={true} gradient={true}>
          <img
            src={img2}
            className="h-[250px] w-[400px] rounded-md border-2 mx-2"
            alt=""
          />
          <img
            src={img3}
            className="h-[250px] w-[400px] rounded-md border-2 mx-2"
            alt=""
          />
          <img
            src={img4}
            className="h-[250px] w-[400px] rounded-md border-2 mx-2"
            alt=""
          />
          <img
            src={img5}
            className="h-[250px] w-[400px] rounded-md border-2 mx-2"
            alt=""
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Gallary;
