import "./styles.css";
import ImgBanner1 from "../../../../assets/img/banner/banner-1.jpg";
import ImgBanner2 from "../../../../assets/img/banner/banner-2.jpg";
import ImgBanner3 from "../../../../assets/img/banner/banner-3.jpg";

function Banner() {
  return (
    <section className="banner spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 offset-lg-4">
            <div className="banner__item">
              <div className="banner__item__pic">
                <img src={ImgBanner1} alt="" />
              </div>
              <div className="banner__item__text">
                <h2>Clothing Collections 2024</h2>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="banner__item banner__item--middle">
              <div className="banner__item__pic">
                <img src={ImgBanner2} alt="" />
              </div>
              <div className="banner__item__text">
                <h2>Accessories</h2>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="banner__item banner__item--last">
              <div className="banner__item__pic">
                <img src={ImgBanner3} alt="" />
              </div>
              <div className="banner__item__text">
                <h2>Shoes Spring 2024</h2>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
