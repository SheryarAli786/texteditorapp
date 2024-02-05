'use client'
import React from 'react';
import { MainContainer } from './HeaderStyle';
interface HeaderProps{
  openSlidebar:()=>void;
  headerText: string;
  alignment: string;
  textColor: string | null;
  backgroundColor: string | null;
}
const Header:React.FC<HeaderProps> = ({openSlidebar, headerText, alignment, textColor,backgroundColor}) => {
  return (
   <MainContainer onClick={openSlidebar} style={{ justifyContent: alignment , backgroundColor: backgroundColor||'white'}}>
    <h1 style={{ color : textColor||'black'}}>{headerText}</h1>
   </MainContainer>
  )
}

export default Header
