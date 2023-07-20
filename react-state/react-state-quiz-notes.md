# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

- What is the purpose of state in React?

- Why can't we just maintain state in a local variable?

- What two actions happen when you call a `state setter` function?

- When does the local `state variable` get updated with the new value?

## Notes

1. Hooks are functions only available when React is rendering
2. Hooks can only be called at the top level of components or your own hooks. They cannot be called inside conditions, loops, or other nested functions
3. The purpose of state in React is for components to retain data between renders
4. State can’t be starred in a local variable because local variables don’t persist between renders
5. The `state setter` function updates the state variable and re-renders the component
6. The `state variable` gets updated whenever the component re-renders
