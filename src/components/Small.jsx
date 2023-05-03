import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel
      className="slider"
      style={{
        width: "280px",
        height: "15%",
        background: "#ee344e",
        paddingLeft: "15px",
        paddingRight: "15px",
        justifyContent: "center",
        color: "#ffff",
      }}
    >
      <Carousel.Item>
        <div className="tm-box-col-wrapper col-lg-4 col-sm-6 col-md-4 col-xs-12 d-block w-100">
          <div className="tm-static-iconbox">
            <div className="tm-box-contentdesc">
              <div className="tm-box-content">
                <i
                  className="fa-solid fa-feather"
                  style={{ justifyContent: "center" }}
                ></i>{" "}
                <div className="tm-box-title">
                  <h3>We Provide The Best Aqua Cares For Your farm</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="tm-box-col-wrapper col-lg-4 col-sm-6 col-md-4 col-xs-12 d-block w-100">
          <div className="tm-static-iconbox">
            <div className="tm-box-contentdesc">
              <div className="tm-box-content">
                <i className="fa-solid fa-bugs"></i>{" "}
                <div className="tm-box-title">
                  <h3>Elephants on the Path to Extinction Worldwide</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="tm-box-col-wrapper col-lg-4 col-sm-6 col-md-4 col-xs-12 d-block w-100">
          <div className="tm-static-iconbox">
            <div className="tm-box-contentdesc">
              <div className="tm-box-content">
                <i className="fa-solid fa-hippo"></i>{" "}
                <div className="tm-box-title">
                  <h3>Disturbing Warnings of Wild Animal Extinction</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
