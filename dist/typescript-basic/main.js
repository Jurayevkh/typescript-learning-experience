"use strict";
let age = 23;
if (age > 20)
    age += 10;
console.log(age);
let num = 36345634;
let text = "Type annotate";
let nothing;
function displayParameter(parameter) {
    console.log(parameter);
}
function displayParameter2(parameter) {
    console.log(parameter);
}
let arrayInJS = [1, 3, 12, "23"];
let arrayInTypescript = [1, 2, "2"];
let array = [];
let user = [1, "Rustambek"];
var Regions;
(function (Regions) {
    Regions[Regions["Tashkent"] = 0] = "Tashkent";
    Regions[Regions["Samarkand"] = 1] = "Samarkand";
    Regions[Regions["Bukhara"] = 2] = "Bukhara";
    Regions[Regions["Andijan"] = 3] = "Andijan";
})(Regions || (Regions = {}));
;
var Countrys;
(function (Countrys) {
    Countrys[Countrys["Uzbekistan"] = 1] = "Uzbekistan";
    Countrys[Countrys["Kazakhstan"] = 2] = "Kazakhstan";
    Countrys[Countrys["Tajikistan"] = 3] = "Tajikistan";
    Countrys[Countrys["Turkmenistan"] = 4] = "Turkmenistan";
})(Countrys || (Countrys = {}));
;
let myRegion = Regions.Tashkent;
console.log(myRegion);
function funcName(parameter, parameter2) {
    return parameter + parameter2;
}
funcName(2, "2");
function funcName2(parameter, parameter2 = "string") {
    return parameter + parameter2;
}
funcName2(2);
let customer = { id: 1, name: "Abdurauf" };
customer.age = 23;
let player = { id: 1, name: "Benzema", age: 38 };
let secondPlayer = { id: 1, name: "Kroos", age: 34 };
function print(value) {
    if (typeof value === 'number')
        console.log(value);
    else if (typeof value == 'string')
        console.log(value);
}
let dogRobot;
dogRobot = {
    name: "Buddy",
    bark: () => { },
    serialNumber: 123,
    compute: () => { }
};
let sum = 25;
let sum1 = 34;
function displayOnLog(value) {
    if (value)
        console.log(value);
    else
        console.log("null");
}
displayOnLog(null);
//# sourceMappingURL=main.js.map