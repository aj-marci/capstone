Responsive restaurant UI home page and business logic for reserving a table.

packages needed to edit / view on local dev environment.

1. react-bootstrap
2. all font awesome icon npm packages, need to list
3. npm install react-router-dom@6
    - import { BrowserRouter } from "react-router-dom"; at top of index.js
    - add <BroswerRouter> as below
             <React.StrictMode>
             <BrowserRouter>
             <App />
             </BrowserRouter>
            </React.StrictMode>
4. business logic to send email after submitting reserve table form needs to be added.
5. add to cart buttons do not have any logic on click.
6. test in app.test.js does not work