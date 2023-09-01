import NoteContext from "./noteContext";

const NoteState = (props)=>{

    return (
        <NoteContext.Provider  value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


// This file contains the syntax for using context API. We can consider it as boiler plate for context API. Such that we can Wrap our App.js code inside <NoteState>...</NoteState> so that we can access context API in any component. In the above code {props.children} means other components in which we are going to use our context API. Value is takes something we want to pass as context in any component.

// we can also pass value as a state and then update that state using update function and then pass that function in value along with useState state variable.

// Then we can use that function which is passed as context in component