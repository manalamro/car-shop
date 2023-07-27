
  import React  from 'react';
  import './item.css'
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  import Slider from 'react-slick';
  import { GasPump, Car, Gear, CalendarBlank, Gauge } from 'phosphor-react';
  import transmission from '../../assets/img/manual-transmission1.png'
  import { Link } from 'react-router-dom';
  import useScreenWidth from '../providers/screenWidth.provider'
 const Items = (props) => {
   
  let width = useScreenWidth();

    let settings = {
      dots: false,
      speed: 1000,
      slidesToShow:(width > 800 ? 3 : 1),
      slidesToScroll: 1,
      initialSlide: 0,
    };
    
  
    return (
  
      <div className="items">
   
        <Slider {...settings}>
          {props.filterdCars.map((item, index) => (
            <div key={index} className="card">
              <div className="card-top">
                <img src={item.img} alt="carImage"/>
              <Link to={`/home/${item.id}`}><h2>{item.status}</h2></Link>

                <h1>{item.Brand}</h1>
                <div className="items-in-row">
                  <h4>{item.payPerMonth}</h4>
                  <p>/ monthly</p>
                </div>
  
                <div className='column-items'>
                  <div className='items-in-row '>
  
                    <div className="icon">
                      <div className='meter'>
                      <div className='icons-details'>
                    <Gauge size={16} color="#ff1f4b" weight="regular" />
                      </div>
                      <h3>{item.carMetet}</h3>
                    </div>
                      </div>
                 
                    <div className="icon">
                      <div className='transmission'>
                    <div className='icons-details'>
                      <img src={transmission} alt="transmissionIcon"/>
                      </div>
                      <h3> {item.transmission}</h3>
                      </div>
                    </div>
                   
                    <div className="icon">
                      <div className='year'>
                      <div className='icons-details'>
                      <CalendarBlank size={16} color="#ff1f4b" weight="regular" />
                      </div>
                      <h3>{item.year}</h3>
                    </div>
                    </div>
                  </div>
  
                  <div className='items-in-row '>
                    <div className="icon">
                    <div className='icons-details'>
                      <GasPump size={16} color="#ff1f4b" weight="regular" />
                      </div>
                     <h3> {item.EngineFuel}</h3>
                    </div>
  
                    <div className="icon">
                    <div className='icons-details'>
                      <Car size={16} color="#ff1f4b" weight="regular" />
                      </div>
                      <h3>{item.CarType}</h3>
                    </div>
  
                    <div className="icon">
                    <div className='icons-details'>
                      <Gear size={16} color="#ff1f4b" weight="regular" />
                      </div>
                      <h3> {item.color}</h3>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  
  export default Items