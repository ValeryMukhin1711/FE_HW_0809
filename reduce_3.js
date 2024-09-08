// 3)Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершеннолетних и несовершеннолетних людей.

const voters = [
    {name:'Bob' , age: 10, },
    {name:'Jake' , age: 32, },
    {name:'Kate' , age: 9, },
    {name:'Sam' , age: 17, },
    {name:'Phil' , age: 1, },
    {name:'Ed' , age:88, },
    {name:'Tami' , age: 33, },
    {name: 'Mary', age: 5, },
    {name: 'Becky', age: 4, },
    {name: 'Joey', age: 23, },
    {name: 'Jeff', age: 18, },
    {name: 'Zack', age: 18, }
];

const numberOver18 = voters.reduce((acc, current) => {
    return (acc + (current.age > 18 ? 1 : 0))
}, 0);

console.log(numberOver18);

const numberUnder18 = voters.reduce((acc, current) => {
    return (acc + (current.age < 19 ? 1 : 0))
}, 0);

console.log(numberUnder18);


// foreach

let over18 = 0;

voters.forEach(element => {
    if (element.age>18) {
        over18 +=1;
    }
}
)

console.log(over18);




