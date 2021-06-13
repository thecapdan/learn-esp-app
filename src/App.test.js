import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page message", () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to Pigeon Spanish/i);
  expect(welcomeMessage).toBeInTheDocument();
});
