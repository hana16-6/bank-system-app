import styled, { css } from 'styled-components'

export const TableContainer = styled.div`
width:80%;
margin: 0 auto;
border:1px solid #8ea7b2;
border-bottom:none;
border-right:none;
background-color:#fff;
box-shadow: 3px 5px 16px 2px rgba(122,151,164,0.57);
`
export const Table = styled.div`
display:flex;
justify-content: center;
border-bottom: 1px solid #8ea7b2;
:hover {
  background-color: #dfe6e9;
}
`

export const TableTD = styled.div`
flex-basis:20%;
border-right:1px solid #8ea7b2;
padding: 10px 0;
text-align:center;
font-weight: bold;

${props => props.transactionsID && css`
  flex-basis:33.3333%;
`}
`
export const NavUl = styled.ul`
display:flex;
list-style:none;
`
export const NavLI = styled.li`
margin-right:20px
`

export const NavContainer = styled.nav`
display:flex;
align-items: center;
justify-content: space-between
`

export const HomeHeader = styled.div`
display:flex;
align-items: center;
`
export const HeaderCols = styled.div`
flex-basis:50%;
`

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em 0 0 ;
  padding: 10px 28px;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

export const PopUpConatiner = styled.div`
background-color: white;
margin: 50px auto;
min-height: 300px;
border-radius: 10px;
min-width: 500px;
text-align:center;
padding:20px;
`

export const IconSpan = styled.span`
float: right;
`
export const InfoSpan = styled.span`
font-weight: bold;
`
export const NumInput = styled.input`
padding: 10px 5px;
    margin-right: 18px;
    border-radius: 5px;
    outline: none;
    border: 1px solid gray;
`