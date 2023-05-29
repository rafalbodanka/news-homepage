import React, { useState } from "react";

import logo from '../img/logo.svg';

const Header = () => {
	const [linksOpen, setLinksOpen] = useState(false);

	const toggleLinks = () => {
		linksOpen ? setLinksOpen(false) : setLinksOpen(true);
	}

    return (
    <div className="grid grid-cols-2 gap-4">
      <img className="" src={logo} alt="News homepage logo" />
      <div className="flex justify-end gap-8">
				<div onClick={toggleLinks} className="text-5xl cursor-pointer md:hidden">&#9776;</div>
        {linksOpen && (
          <div className="bg-black bg-opacity-70 fixed inset-0 z-10 flex items-center justify-end" onClick={toggleLinks}>
						<div className="bg-white h-full w-3/4 p-8 text-2xl text-neutralVeryDarkBlue font-400 z-15" onClick={(e) => e.stopPropagation()}
>
						<div className="text-right text-5xl font-700" onClick={toggleLinks}>&#x2715;</div>
						<div className="mt-40">
								<p className="link_hover m-2 mt-5">Home</p>
								<p className="link_hover m-2 mt-5">New</p>
								<p className="link_hover m-2 mt-5">Popular</p>
								<p className="link_hover m-2 mt-5">Trending</p>
								<p className="link_hover m-2 mt-5">Categories</p>
						</div>
            </div>
          </div>
        )}
				<div className="hidden md:flex md:justify-end md:gap-8">
					<div className="link_hover">Home</div>
					<div className="link_hover">New</div>
					<div className="link_hover">Popular</div>
					<div className="link_hover">Trending</div>
					<div className="link_hover">Categories</div>
				</div>
      </div>
    </div>
    )
}

export default Header