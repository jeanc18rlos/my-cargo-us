import * as React from "react";

import themed from "../../../utils/themed";
import Card from ".";

describe("Card", () => {
  it("should render correctly", () => {
    const component = themed(
      <Card>
        Test
      </Card>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
