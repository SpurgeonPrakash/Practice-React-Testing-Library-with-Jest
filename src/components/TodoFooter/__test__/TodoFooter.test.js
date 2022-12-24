import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

// Will throws an error because we used <Link /> tag in this component outside of browser router since we are rendering isolated TodoFooter alone in render

// it("should render the correct amount of incomplete tasks", () => {
//   render(<TodoFooter numberOfIncompleteTasks={5} />);
//   const paraElement = screen.getByText(/5 tasks left/i);
//   expect(paraElement).toBeInTheDocument();
// });

// To fix this, we need to create a mock component and wrap the TodoFooter with browser router as below and pass all the props that are required to TodoFooter.

const MockToDoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("Todo Footer", () => {
  // describe("testing functionality 1", () => {
  //   it("should render the correct amount of incomplete tasks", () => {
  //     render(<MockToDoFooter numberOfIncompleteTasks={5} />);
  //     const paraElement = screen.getByText(/5 tasks left/i);
  //     expect(paraElement).toBeInTheDocument();
  //   });
  // })

  it("should render the correct amount of incomplete tasks", () => {
    render(<MockToDoFooter numberOfIncompleteTasks={5} />);
    const paraElement = screen.getByText(/5 tasks left/i);
    expect(paraElement).toBeInTheDocument();
  });

  it("should render 'task' when number of incomplete tasks is one", () => {
    render(<MockToDoFooter numberOfIncompleteTasks={1} />);
    const paraElement = screen.getByText(/1 task left/i);
    expect(paraElement).toBeInTheDocument();
  });
});

// it("should render 'task' when number of incomplete tasks is one 2", () => {
//   render(<MockToDoFooter numberOfIncompleteTasks={1} />);
//   const paraElement = screen.getByText(/1 task left/i);
//   expect(paraElement).toBeTruthy();
// });

// it("should render 'task' when number of incomplete tasks is one 3", () => {
//   render(<MockToDoFooter numberOfIncompleteTasks={1} />);
//   const paraElement = screen.getByText(/1 task left/i);
//   // element may be in the document but not visible(you might use visibility: none or opacity: 0 in css, etc.,)
//   expect(paraElement).toBeVisible();
// });

// it("should render 'task' when number of incomplete tasks is one 4", () => {
//   render(<MockToDoFooter numberOfIncompleteTasks={1} />);
//   const paraElement = screen.getByText(/1 task left/i);
//   expect(paraElement).toContainHTML("p");
// });

// it("should render 'task' when number of incomplete tasks is one 5", () => {
//   render(<MockToDoFooter numberOfIncompleteTasks={1} />);
//   const paraElement = screen.getByText(/1 task left/i);
//   expect(paraElement).toHaveTextContent("1 task left");
// });

// it("should render 'task' when number of incomplete tasks is one 6", () => {
//   render(<MockToDoFooter numberOfIncompleteTasks={1} />);
//   const paraElement = screen.getByText(/1 task left/i);
//   expect(paraElement.textContent).toBe("1 task left");
//   // expect(paraElement.value).toBe("1 task left"); // when its an input element
// });
