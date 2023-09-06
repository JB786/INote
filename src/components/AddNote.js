import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';


function AddNote() {
    const context = useContext(noteContext);
    const { addNote } = context;


    const [note, setNote] = useState({
        title: "",
        description: "",
        tag: ""
    })

    const handleAddClick = (events) => {
        events.preventDefault();
        addNote(note.title, note.description, note.tag)

        // Emptied the fields after adding the note
        setNote({
            title: "",
            description: "",
            tag: ""
        })
    }

    const handleClearClick = () => {
        setNote({
            title: "",
            description: "",
            tag: ""
        })
    }

    const onChange = (events) => {
        setNote({ ...note, [events.target.name]: events.target.value })
    }

    return (
        <div className='container my-4'>
            <h2>Add New Note</h2>
            <form className='my-3' onSubmit={handleAddClick}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={note.title} name="title" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" value={note.description} name="description" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" value={note.tag} name="tag" onChange={onChange} required />
                </div>
                <div className='d-flex justify-content-center my-4'>
                    <button type="submit" className="btn btn-dark mx-3">Create Note</button>
                    <button type="reset" className="btn btn-danger" onClick={handleClearClick}>Clear Fields</button>
                </div>
            </form>
        </div>
    )
}

export default AddNote


// We use onSubmit on form instead of using onClick on button because we want our form to fill with minimum validations atleast like title and description should be 5 characters long or fields shouldn't be left empty therefore we use onSubmit on form rather than onClick on submit button.

// we use value attribute on the above input tags so that it will empty the fields after adding note.