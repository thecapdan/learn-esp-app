import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "../../../home";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
  const homePageElement = screen.getByText(/Welcome to Pigeon Spanish/i);
  expect(homePageElement).toBeInTheDocument();
});
