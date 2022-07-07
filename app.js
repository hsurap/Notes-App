// const add=require('./utlis.js')

// // const name="Parush";
// const sum=add(2,6);
// console.log(sum);

// const my_notes=require('./notes.js');
// console.log(my_notes());

// var validator = require('validator');
// var ans=validator.isEmail('foo@barcom');
// console.log(ans);
// console.log(validator.isURL('google.com'));

// const chalk=require('chalk');
// console.log(chalk.green('success'));
// console.log(chalk.red('fail'));
// console.log(chalk.bold('Parush'));
// console.log(chalk.blue.inverse('fail'));
// console.log(chalk.red.inverse('success'));

// console.log(process.argv[2]);





//PROJECT CODE



const note=require('./notes.js');
const chalk=require('chalk');
const yargs = require('yargs');
const { demandOption, argv } = require('yargs');

// const command=process.argv[2];
// if(command=== 'add'){
//     console.log('Adding notes');
// }else if(command==='remove'){
//     console.log('Removing notes');
// }

// console.log(process.argv);

//customize yargs version
yargs.version('1.1.0');

//in notes application
//people should able  add,remove,read individual,list all notes

// create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string',
        },
        body:{
            describe:'Details about Your Notes',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
        // console.log(`Title = ${argv.title}`);
        // console.log(`Content = ${argv.body}`);
        note.addNote(argv.title,argv.body)
        // console.log(argv);
    }
})
// create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note Title',
            type:'string',
            demandOption:true,
        }
    },
    handler(){
        // console.log('removing a note');
        note.removeNote(argv.title);
    }
})

// read note
yargs.command({
    command:'read',
    describe:'Reading a note',
    builder:{
        title:{
            describe:'Note Title',
            type :'string',
            demandOption:true,
        }
    },
    handler(argv){
        // console.log('reading a note');
        note.readNotes(argv.title);
    }
})

// listing all notes
yargs.command({
    command:'list',
    describe:'Listing all note',
    handler(argv){
        // console.log('listing all note');
        note.getNotes();
    }
})

yargs.parse();
// console.log(yargs.argv);







