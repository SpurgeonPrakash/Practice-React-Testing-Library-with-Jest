import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom";

const MockFollowersList = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("Followers List", () => {
  // before each helps to test a functionality before a test ran. we can keep the beforeEach hook either in file level(Runs before each all tests in the current file) or describe level(Runs Only before each tests in the describe block level) below we are using describe block level.
  beforeEach(() => {
    console.log("Running Before Each Test");
  });

  // beforeAll will runs running once before all the test
  beforeAll(() => {
    console.log("Running Before All Tests");
  });

  //  Runs after each test
  afterEach(() => {
    console.log("Running After Each Test");
  });

  // Runs after all tests
  afterAll(() => {
    console.log("Running after All Tests");
  });

  it("should render the first follower item", async () => {
    render(<MockFollowersList />);
    // temporary fix for async info
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  // it("should render 5 follower items", async () => {
  //   render(<MockFollowersList />);
  //   // temporary fix for async info
  //   const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  //   expect(followerDivElements.length).toBe(5);
  // });
});
