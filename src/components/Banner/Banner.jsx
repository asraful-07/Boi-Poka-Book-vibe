import React from "react";
import BannerIm from "../../assets/images/books.jpg";

const Banner = () => {
  return (
    <div className="mb-24">
      <div className="hero bg-base-200 mb-24 py-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={BannerIm} className="max-w-xl rounded-lg shadow-2xl" />
          <div className="">
            <h1 className="text-6xl font-bold">Box Office News!</h1>
            <p className="py-6 w-3/4">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
