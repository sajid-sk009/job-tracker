1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll...
there are so many different between  getElementById, getElementsByClassName, and querySelector / querySelectorAll but main difference is selector ability.  getElementById for only one id. getElementsByClassName for only class.
querySelector  returns the first element that matches the specified selectors. And 
querySelectorAll returns all matching elements as a NodeList

2. How do you create and insert a new element into the DOM?

to create an instant a new element into the DOM.
First we need to create  HTML file and JS file and connect just js file to HTML file. 
To Create elements...
let div = document.createElement("div");
To Add content...
div.innerHTML = "<p>this is p tag </p>";
To Append...
document.body.appendChild(div);

3. What is Event Bubbling? And how does it work?

Event Bubbling..
Simple way to say an Event Bubbling triggered element bottom to top. 
An event triggered on a child element propagates upward through its ancestors in the DOM is Event Bubbling.
How its work..
 It works like bubbles rising in water, allowing parents to manage events from children. 
The event travels up, firing listeners on the <div> next, then the <body>, then <html>, and finally document.

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation..
Simply way, Event Delegation is a JavaScript technique where, without  adding event listeners to many individual elements, we add a single event listener to their common parent element.
Use for Event Delegation..
Improved Performance and Memory Footprint.
Handling Dynamic Elements.
Cleaner and Simpler Code.

5. What is the difference between preventDefault() and stopPropagation() methods?