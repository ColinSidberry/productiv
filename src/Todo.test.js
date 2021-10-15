import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const TEST_DATA = {
  id: 1,
  title: "test",
  description: "testing data",
  priority: 1,
};

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<Todo />);
  });
  it("matches snapshot", function () {
    const { container } = render(
      <Todo
        id={TEST_DATA.id}
        title={TEST_DATA.title}
        description={TEST_DATA.description}
        priority={TEST_DATA.priority}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("contains expected title", function () {
    const result = render(
      <Todo
        id={TEST_DATA.id}
        title={TEST_DATA.title}
        description={TEST_DATA.description}
        priority={TEST_DATA.priority}
      />
    );
    expect(result.queryByText("test")).toBeInTheDocument();
    expect(result.queryByText("(priority: 1)"));
  });
});
