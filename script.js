// let name = "AliSad90";
// let age = 30;
// let male = false;
// let firstName = undefined;
// let selectColor = null;
// console.log(name);
// typeof name;
// typeof age;
// typeof male;
// typeof selectColor;
// typeof firstName;
// let person = {
//     name: "ali",
//     age: 21,
//     male: true,
// };
// console.log(person.age);
// person.age = 40;
// console.log(person.age);
// let array = ["red", "blue"];
// console.log(array);
// console.log(array[1]);
// array[3] = 45;
// console.log(array);
// console.log(array.length);
// function aloha(name, lastName) {
//     console.log("hello " + name + " " + lastName);
// }
// aloha("ali", "sadeghi");
// function tavan2(number) {
//     return number * number;
// }
// console.log(tavan2(3) * tavan2(2));
// console.log(12 % 5);
// let mystr = 'today "ali" goft "hello!"';
// console.log(mystr);
// console.log("\tHello\nusing \\n in JS.");
// ali += "sadeghi";
// ali[6] = "w";
// console.log(ali);
// let str = "Zan Zendegi Azadi";
// let lastWord = str[str.length - 1];
// console.log(lastWord);
// let arrayw = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, [9, 10, 11]],
// ];
// console.log(arrayw[2][2][1]);
// let arr = [1, 2, 3, 4, 5];
// function firstQ(num) {
//     arr.push(num);
//     return arr.shift();
// }
// console.log(firstQ(6));
// console.log(firstQ(7));
// console.log(JSON.stringify(arr));
// function bar2(num) {
//     if (num === "11") return "true!";
//     else return "No!";
// }
// console.log(bar2(11));
// var temp = "";
// function yaaaaa(ali) {
//     switch (ali) {
//         case "a":
//             temp = "AAA";
//             break;
//         case "b":
//             temp = "BBB";
//             break;
//         case "c":
//             temp = "CCC";
//             break;
//         case "d":
//             temp = "DDD";
//             break;
//         default:
//             temp = "ZZZ";
//     }
//     return temp;
// }
// console.log(yaaaaa("h"));
// var ali = 20;
// function alier(boo) {
//     return boo < ali;
// }
// console.log(alier(30));
// console.log(20 > 30);
// var ali = {
//     "namee er": "feew",
//     age: 351,
//     male: false,
//     bday: {
//         day: 1,
//         month: 1,
//         year: 1111,
//     },
// };
// ali.age = 34 || [];
// console.log(ali);
// var ali = [];
// var l = 0;
// while (l >= 400) {
//     ali.unshift(l);
//     l++;
//     if (ali.length >= 200) {
//         break;
//     }
// }
// console.log(ali);
// var forrof=[];
// for (let i = 1; i < 70; i*=1.5) {
//     forrof.push(i);
// }
// console.log(forrof)
// var chap="";
// for (var i = 0; i < 20; i++)
// {
//     for (var j = i; j < 20; j++)
//     {
//         if(i%2==0)
//             chap+="/\\";
//         else
//         chap+="\\/";
//     }
//     chap+="\n";
// }
// console.log(chap);

