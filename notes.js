const fs=require('fs');
const chalk=require('chalk');

const getNotes=()=>
{
    console.log(chalk.white.inverse('Your Notes...'));
    const data=loadNotes();
    // console.log(data);
    data.forEach(indv => {
        console.log(chalk.yellow(indv.title));
    });
}

const readNotes=(t)=>{
    const data=loadNotes();
    const dublicateData=data.find((ind_ele)=>ind_ele.title==t)
    if(dublicateData=== undefined)
    {
        console.log(chalk.red.bold('No Note Found'));
    }
    else{
        console.log(chalk.white.bold(t));
        console.log(chalk.yellow(dublicateData.body));
    }
}

const removeNote=(t)=>
{
    // console.log('removing note');
    // console.log(t);

    const notes=loadNotes();
    const dublicateNotes=notes.filter((ind_note)=>ind_note.title!=t)
    if(dublicateNotes.length==notes.length){
        
        console.log(chalk.red.inverse('No Note Found'));
    }
    else{
        saveNotes(dublicateNotes);
        console.log(chalk.green.inverse('Note removed'));
    }
}

const addNote=(t,b)=>
{
    const notes=loadNotes();
    // console.log(notes);
    // console.log('hello');
    // console.log(notes);

    // const dublicateNotes=notes.filter((ind_note)=>ind_note.title === t)
    const dublicateNote=notes.find((ind_note)=> ind_note.title === t)
    // debugger
    if(!dublicateNote)
    {
        const newob={
            title:t,
            body:b,
        }
        notes.push(newob);
        // console.log(notes);
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'));
        // console.log('new note added');
    }
    else{
        console.log(chalk.red.inverse('note title is already take'));
        // console.log('note title is already take');
    }


   
}

const saveNotes=(notes)=>
{
    const newdataJSON =JSON.stringify(notes);
    // console.log(newdataJSON);
    fs.writeFileSync('notes.json',newdataJSON);
}

const loadNotes=()=>
{
    try{
        const dataBuffer=fs.readFileSync('notes.json');
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
    
}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    getNotes:getNotes,
    readNotes:readNotes,
};