import { calculerLesCreances } from "../calculerLesCreances";

describe("calcul de créances", () => {
  it("ne renvoie pas de créances s'il n'y a pas de dépenses", () => {
    const aucuneDepense = [];
    const creances = calculerLesCreances(aucuneDepense);
    expect(creances).toEqual([]);
  });

  it("calcule une créance de 1 dépense et 2 participants", () => {
    const participants = ["Jim", "Pam"];
    const uneDepense = [{ payeur: "Jim", montant: 100 }];

    const creances = calculerLesCreances(
      uneDepense,
      participants
    );

    expect(creances).toEqual([
      { from: "Pam", to: "Jim", montant: 50 }
    ]);
  });
});
