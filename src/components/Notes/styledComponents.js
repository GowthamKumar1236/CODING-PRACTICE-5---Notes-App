// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 58px;
  padding-top: 28px;
  @media screen and (max-width: 767px) {
    padding: 18px;
    padding-left: 28px;
  }
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 38px;
  color: #4c63b6;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 38px;
  }
`
export const NotesCardContainer = styled.div`
  width: 100%;
  box-shadow: 0px 4px 16px #aab8c8;
  padding: 28px;
  border-radius: 12px;
  margin-top: 38px;
  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`

export const FormContainer = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`

export const TitleInput = styled.input`
  font-family: "Roboto";
  font-size: 14px;
  height: 30px;
  width: 350px;
  padding: 10px;
  cursor: pointer;
  outline: none;
  border-width: 0px;
  margin-bottom: 9px;
`
export const NoteInput = styled.textarea`
  max-width: 95%;
  font-family: "Roboto";
  font-size: 14px;
  height: 100px;
  padding: 10px;
  cursor: pointer;
  outline: none;
  border-width: 0px;
`
export const AddBtn = styled.button`
  background-color: #4c63b6;
  font-family: "Roboto";
  font-size: 14px;
  height: 30px;
  width: 60px;
  cursor: pointer;
  outline: none;
  border-width: 0px;
  color: #ffffff;
  align-self: flex-end;
  margin-top: 15px;

`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`
export const Img = styled.img`
  width: 10%;
  @media screen and (max-width: 767px) {
    width: 30%;
    padding: 20px;
  }
`
export const NoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #334155;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
export const NoParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  @media screen and (max-width: 767px) {
    font-size: 11px;
  }
`
export const NotesListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`
