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

describe("Dépenses", () => {
  it("Ajoute une nouvelle dépense", () => {
    const app = mountApp();

    depenser("Jim", "100", app);
    depenser("Pam", "70", app);

    expect(app.find("#depenses").html()).toContain(
      "170 euros dépensés"
    );
    expect(app.find("#depenses").html()).toContain(
      "Jim : 100 euros"
    );
    expect(app.find("#depenses").html()).toContain(
      "Pam : 70 euros"
    );
    expectInputVide(app.find("#depense-montant"));
    expectInputVide(app.find("#depense-payeur"));
  });
});

describe("Créances", () => {
  it("affiche les créances", () => {
    const ardoise = mountApp();

    inscrire("Jim", ardoise);
    inscrire("Pam", ardoise);
    depenser("Jim", "100", ardoise);

    expect(ardoise.find("#creances").html()).toContain(
      "Pam doit 50 euros à Jim"
    );
  });
});

const depenser = function(payeur, montant, app) {
  ecrire(payeur).dans(app.find("#depense-payeur"));
  ecrire(montant).dans(app.find("#depense-montant"));
  cliquerSur(app.find("#depenser"));
};

let mountApp = function() {
  return mount(<App />);
};
