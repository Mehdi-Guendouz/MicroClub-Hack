import BtnStarted2 from "../assets/BtnStarted2.svg";
import Layer_1 from "../assets/Layer_1.png";
import GroupeImage from "../assets/Group 2181.png";

export const BodySection = () => {
  return (
    <section className="main">
      <div className="Details">
        <h1>Unlocking insights through simplified data visualization.</h1>
        <p>
          Empowering businesses with intuitive data visualization tools to
          unlock valuable insights, make
        </p>
        <div className="getStartBtn">
          Start the journey
          <img src={BtnStarted2} alt="arrow" />
        </div>
        <div className="ImageTarget">
          <img src={Layer_1} alt="targetImage" />
        </div>
      </div>
      <div className="HolderImage">
        <img src={GroupeImage} alt="" />
      </div>
    </section>
  );
};
