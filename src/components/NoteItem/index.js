// Write your code here

import {ListItems, TitleHeading, NoteDescription} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails

  return (
    <ListItems>
      <TitleHeading>{title}</TitleHeading>
      <NoteDescription>{note}</NoteDescription>
    </ListItems>
  )
}

export default NoteItem
