import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
:root{
  font-family: 'Kiwi Maru', serif;
}
body{
  /* background: rgb(35, 35, 35);
  color: rgb(240, 240, 240); */
  background: #1A1A1A;
  background: -moz-linear-gradient(top, #3B3B3B 0%, #292929 50%, #1A1A1A 100%);
  background: -webkit-linear-gradient(top, #3B3B3B 0%, #292929 50%, #1A1A1A 100%);
  background: linear-gradient(to bottom, #3B3B3B 0%, #292929 50%, #1A1A1A 100%);
  /* display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center; */
  /* margin: 0 auto;
  display: block; */
}
*{
  user-select: none;
}
`;
