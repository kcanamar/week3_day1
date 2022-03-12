//////////
// DOM Notes
//////////
//////////////////////////
// 1. document.getElementById() - pass in the string of the element's id

let titleEl = document.getElementById("title");

// console.log(titleEl);

titleEl.style.color = "red";

// The following is the same code as above but not as efficent at accessing mutiple times

// document.getElementById("title").titleEl.style.color = "red"

/////////////////////////
// 2.document.querySelector() - uses CSS selector syntax
// returns the First element that matches the query

let titleEl2 = document.querySelector(".main-title"); // looks for an class called "title" in the .html

let titleEl3 = document.querySelector("#title"); // looks for an id called "title" in the .html

let titleEl4 = document.querySelector("h1"); // looks for the <h1></h1> tags in the .html

titleEl4.style.backgroundColor = "yellow";

console.log(titleEl2);

//////////////////////
//Practice
//////////////////////
/*
In index.html, add a <p>tag below the <h1>and give it a class of cool, then...

Add some content inside of the <p>tag - try typing lorem [tab]to emit (using emmet) random lorem ipsum text.

Use querySelector()to select the first element with a class of cool and assign it to a variable named pEl.

Verify that the <p>element was selected by logging out pEl.
*/
let pEl = document.querySelector(".cool");

console.log(pEl);

/////////////////
// .innerHTML() / .textContent
/////////////////
// this inserts any valid HTML into your element
pEl.innerHTML = "<p>Mr. Freeze</p>";

// this inserts any text content into your element
pEl.innerHTML = " This is Frozone. ";

// this adds any text content into you element
pEl.innerHTML += " Here's ICEBOX. ";

// string interpolation 
// let text = "Hello World"
// pEl.innerHTML += ` My webpage ${text}`
// console.log(pEl)

// entering mutiple lines use back ticks `` 
// pEl.innerHTML += `<div>
//                     <p>Hello!</p>
//                     <p>${text}</p>
//                     <p>World!</p>
//                  </div>`
// console.log(pEl)

// this will set text content
pEl.textContent = "This is Freezing content!";

pEl.innerHTML = "<strong>OH YEAH</strong>";

let aTag = document.querySelector("a");

//////////////////////
// Attributes
//////////////////////

// to set an attribute on an element
aTag.setAttribute("href","https://www.google.com/");

console.log(aTag);

// hasAttribute checks if an element has what you pass in 
console.log(aTag.hasAttribute("href")); // this will return a boolean

// getAttribute returns the value of the attribute you pass in 
let url = aTag.getAttribute("href");

console.log(url);

/*
Review Questions
❓ If we want to change the text (no HTML) inside of a <div>, what property should we set?
    .textContent
❓ How many DOM elements are returned by the querySelectormethod?
    .querySelector() gets the first element with the passed tag
❓ What DOM element property is used to style a DOM element?
    elementName.style = value
*/

// document.getElementsByClassName()
//////////////////////
// This will get all of the elemenets wtih a specific class name
let list = document.getElementsByClassName("comment")

console.log(list)

// document.getElementByTagName()
///////////////////////
// gets all the elements with the tag name passed in
let list2 = document.getElementsByTagName("li")

console.log(list2)

// document.querySelectorAll()
///////////////////////
// gets all of the elements with the css selector passed in
// use this as it has the most flexablity
let list3 = document.querySelectorAll(".comment")

console.log(list3)
/*
Iterating over a collection of elements
querySelectorAll returns an array-like object called a NodeList.

There are three approaches we can use to iterate over the elements in a NodeList :

A regular forloop - works, but is not as readable or elegant...

The forEach method. A good option when you want to iterate through all elements and also want to access the index of the iteration.

A for (let element of nodeList) loop - elegant and allows early exit of the loop with the breakstatement, however, does not have access to an index (although you could track indexes manually by initializing a separate variable before the loop and incrementing it within the loop).
*/

for (let li of list3) {
    console.log(li)
}

for (let li of list3) {
    li.style.fontSize = "30px"
}

/*
❓ What method is the most efficient for selecting an element that has an id?
    .getElementById

❓ If we wanted to grab all of the content (including its nested elements) of an element, what property on that element would we use?
    console.log(element.innerHTML)

❓ If you had to pick only one method to select DOM elements with during your career as a developer, which one should you choose?
    .querySelectorAll()

❓ Which property on DOM elements is used to set the CSS properties for that element?
    .style
    
*/
