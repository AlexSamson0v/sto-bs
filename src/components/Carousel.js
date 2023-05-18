import Carousel from 'react-bootstrap/Carousel';
import car1 from "../img/car1.jpg";
import car2 from "../img/car2.jpg";
import car3 from "../img/car3.jpg";
import car4 from "../img/car4.jpg";
import car5 from "../img/car5.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item className='h-50'>
        <img
          className="d-block w-100 h70"
          src={car1}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>Бесконтактная мойка</h3>
          <p>Исключает абразивное механическое воздействие на лакокрасочное покрытие.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <img
          className="d-block w-100 "
          src={car2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Активная пена</h3>
          <p>Удаляет сложные загрязнения, такие как потеки масла, копоть и т.д..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={car3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Нанесение керамики</h3>
          <p>
          Придание блеска.Стойкость к деформациям и повреждениям.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={car4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Чистка солона</h3>
          <p>
            Чистка труднодоступных мест.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={car5}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Полировка салона</h3>
          <p>
          Придает первоначальный блеск, предотвращает растрескивание.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;