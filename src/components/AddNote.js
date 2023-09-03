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
    }

    const onChange = (events) => {
        setNote({...note, [events.target.name]:events.target.value})
    }

    return (
        <div className='container my-4'>
            <h2>Add New Note</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-dark" onClick={handleAddClick}>Add</button>
            </form>
        </div>
    )
}

export default AddNote
