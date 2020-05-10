const students = [
    {id: 21, name: 'Omar'},
    {id: 22, name: 'Don' },
    {id: 20, name: 'Rahim' },
    {id: 27, name: 'Karim' }
]

//traditional rule
const output = [];
for (let i = 0; i < students.length; i++) {
    output.push(students[i].name);
}
console.log(output);

//es6
const ids = students.map( s => s.id);
console.log(ids);

//filter 
const lesser = students.filter( s => s.id < 25 );
console.log(lesser);

//find
const biggerOne = students.find( x => x.id > 25 );
console.log(biggerOne);