/*______________________________________OBJECTS____________________>
*/



/*
//declaring the object with name person
const person={
    name:"vishwas",
    shirt:"white",
}*/







/*
//Accessing the object elements
console.log(person.name);
console.log(person['name']);
console.log(person.shirt);
console.log(person['shirt']);
console.log(person);

*/








/*
//assign object
person.phone=8309320694;//phone property get added to object property
console.log(person);

const clever=
{
    name:"abdul",
    shirt:"white_black",

}
clever["phone"]=34756734;//adding new property
console.log(clever);*/
/*




//dispalying the objects using  array function

const introducer=(name,shirt)=>{
   const person={
    name:name,
    shirt:shirt,
   }
   const intro=`hi my name is ${name} and currently i wearing ${shirt} shirt`;
   return intro;
    }


console.log(introducer("vishwas","white"));
*/
//exercise code for me
const instructor=(name,shirt)=>
{
    const major=
    {
        name:name,
        shirt:shirt,
        assets:500000,
        liabilties:1000,
    //error//networth:assets-liabilities
      //correct method  
        networth:function()
        {
            return this.assets-this.liabilties;
        }
    }
    
    const intro=`i want to marry with you because my name is ${name} and you can able to ${name} on me. and my income is nearly is about $${major.assets-major.liabilties} USD and ${major.networth()}`;
    return intro;
}

console.log(instructor("vishwas","black_white"));

