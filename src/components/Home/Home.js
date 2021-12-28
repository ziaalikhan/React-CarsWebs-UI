import React from 'react'
import Section from '../Section/Section';
import './Home.css';
import Car3 from '../../images/car3.jpg';
import Car4 from '../../images/car4.jpg';
import Car6 from '../../images/car6.jpg';
import Solar from '../../images/solar.jpg';
import Solar1 from '../../images/solar1.jpg';


const Home = () => {
    return (
        <div className='home_section'>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg={Car6}
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg={Car4}
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Model Z"
                description="Order Online for Touchless Delivery"
                backgroundImg={Car3}
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Model B"
                description="Order Online for Touchless Delivery"
                backgroundImg={Car4}
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Solar"
                description="Order Online for Touchless Delivery"
                backgroundImg={Solar}
                leftButtonText="Shop Now"
            />
            <Section
                title="Solar Automate"
                description="Order Online for Touchless Delivery"
                backgroundImg={Solar1}
                leftButtonText="Shop Now"
            />

        </div>
    )
}

export default Home
