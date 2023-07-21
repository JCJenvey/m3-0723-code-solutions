# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?

- What is an "event handler"? Which component declares the handler?

- How do you pass an event handler to a React component?

- What is the naming convention for event handlers?

- What is an "event handler prop"? Which component declares the prop?

- What are some custom event handler props a component may wish to define?

- What is the naming convention for custom event handler props?

## Notes

1. An event in React is a DOM event
2. An event handler in React is an event handler function passed as a prop
3. An event handler is passed as a prop
4. It is convention to name event handlers as “handle” followed by the event name
5. An event handler prop is a prop that was passed an event handler from the parent component of the prop’s container component
6. Some custom event handler props a component may wish to define are indicating when a button was clicked, or a menu item was selected, or when the event passes back data
7. Naming convention for custom event handler props are ‘on’ followed by a word starting with a capital letter
