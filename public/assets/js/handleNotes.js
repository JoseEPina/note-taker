// Show an element
const show = (elem) => {
   elem.style.display = 'inline';
};

// Hide an element
const hide = (elem) => {
   elem.style.display = 'none';
};

// activeNote is used to keep track of the note in the textarea
let activeNote = {};

const renderActiveNote = () => {
   hide(saveNoteBtn);

   if (activeNote.id) {
      noteTitle.setAttribute('readonly', true);
      noteText.setAttribute('readonly', true);
      noteTitle.value = activeNote.title;
      noteText.value = activeNote.text;
   } else {
      noteTitle.removeAttribute('readonly');
      noteText.removeAttribute('readonly');
      noteTitle.value = '';
      noteText.value = '';
   }
};

const handleNoteSave = () => {
   const newNote = {
      title: noteTitle.value,
      text: noteText.value,
   };
   saveNote(newNote).then(() => {
      getAndRenderNotes();
      renderActiveNote();
   });
};

// Delete the clicked note
const handleNoteDelete = (e) => {
   // Prevents the click listener for the list from being called when the button inside of it is clicked
   e.stopPropagation();

   const note = e.target;
   const noteId = JSON.parse(note.parentElement.getAttribute('data-note')).id;

   if (activeNote.id === noteId) {
      activeNote = {};
   }

   deleteNote(noteId).then(() => {
      getAndRenderNotes();
      renderActiveNote();
   });
};

// Sets the activeNote and displays it
const handleNoteView = (e) => {
   e.preventDefault();
   activeNote = JSON.parse(e.target.parentElement.getAttribute('data-note'));
   renderActiveNote();
};

// Sets the activeNote to and empty object and allows the user to enter a new note
const handleNewNoteView = (e) => {
   activeNote = {};
   renderActiveNote();
};

const handleRenderSaveBtn = () => {
   if (!noteTitle.value.trim() || !noteText.value.trim()) {
      hide(saveNoteBtn);
   } else {
      show(saveNoteBtn);
   }
};