// var contents =
// [
//     {
//         "firstName" : "a",
//         "lastName" : "B",
//         "number": "c",
//         "likes": "d",
//     },
//     {
//         "firstName" : "e",
//         "lastName" : "f",
//         "number": "g",
//         "likes": "h",
//     },
//     {
//         "firstName" : "i",
//         "lastName" : "j",
//         "number": "k",
//         "likes": "l",
//     },
//     {
//         "firstName" : "m",
//         "lastName" : "n",
//         "number": "o",
//         "likes": "p",
//     },
// ];
// function checker(name,thing)
// {
//     for(var i=0; i<contents.length;i++)
//     {
//         if(name===contents[i].firstName)
//         {
//             return contents[i][thing] || "NothingHere!";
//         }
//     }
//     console.log("No!")
// };
// console.log(checker("a","number"));
// console.log (Math.floor(Math.random()*20));
// let counter=[][num];
// function counterEr(min,max)
// {
//     for (var i = 0; i < 100; i++)
//     {
//         randomNum=Math.floor(Math.random() * (max - min + 1) + min);
//         for(var j=0;j<(max - min + 1);j++)
//         {
//             if(counter[j]===randomNum)
//             {
//                 counter[j][num++];
//             }
//             else
//             {
//                 counter[j].push(randomNum)
//             }
//         }
//         console.log(randomNum);
//     }
// }
// counterEr(5,10);
// let parse = "334";
// console.log (parseInt(parse)+2);
// var alo =30;
// alo >20 ? alo++: alo--;
// console.log(alo);
// let rand_num2 = function(min,max)
// {
//     return Math.floor(Math.random()*(max-min+1)+min);
// }
// let memory=[];
// let minNum=0;
// let maxNum=0;
// for(let i=0;i<20;i++)
// {
//     let temp_num=rand_num2(1,150);
//     console.log (temp_num);
//     if(memory.length==0)
//     {
//         minNum=temp_num;
//         maxNum=temp_num;
//     }
//     memory.push(temp_num);
// }
// for(let i=0;i<memory.length;i++)
// {
//     if(memory[i]>maxNum)
//     {
//         maxNum=memory[i];
//     }
//     if(memory[i]<minNum)
//     {
//         minNum=memory[i];
//     }
// }
// console.log("--------------\n"+minNum+" < ... < "+maxNum);
// let aloha = "/";
// function clickfunc() {
//     let firstChange = document.getElementById("change-num");
//     firstChange.innerText = aloha;
//     aloha += "\\/";
//     console.log(firstChange);
//     firstChange.innerText += "\\";
// }
// let counter = 0;
// function clickMe() {
//     let pChanger = document.getElementById("align-C");
//     pChanger.innerText =Math.floor(Math.random()*1001);
//     console.log(pChanger);
//     let btnChanger = document.getElementById("clickMeBtn");
//     counter++;
//     btnChanger.innerText = counter;
//     console.log(btnChanger);
// }
// let ali ="hello";
// let fd = "bye"
// console.log (ali + "."+ fd+"dsljlgh")
// let varName = document.getElementById("namee");
// let usarname="Awedwli";
// varName.innerText = usarname
let counter = 0;
let clickBtnVar = document.getElementById("align-C");
let saveBtnVar = document.getElementById("saves");
function clickBtn() {
    clickBtnVar.textContent = ++counter;
}
function saveBtn() {
    clickBtnVar.textContent = "0";
    saveBtnVar.textContent += counter + " - ";
    counter = 0;
}
function errorBtn() {
    let errorVar = document.getElementById("error-msg");
    errorVar.textContent = "Hello Im Error!";
}
let num1 = 8;
let num2 = 2;
let sumnum = 0;
document.getElementById("numl-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
document.getElementById("el").textContent = "--";
function sumShower() {
    document.getElementById("calc-res").textContent = sumnum;
    sumnum = 0;
}
function elShow(elmnt) {
    document.getElementById("el").textContent = elmnt;
}
function calcBtn1() {
    sumnum = num1 + num2;
    elShow("+");
    sumShower();
}
function calcBtn2() {
    sumnum = num1 - num2;
    elShow("-");
    sumShower();
}
function calcBtn3() {
    sumnum = num1 / num2;
    elShow("/");
    sumShower();
}
function calcBtn4() {
    sumnum = num1 * num2;
    elShow("*");
    sumShower();
}
let randomArray = ["hi", "hello", "aloha", "slm", "chow"];
for (let i = 0; i < randomArray.length; i++) {
    document.getElementById("for-loop").textContent += randomArray[i] + " - ";
}
function rollTas() {
    document.getElementById("tas-output").textContent =
        Math.floor(Math.random() * 6) + 1;
}
let person = {
    firstName: "Ali",
    lastName: "Sadeghi",
    age: 21,
    male: true,
    showInfo: function () {
        // console.log(person);
    },
};
person.showInfo();
let stdnt1 = {
    namE: "Ali",
    last: "Sadeghi",
    age: 21,
    color: "Blue",
    male: true,
};
let stdnt2 = {
    namE: "Roham",
    last: "Babayi",
    age: 39,
    color: "Red",
    male: true,
};
let stdnt3 = {
    namE: "Zahra",
    last: "Karami",
    age: 77,
    color: "Yellow",
    male: false,
};
let stdnt4 = {
    namE: "Saba",
    last: "Sadeghi",
    age: 17,
    color: "Orange",
    male: false,
};
let stdnt5 = {
    namE: "Navid",
    last: "Ahmadi",
    age: 22,
    color: "Purple",
    male: true,
};
let stdntCounter = 1;
function gtBtn() {
    stdntCounter++;
    showStdnt();
}
function ltBtn() {
    stdntCounter--;
    showStdnt();
}
function showStdnt() {
    if (stdntCounter == 6) stdntCounter = 1;
    if (stdntCounter == 0) stdntCounter = 5;
    switch (stdntCounter) {
        case 1:
            document.getElementById("name-el").textContent = stdnt1.namE;
            document.getElementById("last-el").textContent = stdnt1.last;
            document.getElementById("age-el").textContent = stdnt1.age;
            document.getElementById("color-el").textContent = stdnt1.color;
            document.getElementById("male-el").textContent = stdnt1.male;
            break;
        case 2:
            document.getElementById("name-el").textContent = stdnt2.namE;
            document.getElementById("last-el").textContent = stdnt2.last;
            document.getElementById("age-el").textContent = stdnt2.age;
            document.getElementById("color-el").textContent = stdnt2.color;
            document.getElementById("male-el").textContent = stdnt2.male;
            break;
        case 3:
            document.getElementById("name-el").textContent = stdnt3.namE;
            document.getElementById("last-el").textContent = stdnt3.last;
            document.getElementById("age-el").textContent = stdnt3.age;
            document.getElementById("color-el").textContent = stdnt3.color;
            document.getElementById("male-el").textContent = stdnt3.male;
            break;
        case 4:
            document.getElementById("name-el").textContent = stdnt4.namE;
            document.getElementById("last-el").textContent = stdnt4.last;
            document.getElementById("age-el").textContent = stdnt4.age;
            document.getElementById("color-el").textContent = stdnt4.color;
            document.getElementById("male-el").textContent = stdnt4.male;
            break;
        case 5:
            document.getElementById("name-el").textContent = stdnt5.namE;
            document.getElementById("last-el").textContent = stdnt5.last;
            document.getElementById("age-el").textContent = stdnt5.age;
            document.getElementById("color-el").textContent = stdnt5.color;
            document.getElementById("male-el").textContent = stdnt5.male;
            break;
    }
    document.getElementById("counter-el").textContent =
        ".: " + stdntCounter + " :.";
}
document.getElementById("click-box").addEventListener("click", function () {
    document.getElementById("click-box").textContent = "Hello";
});
const boxesEl = document.getElementById("too-much-box");
let htmlSaver = [];
for (let i = 0; i < 50; i++) {
    htmlSaver += "<div>" + i + "</div>";
}
boxesEl.innerHTML = htmlSaver;
// const helllo = 100;
// function hi() {
//     const helllo = 200;
//     console.log(helllo);
// }
// hi();
// function morning(name) {
//     return `Good morning ${name.toUpperCase()}`;
// }
// function afternoon(name) {
//     return `Good afternoon ${name.repeat(3)}`;
// }
// function mainTxt(myname, cb, name) {
//     console.log(`Hello and ${cb(name)}, my name is ${myname}`);
// }
// mainTxt("ali", morning, "zahra");
// mainTxt("zahra", afternoon, "ali");

// const people = [
//     { name: "ali", age: 21, position: "programer", num: [1, 3, 5] },
//     { name: "saba", age: 17, position: "artist", num: [8, 5, 3] },
//     { name: "zahra", age: 40, position: "gamer", num: [9, 4, 1] },
//     { name: "arvin", age: 11, position: "allaf", num: [7, 0, 2] },
// ];
// const aloha = people.map(function (item) {
//     console.log("Hello!");
//     return (item.name = item.name.toUpperCase());
// });
// people.forEach(function (item) {
//     console.log(item.name);
// });
// const workers = [
//     {
//         name: "ali",
//         age: 21,
//         position: "programmer",
//         num: [1, 3, 5],
//         salary: 200,
//     },
//     { name: "saba", age: 17, position: "artist", num: [8, 5, 3], salary: 300 },
//     { name: "zahra", age: 40, position: "gamer", num: [9, 4, 1], salary: 400 },
//     {
//         name: "arvin",
//         age: 11,
//         position: "programmer",
//         num: [7, 0, 3],
//         salary: 600,
//     },
// ];
// const upWorker = workers.map(function (person) {
//     person.name = person.name.toUpperCase();
// });
// const pWorkers = workers.filter(function (person) {
//     return person.position === "programmer";
// });
// const nWorkers = workers.find(function (person) {
//     return person.num[2] == 3;
// });
// pWorkers.forEach(function (person) {
//     console.log(person.name);
// });
// console.log(nWorkers.name);
// console.log(workers[1].salary);
// const salWorrkers = workers.reduce(function (jam, newItem) {
//     jam += newItem.salary;
//     console.log(`new item: ${newItem.salary}`);
//     console.log(`totoal: ${jam}`);
//     return jam;
// }, 0);
// console.log(Math.PI)
// const num = 3.45678;
// console.log(Math.ceil(num))
const fate = new Date();
document.getElementById(
    "date-el"
).textContent = `Today's date : ${fate.getFullYear()} / ${fate.getMonth()} / ${fate.getDate()}`;
let redDiv = document.getElementsByTagName("div");
redDiv[10].style.color = "red";
redDiv[10].style.background = "yellow";
redDiv[10].style.border = "3px solid blue";
let yellowClass = document.getElementsByClassName("style-class");
yellowClass[0].style.color = "purple";
yellowClass[0].style.background = "green";
yellowClass[0].style.border = "3px solid red";
let greener = document.querySelector("#lt-btn");
greener.style.color = "green";
let qAll = document.querySelectorAll("div");
qAll[2].style.border = "10px solid rgb(74, 0, 0)";
qAll[2].style.borderRadius = "5px";
const objFunc = {
    fName: "ali",
    Lname: "Sad",
    num: 23,
    printObj: function () {
        return this.fName + " " + this.Lname;
    },
};
// console.log(objFunc.printObj());
let ctrlBtn = document.querySelector("#control-btn");
function cntrlClick() {
    ctrlBtn.textContent = "onclick";
    ctrlBtn.style.background = "blue";
}
function cntrlHover() {
    ctrlBtn.textContent = "onmouseover";
    ctrlBtn.style.background = "red";
}
function cntrlMouseOut() {
    ctrlBtn.textContent = "onmouseout";
    ctrlBtn.style.background = "purple";
}
document.getElementById(
    "div-str0"
).textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum earum dolorum vero possimus in adipisci quas voluptas, laborum distinctio, sequi ratione sed inventore modi est minus quae nobis magnam soluta. Numquam, corrupti. Quos perferendis fugiat delectus totam aperiam iste? Ducimus, quam quibusdam. Modi iure, maiores nostrum accusantium corrupti quia magni qui distinctio. Asperiores necessitatibus deserunt, nihil explicabo a dolorum quis dolor voluptate, perspiciatis, quibusdam provident est distinctio voluptas! Illo dolorum repellat quos error facilis mollitia voluptatibus, sed possimus quas doloribus cumque ab enim inventore ullam vero earum. Hic neque quasi quod. Deserunt ab, incidunt saepe error perferendis quibusdam atque tenetur.`;

let textStr0 = document.getElementById("div-str0").innerHTML;
let arrStr = textStr0.split(" ");
let textStr1 = "";
let textStr2 = "";
let textStr3 = "";
function strFor(start, end, adder) {
    for (let i = start; i < end; i++) {
        adder += arrStr[i] + " ";
    }
    return adder;
}
function strFunc() {
    let startStr = document.querySelector("#start-str").value;
    let endStr = document.querySelector("#end-str").value;
    textStr1 = "";
    textStr2 = "";
    textStr3 = "";
    if (startStr && endStr) {
        if (startStr > endStr) {
            let hi = startStr;
            startStr = endStr;
            endStr = hi;
        }
        if (startStr < 0) startStr = 0;
        if (endStr < 0) endStr = 0;
        textStr1 = strFor(0, startStr, textStr1);
        textStr2 = strFor(startStr, endStr, textStr2);
        textStr3 = strFor(endStr, arrStr.length, textStr3);
        // console.log(textStr2);
        document.getElementById("div-str0").style.display = "none";
        document.getElementById("div-str1").textContent = textStr1;
        document.getElementById("div-str2").textContent = textStr2;
        document.getElementById("div-str3").textContent = textStr3;
    }
}
document.querySelector("#btn-str").addEventListener("click", function () {
    document.querySelector("#start-str").value = "";
    document.querySelector("#end-str").value = "";
    document.getElementById("div-str0").style.display = "inline";
    document.getElementById("div-str1").textContent = "";
    document.getElementById("div-str2").textContent = "";
    document.getElementById("div-str3").textContent = "";
});
// const finder = (document.getElementById("rand-finder").textContent).split(" ");
// finder.filter(function(item){
//     if(item=="et")
//         console.log(item)
// })
// const finder = document.getElementById("rand-finder").textContent;
// console.log(finder.indexOf("er"))
// console.log(finder.search(/er/g))
// console.log(finder.match(/er/gi));
// console.log(finder.match("er"));
// console.log(`hello ${2*2}`)
// console.log(isNaN(100/"hi"))
// console.log(typeof NaN)
let num = 2;
let txtInfinity = "";
while (num != Infinity) {
    txtInfinity += "num ^ 2 = ";
    num *= num;
    txtInfinity += num + "<br>";
}
document.getElementById("infinity-p").innerHTML = txtInfinity;
// console.log(20/0)
// let x=900.3456
// console.log(x.toPrecision(3))
// console.log(parseInt("10 years"))
// console.log(parseInt("ali 10 go"))
// console.log(parseInt("10 20 30"))
// let xx=Infinity;
// console.log(xx)
let ar = [12, 23, 75, 34, 73, 14];
// console.log(ar.sort());
ar = ar.sort();
let txtHtml = "<ul>";
ar.forEach(function (item) {
    txtHtml += `<li>${item}</li>`;
});
txtHtml += "</ul>";
document.getElementById("sort-arr").innerHTML = txtHtml;
const arrJoin = [1, 2, 3, 4, 5, 6];
// console.log(arrJoin.join(" - "));
const spliceNum = [1, 2, 3, 4, 5, 6];
// spliceNum.splice(2,1,6,7);
// console.log(spliceNum.join(" ['-'] "))
const miniNum = spliceNum.slice(2, 5);
// console.log(miniNum.join(" = "));
// console.log(spliceNum.join(" - "));
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits = [2, 45, 8, 13, 53, 23];
// console.log(fruits.sort(function(a, b){return a - b}));
// console.log(fruits.join("="));
// console.log(fruits.reverse().join("-"));
const numbers = [45, 4, 9, 16, 25];
numbers.forEach(function (item) {
    // console.log(`Hello ${item}`);
});
const addBtn = document.getElementById("add-btn");
const sortBtn = document.getElementById("sort-btn");
const resetBtn = document.getElementById("reset-btn");
const showNum = document.getElementById("show-num");
const sortNums = document.getElementById("sort-nums");
const numKey = localStorage.getItem("numKey");
let numArr = [];
let counterNum = 0;
if (numKey) {
    let saveNums = numKey.split(",");
    // console.log(typeof saveNums)
    // console.log(saveNums)
    let lengthCounter = saveNums.length;
    while (lengthCounter--) {
        numArr.push(saveNums[lengthCounter]);
    }
    numArr = numArr.reverse();
    // console.log(numArr);
    showNum.textContent = numArr.join(" - ");
}
addBtn.addEventListener("click", function () {
    counterNum++;
    if (counterNum <= 15) {
        let randNum = (Math.random() * 99).toFixed(0);
        numArr.push(randNum);
        localStorage.setItem("numKey", numArr);
        // console.log(numArr)
        showNum.textContent = numArr.join(" - ");
    }
});
sortBtn.addEventListener("click", function () {
    if (numArr.length) {
        numArr.sort(function (a, b) {
            return a - b;
        });
        sortNums.textContent = numArr.join(" - ");
    }
});
resetBtn.addEventListener("dblclick", function () {
    while (numArr.length) {
        numArr.pop();
    }
    // console.log(numArr);
    sortNums.textContent = "- - -";
    showNum.textContent = "- - -";
    counterNum = 0;
    localStorage.clear();
});

// const Bday = "2005-09-03";
const Bday = "2001-12-05";

document.getElementById("B-day").textContent = "I was born on " + Bday;
const dateBorn = new Date(Bday);
const todayDate = new Date();
const milBorn = Date.parse(dateBorn);
const milToday = Date.parse(todayDate);
let lived = milToday - milBorn;
// console.log(lived);
let lineCounter = 0;
for (let i = 0; i < 21; i++) {
    document.getElementById("born-counter").innerHTML += "<p></p>";
}
function dateHtml(time, value) {
    document.querySelector(
        `#born-counter p:nth-child(${++lineCounter})`
    ).textContent += `I have lived `;
    document.querySelector(
        `#born-counter p:nth-child(${++lineCounter})`
    ).textContent += ` ${time} `;
    document.querySelector(
        `#born-counter p:nth-child(${lineCounter})`
    ).style.opacity = "1";
    document.querySelector(
        `#born-counter p:nth-child(${lineCounter})`
    ).style.color = "rgb(88, 88, 255)";
    document.querySelector(
        `#born-counter p:nth-child(${++lineCounter})`
    ).textContent += ` ${value} so far `;
    document.querySelector(
        `#born-counter p:nth-child(${lineCounter})`
    ).innerHTML += `<br>`;
}
function fixTime(time) {
    return (lived /= time).toFixed(0);
}
dateHtml(fixTime(1000), "seconds");
dateHtml(fixTime(60), "minutes");
dateHtml(fixTime(60), "hours");
dateHtml(fixTime(24), "days");
dateHtml(fixTime(7), "weeks");
dateHtml(fixTime(4.35), "months");
dateHtml(fixTime(12), "years");
// console.log(2 < "3");
// const switchTester = "Hello"
// switch(switchTester)
// {
//     case"No":
//     console.log("yes");
//     break;
//     case"Hello":
//     console.log("yes");
//     break;
//     default:
//         console.log("default")
// }
// const persons = {fname:"John", lname:"Doe", age:25};
// let tempp= ""
// for(let x in persons)
// {
//     tempp+=person[x]+" "
// }
// const persons = { ffname: "John", llname: "Doe", age: 25 };
// console.log(persons)
// let txt = "";
// for (let x in persons) {
//     console.log(person[x]);
//     txt += person[x] + " ";
// }
// const test1 = [1, 3, 7, 4, 8, 9];
// const test1 = { namee: "ali", family: "sad", age: "23" };
const test1 = "hello";
// for (let i in test1) {
//     console.log(test1[i] + " " + i);
// }
// console.log("----------");
// const test2 = test1.forEach(function (item) {
//     item++;
//     console.log(item);
// });
for (let i of test1) {
    // console.log(i);
}
// for(let i in test1)
// {
//     console.log(i)
// }()
let counterWhile = 0;
while (counterWhile < 10) {
    counterWhile++;
    if (counterWhile === 3) continue;
    // console.log("X");
}
// console.log(Number(Math.PI))
// console.log(parseInt(Math.PI))
// console.log(parseFloat(Math.PI))
let randtxt = "This Is random txt that has 3 is in it.";
// let result =randtxt.match(/\bth/ig)
let result = randtxt.match(/is/);
result = randtxt.match(/is/i);
result = randtxt.match(/is/g);
result = randtxt.match(/is/gi);
result = randtxt.match(/[s]/gi);
result = randtxt.match(/(is|th)/gi);
result = randtxt.match(/\d/gi);
result = randtxt.match(/\s/gi);
result = randtxt.match(/\bth/gi);
result = randtxt.match(/t\b/gi);
// console.log(result)
// console.log(result.join(" - "))
// console.log(result.length)
const w3Obj = {
    fNamee: "ali",
    Lnamee: "Sad",
    age: "21",
    color: "blue",
    date: Date(),
    showData: function () {
        return this.fNamee + " " + this.Lnamee + "\n-------\n" + this.date;
    },
};
// console.log(w3Obj.showData());
try {
    let Hello = 21;
    Aloha++;
    // console.log(Hello);
    // console.log(2 * 2);
} catch (err) {
    // console.log(err.message);
}
// console.log(2*89)
// const errHtml = document.getElementById("err-shower").innerHTML;
// const errBtn = document.getElementById("err-btn");
// let err = "";
// try {
//     function errFunc() {
//         const errInput = document.getElementById("err-input").value;
//         // console.log(errInput);
//         // if (errInput == "") throw "Empty";
//         // if (errInput > 10) throw "2 BIG";
//         // if (errInput < 0) throw "2 small";
//         // if (isNaN(errInput)) throw "Not Number";
//     }
// } catch (err) {
//     err = "Input is " + err;
//     console.log(err);
// } finally {
//     console.log(err);
//     errHtml.innerHTML = "Input is " + err;
// }
// const hoverEditor = (querySelectorAll("p #hover-changer").title = "hello!");
// const hoverEditor = document.querySelectorAll("p #hover-changer").title = "hello!"
// document.getElementById("hover-changer").title = "Hello!"
document.querySelector("p#hover-changer").title =
    "you can change Attribute in HTML!";
