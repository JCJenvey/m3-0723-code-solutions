# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?

- Why is it important for React components to be data-driven?

- Where in the component code would a list of React components typically be built?

- What `Array` method is commonly used to create a list of React components?

- Why do components in a list need to have unique keys?

- What is the best value to use as a "key" prop when rendering lists?

## Notes

1. We might want to create a list of React components if we have an array of data we want to output to React
2. I believe that data-driven components are important because it allows the component data to be changed without too much hassle, if need be.
3. A list of React components would typically be imported from a separate data file or built below the `import` statements
4. The `map()` method is commonly used to create a list of React components
5. Components in a list need to have unique keys so that they have an identifier between their siblings
6. The best value to use as a key prop would be an ‘id’ value in the data.
