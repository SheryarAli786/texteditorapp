import React, { useState } from "react";
import { ColorDrop, ColorMainContainer, Colors, MainContainer, SelectedColor, SelectingColor } from "./DropdownStyles";

interface ColorDropdownProps {
  forBackground?: boolean;
  onSelectColor: (color: string) => void;
}

const ColorDropdown: React.FC<ColorDropdownProps> = ({ forBackground = false, onSelectColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const colors: string[] = [
    "#03fccf", "black", "white", "#11fad0", "#37dec0", "#3febe5", "#08fcf4", "#0acefa", "#62daf5", "#1ed9fa", "#27a8f2", "#0f69fa",
    "#1919fa", "#8a61f2", "#7f0cfa", "#dd11f7", "#f707e3", "#7afab4", "#32fa8d", "#75fab2", "#f01fae", "#ff175d",
    "#9ef7c8", "#e8f584", "#e5f759", "#fad47a", "#fcc43f", "#fab105", "#fc7b5d", "#fc8e74", "#fa481e"
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
    onSelectColor(color)
    setIsOpen(false);
    // if (forBackground) {
    //   // Handle background color selection
    //   document.body.style.backgroundColor = color;
    // } else {
    //   // Handle text color selection
    //   document.body.style.color = color;
    // }
  };

  return (
    <MainContainer>
      <ColorMainContainer onClick={toggleDropdown}>
        {selectedColor ? (
          <SelectingColor style={{ backgroundColor: selectedColor }}></SelectingColor>
        ) : (
          <SelectedColor></SelectedColor>
        )}

        {isOpen && (
          <ColorDrop>
            {colors.map((color, index) => (
              <Colors
                key={index}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelection(color)}
              ></Colors>
            ))}
          </ColorDrop>
        )}
      </ColorMainContainer>
      <span>{forBackground ? "Background Color" : "Text Color"}</span>
    </MainContainer>
  );
};

export default ColorDropdown;
