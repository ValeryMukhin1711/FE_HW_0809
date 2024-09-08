// 4)Создайте массив объектов со свойствами 'name' и 'age'. Используя методы массива, создайте новый массив, содержащий только те объекты, возраст которых больше 30 лет.

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


// const newArr = voters.filter((item) => item.age > 30);
const newArr = voters.filter((item) => {
    // console.log((item.age > 30))
    return (item.age > 30);
});




console.log(newArr);

// newArr.map(x => console.log('name '+x.name));

const newArray = [];

voters.forEach(element => {
    if (element.age > 30) {
        newArray.push(element);
    }
    
});

console.log(newArray);

