import { ReactNode } from "react";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WildCard from "./pages/WildCard";

export type Route = {
  name: string;
  text: string;
  to: string;
  element: ReactNode;
};

export const routes: Route[] = [
  {
    name: "",
    text: "",
    to: "/*",
    element: <WildCard />,
  },
  {
    name: "home",
    text: "Home",
    to: "/",
    element: <Home />,
  },
  {
    name: "projects",
    text: "Projects",
    to: "/projects",
    element: <Projects />,
  },
  {
    name: "contact",
    text: "Contact",
    to: "/contact",
    element: <Contact />,
  },
];

export function getRoute(name: string) {
  for (let r of routes) {
    if (r.name === name) return r;
  }

  return routes[0];
}
