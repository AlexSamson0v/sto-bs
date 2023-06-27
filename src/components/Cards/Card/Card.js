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
import { Link } from 'react-router-dom';



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
                  Щадящий вид мойки автомобиля.
                   При помощи специальных химических веществ и особой методики
                    проведения 
                  </Card.Text>
                  <Link to="/Conteiners/UsualPage/Usual">
                   <Button  variant="primary">Подробнее</Button>
                  </Link>
                </Card.Body>
            </Card>
        </Col>

        <Col style={{ paddingTop: '2rem'}}>
            <Card style={{ width: '18rem' }}> 
              <Card.Img variant="top" src={MC2}className="d-block w-100 h70"/>
                <Card.Body>
                  <Card.Title>Мойка + пылесос</Card.Title>
                  <Card.Text>
                  Салон автомобиля очень уязвим для пыли и грязи, обивка кресел и
                   ковролин под ногами впитывают пыль с фантастической скоростью.
                  </Card.Text>
                  <Link to="/Conteiners/ScleanerPage/Scleaner">
                   <Button  variant="primary">Подробнее</Button>
                  </Link>
                </Card.Body>
            </Card>
        </Col>

        <Col style={{ paddingTop: '2rem'}}>
            <Card style={{ width: '18rem' }}> 
              <Card.Img variant="top" src={MC3}className="d-block w-100 h70" />
                <Card.Body>
                  <Card.Title>Нанесение воска</Card.Title>
                  <Card.Text>
                  Кроме красивого внешнего вида, как минимум Продлевает срок службы краски и лака, которыми покрыт кузов
                  </Card.Text>
                  <Link to="/Conteiners/RegularPage/Regular">
                   <Button  variant="primary">Подробнее</Button>
                  </Link>
                </Card.Body>
            </Card>
        </Col>

        <Col style={{ paddingTop: '2rem'}}>
            <Card style={{ width: '18rem' }}> 
              <Card.Img variant="top" src={MC4}className="d-block w-100 h70"/>
                <Card.Body>
                  <Card.Title>Антидождь</Card.Title>
                  <Card.Text>
                  Водоотталкивающие составы для обработки
                   стекол и наружных зеркал транспортного средства.
                   Отталкивают пыль и грязь.
                  </Card.Text>
                  <Link to="/Conteiners/UsualPage/Usual">
                   <Button  variant="primary">Подробнее</Button>
                  </Link>
                </Card.Body>
            </Card>
        </Col>

        <Col style={{ paddingTop: '2rem'}}>
            <Card style={{ width: '18rem' }}> 
              <Card.Img variant="top" src={MC5}className="d-block w-100 h70" />
                <Card.Body>
                  <Card.Title>Мойка двигателя</Card.Title>
                  <Card.Text>
                  Мойка двигателя замедлит процессы коррозии металлов,
                   вызываемой агрессивными реагентами, летящими с дороги
                  </Card.Text>
                  <Link to="/Conteiners/UsualPage/Usual">
                   <Button  variant="primary">Подробнее</Button>
                  </Link>
                </Card.Body>
            </Card>
        </Col>

        <Col style={{ paddingTop: '2rem'}}>
            <Card style={{ width: '18rem' }}> 
              <Card.Img variant="top" src={MC6}className="d-block w-100 h70" />
                <Card.Body>
                  <Card.Title>Детальная мойка</Card.Title>
                  <Card.Text>
                  Наиболее тщательная комплексная процедура ухода за автомобилем.
                   Цель детейлинга – вернуть автомобилю «былой лоск»
                  </Card.Text>
                  
                  <Link to="/Conteiners/DitalingPage/Ditaling">
                   <Button  variant="primary">Подробнее</Button>
                  </Link>
                </Card.Body>
            </Card>
        </Col>
      </Row>
</Container>

  );
}

export default BasicExample;
