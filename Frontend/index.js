const API_URL = 'http://localhost:5000/api/notes';


const notesList = document.getElementById('notesList');
const BtnFetchNotes = document.getElementById('btnViewAll');
const NoteForm = document.getElementById('noteForm');


async function fetchAllNotes(){
    const response = await fetch(`${API_URL}/all`);
    const data = await response.json();
    
    notesList.innerHTML = '';
    data.data.forEach(note =>{
        const div = document.createElement('div');
        div.classList.add('note');
        div.innerHTML = `<hr/><h3>${note.title}</h3><p>${note.content}</p><p><em>By: ${note.name} (${note.email})</em></p><p><small>${new Date(note.date).toLocaleString()}</small></p>`;
        notesList.appendChild(div);
    })
}


BtnFetchNotes.addEventListener('click',fetchAllNotes);

NoteForm.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('note').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    const response = await fetch(`${API_URL}/addNote`,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({title,content,name,email}),

    })

    const data = await response.json();
    alert(data.message);
    NoteForm.reset();
})

