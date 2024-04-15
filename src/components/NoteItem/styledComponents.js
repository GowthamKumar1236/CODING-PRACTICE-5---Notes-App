// Style your elements here
import styled from 'styled-components'

export const ListItems = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px 16px;
  @media screen and (min-width: 768px) {
    width: 32%;
    min-width: 257px;
    margin: 0px 8px 24px 8px;
  }
`
export const TitleHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 19px;
  color: #334155;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
export const NoteDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
  @media screen and (max-width: 767px) {
    font-size: 11px;
  }
`
