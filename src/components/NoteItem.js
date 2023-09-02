import React from 'react'

function NoteItem(props) {
    const { note } = props;
    return (
        <div className='col-md-4'>
            <div class="card text-center my-3">
                <div class="card-header">
                    {note.tag}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                <div class="card-footer text-body-secondary">
                    {note.date}
                </div>
            </div>
        </div>
    )
}

export default NoteItem
