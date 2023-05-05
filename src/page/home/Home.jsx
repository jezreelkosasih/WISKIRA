import "./home.css";
import logoPutihOuter from "../../image/Logo Putih Outer Glow 1.webp";
import taglineOuterGlow from "../../image/Tagline Outer Glow.webp";
import vector from "../../image/Vector.webp";
const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="bg1">
          <div className="circle3"></div>
          <div className="circle1"></div>
          <div className="circle2"></div>

        </div>
        <div className="">
          <img src={logoPutihOuter} class="logo" alt="" />
          <img src={taglineOuterGlow} alt="" />
        </div>
      </div>
    </>
  );
};

export { Home as Home };
