import React from "react";
import App from "./App";
import { mount } from "enzyme";
import { cliquerSur, ecrire } from "./aideAuxTests/enzyme";

let expectInputVide = function(input) {
  expect(input.html()).toContain('value=""');
};
let inscrire = function(participant, app) {
  ecrire(participant).dans(app.find("#inscription-nom"));
  cliquerSur(app.find("#inscrire"));
};
describe("App", () => {
  it("affiche une ardoise vierge", () => {
    const app = mountApp();

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

  it("inscrit un participant", () => {
    const app = mountApp();

    inscrire("Pam", app);

    expect(app.find("#participants").html()).toContain(
      "1 participant"
    );
    expect(app.find("#participants").html()).toContain(
      "Pam"
    );
    expectInputVide(app.find("#inscription-nom"));
  });

  it("inscrit plusieurs participants", () => {
    const ardoise = mountApp();

    inscrire("Jim", ardoise);
    inscrire("Creed", ardoise);

    expect(ardoise.find("#participants").html()).toContain(
      "2 participants"
    );
  });
});

let mountApp = function() {
  return mount(<App />);
};