const err2Html = document.getElementById("err2-shower");
const err2Btn = document.getElementById("err2-btn");
err2Btn.addEventListener("click", function () {
    const err2Input = document.getElementById("err2-input").value;
    // Number(err2Input)
    // console.log(err2Input);
    // console.log(isNaN(err2Input));
    if (err2Input == "") err2Html.textContent = "There is nothing :/";
    else if (err2Input > 10) err2Html.textContent = "2 BIG";
    else if (err2Input < 5) err2Html.textContent = "2 small";
    else if (isNaN(err2Input)) err2Html.textContent = "I want numbers...";
    else err2Html.textContent = "Valid number";
});
let colorChanger = "";
let fixColor = 0;
const colorChangerHtml = document.querySelector("p#change-color");
const saveColor = localStorage.getItem("colorKey");
if (saveColor == " red") {
    fixColor = 1;
    changeFixColor(true, "0");
} else if (saveColor) changeFixColor(false, saveColor);
else changeFixColor(true, "0");
function changeFixColor(rAndB, randHex) {
    if (rAndB) {
        if (fixColor % 2) colorChanger = " red";
        else colorChanger = " blue";
    } else colorChanger = randHex;
    colorChangerHtml.innerHTML = `Hello my color is <b>${colorChanger}<b>`;
    colorChangerHtml.style.color = colorChanger;
    localStorage.setItem("colorKey", colorChanger);
}
const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function randHexColor() {
    let randHex = "#";
    for (let i = 0; i < 6; i++) {
        randHex += hexColor[Math.floor(Math.random() * 16)];
    }
    return randHex;
}
document
    .querySelector("button#random-color-btn")
    .addEventListener("click", function () {
        changeFixColor(false, randHexColor());
    });
