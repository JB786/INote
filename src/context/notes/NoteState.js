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
          "_id": "64f34e09888f21dc2fec4744",
          "user": "64ef63525cb64bbc1bc7b30b",
          "title": "Task",
          "description": "Build a website using Backend.",
          "tag": "Technical",
          "date": "2023-09-02T15:00:25.304Z",
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
          "_id": "64f34e09888f21dc2fec4744",
          "user": "64ef63525cb64bbc1bc7b30b",
          "title": "Task",
          "description": "Build a website using Backend.",
          "tag": "Technical",
          "date": "2023-09-02T15:00:25.304Z",
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
          "_id": "64f34e09888f21dc2fec4744",
          "user": "64ef63525cb64bbc1bc7b30b",
          "title": "Task",
          "description": "Build a website using Backend.",
          "tag": "Technical",
          "date": "2023-09-02T15:00:25.304Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(initialNotes)

    return (
        <NoteContext.Provider  value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


// This file contains the syntax for using context API. We can consider it as boiler plate for context API. Such that we can Wrap our App.js code inside <NoteState>...</NoteState> so that we can access context API in any component. In the above code {props.children} means other components in which we are going to use our context API. Value is takes something we want to pass as context in any component.

// we can also pass value as a state and then update that state using update function and then pass that function in value along with useState state variable.

// Then we can use that function which is passed as context in component