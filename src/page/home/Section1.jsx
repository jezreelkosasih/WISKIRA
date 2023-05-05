import "./section1.css";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="bg1">
        <div className="z-2 absolute box-content1">
          <img
            className="logoPutih"
            src="./Assets/Home/Logo Putih Outer Glow 1.png"
          />
          <img className="taglinePutih" src="./Assets/Home/Tagline.png" />
        </div>
        <div className="circle3 z-1"></div>
        <div className="circle1 z-1"></div>
        <div className="circle2 z-1"></div>
      </div>

      <img
        className="ombakAtas"
        alt="ombakAtas"
        src="./Assets/Home/ombakAtas.png"
      />
    </div>
  );
};

export default Section1;
