Responsive restaurant UI home page and business logic for reserving a table.

* follow these steps to view project on local dev server. *

1. npm i react-bootstrap
2. npm install --save font-awesome-icons
3. npm i --save @fortawesome/free-solid-svg-icons
4. npm i --save @fortawesome/free-brands-svg-icons
3. npm install react-router-dom@6
    - import { BrowserRouter } from "react-router-dom"; at top of index.js
    - add <BroswerRouter> as below
             <React.StrictMode>
             <BrowserRouter>
             <App />
             </BrowserRouter>
            </React.StrictMode>


* additional information *
1. business logic to send email after submitting reserve table form needs to be added.
2. add to cart buttons do not have any logic on click.
3. tests in app.test.js are very basic. Cannot figure out how to test a form inside a modal with react resting library.