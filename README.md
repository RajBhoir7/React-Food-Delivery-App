# npx

    - For Executing any depencies we use npx

# Remove

    - remove main script from package.json
    - parcel uses .parcel-cache and dist to hmr (Hot Module Reloading)
    - dist is dev dist not a prod dist

# parcel

`npm i -D parcel` 
- Dev Build 
- Local Server 
- HMR => hot module replacement (automatically refreshing) 
- File Watching Algorithm (Written in c++) 
- it keeps eye on every file - Faster Build using Catching 
- Image Optimization 
- Minification 
- In production build it does minification 
- Bundling 
- Compress 
- Consistance Hashing 
- Code Splitting 
- Differential Bundling 
- to support older browsers 
- Diagnostic 
- Error Handling 
- HTTPs support 
- Tree Shaking 
- If we using only 4-5 function and other are not using then parcel remove unsed code by using Tree Shaking Algorithm - Different Build for dev and production bundles

# JSX

    - JSX is html like syntax but not a html
    - React.createElement => ReactElement-Js object => HTMLElement(render)
    - JSX => React.createElement => ReactElement-Js object => HTMLElement(render)
    - Babel is convert jsx code to React.createElement and so on
    - JSX (Transpiled beforeit reaches the JS engine)
    - If we writing jsx in single line then do not need to do anything but
    if we writing in multiple line then we need to wrap inside ()

# React Components

    - Class Based Components - OLD (uses js classes to create React components)
    - Functional Components - New (uses js functions React components) - function that is returns a functional code is a functional components
    - or a function which returns the react element

``` way of writing react component
const Raj = () => {
return <h1>This is Raj</h1>
}

const RajBhoir = () => <h1>This is Raj</h1>
```

    - Component Composition means writing one or more React component inside another component
    - These three are same
    <RajBhoir />
    <RajBhoir></RajBhoir>
    {RajBhoir()}



# Food Ordering App

    - Header
        - Logo
        - Nav Items
    - Body
        - Search
        - RestaurantContainer
            - RastaurantCard
    - Footer
        - Copyright
        - Link
        - Address
        - Contact
- ui layer and data layer should be in sync

- data.cards[5].card.card.gridElements.infoWithStyle.restaurants.info.name

- not using keys(not acceptable) <<< index as key <<< unique id (best practice). while using map

# Import and Export
 - default
    - export default name
    - import name from "./name"

- named
    - export const name = 10;
    - import {name} from "./name"


Conditional Rendering = A rendering based on the condition
if(listOfRestaurants.length === 0){
    return <Shimmer />
} 



# React Hooks

- Any Function Start with "use"

- useState()
- useEffect()


## useState()
- Whenever state variable update react re-render the component
- Whenever state variables update, react triggers a reconciliation cycle(re-renders the components)

- useState() always call inside of functional components and always write on top
- never use if-else while using useState() not for loop also.


## useEffect()
- useEffect is called after every render of that component
- if dependency array is empty [] then it calls on only intial render
- if we doesn't pass any [] then it calls on every render
- if we pass inside of depedency array [call] then it calls on every call change(update)


# Routing in React

``` npm i react router-dom ```

- <Link></Link> use Link insted of anchor tag in react
- Why? Because Anchor tags are reloading whole pages and it slows down the app while Link render only that components
- Link is a rapour over anchor tag in html source code it is actually a anchor tag only

- Routing in Web Apps
    - Client side Routing (we are using csr in react app)
    - Server side Routing (make a network call and e.g. about.html coming from server)
    
    - React is a single page application - it just a single page only components gets interchanged

## Dynamic Routing


# Class Based Components (Older way to write)
- It is a js class
- A function that returns a peice of jsx is called functional components
- A class based components is a which extends React.Components and it has a render method which returns peice of jsx code.
- For better understanding react UserClass.jsx

- In class Based Components 1st constructor is called then render is called.

