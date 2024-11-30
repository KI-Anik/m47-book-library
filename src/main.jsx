import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Erropage from './components/Error/Erropage';
import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import BookDetail from './components/BookDetail/BookDetail';
import ListedBooks from './components/ListedBooks/ListedBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Erropage></Erropage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: ()=>fetch('/booksData.json')
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: ()=>fetch('/booksData.json') // temporary worst way for paractice
      },
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
