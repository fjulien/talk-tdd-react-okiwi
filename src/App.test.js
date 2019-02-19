import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App", () => {
  it("affiche une ardoise vierge", () => {
    const app = mount(<App />);

    expect(app.html()).toContain("<h2>Ardoise !</h2>");
    expect(app.find("#participants").html()).toContain(
      "Aucun participant"
    );
    expect(app.find("#depenses").html()).toContain(
      "Aucune dépense"
    );
    expect(app.find("#creances").html()).toContain(
      "Aucune créance"
    );
  });
});