- componentDidMount is used to make api calls because it is acts as a useEffect()


- Life cycle of React Component

Parent Constructor
Parent Render

Child Constructor
First (class)Child Render

Child Constructor
Two (class)Child Render

<!-- DOM Updated - In Single Batch -->
First (class)Child Component Did Called
Two (class)Child Component Did Called
Parent Component Did Mounted


// componentDidMount and useEffect() are not same like this functional component and class based components are not same.


# Single Responsibility Principle
- Ek class ya module sirf ek kaam kare — yaani uska ek hi responsibility ho.
- Hooks are nothing but utility functions or helper function
- Jo component ka kam hai vahi krega agar kisi component ka kam data display krna hai to vo bus data display hi krna chahiye or dusra kam uska nahi hona chahiye react mai

# Chunking, Bundling, Dynamic bundling, Lazy loading, On demand Loading

- App mai sb file ek hi file mai bundle hoke browser ke pass jata hai usse browser ko load pdhta hai
- Isliye Multiple files mai bundling krte hai isse load km hota hai.


# Tailwind

- Types by which we can style our page
    - sass and scss
    - Styled Components
    - Material ui, chakara ui, bootstrap, ant design(2nd most used css library) these are css libraries

- Tailwind css is framework

# Higher order component

- It takes a function takes a components and returns a components
- It takes a components and enhanced it and return it.

# Controlled and Uncontrolled Components

- React application has two layers - one is ui layer and second is data layer.
- UI layer(jsx) is powered by data layer(state, props, {})

- When a component is controlled by its parent then it is controlled components.
- When a child components is controlled by itself then it is uncontrolled components, parent does not have controller over there child.
- Here RestaurantCategory is controlled component by its parent RestaurantMenu.

 // showItems(!showItems);
     // const [showItems, setShowItems] = useState(false);

- Prop Drill read

# React Context

- It is used to pass value from one component to other


# React Redux
- there are two layers - ui and data layer
- redux work in data layer of application
- Redux is not mandatory and not a part of React
- React and Redux are two different Library
- zustand is also a library used for managing state in react
- Redux offers easy debugging
- We use two Redux Library from redux team

- Redux store is big js object kept in global central space


# Testing in React

## Unit Testing
- Testing single component of the project
- Examplee= Testing a button

## Integration Testing
- Testing multiple component of the project at a time.
- Example- Search cases

## End to End Testing (E2E)
- Combination of From login to any event occur in a testing is e2e testing.

# setting up Testing in our App

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- configure Babel
- Configure Parcel Config file to disable default babel transpilation







## React Testing Library
``` npm install --save-dev @testing-library/react @testing-library/dom ```
- React Testing Library uses Jest behind the scene
``` npm i jest ```
- Jest is using babel behind the scene
```npm install --save-dev babel-jest @babel/core @babel/preset-env``` 
- Configure babel in babel.config.js file

- Parser behind the scene uses bable and we also have install babel configuration for testing it will conflict with the parser babel(babel.config.js).
- Therefor we have to change the configration of parser babel to use testing.

- We have to disable the parcel config for that create .parcelrc file
-To disable Babel transpilation in Parcel, override the default Parcel config for JavaScript to exclude @parcel/transformer-babel.

- For testing npm command is
``` npm run test ```
- For jest configuration
``` npx create-jest ``` and use jsdom because for testing we required a run time environment that is provided by jsdom
- install jsdom separetely
``` npm install --save-dev jest-environment-jsdom ```

- For testing create folder __test__ all the testing file comes under this folder
- __test__ in that __ means dunder.

- Install @babel/preset-react - to work jsx in test cases
- Include @babel/preset-react inside babel config
- Install @testing-library/jest-dom - for working of toBeInTheDocument()

- We cannot use redux inside jsdom for that we have to pass <Provider></Provider>
- We also cannot use router therefor we have to pass the router we are using <BrowserRouter></BrowserRouter> 