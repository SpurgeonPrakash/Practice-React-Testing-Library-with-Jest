import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockedToDo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("should render the text entered in textbox in todoList component", () => {
    render(<MockedToDo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Test the App" } });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Test the App/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render all the todos entered in textbox in todolist", () => {
    render(<MockedToDo />);
    addTask(["Test the App", "Deploy the App", "Start Blogging"]);
    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(3);
  });

  it("should not have completed class when we initially render", () => {
    render(<MockedToDo />);
    addTask(["Test the App", "Deploy the App", "Start Blogging"]);
    const divElement = screen.getByText(/Test the App/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("should have completed class when we click the task", () => {
    render(<MockedToDo />);
    addTask(["Test the App", "Deploy the App", "Start Blogging"]);
    const divElement = screen.getByText(/Test the App/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
