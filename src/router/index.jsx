import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { layoutRoutes } from "../configs";
import { ErrorsPage } from "../pages";
import loadable from "@loadable/component";
import SplashScreen from "../components/molecules/SplashScreen";
const LayoutContainer = loadable(
  () => import("../components/organisms/LayoutContainer"),
  {
    fallback: <SplashScreen />,
  }
);

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          {layoutRoutes.map(
            ({
              path,
              component,
              isRedirect,
              isHeader,
              isFooter,
              title,
              mode,
            }) => (
              <Route
                key={title}
                path={path}
                element={
                  <LayoutContainer
                    component={component}
                    isRedirect={isRedirect}
                    isHeader={isHeader}
                    isFooter={isFooter}
                    mode={mode}
                    title={title}
                  />
                }
              />
            )
          )}
        </Route>
        <Route path="*" element={<ErrorsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
