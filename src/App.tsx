import { BrowserRouter, Route, Routes } from "react-router";
import Body from "./component/Body";
import Login from "./component/Login";
import Profile from "./screen/Profile";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