document
    .querySelector("button#change-color-btn")
    .addEventListener("click", function () {
        fixColor++;
        changeFixColor(true, "0");
    });
const footballBall = document.getElementById("football-ball");
let highestScoreO = document.getElementById("top-score");
const ScoreOutput = document.getElementById("score");
const timerCounter = document.getElementById("timer");
const endScreen = document.getElementById("end-time");
const saveScore = localStorage.getItem("highestKey");
const HSOutput = document.getElementById("high-records");
let score = 0;
let endTimer = 30;
let timer = 30;
if (localStorage.getItem("backUpScoresKey")) {
    highestScoreO.innerHTML = localStorage.getItem("backUpScoresKey");
    localStorage.setItem("highestKey", localStorage.getItem("backUpScoresKey"));
}
let isGameRunning = true;
footballBall.addEventListener("mouseover", function () {
    if (timer <= 0) {
        endScreen.style.opacity = 1;
        endScreen.style.zIndex = 3;
        if (isGameRunning) addToHS();
        isGameRunning = false;
        return;
    }
    score++;
    footballBall.style.top = String(Math.floor(Math.random() * 73) + 10) + "%";
    footballBall.style.left = String(Math.floor(Math.random() * 90) + 5) + "%";
    ScoreOutput.innerHTML = score;
    let startTimer = Date.parse(Date()) / 1000;
    if (endTimer == 30) endTimer = startTimer + 5;
    timer = endTimer - startTimer;
    timerCounter.style.width = timer * 4 + "%";
    // console.log(score)
    // console.log(highestScoreN)
    // console.log(Math.max(score,highestScoreN))
    // console.log("---------")
    localStorage.setItem(
        "highestKey",
        Math.max(score, highestScoreO.innerHTML)
    );
    // localStorage.setItem("highestKey", 10);
    // console.log(score);
    // console.log(Number(highestScore.innerHTML));
    // console.log(Math.max(score, Number(highestScore.innerHtml)));
    const saveScore = localStorage.getItem("highestKey");
    // highestScore.innerHTML = Number(saveScore);
    if (localStorage.getItem("highestKey")) {
        highestScoreO.innerHTML = Number(localStorage.getItem("highestKey"));
    }
    // console.log(highestScoreO.innerHTML);
    // localStorage.setItem("backUpScoresKey", 0);
    if (
        Number(localStorage.getItem("backUpScoresKey")) <
        Number(localStorage.getItem("highestKey"))
    ) {
        // console.log(localStorage.getItem("backUpScoresKey"));
        // console.log(localStorage.getItem("highestKey"));
        localStorage.setItem(
            "backUpScoresKey",
            localStorage.getItem("highestKey")
        );
    }
});
let rewrite = true;
document
    .querySelector("#football-btns button:nth-child(1)")
    .addEventListener("dblclick", function () {
        score = 0;
        localStorage.setItem("highestKey", 0);
        highestScoreO.innerHTML = "0";
        ScoreOutput.innerHTML = "0";
        endTimer = 30;
        timer = 30;
        timerCounter.style.width = "100%";
        footballBall.style.top = "50%";
        footballBall.style.left = "50%";
        endScreen.style.opacity = 0;
        endScreen.style.zIndex = 1;
        isGameRunning = true;
        footballHScores = [
            {
                score: 0,
                date: "- - -",
            },
            {
                score: 0,
                date: "- - -",
            },
            {
                score: 0,
                date: "- - -",
            },
            {
                score: 0,
                date: "- - -",
            },
            {
                score: 0,
                date: "- - -",
            },
            {
                score: 0,
                date: "- - -",
            },
        ];
        rewrite = false;
        addToHS();
    });
