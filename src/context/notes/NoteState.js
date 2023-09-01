import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{

    const s1 = {
        "name": "JB",
        "class": "8-F"
    }

    const [state, setState] = useState(s1);

    const update = ()=>{
        setTimeout(()=>{

            setState({
                "name": "Ryner",
                "class": "12-F"
            })
        },2000
        )
    }

    return (
        <NoteContext.Provider  value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


// This file contains the syntax for using context API. We can consider it as boiler plate for context API. Such that we can Wrap our App.js code inside <NoteState>...</NoteState> so that we can access context API in any component. In the above code {props.children} means other components in which we are going to use our context API. Value is takes something we want to pass as context in any component.

// we can also pass value as a state and then update that state using update function and then pass that function in value along with useState state variable.