import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';

function Notes() {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({
        id: "",
        etitle: "",
        edescription: "",
        etag: ""
    })

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({
            id: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag
        })
    }

    const handleEditClick = (events) => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
    }

    const onChange = (events) => {
        setNote({ ...note, [events.target.name]: events.target.value })
    }

    return (
        <>
            <AddNote />

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-light">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" value={note.etitle} name="etitle" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" value={note.etag} name="etag" onChange={onChange} required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer bg-warning">
                            <button ref={refClose} type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" className="btn btn-dark" onClick={handleEditClick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-4">
                <h2>Previous Notes</h2>
                <div className="container my-2">
                    {notes.length === 0 && "👀 No Entries Detected ✍️"}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