document
    .querySelector("#football-btns button:nth-child(2)")
    .addEventListener("click", function () {
        score = 0;
        endTimer = 30;
        timer = 30;
        ScoreOutput.innerHTML = "0";
        timerCounter.style.width = "100%";
        footballBall.style.top = "50%";
        footballBall.style.left = "50%";
        endScreen.style.opacity = 0;
        endScreen.style.zIndex = 1;
        isGameRunning = true;
    });
document
    .querySelector("#football-btns button:nth-child(3)")
    .addEventListener("click", function () {
        if (HSOutput.style.display != "grid") {
            HSOutput.style.display = "grid";
            document.querySelector(
                "#football-btns button:nth-child(3)"
            ).textContent = "Hide high scores";
        } else {
            HSOutput.style.display = "none";
            document.querySelector(
                "#football-btns button:nth-child(3)"
            ).textContent = "Show high scores";
        }
    });
// console.log(Date());
/*
const footballHScores = [
    {
        score: 30,
        date: "2022 13:40:33",
    },
    {
        score: 25,
        date: "2032 13:40:33",
    },
    {
        score: 20,
        date: "2042 13:40:33",
    },
    {
        score: 7,
        date: "2020/20/20 13:40:33",
    },
    {
        score: 6,
        date: "2021/21/21 13:40:33",
    },
    {
        score: 5,
        date: "2021/21/21 13:40:33",
    },
];
*/
// console.log(localStorage.getItem("HSfootball"));
// localStorage.clear();
let footballHScores = [];
if (!localStorage.getItem("HSfootballBackup")) {
    footballHScores = [
        {
            score: 0,
            saveName: "",
            date: "- - -",
        },
        {
            score: 0,
            saveName: "",
            date: "- - -",
        },
        {
            score: 0,
            saveName: "",
            date: "- - -",
        },
        {
            score: 0,
            saveName: "",
            date: "- - -",
        },
        {
            score: 0,
            saveName: "",
            date: "- - -",
        },
        {
            score: 0,
            saveName: "",
            date: "- - -",
        },
    ];
} else {
    // console.log("BIG 2 small");
    localStorage.setItem(
        "HSfootball",
        localStorage.getItem("HSfootballBackup")
    );
    // console.log(localStorage.getItem("HSfootballBackup"));
    // console.log(localStorage.getItem("HSfootball"));
}

