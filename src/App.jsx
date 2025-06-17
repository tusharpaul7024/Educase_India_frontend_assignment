import './css/App.css'
import Home from "./pages/Home";
import SignIn from './pages/Signin';
import { SignUp } from './pages/SignUp';
import { Profile } from "./pages/Profile";
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
      <Route path="/create-account" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={Router} />;
}


export default App
