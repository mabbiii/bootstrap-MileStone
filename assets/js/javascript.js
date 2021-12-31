// // var sumingUp = (a,b) => (a+b);
// // console.log(sumingUp(2,2));


// let property = {
//     john: "deisgner",
//     tim: "developer",
//     may: "accountant"
// };

// let  {john, tim, may} = property;
// console.log(john, tim, may); 

// let nums = [1,2,3,4,5];

// let arr = [];
// for(itm of nums){
//     arr.push(itm*2);
// }
// console.log(arr);

// var multiplyTwo = function(num){
//     return num *2;
// }
// let mtwo = nums.map(multiplyTwo);
// console.log(mtwo);

// let ntwo = nums.map(num => num*2);
// console.log(ntwo);





const students = [
    {
        id : 1,
        name: "muneeb",
        age: 26,
        profrssion: 'developer',
        skill: [
            {name: 'javascript', yearsofexperiance: 1},
            {name: 'html', yearsofexperiance: 5},
            {name: 'css', yearsofexperiance: 3},
        ]
    },

    {
        id: 2,
        name: "shahid",
        age: 29,
        profrssion: 'developer',
        skill: [
            {name: 'javascript', yearsofexperiance: 0},
            {name: 'html', yearsofexperiance: 4},
            {name: 'css', yearsofexperiance: 2},
        ]
    },
    
    {
        id: 3,
        name: "arslan",
        age: 26,
        profrssion: 'designer',
        skill: [
            {name: 'javascript', yearsofexperiance: 1},
            {name: 'html', yearsofexperiance: 1},
            {name: 'css', yearsofexperiance: 5},
        ]
    }
]

// var result = students.map(student => ({ id: student.id, name: student.name, age: student.age }));
// console.log(result)
let studentName = students.map(student => [student.id, student.name]);
//console.log(studentName);
let muneeb = students.filter(student => student.name === 'muneeb');
//console.log(muneeb);

let has5yearsexp = skill => skill.yearsofexperiance >= 5;
//console.log(has5yearsexp)
let hasstrongskill = student => student.skill.filter(has5yearsexp).length > 0;
let candidates = students.filter(hasstrongskill);

let names = candidates.map(n => n.name);
//console.log(names);
//console.log();
//console.log(experiance);
// let arr = [2, 3, 5, 7]

// arr.map(function(element, index, array){
//     console.log(element);
//     console.log(index);
//     console.log(array);
//     return element;
// }, 80);

// var arr = [{
//     id: 1,
//     name: 'bill'
//   }, {
//     id: 2,
//     name: 'ted'
//   }]
  
//   var result = arr.map(person => ({ value: person.id, text: person.name }));
//   console.log(result)


const teamMembers = [
    {
        name: 'muneeb',
        profrssion: 'developer',
        yearsofexperiance: 3
    },
    {
        name: 'shahid',
        profrssion: 'designer',
        yearsofexperiance: 4
    },
    {
        name: 'arslan',
        profrssion: 'full stack developer',
        yearsofexperiance: 5
    }
]
let countyearsofex = teamMembers.reduce((arr, crr) => arr + crr.yearsofexperiance,0);
//console.log(countyearsofex);
let num = [0, 1, 2, 3, 4];
let sum = num.reduce((acc, crr) => acc + crr);


fetch("http://ci-swapi.herokuapp.com/api/")
    .then(response => response.json())
    .then(data => {
        document.getElementById("content").innerText = data.vehicles;
    })