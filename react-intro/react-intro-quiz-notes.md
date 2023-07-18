# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is React?

- What is a React component?

- How do you mount a React app (root component) to the DOM?

- What are some other popular frontend frameworks?

## Notes

1. React is a javascript front-end framework used primarily for building web applications and user interfaces.
2. A component is a piece of the UI that has its own appearance and logic.
3. From looking over the code, it looks like the app is mounted to the dom in the main (or index.js) file. The createRoot method of the ReactDom object is called with 1 argument; the result of the getElementById method of the document object being called with the ‘root’ argument, and the result is passed into a variable. Then the render method of the new variable is called, passing in the react App (among other things) as an argument.
4. jQuery and bootstrap are the 2 I have heard of before.
