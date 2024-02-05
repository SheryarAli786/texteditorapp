'use client'
import React from 'react'
import { MainContainer } from './SideBarStyle'
import SideBarHeader from './SideBarHeader'
interface sideBarProps{
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updateAlignment: (alignment: string) => void;
  updateTextColor: (color: string) => void;
  updateBackgroundColor: (color: string) => void;
}
const SideBar :React.FC<sideBarProps>= ({handleInputChange, updateAlignment,updateTextColor,updateBackgroundColor}) => {
  return (
    <MainContainer>
        <SideBarHeader handleInputChange={handleInputChange}
         updateAlignment={updateAlignment}
         updateTextColor={updateTextColor}
         updateBackgroundColor={updateBackgroundColor}/>
    </MainContainer>
  )
}

export default SideBar
