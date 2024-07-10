a=5;
var a=9;
console.log(a);
let b=20;

console.log(b);
{
    let b=90;
    console.log(b);
}
console.log(typeof(b));
var st="hi";
console.log(typeof(st));
var s=true;
console.log(typeof(s));
var x;
console.log(typeof(x));
var arr1=['orange','apple',10];
console.log(arr1[0]);
console.log(arr1.length);
arr1.push('pineapple')
console.log(arr1)
arr1.pop()
console.log(arr1)
//javascript objects
let person={
    name:'maya',
    age:20,
    loc:'tvm'
}
console.log(person.loc)
let arr2=[{
    name:'maya',
    age:20,
    loc:'tvm'
},
{
    name:'miya',
    age:25,
    loc:'mala6jun'
}
]
console.log(arr2[1].loc)
function add(a,b) {
    var sum= a+b;
    console.log(sum);
}
add(2,3);
function add1(a,b){
    return a+b;
}

var sum1=add1(2,3)
console.log(sum1);
var z=10;
console.log(z)
var x='10';
console.log(x,z)

if (z>x) {
    console.log(' e is greater')
    
}else if (z==x){
    console.log('e is equal')
} else  {
    
    console.log('e is not')
}
//looping statements
var array=[1,2,3,4,5]
for (let i= 0; i < array.length; i++) {
    console.log(array[i])
}
for (const key in person) {
    console.log(person[key])

}
for (const i of array) {
    console.log(i)
    
}
