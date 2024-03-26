import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails.jsx/BookDetails';
import ListedBooks from './components/Listed Books/ListedBooks';
import PagesToRead from './components/Pages to Read/PagesToRead';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/book.json'),
      },
      {
        path: '/book-details/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/book.json'),
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/book.json'),
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('/book.json'),
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
