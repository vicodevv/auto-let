import React from "react";
import styled, {css} from "styled-components";
import tw from "twin.macro";
import  menuStyles  from "./menuStyles";
import { useMediaQuery } from "react-responsive";
import { slide as Menu } from "react-burger-menu";
import { SCREENS } from "../responsive";

const ListContainer = styled.div`
    ${tw`
        flex
        list-none
    `};
`;
    const NavItem = styled.li<{menu?: any}>`
    ${tw`
        text-xs
        text-black
        md:text-base
        font-medium
        mr-1
        cursor-pointer
        md:mr-5
        transition
        duration-300
        ease-in-out
        hover:text-gray-600
    `};
    ${({ menu }) => menu && css`
        ${tw`
            text-white
            mb-4
            text-xl
            focus: text-white
        `};
    `};
`;

export function NavItems() {

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })
    
    if (isMobile)
        return (
            <Menu right style = {menuStyles}>
            <ListContainer>
            <NavItem menu>
                <a href="#">Home</a>
            </NavItem>
            <NavItem menu>
                <a href="#">Cars</a>
            </NavItem>
            <NavItem menu>
                <a href="#">Services</a>
            </NavItem>
            <NavItem menu>
                <a href="#">Contact Us</a>
            </NavItem>
        </ListContainer>
        </Menu>
        );
    
    return (
        <ListContainer>
            <NavItem>
                <a href="#">Home</a>
            </NavItem>
            <NavItem>
                <a href="#">Cars</a>
            </NavItem>
            <NavItem>
                <a href="#">Services</a>
            </NavItem>
            <NavItem>
                <a href="#">Contact Us</a>
            </NavItem>
        </ListContainer>
    )
}