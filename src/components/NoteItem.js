import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext';


function NoteItem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-4'>
            <div className="card text-center my-3">
                <div className="card-header bg-dark text-light">
                    {note.tag}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between bg-warning">
                    <i className="fa-solid fa-pen-to-square" onClick={()=>{updateNote(note)}}></i>
                    <i className='fas fa-eraser' onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully.","success")}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