if (localStorage.getItem("HSfootball"))
    footballHScores = JSON.parse(localStorage.getItem("HSfootball"));
// try {

// } catch (err) {}
addToHS();
function addToHS() {
    for (i in footballHScores) {
        if (!footballHScores[i].saveName)
            footballHScores[i].saveName = "- - - - - - - - - - - - - - - - - -";
    }
    const SAVEDATE = new Date();
    let saveDate = `${SAVEDATE.getFullYear()}/${SAVEDATE.getMonth()}/${SAVEDATE.getDate()} ${SAVEDATE.getHours()}:${SAVEDATE.getMinutes()}:${SAVEDATE.getSeconds()}`;
    // console.log(saveDate);
    footballHScores[5].score = score;
    footballHScores[5].date = saveDate;
    // console.log(footballHScores)
    footballHScores.sort(function (a, b) {
        return b.score - a.score;
    });
    console.log(footballHScores);
    HSOutput.innerHTML = "";
    HSOtempOutput = "";
    // ------------------
    for (i in footballHScores) {
        if (i == 5) break;

        HSOtempOutput += `
        <div>${Number(i) + 1}</div>
        <div>${footballHScores[i].score}</div>
        <div id="middle-div${i}">
            <input type="text" id="save-input${i}" onfocus="this.value=''">
            <div id="name-saver${i}">save</div>
        </div>
        <div>${footballHScores[i].date}</div>`;
    }
    HSOutput.innerHTML = HSOtempOutput;
    try {
        for (i in footballHScores) {
            // console.log(footballHScores[i].saveName);
            document.getElementById(`save-input${i}`).value =
                footballHScores[i].saveName;
        }
    } catch (err) {}
    localStorage.setItem("HSfootball", JSON.stringify(footballHScores));
    if (rewrite)
        localStorage.setItem(
            "HSfootballBackup",
            JSON.stringify(footballHScores)
        );
    // JSON.parse(footballHScores);
    // console.log(typeof footballHScores)
    // localStorage.setItem("HSfootball", JSON.stringify("empty!"));
    /*
    const HScoresSorted = [];
    sortHS();
    function sortHS() {
        let scoreSorter = [];
        footballHScores.forEach(function (item) {
            scoreSorter.push(item.score);
        });
        // console.log(scoreSorter);
        scoreSorter.sort(function (a, b) {
            return b - a;
        });
        // console.log(scoreSorter);
        for (let i = 0; i < scoreSorter.length; i++) {
            footballHScores.forEach(function (item) {
                if (scoreSorter[i] == item.score) HScoresSorted.push(item);
            });
        }
        // console.log(HScoresSorted);
        HSOutput.innerHTML = "";
        let HSCounter = 1;
        HScoresSorted.forEach(function (item) {
            HSOutput.innerHTML += `
    <div>${HSCounter++}</div>
    <div>${item.score}</div>
    <div>------------------</div>
    <div>${item.date}</div>`;
        });
    }
    // console.log(HScoresSorted[0].score)
    if (score > HScoresSorted[4].score) {
        for (let i = 0; i < footballHScores.length; i++) {
            if (HScoresSorted[4].score == footballHScores[i].score) {
                for (let j = i; j < 4; j++) {
                    footballHScores[j] = footballHScores[j + 1];
                }
                footballHScores.push(score);
            }
        }
        HScoresSorted.pop();
        sortHS();
    }
    */
}
try {
    for (let i = 0; i < footballHScores.length; i++) {
        document
            .getElementById(`save-input${i}`)
            .addEventListener("focus", function () {
                document.getElementById(`name-saver${i}`).style.opacity = "1";
                document.getElementById(`name-saver${i}`).style.zIndex = "1";
                document.getElementById(`name-saver${i}`).style.transition =
                    "0.3s";
            });
        document
            .getElementById(`save-input${i}`)
            .addEventListener("focusout", function () {
                document.getElementById(`name-saver${i}`).style.opacity = "0";
                document.getElementById(`name-saver${i}`).style.transition =
                    "0.28s -50ms";
                setTimeout(function () {
                    document.getElementById(`name-saver${i}`).style.zIndex =
                        "-1";
                }, 150);
                if (document.getElementById(`save-input${i}`).value == "")
                    document.getElementById(`save-input${i}`).value =
                        "- - - - - - - - - - - - - - - - - -";
            });
        document
            .getElementById(`name-saver${i}`)
            .addEventListener("click", function () {
                console.log(document.getElementById(`save-input${i}`).value);
                footballHScores[i].saveName = document.getElementById(
                    `save-input${i}`
                ).value;
            });
    }
} catch (err) {}

