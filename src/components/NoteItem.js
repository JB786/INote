import React from 'react'

function NoteItem(props) {
    const { note } = props;
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
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className='fas fa-eraser'></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
