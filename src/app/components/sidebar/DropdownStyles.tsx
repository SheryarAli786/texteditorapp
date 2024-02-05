import styled from "styled-components";

export const MainContainer=styled.div`
     padding:10px;
     display: flex;
span{
     display: flex;
     align-items: center;
     font-weight: 600;
     font-size: 15px;
     padding-left: 10px;
}
`
export const SelectedColor=styled.div`
`
export const ColorMainContainer=styled.div`
     border: 1px solid #ccc;
     border-radius: 4px;
     display: inline-block;
     position: relative;
     cursor: pointer;
     width: 50px;
     height: 30px;
`
export const SelectingColor=styled.div`
     width: 50px;
     height: 30px;
     border-radius: 4px;
`
export const ColorDrop=styled.div`
       position: absolute;
       margin-top: 5px;
       top: 100%;
       left: 0;
       align-items: center;
       height: 250px;
       width: 50px;
       background-color: #fff;
       z-index: 1000;
       overflow-y: auto;
       box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
       &::-webkit-scrollbar {
       width: 0px;     
  }
`

export const Colors=styled.div`
      width: 40px;
      border-radius: 2px;
      height: 25px;
      margin-top: 5px;
      margin-left: 5px;
      cursor: pointer;
`