/*______________________________________ARRAYS_______________________________________________________________________*/

const cars = ["Saab", "Volvo", "BMW"]
console.log(cars)
console.log(cars[0]);

//grab the 2nd index 
console.log(cars[1],cars[2]);


//Some Array Methods
//1.push 
cars.push("jaguar");//add elements in the array
console.log(cars);
cars.push("ferrari");
console.log(cars);

//2.slice method cut the portion from 0 to 1
console.log(cars.slice(0,2));//0 is inclusive and 2 is exclusive
console.log(cars.slice(2,4));//print from 2 to 3

//3.index of 
console.log(cars.indexOf("BMW"));//return the index of bmw string

//4..length
console.log(cars.length);//start from 1

//5.sort
const a=cars.sort();
console.log(a);

//6.reverse()
const arr=(cars.reverse());
console.log(arr);

//7.fill(value,start,end) by deafault it takes all index 
(cars.fill("audi",0,3));//end index is included
console.log(cars);

//8..join(separator)//used to separate all elements of the array by operator
const abcd=cars.join("     ");
console.log(abcd);

//.toString()
console.log(cars.toString());



