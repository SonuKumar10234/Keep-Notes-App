const addbtn=document.querySelector('#add');

const updatelsdata=()=>{
    const textAreaData= document.querySelectorAll('textarea');
    const notes=[];
    console.log(textAreaData);
    textAreaData.forEach((note)=>{
      return notes.push(note.value);
    })
    console.log(notes);

    localStorage.setItem('notes',JSON.stringify(notes));
}
const addNewNote=(text='')=>{
    const note=document.createElement('div');
    note.classList.add('note');
    const htmlData=`
    <div class="operation">
         
    <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
</div>
<div class="main ${text ?"":"hidden"} "></div>
<textarea class="${text? "hidden":""}"></textarea>
 `;
 note.insertAdjacentHTML('afterbegin',htmlData);
//  console.log(note);


 //getting the refrence
 const editbtn=note.querySelector('.edit');
 const deletebtn=note.querySelector('.delete');
 const maindiv=note.querySelector('.main');
 const textArea=note.querySelector('textarea');

 //deleteing the node
 deletebtn.addEventListener('click',()=>{
    note.remove();
    updatelsdata();
 })
 //toggle using edit btn

 textArea.value=text;
 maindiv.innerHTML=text;

 editbtn.addEventListener('click',()=>{
    maindiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
 })
  
textArea.addEventListener('change',(event) =>{
    const value=event.target.value;
    // console.log(value);
    maindiv.innerHTML=value;
    
    updatelsdata();

})

 document.body.appendChild(note);
}
// getting data from local storage
const notes=JSON.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach((note)=>addNewNote(note))
};

addbtn.addEventListener('click',()=>addNewNote());