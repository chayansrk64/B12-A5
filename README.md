# Frequently Asked Questions (FAQ)

### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

* The key differences between `getElementById`, `getElementsByClassName`, and `querySelector/querySelectorAll` 

* `getElementById()` selects a single element based on it's unique `id` attribute.

* `getElementsByClassName` is used for selecting multiple elements by class name when a live HTMLCollection is desired.

* `querySelector/querySelectorAll` used for more complex selections using __CSS__ selectors, expecially when a static collection (NodeList) is preferred. 
 `querySelector` for the first match and `querySelectorAll` for all matches.


## How do you create and insert a new element into the DOM?

* Initially we create an element node by `document.createElement()`
any element and atrribute we can add.
Once created then we use `appendClild` method to insert the child to specified parent element.

## What is Event Bubbling and how does it work?

* *Event Bubbling* is a concept of __DOM__. It happens when an element receives an event, and that *bubbles up* to it's parent and ancestor element in the __DOM__ tree until it gets to the root element. 

## What is Event Delegation in JavaScript? Why is it useful?

* *Event Delegation* is a pattern based upon the concept of *Event Bubbling*. 

* Instead of adding an event listener to each and every similar elemtent, we can add an event listener to a parent element and call an event on a particular target using the `.target` property of the event object.

## What is the difference between preventDefault() and stopPropagation() methods?

* `preventDefault()` method prevents the browser form executing the default behavior of the selected element. (applicable only the cancelable elements)

* `stopPropagation()` method of the __Event__ interface prevents further propagation of the current event in the capturing and bubbling phases.