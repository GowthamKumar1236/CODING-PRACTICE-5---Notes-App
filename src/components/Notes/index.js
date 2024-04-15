// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  BgContainer,
  Heading,
  NotesCardContainer,
  FormContainer,
  TitleInput,
  NoteInput,
  AddBtn,
  BottomContainer,
  Img,
  NoHeading,
  NoParagraph,
  NotesListContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState('')

  const onChangeTitle = event => setTitle(event.target.value)

  const onChangeNote = event => setNote(event.target.value)

  const onSubmitForm = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setNotesList(prevState => [...prevState, newNote])
    setTitle('')
    setNote('')
  }

  return (
    <BgContainer>
      <Heading>Notes</Heading>
      <NotesCardContainer>
        <FormContainer onSubmit={onSubmitForm}>
          <TitleInput
            type="text"
            value={title}
            placeholder="Title"
            onChange={onChangeTitle}
          />
          <NoteInput
            type="text"
            value={note}
            placeholder="Take a Note..."
            onChange={onChangeNote}
          />
          <AddBtn type="submit">Add</AddBtn>
        </FormContainer>
      </NotesCardContainer>
      {notesList.length < 1 ? (
        <BottomContainer>
          <Img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoHeading>No Notes Yet</NoHeading>
          <NoParagraph>Notes you add will appear here</NoParagraph>
        </BottomContainer>
      ) : (
        <NotesListContainer>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </NotesListContainer>
      )}
    </BgContainer>
  )
}

export default Notes
