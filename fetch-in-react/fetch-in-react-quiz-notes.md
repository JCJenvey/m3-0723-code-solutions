# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?

- What browser function can be used to make HTTP requests to a server in React?

- How do you use `useEffect` to load component data just once when the component mounts?

- How do you use `useEffect` to load component data every time the data key changes?

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

## Notes

1. useEffect() can be used to load data for a component by pulling said data from an external source.
2. fetch() can be used to make HTTP requests in React
3. A cleanup function allows useEffect() to load data just once when mounted
4. Update a state setter inside useEffect()
5. React Query and Vercel SWR are some options
