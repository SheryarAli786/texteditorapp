import React, { useState } from 'react'
import { AligmentContainer, Alignments, HeadingContainer, HeadingImage, SideBarInputContainer, SvgContainer, TextSize } from './SideBarHeaderStyle'
import Dropdown from './Dropdown'
interface sideBarHeaderProps{
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updateAlignment: (alignment: string) => void;
  updateTextColor: (color: string) => void;
  updateBackgroundColor: (color: string) => void;
}
const SideBarHeader:React.FC<sideBarHeaderProps> = ({ handleInputChange, updateAlignment,updateTextColor,updateBackgroundColor}) => {
  return (
    <div>
        <HeadingContainer> 
        <HeadingImage src="images/icons8-less-than-50.png" alt="" />
        <h1>Header</h1> 
        </HeadingContainer>
        <SideBarInputContainer>
          <h4>Store Branding</h4>
          <input type="text" onChange={handleInputChange}/>
        </SideBarInputContainer>
        <AligmentContainer>
          <h5>Alignment</h5>
          <Alignments>
          <svg onClick={() => updateAlignment('start')} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-left" viewBox="0 0 16 16">
           <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
           </svg>
           <svg onClick={() => updateAlignment('center')} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-center" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
             </svg>
             <svg onClick={() => updateAlignment('end')} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-right" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
        </svg>
          </Alignments>
          <TextSize>
            <span>Text Size</span>
            <input type="range"/>
          </TextSize>
        </AligmentContainer>
        <Dropdown forBackground={false} onSelectColor={updateTextColor}/>
        <Dropdown forBackground={true} onSelectColor={updateBackgroundColor}/> 
    </div>
  )
}

export default SideBarHeader
