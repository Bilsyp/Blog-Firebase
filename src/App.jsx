import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomeScreen, LoginScreen } from "./screen";

import { Navigate } from "react-router-dom";
import {Auth} from "./utils/AuthContext"
import {useContext} from "react"
import Layouts from "./Layouts";
export const AuthConfirm = ({ children }) => {
  const {state,dispatch}= useContext(Auth)
  
  const user = false; // Anda bisa mengubah ini menjadi state atau context jika diperlukan
  return user ? children : <Navigate to="/signIn" replace={true} />;
};

const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts/>}>
    <Route index={true} path="/" element={<AuthConfirm><HomeScreen /></AuthConfirm>}/>
        <Route path="/signIn" element={<LoginScreen />} />
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
