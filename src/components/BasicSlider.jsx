import { Button } from '@material-ui/core';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel className='slider'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          src="https://media.istockphoto.com/id/1162998855/photo/the-sun-goes-down-behind-the-autumn-forest.jpg?s=612x612&w=0&k=20&c=FUboaqu1cbviM1RKy7UEsYm7RsJjSBYyjOTwJXUDGVs="
          alt="First slide"
/>

        <Carousel.Caption>
        <Button>hloo</Button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <Button>hloo</Button>

        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample;