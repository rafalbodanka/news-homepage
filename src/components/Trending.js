import React from "react";

import image1 from "../img/image-retro-pcs.jpg"
import image2 from "../img/image-top-laptops.jpg"
import image3 from "../img/image-gaming-growth.jpg"

const Trending = () => {
    return (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="grid grid-cols-3 gap-4">
          <img className="col-span-1" src={image1} alt="Trending article"></img>
          <div className="col-span-2">
            <p className="text-neutralGrayishBlue text-4xl">01</p>
            <p className="trending_link_hover hover:text-primarySoftRed text-neutralVeryDarkBlue font-bold">
              Reviving Retro PCs
            </p>
            <p className="text-neutralDarkGrayishBlue text-sm">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <img className="col-span-1" src={image2} alt="Trending article"></img>
          <div className="col-span-2">
            <p className="text-neutralGrayishBlue text-4xl">02</p>
            <p className="trending_link_hover text-neutralVeryDarkBlue font-bold">
              Top 10 Laptops of 2022
            </p>
            <p className="text-neutralDarkGrayishBlue text-sm">
              Our best picks for various needs and budgets
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <img className="col-span-1" src={image3} alt="Trending article"></img>
          <div className="col-span-2">
            <p className="text-neutralGrayishBlue text-4xl">03</p>
            <p className="trending_link_hover text-neutralVeryDarkBlue font-bold">
              The Growth of Gaming
            </p>
            <p className="text-neutralDarkGrayishBlue text-sm">
              How the pandemic has sparked fresh opportunities
            </p>
          </div>
        </div>
      </div>
    )
}

export default Trending