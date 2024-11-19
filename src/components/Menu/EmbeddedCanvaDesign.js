import useDeviceType from "../../hooks/useDeviceType";

const EmbeddedCanvaDesign = ({ embedLink }) => {
  const isMobile = useDeviceType() === "mobile";

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: 0,
    paddingTop: isMobile ? "141.4286%" : "80%",
    paddingBottom: 0,
    boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
    marginTop: "1.6em",
    marginBottom: "0.9em",
    overflow: "hidden",
    borderRadius: "16px",
    willChange: "transform",
  };

  const iframeStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    border: "none",
    padding: 0,
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <iframe
        loading="lazy"
        style={iframeStyle}
        src={embedLink}
        allowFullScreen
        allow="fullscreen"
      ></iframe>
    </div>
  );
};

export default EmbeddedCanvaDesign;
