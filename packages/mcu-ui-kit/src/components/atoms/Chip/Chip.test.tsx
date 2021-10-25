import * as React from "react";

import themed from "../../../utils/themed";
import { Chip } from ".";

describe("Chip", () => {
  it("should render correctly", () => {
    const component = themed(
      <Chip color="red">
        Test
      </Chip>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
