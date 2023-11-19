/* eslint-disable */
import React, {Fragment, useState} from "react";
import {Nav,Ul, SectionLeft, SectionRight, BottonHamburguer, Slogan, ButtonNav,Perfil,DrowdownMenu,UlDropDown} from "../Styles/NavComponent.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faBars} from "@fortawesome/free-solid-svg-icons";
import DropDownItem from "./DropDownItem.jsx";

import { Link, Outlet } from 'react-router-dom';


const Navbar = () => {

    //const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false)

    return (
        <Fragment>
            <Nav>
                <Link to={"/"}>
                    <SectionLeft>
                            <Slogan>Tu pasaporte a experiencias inolvidables</Slogan> 
                    </SectionLeft>
                </Link>
                <SectionRight>

                    <BottonHamburguer>
                        <FontAwesomeIcon icon={faBars}/>
                    </BottonHamburguer>

                    {/* <Ul>
                        <li>
                            <ButtonNav >
                            Registrarte
                            </ButtonNav>
                        </li>
                        <li>
                            <ButtonNav >
                                Iniciar Sesión
                            </ButtonNav>
                        </li>

                    </Ul> */}
                    
                    <Perfil onClick={() => {setOpen(!open)}}>
                    <h3>BF</h3>
                    <DrowdownMenu className={`dropdown-menu ${open? "active" : "inactive"}`}>
                        <UlDropDown>
                            <DropDownItem text={"Mi perfil"}/>
                            <DropDownItem text={"Dashboard"}/>
                            <DropDownItem text={"Cerrar sesión"}/>
                            
                        </UlDropDown>

                    </DrowdownMenu>
                    </Perfil> 
                </SectionRight>

            </Nav>
            <Outlet/>
        </Fragment>
    )
}

export default Navbar;