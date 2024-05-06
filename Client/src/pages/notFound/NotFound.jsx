import "./NotFound.css"

const NotFound = () => {

  const data = require("../../imgURL.json");
  const loaderImage = data.loaderImage;

  return (
    <>
      <div className="not-found-container">
      <div className="loader">
        <div className="loader-image">
          <img className="loader-image-img" src={loaderImage} alt="Titan Technology Corporation"/>
        </div>
      </div>
      </div>
    </>
  );
};

export default NotFound;
