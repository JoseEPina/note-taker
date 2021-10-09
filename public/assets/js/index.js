let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

if (window.location.pathname === '/notes') {
   noteTitle = document.querySelector('.note-title');
   noteText = document.querySelector('.note-textarea');
   saveNoteBtn = document.querySelector('.save-note');
   newNoteBtn = document.querySelector('.new-note');
   noteList = document.querySelectorAll('.list-container .list-group');
}

const getNotes = () =>
   fetch('/api/notes', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
   });

const saveNote = (note) =>
   fetch('/api/notes', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
   });

const deleteNote = (id) =>
   fetch(`/api/notes/${id}`, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',
      },
   });

if (window.location.pathname === '/notes') {
   saveNoteBtn.addEventListener('click', handleNoteSave);
   newNoteBtn.addEventListener('click', handleNewNoteView);
   noteTitle.addEventListener('keyup', handleRenderSaveBtn);
   noteText.addEventListener('keyup', handleRenderSaveBtn);
}
