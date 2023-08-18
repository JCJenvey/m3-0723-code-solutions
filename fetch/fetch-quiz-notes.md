# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?

- What is the default request method used by `fetch()`?

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?

- How does `fetch` report errors?

## Notes

1. `fetch()` returns a Promise that resolves to a Response object
2. The default request method is GET
3. The request method can be specified with the method setting in an options objects set as an argument to the fetch() call
4. Either it throws an AbortError exception from the AbortController abort() method being called, or a TypeError is thrown for of many reasons
