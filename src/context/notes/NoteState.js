import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

  const host = "http://127.0.0.1:5000"

  const initialNotes = []

  const [notes, setNotes] = useState(initialNotes)

  // Get all notes
  const getNotes = async () => {

    // console.log("Fetching All Notes...");

    //API Call

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlZjYzNTI1Y2I2NGJiYzFiYzdiMzBiIn0sImlhdCI6MTY5MzQxMDQ4MX0.3YCSC2xVEyI4_AeeEzPIxZ_w6gdzkwmFeX8nvTPGimA"
      }
    });

    const json = await response.json();
    setNotes(json);
  }



  // Add a note
  const addNote = async (title, description, tag) => {

    // console.log("Adding the Note...");

    //API Call

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlZjYzNTI1Y2I2NGJiYzFiYzdiMzBiIn0sImlhdCI6MTY5MzQxMDQ4MX0.3YCSC2xVEyI4_AeeEzPIxZ_w6gdzkwmFeX8nvTPGimA"
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = await response.json();
    setNotes(notes.concat(note))

  }


  // Delete a note
  const deleteNote = async(id) => {
    // console.log("Deleting the Note with id " + id);

    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlZjYzNTI1Y2I2NGJiYzFiYzdiMzBiIn0sImlhdCI6MTY5MzQxMDQ4MX0.3YCSC2xVEyI4_AeeEzPIxZ_w6gdzkwmFeX8nvTPGimA"
      }
    });

    const json = await response.json();
    // console.log(json)

    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote)
  }



  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // console.log("Editing the Note with id " + id);

    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlZjYzNTI1Y2I2NGJiYzFiYzdiMzBiIn0sImlhdCI6MTY5MzQxMDQ4MX0.3YCSC2xVEyI4_AeeEzPIxZ_w6gdzkwmFeX8nvTPGimA"
      },
      body: JSON.stringify({ title, description, tag })
    });

    const json = await response.json();
    // console.log(json)


    // Logic to edit in client
    const newNote = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {

        newNote[index].title = title
        newNote[index].description = description
        newNote[index].tag = tag

        break;
      }
    }
    setNotes(newNote)
  }

  

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;


// This file contains the syntax for using context API. We can consider it as boiler plate for context API. Such that we can Wrap our App.js code inside <NoteState>...</NoteState> so that we can access context API in any component. In the above code {props.children} means other components in which we are going to use our context API. Value is takes something we want to pass as context in any component.

// we can also pass value as a state and then update that state using update function and then pass that function in value along with useState state variable.

// Then we can use that function which is passed as context in component