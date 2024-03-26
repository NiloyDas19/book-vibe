import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Error from './components/Error/Error';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children : [
      {
        path : "/",
        element: <Home></Home>
      },
      {
        path : "/listed-books",
        element : <ListedBooks></ListedBooks>
      },
      {
        path : "/pages-to-read",
        element : <PagesToRead></PagesToRead>,
        loader : () => fetch('../all-books.json'),
      },
      {
        path : "/book-details/:id",
        element: <BookDetails></BookDetails>,
        loader : () => fetch('../all-books.json'),
      }
    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
