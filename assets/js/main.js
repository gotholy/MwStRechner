// ! ======== MEHRWERTSTEUERRECHNER ======== //
// - 1: Daten auslesen und inputs holen
// - 2: Output definieren

function berechnen() {
  // // Inputs
  const nettobetrag = document.querySelector("#nettobetrag").value;
  const nettoOderBrutto = document.querySelector(
    `input[name=nettoBrutto]:checked`
  ).value;
  const steuersatz = document.querySelector(
    `input[name="steuersatz"]:checked`
  ).value;
  console.log({ nettobetrag }, { nettoOderBrutto }, { steuersatz });
  // // Outputs
  const steuerbetrag = document.querySelector(".steuerbetrag");
  const endpreis = document.querySelector(".endpreis");

  // ! ==== Hier geht die Funktion los mit Netto zu Brutto und 19% ausgewählt ===

  if (nettoOderBrutto === "brutto" && steuersatz === "19") {
    // * label für Eingabe bei Submit ändern.
    const bruttobetrag = (document.querySelector(
      ".betragInputLabel"
    ).innerHTML = "Nettobetrag (Preis ohne MwSt) in Euro");

    // * label Endbetrag ändern
    document.querySelector(".ergebnis").innerHTML = "Bruttobetrag (Endpreis)";
    // - Berechnung und gleichzeit ausgabe im HTML
    steuerbetrag.innerHTML = (nettobetrag / 100) * steuersatz + "€";
    endpreis.innerHTML = nettobetrag * 1.19 + "€";
    // // hier geht die Funktion weiter mit Netto zu Brutto und 7% ausgewählt
  } else if (nettoOderBrutto === "brutto" && steuersatz === "7") {
    // * label für Eingabe bei Submit ändern.
    const bruttobetrag = (document.querySelector(
      ".betragInputLabel"
    ).innerHTML = "Nettobetrag (Preis ohne MwSt) in Euro");

    // * label Endbetrag ändern
    document.querySelector(".ergebnis").innerHTML = "Bruttobetrag (Endpreis)";
    // - Berechnung und gleichzeit ausgabe im HTML
    steuerbetrag.innerHTML = (nettobetrag / 100) * steuersatz + "€";
    endpreis.innerHTML = nettobetrag * 1.07 + "€";
    // // hier geht die Funktion weiter mit Brutto zu Netto und 19% ausgewählt
  } else if (nettoOderBrutto === "netto" && steuersatz === "19") {
    // * label für Eingabe bei Submit ändern.
    const bruttobetrag = (document.querySelector(
      ".betragInputLabel"
    ).innerHTML = "Bruttobetrag (Preis mit MwSt) in Euro");

    // * label Endbetrag ändern
    document.querySelector(".ergebnis").innerHTML = "Nettobetrag (Endpreis)";
    // - Berechnung und gleichzeit ausgabe im HTML
    steuerbetrag.innerHTML = (nettobetrag / 100) * steuersatz + "€";
    endpreis.innerHTML = nettobetrag * 0.81 + "€";
    // // hier geht die Funktion weiter mit Brutto zu Netto und 7% ausgewählt
  } else if (nettoOderBrutto === "netto" && steuersatz === "7") {
    // * label für Eingabe bei Submit ändern.
    const bruttobetrag = (document.querySelector(
      ".betragInputLabel"
    ).innerHTML = "Bruttobetrag (Preis mit MwSt) in Euro");

    // * label Endbetrag ändern
    document.querySelector(".ergebnis").innerHTML = "Nettobetrag (Endpreis)";
    // - Berechnung und gleichzeit ausgabe im HTML
    steuerbetrag.innerHTML = (nettobetrag / 100) * steuersatz + "€";
    endpreis.innerHTML = nettobetrag * 0.93 + "€";
  }
}
