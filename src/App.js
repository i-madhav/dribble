import { createBrowserRouter } from "react-router-dom";
import { EmailLayout } from "./component/email.js";
import { Options } from "./component/option.js";
import { ProfileLayout } from "./component/profile.js";
import SignLayout from "./component/sign.js";

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<SignLayout/>
  },
  {
    path:"/profile",
    element:<ProfileLayout/>
  },
  {
    path:"/options",
    element:<Options/>
  },
  {
    path:"/email",
    element:<EmailLayout/>
  }
]);

export default AppRouter;