let objtester = [
    {
        firstNamee: "ali",
        lastNamee: "sad",
        age: 21,
        color: "blue",
    },
    {
        firstNamee: "ali2",
        lastNamee: "sad2",
        age: 212,
        color: "blue2",
    },
    {
        firstNamee: "ali3",
        lastNamee: "sad3",
        age: 213,
        color: "blue3",
    },
    {
        firstNamee: "ali4",
        lastNamee: "sad4",
        age: 214,
        color: "blue4",
        show: function () {
            return this.firstNamee + " " + this.lastNamee;
        },
    },
];
// console.log(objtester)
// delete objtester[0];
// console.log(objtester)
// console.log(objtester[3].show().toUpperCase());
const objTest = document.getElementById("obj-tester");
// const objarr = Object.values(objtester);
objTest.innerHTML = JSON.stringify(objtester);
function objMaker(name, family, sen, color) {
    this.firstName = name;
    this.lastName = family;
    this.age = sen;
    this.favColor = color;
}
const me = new objMaker("ali", "sad", 21, "blue");
const sister = new objMaker("saba", "sad", 17, "red");
// for(let i of me.length)
// {
//     console.log(i);
// }
// me.forEach(function(item){
//     console.log(item)
// })
// console.log(typeof me)
me.lang = "Far30";
me.fullName = function () {
    return this.firstName + " " + this.lastName;
};
// console.log(me.fullName())
class firstClass {
    constructor(name, age) {
        this.carName = name;
        this.carAge = age;
    }
    showAge() {
        let date = new Date();
        // console.log(typeof date);
        // console.log(date.getFullYear());
        // console.log(this.carAge);
        return date.getFullYear() - this.carAge;
    }
}
let myCar = new firstClass("random car", 2020);
// console.log(myCar.showAge());
// const randomString = "Hello = Aloha";
// for (let i of randomString) console.log(i);
// for(let i=0;i<randomString.length;i++) console.log(randomString[i])
