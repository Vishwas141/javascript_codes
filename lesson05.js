/*_____________________LOOPS_______________________>*/

const fruits=["apple","banana","orange"];
//console.log(fruits)

/*
for(let i=0;i<(fruits.length);i++)
{ 
    console.log(i,fruits[i]);
}
*/
for(const fruit of fruits)
{
    console.log(fruit);
}



//print loop for this array
const number=[1,2,3,4,5,6];

for(let i=0;i<(number.length);i++)
{
    console.log(number[i]);
}

let sum=0;
for(const num of number)
{
    sum=sum+num;
    console.log(num);
}
console.log("sum of all elements in the array is "+sum);

//modify the arry using double function

const double=(numbers)=>
{
    let result=[]
    for(const num of numbers)
    {
       result.push(num*2);
    }
    console.log(result)

}


let result=[];//initialsise the array
for(let i=0;i<(number.length);i++)
{
    number[i]=number[i]*2;
    result.push(number[i]);
}



console.log(result);//dispalying the new result array
console.log(number);//dispalying the array
console.log(double(number));//passing array into function
console.log(double([1,2,3,4,5,6,7,8]));//anonyms array temporary used

function square(numbers)
{
    let result=[];
    for(const num of numbers)
    {
        result.push(num*num);
    }
    console.log(result);
}

console.log(square([1,2,3,4,5,7,6]));
console.log(square(number));
console.log(square(result));






