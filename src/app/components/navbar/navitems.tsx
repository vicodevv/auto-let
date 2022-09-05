import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useMediaQuery } from "react-responsive";
import { Slide as Menu } from "react-burger-menu";

const ListContainer = styled.div`
    ${tw`
        flex
        list-none
    `};
`;
    const NavItem = styled.li`
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

`;

export function NavItems() {

    
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