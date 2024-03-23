import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout, { rootLayoutLoaderFunction } from "./pages/RootLayout";
import ReviewsPage from "./pages/ReviewsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    // errorElement: <ErrorPage/>,
    id: "root",
    // action: rootPageActionFunction,
    loader: rootLayoutLoaderFunction,
    children:[
      {
        index: true,
        element: <ReviewsPage/>,
        // loader: reviewsPageLoaderFunction,
        // action: reviewsPageActionFunction,
      }
    ]
  }
]);

function App() {

  return <RouterProvider router={router}/>;

}

export default App;
