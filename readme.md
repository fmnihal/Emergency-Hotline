1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
    * getElementById: takes the id of the element to operate, stores in HTML Collection.
    * getElementsByClassName: takes the className of the element to operate, stores in NodeList.
    * querySelector: selects the first element with matching className or unique id.
    * querySelectorAll: selects all the elements with matching className.

2. How do you **create and insert a new element into the DOM**?
```
const el= document.createElement('div');
el.innerHTml=`
    <p>Hello World</p>
`;
body.append(el);
```

3. What is **Event Bubbling** and how does it work?

The process where clicking at one event ultimately gets handled by document, and all the parent elemnets between.
Say this is a structure:
```
<div>
    <ul>
        <li><span>Hello World</span></li>
        <li><span></span></li>
        <li><span></span></li>
    </ul>
</div>
```
If span is clicked, that means it will be handled by span, then li, then ul, then div, then body, then document, then window.


4. What is **Event Delegation** in JavaScript? Why is it useful?

The process of putting event listener at the parent element instead of the target element, so that the parent element can target all child elements easily.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDeafult() prevents the default behaviour of an option once it's clicked (/some other actions).
stopPropagation() prevents the deafult behaviour of event bubbling, so the event can't propagate to it's parent element.