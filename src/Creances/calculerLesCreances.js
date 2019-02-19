export function calculerLesCreances(
  depenses,
  participants
) {
  if (depenses.length === 0) return [];

  // trouver payer
  const payeur = depenses[0].payeur;
  // trouver le créancer
  const creancier = participants.find(p => p !== payeur);
  // faire rembourser la moitié
  return [
    {
      from: creancier,
      to: payeur,
      montant: depenses[0].montant / 2
    }
  ];
}
