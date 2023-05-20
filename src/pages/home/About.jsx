import React from "react";
import img from "../../assets/about.svg";
const About = () => {
  return (
    <div>
      <h2 className="gradient-text text-5xl text-center my-10">
        More About us!
      </h2>
      <div className="flex gap-10">
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="w-1/2">
          <h3 className="text-3xl font-bold mb-3">
            Discover the Joy at Toy Hub
          </h3>
          <p className="mb-3 text-gray-500">
            At Toys hub, we are passionate about bringing joy, creativity, and
            imagination into the lives of children and adults alike. Our story
            began with a shared love for toys and the belief that play is an
            essential part of human development. As a team of dedicated toy
            enthusiasts, we have curated a collection of the finest toys from
            around the world. Our mission is to provide a hub where people of
            all ages can explore, engage, and connect with a wide variety of
            toys that inspire learning, entertainment, and endless hours of fun.
          </p>
          <p className="text-gray-500">
            We strive to go beyond mere playthings by carefully selecting toys
            that stimulate curiosity, foster imagination, and promote cognitive
            and physical development. Whether you're looking for educational
            toys, interactive games, or classic favorites, we have something for
            everyone. What sets us apart is our commitment to quality and
            safety. We understand the importance of providing toys that are not
            only enjoyable but also safe for children. We rigorously test and
            curate our toy selection to ensure they meet the highest standards
            of safety, durability, and non-toxicity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
