# A simple React Practice Project (Vite + React)

## How to run?
1. Download the source code
2. At the root directory run `npm i`
3. On completion, run `npm run dev`
4. Check the **terminal** for the port. Usually it is: `http://localhost:5173`

## What are implemented here?
1. Concept of useCallback():
    - When a function is called again and again frequently, to increase the performance of the app, we have to keep the function in **cache**. 
    - To keep the function in **cache** the useCallback() hook is used
    - It helps to prevent unnessary rerendering by memoizing functions

2. Concept of useEdffect():
    - On change of anything, if we want to do something, the useEffect() hook is used.
    - It helps to manage the side effects in React Components like data fetching, manually updating the DOM, subscriptions etc.

3. Concept of useRef():
    - Used for referencing an element so that based on that referencec we can do some operation based on the element
    - It allows us to reference a DOM element or a value and access it directly within your functional component.

