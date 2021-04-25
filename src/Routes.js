import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./home";
import { LessonsListPage } from "./lessonslist";
import { AddLessonPage } from "./addLessons";
import { LessonPage } from "./lesson";

const routes = [
  {
    path: "/",
    Component: HomePage,
    exact: true,
  },
  {
    path: "/lessons",
    Component: LessonsListPage,
    exact: true,
  },
  {
    path: "/add-lesson",
    Component: AddLessonPage,
    exact: true,
  },
  {
    path: "/lesson/:id",
    Component: LessonPage,
    exact: true,
  },
];

export const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact}>
          <route.Component />
        </Route>
      ))}
    </Switch>
  </Router>
);
