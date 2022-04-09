import styled from "@emotion/styled";

export const List = styled.ul`
border: 1px solid grey;
box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.38);
margin-bottom: 15px;
`
export const Item = styled.li`
&:not(:last-child){
   margin-bottom: 10px; 
}
font-size: 18px;
`
export const Total = styled.p`
font-size: 24px;
font-weight: 900;
margin-bottom: 10px; 
text-align: right;
color: #505cfd;
&~p {
   font-size: 18px;
font-weight: 900;
margin-bottom: 0;
text-align: right;
color: #505cfd;  
}
`
