import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import { routes } from "./routes";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.name} path={route.to} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
