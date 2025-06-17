import './css/App.css'
import Home from "./pages/Home";
import SignIn from './pages/Signin';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/login" element={<SignIn />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={Router} />;
}


export default App
