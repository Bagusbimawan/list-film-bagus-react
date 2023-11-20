import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import antmant from "../assets/superhero/antman.jpg";
import avenger from "../assets/superhero/avenger.jpg";
import batman from "../assets/superhero/batman.jpg";
import robinhood from "../assets/superhero/robinhood.jpg";
import spiderman from "../assets/superhero/spiderman-cover.jpg";
import superman from "../assets/superhero/superman.jpg";

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPER HERO MOVIES </h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className=" bg-dark text-light movieImage">
              <Image src={antmant} alt="Ant-man movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Ant-man</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className=" bg-dark text-light movieImage">
              <Image src={batman} alt="Batman movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Batman</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className=" bg-dark text-light movieImage">
              <Image src={avenger} alt="avenger movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">avenger</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" bg-dark text-light movieImage">
              <Image
                src={robinhood}
                alt="robin-hood movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">robinhood</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className=" bg-dark text-light movieImage">
              <Image src={superman} alt=" superman movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">superman</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className=" bg-dark text-light movieImage">
              <Image
                src={spiderman}
                alt="spiderman  movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">spiderman</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperHero;
