const jsonfile=require('jsonfile');
const simpleGit=require('simple-git');
const random=require('random');
const moment=require('moment');
const FILE_PATH='./data.json';
const makeCommit = n => {
    if(n===0) return simpleGit.push();
    //bindind every square pixel in the github graph by x and y coordinate
    //x is the number of weeks
    const x = random.int(0,54);
    //y is the number of days
    const y = random.int(0,6);
    const DATE = moment().subtract(1,'y').add(1,'d').add(x,'w').add(y,'d').format();
    const data={
        date:DATE
    }
    console.log(DATE);
    //writing data to file, to count different commits
    jsonfile.writeFile(FILE_PATH, data, ()=>{
        simpleGit().add(FILE_PATH).commit(DATE, {'--date':DATE}),makeCommit(this,--n);
    })
}


//here specify the number of commits
makeCommit(1);