import React from "react";

const RightNav = () => {
    return (
        <div className="bg-neutralVeryDarkBlue text-white p-4 min-h-full">
        <span className="font-semibold text-primarySoftOrange text-4xl">
          New
        </span>
        <div className="mt-6 mb-6 pb-8 border-b border-white">
          <p className="link_hover font-bold text-base mb-2">Hydrogen VS Electric Cars</p>
          <p className="font-normal text-sm text-neutralGrayishBlue">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>	
        </div>
        <div className="mt-6 mb-6 pb-8 border-b border-white">
          <p className="link_hover font-bold text-base mb-2">The Downsides of AI Artistry</p>
          <p className="font-normal text-sm text-neutralGrayishBlue">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className="mt-6 mb-6">
          <p className="link_hover font-bold text-base mb-2">Is VC Funding Drying Up?</p>
          <p className="font-normal text-sm text-neutralGrayishBlue">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    )
}

export default RightNav