import styled from 'styled-components';
import React from "react";
import tw from 'twin.macro';
import { Navbar } from '../../components/navbar';

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        overflow-x-hidden
        items-center
    `}

`;

export function Homepage(){
    return(
    <PageContainer>
        <Navbar />
    </PageContainer>
    );
}