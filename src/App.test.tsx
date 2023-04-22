import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders Books Cart title", () => {
  render(<App />);
  const titleElement = screen.findAllByText(/Books Cart/i);
  waitFor(() => expect(titleElement).toBeInTheDocument());
});
