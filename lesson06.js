/*         EXERCISE          */
/*---------------QUESTION NUMBER 01------------>*/

/*
const character="vishwas ramesh nalawade";
const countletter=(character)=>
{
  let count=0;
  for(let i=0;i<(character.length);i++)
  {
    count++;

  }
  return count;

}


const print=(character)=>
{

   for(let i=0;i<character.length;i++)
   {
    console.log(character[i]);
   }


   for(letter in character)
   {
    console.log(letter[i]);
   }

   


}
print(character);

console.log(countletter(character));


*/




/*question 4

const arr=[10,20,30,40,50];
console.log(arr);
function sumArray(arr)
{
    let sum=0;
    for(let i=0;i<(arr.length);i++)
    {
        sum=sum+arr[i];
        console.log(arr[i]);
    }
    return sum;
}

console.log("sum of elements in the array : "+sumArray(arr));

*/

/*
const max=(numbers)=>
{
    let maxi=numbers[0];
    for(let it of numbers)
    {
      if(it>maxi)
       maxi=it;

    }
    return {maxi};
}

const maxarray=[1,-23,4,5,2];
console.log(max(maxarray));
console.log(maxarray([1,2,3,3,4,6,7,8,9,]);

*/
/*
const letterfrequency=(phrase)=>
{

  const obj=
  {
    alphabets:0,
  }
  
  const str=phrase
  for(let it of phrase)
  {
     let result=0;
    if(it!='*')
    {
     for(let i=0;i<(str.length);i++)
     {
       if(it==str[i])
       {
        result++;
        str[i]='*';
       }
     }
    }

    obj[it]=result;
  }
 return obj;

}*/



/*
const frequency=(phrase)=>
{
  let fre={}
  for(const letter of phrase)
  {
    //check if given letter is in the frequency object
    if(letter in fre)
    {
      fre[letter]+=1;
    }
    else
    {
      fre[letter]=1;
    }
  }
  return fre;
}

const sentence="vishwas";
console.log(frequency(sentence));
console.log(letterfrequency(sentence));
*/


/*count word frequency*/

/*
const wordarray=(ph)=>
{
  let count={};//object
  let arr=[]
  arr=phrase.split(' ');//spilt the phrase by " " symbol

  for(const word of arr)
  {
    if(word in count)
    {
      count[word]+=1;//if word is present then increment the count
    }
    else
    {
      count[word]=1;//if element is  not present then onlt initilaise it with 1
    }
  }
  return count;

}
const phrase="vishwas nalawade";
console.log(wordarray(phrase));*/

/*project 4 :calculate frequency of words is used*/
/*
const wordarray=(ph)=>
{
  let count={};//object
  let arr=[]
  arr=phrase.split(' ');//spilt the phrase by " " symbol

  for(const word of arr)
  {
    if(word in count)
    {
      count[word]+=1;//if word is present then increment the count
    }
    else
    {
      count[word]=1;//if element is  not present then onlt initilaise it with 1
    }
  }
  return count;

}

let user=prompt("enter your phrase so we give you result of your answer!!!");
console.log(wordarray(user));
*/













