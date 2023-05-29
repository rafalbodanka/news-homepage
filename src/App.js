import React from 'react';

import Header from './components/Header.js';
import MainArticle from './components/MainArticle';
import RightNav from './components/RightNav';
import Trending from './components/Trending';

function App() {
  return (
    <div className="m-4 mt-8 md:mt-12 md:mx-auto max-w-screen-xl font-inter">
      <Header />
      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="col-span-1 md:col-span-8">
          <MainArticle />
        </div>
        <div className="col-span-1 md:col-span-4">
          <RightNav />
        </div>
      </div>
      <Trending />
    </div>
  );
}

export default App;
