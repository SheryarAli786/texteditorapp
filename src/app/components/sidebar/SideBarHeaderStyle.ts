import styled from "styled-components";
export const HeadingContainer=styled.div`
display: flex;
gap: 90px;
padding: 20px 0px 20px 10px;
border-bottom: 1px solid lightgray;
h1{
    font-weight: 800;
    font-size: 18px;
}
`
export const HeadingImage=styled.img`
  width: 25px;
  height: 25px;
`
export const SideBarInputContainer=styled.div`
 display: flex;
 flex-direction: column;
 border-bottom: 1px solid lightgray;
 padding: 20px 0px 30px 10px;
 h4{
    padding-bottom: 7px;
 }
 input{
    width: 90%;
    padding: 7px;
    border-radius: 3px;
    border: 2px solid #bdbdbd;  
    outline: none;
    &:focus{
        border: 2px solid skyblue;
    }
 }
`
export const AligmentContainer=styled.div`
 display: flex;
 flex-direction: column;
 border-bottom: 1px solid lightgray;
 padding: 20px 20px 30px 10px;
 h5{
  padding-bottom: 15px;
 }
`
export const SvgContainer=styled.div`

`
export const Alignments=styled.div`
display: flex;
border: 2px solid #bdbdbd;
border-radius: 5px;
svg{
  padding:8px 35px;
  height: 20px;
  width: 20px;
  border-right: 2px solid #bdbdbd;
  &:last-child {
   border: none;
  }
}
:hover{
  fill: white;
  background-color: #636262;
}
` 
export const TextSize=styled.div`
display: flex;
flex-direction: column;
padding-top: 20px;
span{
  font-size: 14px;
  padding-bottom: 25px;
}
input{
  --s: 2px; 
  width: 270px;
  height: var(--s); 
}
`
