import React, { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AccountContextVariable } from './../../context/AccountContext'
import './NavGuest.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Cartlogooffcanvas from './Cartlogooffcanvas';

const NavGuest = () => {

    const { account_state, account_dispatch } = useContext(AccountContextVariable)
    const [hoveredName1, setHoveredName1] = useState(null);
    const [hoveredName2, setHoveredName2] = useState(null);
    const [hoveredName3, setHoveredName3] = useState(null);
    const [hoveredName4, setHoveredName4] = useState(null);
    const [hoveredName5, setHoveredName5] = useState(null);
    const [hoveredName6, setHoveredName6] = useState(null);



    const Account = [
        {
            name: 'Login',
            to: '/login'
        },
        {
            name: 'Register',
            to: '/register'
        }
    ]

    const Store = [
        {
            name: 'Hair Extension',
            to: '/hairextension'
        },
        {
            name: 'Hair Essential',
            to: '/hairessential'
        },
        {
            name: 'Hair Unit',
            to: '/hairunit'
        }
    ]

    const Salon = [
        {
            name: 'Hair Dresser Session',
            to: '/hairdresser'
        },
        {
            name: 'Services',
            to: '/section'
        }
    ]

    const Policies = [
        {
            name: 'Refund',
            to: '/refund'
        },
        {
            name: 'Privacy',
            to: '/privacy'
        },
        {
            name: 'Shipping',
            to: '/shipping'
        },
        {
            name: 'T & C s',
            to: '/terms'
        }
    ]

    const Others = [
        {
            name: 'Blog',
            to: '/blog'
        },
        {
            name: 'Contact Us',
            to: '/contactus'
        }
    ]









    return (
        <>
            <Navbar expand="md" className="bg-white py-4" sticky='top' style={{ width: "100%", marginBottom: "0", paddingBottom: "0", marginTop: "0", paddingTop: "0" }}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-auto' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" d-flex justify-content-center align-items-center" style={{ width: "100%" }}>

                            {/* one */}
                            <div className="aname-item diva"
                                onMouseEnter={() => setHoveredName1('1')}
                                onMouseLeave={() => setHoveredName1(null)}>
                                <Link className='nav-link fonta mx-2' style={{ fontSize: "18px" }} to='/hairextension'>Store</Link>
                                {
                                        hoveredName1 === '1' && (
                                            <div className="adropdown">
                                                {Store.map((value, index) => (
                                                    <div key={index}>
                                                        <Link to={value.to} className="adropdown-link">{value.name}</Link>
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    }
                            </div>
                            {/* two */}
                            <div className="aname-item diva"
                                onMouseEnter={() => setHoveredName2('2')}
                                onMouseLeave={() => setHoveredName2(null)}>
                                <Link className='nav-link fonta mx-2' style={{ fontSize: "18px" }} to='/hairdresser'>Salon</Link>
                                {
                                        hoveredName2 === '2' && (
                                            <div className="adropdown">
                                                {Salon.map((value, index) => (
                                                    <div key={index}>
                                                        <Link to={value.to} className="adropdown-link">{value.name}</Link>
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    }
                            </div>
                            {/* three */}
                            <div className="aname-item diva"
                                onMouseEnter={() => setHoveredName3('3')}
                                onMouseLeave={() => setHoveredName3(null)}>
                                <Link className='nav-link fonta mx-2' style={{ fontSize: "18px" }} to='/refund'>Policies</Link>
                                {
                                        hoveredName3 === '3' && (
                                            <div className="adropdown">
                                                {Policies.map((value, index) => (
                                                    <div key={index}>
                                                        <Link to={value.to} className="adropdown-link">{value.name}</Link>
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    }
                            </div>
                            {/* four */}
                            <div className="aname-item diva"
                                onMouseEnter={() => setHoveredName4('4')}
                                onMouseLeave={() => setHoveredName4(null)}>
                                <Link className='nav-link fonta mx-2' style={{ fontSize: "18px" }} to='/blog'>Others</Link>
                                {
                                        hoveredName4 === '4' && (
                                            <div className="adropdown">
                                                {Others.map((value, index) => (
                                                    <div key={index}>
                                                        <Link to={value.to} className="adropdown-link">{value.name}</Link>
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    }
                            </div>

                            {/* 5th with choice of being guest or user */}
                            {account_state?.people == 'guest' && (
                                <div className="aname-item diva"
                                    onMouseEnter={() => setHoveredName5('5')}
                                    onMouseLeave={() => setHoveredName5(null)}>
                                    <Link className='nav-link fonta mx-2' style={{ fontSize: "18px" }} to='/'>Account</Link>

                                    {
                                        hoveredName5 === '5' && (
                                            <div className="adropdown">
                                                {Account.map((value, index) => (
                                                    <div key={index}>
                                                        <Link to={value.to} className="adropdown-link">{value.name}</Link>
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    }
                                </div>
                            )}
                            {account_state?.people == 'user' && (
                                <div className="aname-item diva"
                                    onMouseEnter={() => setHoveredName5('5')}
                                    onMouseLeave={() => setHoveredName5(null)}>
                                    <button className='btn text-dark fonta ' style={{ fontSize: "18px" }} onClick={() => {
                                        account_dispatch({
                                            type: "LOGOUT"
                                        })
                                    }}>Logout</button>
                                </div>
                            )}

                            {/* six */}
                            {account_state?.people == 'user' && (
                                <div className="aname-item diva"
                                    onMouseEnter={() => setHoveredName6('6')}
                                    onMouseLeave={() => setHoveredName6(null)}>
                                    <Link className='nav-link fonta mx-2' style={{ fontSize: "18px" }} to='/userorders'>Orders</Link>
                                </div>
                            )

                            }


                            {/* Saven */}
<div className=''>

            <Cartlogooffcanvas />
</div>





                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                    {/* <hr /> */}

        </>
    )
};

export default NavGuest;
