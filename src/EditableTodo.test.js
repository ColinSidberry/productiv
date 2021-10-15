import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const TEST_DATA = {
  title: "test",
  description: "testing editable",
  priority: 1,
};

const update = jest.fn();
const remove = jest.fn();

describe("productiv editableTodo", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={TEST_DATA} remove={remove} update={update} />);
  });

  it("matches snapshot", function () {
    const { container } = render(
      <EditableTodo todo={TEST_DATA} remove={remove} update={update} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders toggle edit button", function () {
    const { container } = render(<EditableTodo todo={TEST_DATA} />);

    expect(container).toContainHTML("test");
  });
});
