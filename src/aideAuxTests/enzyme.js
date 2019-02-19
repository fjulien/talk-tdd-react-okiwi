export let cliquerSur = function(element) {
  element.simulate("click");
};

export function ecrire(texte) {
  return {
    dans(element) {
      element.simulate("change", {
        target: {
          value: texte
        }
      });
    }
  };
}
