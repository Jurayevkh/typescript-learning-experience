//Using breakpoint and watch process 

//In VS code you can click to Run and Debug section and create launch.json (Node.js)
//in launch.json add key "preLaunchTask" and give value " "tsc: build - tsconfig.json"
//ok that's it , after this:
let age:number=23; //put breakpoint to this line ,after click start debbuging or hot key F5
//With hot key F10 you can step over in Variables part you can see our variable Age with value 23
if(age>20)         //and line by line watch the changes
    age+=10;       //here our variable increments to 10 . You can watch change in "Watch" section 
console.log(age);

let num:number=36_345_634;//you can use underscore in numbers to be more readable
let text="Type annotate";//we don't must annotate type of variable compiler of typescript can detect type of variab.
let nothing;//but what if we don't give value to our variable , in such cases typescript assumes that this variable as any

//The type Any
//In Typescript Any is built in type that means any kind of values. If we declare value but don't initialize
//typescript compiler assumes that this variable type of any , but this is against of whole idea of using
//cause typescript's purpose is type safety , and this work lose main feature of typescript. Here another example for understand type any:

function displayParameter(parameter){ //here we have compilation error that means we don't give a type of parameter
    console.log(parameter);
}   
//we have two options for solve this error
//1.Give type any to parameter:
function displayParameter2(parameter:any){
    console.log(parameter);
}
//2.Configure tsconfig.json type-checking section , "noImplicityAny" row to false 


//Arrays
//Ok let's rememeber how we declare arrays in JS:
let arrayInJS=[1,3,12,"23"];//in Javascript we haven't type annotate and we can add any value to array
//but thats too against to whole idea of typescript. Let me show you arrays in Typescript
let arrayInTypescript:number[]=[1,2,"2"];//here we declare array in Typescript and annotate type of array after that
                                         //we give other type value to this but we got a error here.
//but what if we don't annotate type in Typescript
let array=[]; //here our array gets type an any

//Tuples
let user:[number,string]=[1,"Rustambek"];//tuples in Typescript ,we give length types and we must fill with values
                                         //in length of types and with that types we can't add other values 

//Enums   
//So if you know c# or java enums ,concept enum of typescript also like them
//Write name of members enum recommended to use PascalCase
enum Regions{Tashkent,Samarkand,Bukhara,Andijan}; //by default typescript compiler gives value starting from 0 and increments
enum Countrys{Uzbekistan=1,Kazakhstan,Tajikistan,Turkmenistan}; //but here we give value and here starts from 1 and increments
                                                                //we can give any values to any variable we want
let myRegion:Regions=Regions.Tashkent
console.log(myRegion);                                    

//functions 
//typescript functions almost like javascript funcs. but difference is in ts func. have type of return value and we must annotate types of parameter 
function funcName(parameter:number,parameter2:string):string/*return type of our function*/{
    return parameter+parameter2;
}

funcName(2,"2");//in typescript where we call function we must give parameters exact no more , no less
                //but in js it's normal that giving additional parameter

function funcName2(parameter:number ,parameter2="string" /*we can give default values in typescript to parameters*/){
    return parameter+parameter2;
}

funcName2(2);


//Objects
//Objects in Javascript are Dynamic:
let customer={id:1,name:"Abdurauf"};
//you can add new property to object in JS like this:
customer.age=23; //but you can see it is impossible in typescript. We get a error "doesn't exist"
//so you can declare and give type to properties in typescript, let me show you :
let player:{
    readonly id:number,//we can make properties readonly and after that we can't change value of this property in out
    name:string,
    age?:number/*this property is nullable and giving value to this property optional*/}
    ={ id:1,name:"Benzema",age:38};


//Type alias
//In previuos theme we talk about objects and this way to declaring objects is not readable and difficult to using
//and it's doesn't fit DRY principle (don't repeat yourself), ok you may have question like "what we can do"
//we need type aliases for condition like this:
type Player={
readonly id:number,
name:string,
age:number
}

//if you know about classes in c#, java or other language ,logic of type aliases like them, that's it

let secondPlayer:Player={id:1,name:"Kroos",age:34};


//Union types
//With union types we can give values or paramter to method or variable more than one type
function print(value:number|string):void{//using vertical bar you can give more than one type
    //if here write parameter and check methods you can see only methods common on types that we give on parameter
    if(typeof value==='number')
        console.log(value);   //you may not write scope if you logic of operator in one line
    else if(typeof value=='string')
        console.log(value); //but after checking type you can see only methods that have on this type
}

//Intersection types
//Intersection similar to union , but difference is:
    //Union represents that a variable can take more than one type of value
    //Intersection types represent values that have properties from multiple types.
interface Dog {
    name: string;
    bark(): void;
}

interface Robot {
    serialNumber: number;
    compute(): void;
}

let dogRobot: Dog & Robot;
dogRobot = {
    name: "Buddy",
    bark: () => {  },
    serialNumber: 123,
    compute: () => { }
};
    

//Javascript built-in types
  //number
  //string
  //boolean
  //null
  //undefined
  //object
//And Typescript extends this list new types like:
  //any
  //unknown
  //never
  //enum
  //tuple
