import * as React from "react";

import themed from "../../../utils/themed";
import { Test } from ".";

describe("Test", () => {
  it("should render correctly", () => {
    const component = themed(
      <Test color="red">
        Test
      </Test>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
