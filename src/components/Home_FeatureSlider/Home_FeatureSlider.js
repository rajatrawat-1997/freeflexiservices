import React , {Component} from 'react' ;
import './Home_FeatureSlider.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export class Home_FeatureSlider extends Component {
    render (){
        const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
        return (
            <div className="container">
                <Carousel 
                responsive={responsive}
                infinite={true}
                >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                </Carousel>
            </div>
        );
    }
}
export default Home_FeatureSlider;