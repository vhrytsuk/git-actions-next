import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SimpleComponent from "./SimpleComponent";

describe("SimpleComponent", () => {
  it("renders a heading", () => {
    render(<SimpleComponent />);
    const heading = screen.getByRole("heading", { name: /hello, next\.js!/i });
    expect(heading).toBeInTheDocument();
  });
});
