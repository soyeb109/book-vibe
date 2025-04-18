import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://images.freeimages.com/image/previews/a1a/study-kit-flat-png-design-5690859.png?fmt=webp&w=500" />
        <div>
          <h1 className="text-5xl font-bold mb-8">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn btn-primary">View Book List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
