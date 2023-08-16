# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?

- What is a React Effect?

- When should you use an Effect and when should you not use an Effect?

- When do Effects run?

- What function is used to declare an Effect?

- What are Effect dependencies and how do you declare them?

- Why would you want to clean up from an Effect?

- How do you clean up from an Effect?

- When does the cleanup function run?

## Notes

1. A component is “mounted” to the DOM after all components are rendered
2. An Effect lets you specify side-effects caused by rendering, as opposed to an event
3. Effects should mostly be used to synchronize with an external system. They shouldn't be used otherwise
4. Effects run at the end of a commit, after the screen updates
5. The `useEffect()` function is used to declare an Effect
6. Dependencies area list of props that the Effect depends on so it knows to run as needed, instead of every render. They are declared inside an array placed after the closing curly brace of an Effect function
7. One reason you might want to clean up from an Effect would be to close an existing connection to an external service, instead of piling on connections at every re-render
8. The cleanup function gets called each time before the Effect gets re-run, and one final time when the component unmounts
