import Carousel from 'react-bootstrap/Carousel';
import src from "../../../images/b9.jpg"
import src1 from "../../../images/b12.png"

import "./Slider.css"
function Slider() {
  return (
    <Carousel slide={false} className="SliderContainer">
      <Carousel.Item className="SliderContent">
        <img
          className=" SliderImg"
          src={src}
          alt="First slide"
        />
        <Carousel.Caption className='SliderCaption'>
        <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
          <span>Maccy Doe - Front End</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="SliderContent">
        <img
          className=" SliderImg"
          src={src1}
          alt="First slide"
        />

        <Carousel.Caption className='SliderCaption'>
        <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
          <span>Johnthan Doe - UX Designer</span>
        </Carousel.Caption>
      </Carousel.Item>
  
    </Carousel>
  );
}

export default Slider