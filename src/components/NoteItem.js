import React from 'react'

function NoteItem(props) {
    const { note } = props;
    return (
        <div className='col-md-4'>
            <div class="card text-center my-3">
                <div class="card-header bg-dark text-light">
                    {note.tag}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description}</p>
                </div>
                <div class="card-footer d-flex justify-content-between bg-warning">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i className='fas fa-eraser'></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
