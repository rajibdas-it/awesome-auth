import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Utilities/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
