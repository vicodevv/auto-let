import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;
    ${tw`
        max-w-screen-2xl
        w-full
        justify-between
        lg:pl-12
        lg:pr-12
        pl-3
        pr-3
    `};

`;

const LeftContainer = styled.div`
    ${tw`
        flex
        flex-col
        w- 1/2
    `};
`;

const RightContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-1/2
        relative
        mt-20
    `};
`;

const Slogan = styled.h1`
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        md:text-5xl
        sm:text-3xl
        lg:font-black
        md:font-extrabold
        text: black
        mb-4
        sm:leading-smug
        lg:leading-normal
        xl:leading-relaxed
    `};
`;

const Description = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow:hidden
        max-h-12
        text-gray-800
    `}; 
`;
export function TopSection(){


}