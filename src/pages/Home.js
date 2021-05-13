import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBMask,
  MDBRow,
  MDBView,
} from "mdbreact";
import "./Home.css";

const Home = () => {
  return (
    <MDBView>
      <div className="bg"></div>
      <MDBMask className="d-flex justify-content-center align-items-center gradient">
        <MDBContainer className="px-md-3 px-sm-0">
          <MDBRow>
            <MDBCol md="12" className="mb-4 black-text text-center">
              <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                Dalila Campbell Realtor{" "}
              </h3>

              <hr className="hr-light my-4 w-75" />
              <h4 className="subtext-header mt-2 mb-4">
                Let me help find your dream home.
              </h4>
            </MDBCol>
          </MDBRow>

          <MDBRow className="d-flex justify-content-center">
            {/* <MDBCol xs="3" className="icons text-center">
              <a
                style={{ color: "black" }}
                className="mr-3"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/dalila.pojskic"
              >
                <MDBIcon
                  fab
                  icon="facebook-f"
                  style={{
                    fontSize: "30px",
                    color: "#3B3A3C",
                    marginRight: "5px",
                  }}
                />
              </a>
            </MDBCol>
            <MDBCol xs="3" className="icons text-center">
              <a
                style={{ color: "black" }}
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/dalilarealestateagent/"
              >
                <MDBIcon
                  fab
                  icon="instagram"
                  style={{
                    fontSize: "30px",
                    color: "#3B3A3C",
                    marginRight: "5px",
                  }}
                />
              </a>
            </MDBCol>
            <MDBCol xs="3" className="icons text-center">
              <a
                style={{ color: "black" }}
                className="ml-3"
                target="_blank"
                rel="noreferrer"
                href="mailto:dalilaselimi304@gmail.com"
              >
                <MDBIcon
                  far
                  icon="envelope"
                  style={{
                    fontSize: "30px",
                    color: "#3B3A3C",
                    marginRight: "5px",
                  }}
                />
              </a>
            </MDBCol> */}

            <MDBBtn outline rounded color="black" href="https://www.homesnap.com/Dalila-Campbell">
              <MDBIcon icon="home" /> Visit Homesnap
            </MDBBtn>
          </MDBRow>
        </MDBContainer>
      </MDBMask>
    </MDBView>
  );
};

export default Home;
