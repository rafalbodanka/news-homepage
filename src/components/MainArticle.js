import React from "react";
import imageDesktop from "../img/image-web-3-desktop.jpg"
import imageMobile from "../img/image-web-3-mobile.jpg"

const MainArticle = () => {
    return (
    <>
      <div className="">
        <picture>
          <source media="(max-width: 800px)" srcSet={imageMobile} />
          <img src={imageDesktop} alt="" />
        </picture>
      </div>
      <div className="mt-6 md:grid md:grid-cols-2">
        <p className="text-3xl md:text-6xl font-bold text-neutralVeryDarkBlue md:mr-4">
          The Bright Future of Web 3.0?
        </p>
        <div className="">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="mt-8 text-sm bg-primarySoftRed text-white tracking-widest p-2 pl-8 pr-8 transform duration-200 hover:bg-neutralVeryDarkBlue">
            READ MORE
          </button>
        </div>
      </div>
    </>
    )
}

export default MainArticle