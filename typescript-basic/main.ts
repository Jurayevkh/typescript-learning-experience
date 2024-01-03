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
