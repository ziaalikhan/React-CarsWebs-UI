import React, { useState } from 'react';
import './Navbar.css';
import AppLogo from '../../images/applogo.png'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../../features/car/CarSlice';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [sideNavOpen, setsideNavOpen] = useState(false);

    const cars = useSelector(selectCars);
    return (
        <div className='navbar_container'>
            <div className="logo">
                <a><img width="70px" src={AppLogo} alt="Logo" /></a>
            </div>
            <div className="menus">
                {
                    cars && cars.map((val, ind) => {
                        return <a key={ind} href='#'>{val}</a>
                    })
                }
            </div>
            <div className="right_Menu">
                <a href='#'>Shop</a>
                <a href='#'>Account</a>
                <MenuIcon onClick={() => setsideNavOpen(true)} size="40" className='menu_icon' />
            </div>
            {
                sideNavOpen ? (
                    <div className="sideBar_container">
                        <div >
                            <CloseIcon onClick={() => setsideNavOpen(false)} size="40" className='close_menu_icon' />
                        </div>
                        {
                            cars && cars.map((val, ind) => {
                                return <li><a key={ind} href='#'>{val}</a></li>
                            })
                        }
                        <li><a href='#'>Existing Inventory</a></li>
                        <li><a href='#'>Used Inventory</a></li>
                        <li><a href='#'>Trade-In</a></li>
                        <li><a href='#'>Cybertruck</a></li>
                        <li><a href='#'>Roadaster</a></li>

                    </div>
                ) : null
            }

        </div>
    )
}

export default Navbar;
