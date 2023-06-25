import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import MC1 from "../../../img/MC1.jpg";
import MC2 from "../../../img/MC2.jpg";
import MC3 from "../../../img/MC3.jpg";
import MC4 from "../../../img/MC4.jpg";
import MC5 from "../../../img/MC5.jpg";
import MC6 from "../../../img/MC6.jpg";
// import MC7 from "../../../img/MC6.jpg";
// import MC8 from "../../../img/MC7.jpg";



function BasicExample() {
  return (
    <Container style={{ paddingTop: '2rem', paddingBottom: '2rem'}}>
      <Row>
        <Col style={{ paddingTop: '2rem'}}>
            <Card style={{ width: '18rem' }}> 
            
              <Card.Img variant="top" src={MC1}className="d-block w-100 h70"/>
                <Card.Body>
                  <Card.Title>Бесконтактная мойка</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Подробнее</Button>
                </Card.Body>
            </Card>
        </Col>

        <Col style={{ paddingTop: '2rem'}}>
            <Card style={{ width: '18rem' }}> 
              <Card.Img variant="top" src={MC2}className="d-block w-100 h70"/>
                <Card.Body>
                  <Card.Title>Мойка + пылесос</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Подробнее</Button>
                </Card.Body>
            </Card>
        </Col>

        <Col style={{ paddingTop: '2rem'}}>
            <Card style={{ width: '18rem' }}> 
              <Card.Img variant="top" src={MC3}className="d-block w-100 h70" />
                <Card.Body>
                  <Card.Title>Нанесение воска</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Подробнее</Button>
                </Card.Body>
            </Card>
        </Col>

        <Col style={{ paddingTop: '2rem'}}>
            <Card style={{ width: '18rem' }}> 
              <Card.Img variant="top" src={MC4}className="d-block w-100 h70"/>
                <Card.Body>
                  <Card.Title>Антидождь</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Подробнее</Button>
                </Card.Body>
            </Card>
        </Col>

        <Col style={{ paddingTop: '2rem'}}>
            <Card style={{ width: '18rem' }}> 
              <Card.Img variant="top" src={MC5}className="d-block w-100 h70" />
                <Card.Body>
                  <Card.Title>Мойка двигателя</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Подробнее</Button>
                </Card.Body>
            </Card>
        </Col>

        <Col style={{ paddingTop: '2rem'}}>
            <Card style={{ width: '18rem' }}> 
              <Card.Img variant="top" src={MC6}className="d-block w-100 h70" />
                <Card.Body>
                  <Card.Title>Детальная мойка</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Подробнее</Button>
                </Card.Body>
            </Card>
        </Col>
      </Row>
</Container>

  );
}

export default BasicExample;
