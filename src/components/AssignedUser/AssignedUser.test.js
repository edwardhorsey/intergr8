import React from "react";
import { shallow } from "enzyme";
import AssignedUser from "./AssignedUser";

describe("Stage1 component tests", () => {
  const component = shallow(<AssignedUser />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});