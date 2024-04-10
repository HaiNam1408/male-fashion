import "./styles.css";
import ImgInsta1 from "../../../../assets/img/instagram/instagram-1.jpg";
import ImgInsta2 from "../../../../assets/img/instagram/instagram-2.jpg";
import ImgInsta3 from "../../../../assets/img/instagram/instagram-3.jpg";
import ImgInsta4 from "../../../../assets/img/instagram/instagram-4.jpg";
import ImgInsta5 from "../../../../assets/img/instagram/instagram-5.jpg";
import ImgInsta6 from "../../../../assets/img/instagram/instagram-6.jpg";

function Instagram() {
  return (
    <section className="instagram spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="instagram__pic">
              <div
                className="instagram__pic__item set-bg"
                style={{ backgroundImage: `url(${ImgInsta1})` }}
              />
              <div
                className="instagram__pic__item set-bg"
                style={{ backgroundImage: `url(${ImgInsta2})` }}
              />
              <div
                className="instagram__pic__item set-bg"
                style={{ backgroundImage: `url(${ImgInsta3})` }}
              />
              <div
                className="instagram__pic__item set-bg"
                style={{ backgroundImage: `url(${ImgInsta4})` }}
              />
              <div
                className="instagram__pic__item set-bg"
                style={{ backgroundImage: `url(${ImgInsta5})` }}
              />
              <div
                className="instagram__pic__item set-bg"
                style={{ backgroundImage: `url(${ImgInsta6})` }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="instagram__text">
              <h2>Instagram</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h3>#Male_Fashion</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instagram;
