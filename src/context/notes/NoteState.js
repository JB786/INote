import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{

    const initialNotes = [
        {
          "_id": "64f34df2888f21dc2fec4742",
          "user": "64ef63525cb64bbc1bc7b30b",
          "title": "Schedule",
          "description": "Learn Backend Development",
          "tag": "Personal",
          "date": "2023-09-02T15:00:02.969Z",
          "__v": 0
        },
        {
          "_id": "64f34e09888f21dc2fec4744",
          "user": "64ef63525cb64bbc1bc7b30b",
          "title": "Task",
          "description": "Build a website using Backend.",
          "tag": "Technical",
          "date": "2023-09-02T15:00:25.304Z",
          "__v": 0
        },
        {
          "_id": "64f34e2e888f21dc2fec4746",
          "user": "64ef63525cb64bbc1bc7b30b",
          "title": "Task-2",
          "description": "Design Frontend of the same website.",
          "tag": "Technical Thug",
          "date": "2023-09-02T15:01:02.534Z",
          "__v": 0
        },
        {
          "_id": "64f37459fe7f51121eebce37",
          "user": "64ef63525cb64bbc1bc7b30b",
          "title": "My Title",
          "description": "Design Notes Display",
          "tag": "Design",
          "date": "2023-02-09T17:43:30.000Z",
          "__v": 0
        },
        {
          "_id": "64f37496cbb34d04a6eb039a",
          "user": "64ef63525cb64bbc1bc7b30b",
          "title": "My Title 2",
          "description": "Design Notes Display 2",
          "tag": "Design 2",
          "date": "2023-09-01T18:30:00.000Z",
          "__v": 0
        },
        {
          "_id": "64f375355ade584e170538f7",
          "user": "64ef63525cb64bbc1bc7b30b",
          "title": "My Title 3",
          "description": "Design Notes Display 3",
          "tag": "Design 3",
          "date": "2023-09-02T17:47:05.211Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(initialNotes)

      // Add a note
      const addNote = (title, description, tag)=>{
        
        console.log("Adding the Note...");

        //Todo -API Call
        const note = {
          "_id": "64f395355ade584e170538f7",
          "user": "64ef63525cb64bbc1bc7b30b",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-09-02T17:47:05.211Z",
          "__v": 0
        }

        setNotes(notes.concat(note))
      }


      // Delete a note
      const deleteNote = (id)=>{
        console.log("Deleting the Note with id " + id);
        const newNote = notes.filter((note)=>{return note._id !== id})
        setNotes(newNote)
      }

      // Edit a note
      const editNote = ()=>{

      }

    return (
        <NoteContext.Provider  value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


// This file contains the syntax for using context API. We can consider it as boiler plate for context API. Such that we can Wrap our App.js code inside <NoteState>...</NoteState> so that we can access context API in any component. In the above code {props.children} means other components in which we are going to use our context API. Value is takes something we want to pass as context in any component.

// we can also pass value as a state and then update that state using update function and then pass that function in value along with useState state variable.

// Then we can use that function which is passed as context in component