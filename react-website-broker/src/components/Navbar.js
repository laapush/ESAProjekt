import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import styled from 'styled-components';
import {Modal} from './Modal';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vhs;
`

function Navbar() {

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev)
    }
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                       Online Broker
                        <i class='fab fa-typo3' />

                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/services'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/products'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/sign-in'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                               Login
                            </Link>
                        </li>
                    </ul>
                    <Container>
                        {button && <Button buttonStyle='btn--outline'>Login</Button>}
                    </Container>

                </div>
            </nav>
            {/*}
            <Container>
               {button && <Button onClick={openModal} buttonStyle='btn--outline'>Login</Button>}
                <Modal showModal ={showModal} setShowModal = {setShowModal}/>
            </Container>
            {*/}
        </>
    );
};
export default Navbar;