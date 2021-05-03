import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./home";
import { LessonsListPage } from "./lessonslist";
import { AddLessonPage } from "./addLessons";
import { UpdateLessonPage } from "./updateLesson";
import { LessonPage } from "./lesson";
import { ExercisePage } from "./exercise";

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
    path: "/update-lesson",
    Component: UpdateLessonPage,
    exact: true,
  },
  {
    path: "/lesson/:id",
    Component: LessonPage,
    exact: true,
  },
  {
    path: "/exercise/:id",
    Component: ExercisePage,
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
