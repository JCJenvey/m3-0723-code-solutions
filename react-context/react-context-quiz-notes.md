# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?

- What values can be stored in context?

- How do you create context and make it available to the components?

- How do you access the context values?

- When would you use context? (in addition to the best answer: "rarely")


## Notes

1. The purpose of context is to allow data to be managed by 1 component but easily managed by multiple components
2. Any kind of value can be stored in context
3. In a separate file, declare a variable and pass it the result of the createContext method, export it from the file, then call the useContext hook to retrieve the value.
4. The context values are accessed by wrapping the relevant components in a context provider
5. A use case would be to manage data read from a backend API, which would have to be accessed by multiple components
