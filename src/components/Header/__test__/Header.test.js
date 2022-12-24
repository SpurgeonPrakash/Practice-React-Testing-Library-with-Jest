import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("should render same text passed into title prop", () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/My Header/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// will throw an error since there were two heading elements
// it("should render same text passed into title prop 1", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// it("should render same text passed into title prop 2", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", { name: "My Header" });
//   expect(headingElement).toBeInTheDocument();
// });

// it("should render same text passed into title prop 3", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTitle("Header");
//   expect(headingElement).toBeInTheDocument();
// });

// it("should render same text passed into title prop 4", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTestId("header-1");
//   expect(headingElement).toBeInTheDocument();
// });

// Find By

// it("should render same text passed into title prop 5", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.findByText(/My Header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// Query By
// it("should render same text passed into title prop 6", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

//  GetAllByRole

// it("should render same text passed into title prop 7", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getAllByRole("heading");
//   expect(headingElement.length).toBe(2);
// });
