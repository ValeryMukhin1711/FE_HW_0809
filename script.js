// 1)Используя метод reduce, посчитайте сколько людей проголосовали.

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

// const votersVoted = voters.filter(() => voted=true);

// console.log(votersVoted);

const numberVoted = voters.reduce(
    (accumulator, item) => {
    
return (accumulator + (item.voted ? 1:0))
}
, 0);

console.log(numberVoted);

// forEach

let whoVoted = 0;
voters.forEach(el => {
    if (el.voted == true) {
        whoVoted += 1;
    }

});

console.log(whoVoted);

