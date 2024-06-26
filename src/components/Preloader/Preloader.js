import bg1 from "../../../public/images/loader.png";

const Preloader = ({ loading, bg = bg1, className = "" }) => {
  return (
    <div
      style={{
        zIndex: loading ? 9999 : -1,
      }}
      className={`preloader animated${loading ? "" : " fadeOut"} ${className}`}
    >
      <div style={{ backgroundImage: `url(${bg.src})` }} className="icon"></div>
    </div>
  );
};

export default Preloader;
