'use client'
import React, { useState } from 'react'
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import SideBar from './components/sidebar/SideBar';

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [headerText, setHeaderText] = useState('');
  const [alignment, setAlignment] = useState('start');
  const [textColor, setTextColor] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState<string | null>(null);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeaderText(event.target.value);
  };
  const openSlideBar=()=>{
    setShowSidebar(true)
  }
  const updateTextColor = (color: string) => {
    setTextColor(color);
  };

  const updateBackgroundColor = (color: string) => {
    setBackgroundColor(color);
  };
  const updateAlignment = (newAlignment: string) => {
    setAlignment(newAlignment); 
  };
  return (
    <div className="container">
      <Header  openSlidebar={openSlideBar} headerText={headerText}
        alignment={alignment}
        textColor={textColor} 
        backgroundColor={backgroundColor}/>
      {showSidebar &&(
        <SideBar handleInputChange={handleInputChange}
          updateAlignment={updateAlignment}
          updateTextColor={updateTextColor}
          updateBackgroundColor={updateBackgroundColor} />
      )}
    </div>
  )
}

export default Home
