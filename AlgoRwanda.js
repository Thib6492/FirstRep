Cas == 1
if (Fièvre) {
  if (Toux || TroubleOdoratGout ||  Courbatures) {
    Cas == 2
  } else if (HypertensionMaladiecardiaqueTraitementcoeur == "Oui" || HypertensionMaladiecardiaqueTraitementcoeur == "Ne sait pas" || Diabétique || Cancer || MaladieRespiratoire == "Oui" || Enceinte == "Oui" || Age > 69 || IMC ≥ 30 || IMC == "Ne sait pas") {
    if (Dyspnée || Anorexie){
      Cas == 3.2
    } else {
      Cas == 3.1
    }
  } else if (Age ≤ 69) {
    Cas == 4
  }
} else if (Toux) {
  if (TroubleOdoratGout || Courbatures) {
    if (HypertensionMaladiecardiaqueTraitementcoeur == "Oui" || HypertensionMaladiecardiaqueTraitementcoeur == "Ne sait pas" || Diabétique || Cancer || MaladieRespiratoire == "Oui" || Enceinte == "Oui" || Age > 69 || IMC ≥ 30 || IMC == "Ne sait pas") {
      if (Dyspnée || Anorexie){
        Cas == 3.2
      } else {
        Cas == 3.1
      }
    } else if (Age ≤ 69) {
      Cas == 4
    }
  }
} else if (Diarhée) {
  if (HypertensionMaladiecardiaqueTraitementcoeur == "Oui" || HypertensionMaladiecardiaqueTraitementcoeur == "Ne sait pas" || HypertensionMaladiecardiaqueTraitementcoeur == "Ne sait pas" || Diabétique || Cancer || MaladieRespiratoire == "Oui" || Enceinte == "Oui" || Age > 69 || IMC ≥ 30 || IMC == "Ne sait pas") {
    if (Dyspnée || Anorexie){
      Cas == 3.2
    } else {
      Cas == 3.1
    }
  } else if (Age ≤ 69) {
    Cas 4
  }
} else if (Dyspnée || Anorexie) {
  Cas == 5
}
