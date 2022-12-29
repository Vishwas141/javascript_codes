/*______________Array Higher Order Methods__________________________*/
/*







//1.......map.......
 let arr=[1,2,3,4,5,6,7,8];
 arr.map(number=>console.log(number));


 let result=arr.map(number=>number*2);
 console.log(result);*/








 //2....filter

 /* simple function without any high order degree method
 const filter=(number,greater)=>
 {
    let result=[];
    for(let num of number)
    {
        if(num>greater)
        {
            result.push(num);
        }
    }

    return result;
 }

 const arr=filter([1,2,3,4,5,6],3);
 console.log(arr);
 */

 let result=[];
 result=[1,2,3,4,5,6];

 let arr=result.filter(num=>num>4||num<2);
 console.log(arr);


 const actors=[
    {name:"Jhony",net:1000000},{name:"amber",net:20},{name:"leonardo",net:2300000}
 ]
 let res=(actors.filter(actor=>actor.net>20));

 console.log(res);




 