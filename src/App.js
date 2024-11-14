import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => {
            if (route.children) {
              return (
                <Route key={index} path={route.path} element={route.element}>
                  {route.children.map((child, childIndex) => (
                    <Route
                      key={childIndex}
                      path={child.path}
                      index={child.index}
                      element={child.element}
                    />
                  ))}
                </Route>
              );
            }
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
