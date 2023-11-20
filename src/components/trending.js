import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/trending/dune.jpg";
import everythingImage from '../assets/trending/everything.jpg';
import jokerImage from '../assets/trending/joker.jpg';
import lightyearImage from '../assets/trending/lightyear.jpg';
import morbiusImage from '../assets/trending/morbius.jpg';
import infiniteImage from '../assets/trending/infinite.jpg';


const Trending = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white">TRENDING MOVIES </h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper" id="Trending">
            <Card className=" bg-dark text-light movieImage">
              <Image src={duneImage} alt="Dune movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Dune</Card.Title>
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
              <Image src={everythingImage} alt="everything  movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">everything</Card.Title>
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
              <Image src={infiniteImage} alt="infinite movies"  className="images"/>
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">infinite</Card.Title>
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
              <Image src={jokerImage} alt="joker movies" className="images"/>
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">joker</Card.Title>
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
              <Image src={lightyearImage} alt="everything  movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">lightyear</Card.Title>
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
              <Image src={morbiusImage} alt="morbius  movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">morbius</Card.Title>
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

export default Trending;
