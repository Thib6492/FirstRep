Cas = 1
if (Fièvre) {
  if (Toux) {
    Cas = 2
  } else if (TroubleOdoratGout) {
    Cas = 2
  } else if (Courbatures) {
    Cas = 2
  } else if (HypertensionMaladiecardiaqueTraitementcoeur = "Oui" || HypertensionMaladiecardiaqueTraitementcoeur = "Ne sait pas") {
    if (Dyspnée) {
      Cas = 2
    } else if (Anorexie){
      Cas = 2
    } else {
      Cas = 3.1
    }
  } else if (Diabétique) {
    if (Dyspnée) {
      Cas = 2
    } else if (Anorexie){
      Cas = 2
    } else {
      Cas = 3.1
    }
  } else if (Cancer) {
    if (Dyspnée) {
      Cas = 2
    } else if (Anorexie){
      Cas = 2
    } else {
      Cas = 3.1
    }
  } else if (MaladieRespiratoire = "Oui") {
    if (Dyspnée) {
      Cas = 2
    } else if (Anorexie){
      Cas = 2
    } else {
      Cas = 3.1
    }
  } else if (Enceinte = "Oui") {
    if (Dyspnée) {
      Cas = 2
    } else if (Anorexie){
      Cas = 2
    } else {
      Cas = 3.1
    }
  } else if (Age > 69) {
    if (Dyspnée) {
      Cas = 2
    } else if (Anorexie){
      Cas = 2
    } else {
      Cas = 3.1
    }
  } else if (IMC ≥ 30 || IMC = "Ne sait pas") {
    if (Dyspnée) {
      Cas = 2
    } else if (Anorexie){
      Cas = 2
    } else {
      Cas = 3.1
    }
  } else if (Age ≤ 69) {
    Cas = 4
  }
} else if (Toux) {
  if (TroubleOdoratGout) {
    if (HypertensionMaladiecardiaqueTraitementcoeur = "Oui" || HypertensionMaladiecardiaqueTraitementcoeur = "Ne sait pas") {
      if (Dyspnée) {
        Cas = 3.2
      } else if (Anorexie){
        Cas = 3.2
      } else {
        Cas = 3.1
      }
    } else if (Diabétique) {
      if (Dyspnée) {
        Cas = 3.2
      } else if (Anorexie){
        Cas = 3.2
      } else {
        Cas = 3.1
      }
    } else if (Cancer) {
      if (Dyspnée) {
        Cas = 3.2
      } else if (Anorexie){
        Cas = 3.2
      } else {
        Cas = 3.1
      }
    } else if (MaladieRespiratoire = "Oui") {
      if (Dyspnée) {
        Cas = 3.2
      } else if (Anorexie){
        Cas = 3.2
      } else {
        Cas = 3.1
      }
    } else if (Enceinte = "Oui") {
      if (Dyspnée) {
        Cas = 3.2
      } else if (Anorexie){
        Cas = 3.2
      } else {
        Cas = 3.1
      }
    } else if (Age > 69) {
      if (Dyspnée) {
        Cas = 3.2
      } else if (Anorexie){
        Cas = 3.2
      } else {
        Cas = 3.1
      }
    } else if (IMC ≥ 30 || IMC = "Ne sait pas") {
      if (Dyspnée) {
        Cas = 3.2
      } else if (Anorexie){
        Cas = 3.2
      } else {
        Cas = 3.1
      }
    } else if (Age ≤ 69) {
      Cas = 4
    }
  } else if (Courbatures) {
    if (HypertensionMaladiecardiaqueTraitementcoeur = "Oui" || HypertensionMaladiecardiaqueTraitementcoeur = "Ne sait pas") {
      if (Dyspnée) {
        Cas = 3.2
      } else if (Anorexie){
        Cas = 3.2
      } else {
        Cas = 3.1
      }
    } else if (Diabétique) {
      if (Dyspnée) {
        Cas = 3.2
      } else if (Anorexie){
        Cas = 3.2
      } else {
        Cas = 3.1
      }
    } else if (Cancer) {
      if (Dyspnée) {
        Cas = 3.2
      } else if (Anorexie){
        Cas = 3.2
      } else {
        Cas = 3.1
      }
    } else if (MaladieRespiratoire = "Oui") {
      if (Dyspnée) {
        Cas = 3.2
      } else if (Anorexie){
        Cas = 3.2
      } else {
        Cas = 3.1
      }
    } else if (Enceinte = "Oui") {
      if (Dyspnée) {
        Cas = 3.2
      } else if (Anorexie){
        Cas = 3.2
      } else {
        Cas = 3.1
      }
    } else if (Age > 69) {
      if (Dyspnée) {
        Cas = 3.2
      } else if (Anorexie){
        Cas = 3.2
      } else {
        Cas = 3.1
      }
    } else if (IMC ≥ 30 || IMC = "Ne sait pas") {
      if (Dyspnée) {
        Cas = 3.2
      } else if (Anorexie){
        Cas = 3.2
      }
      Cas = 3.1
    } else if (Age ≤ 69) {
      Cas = 4
    }
  }
} else if (Diarhée) {
  if (HypertensionMaladiecardiaqueTraitementcoeur = "Oui" || HypertensionMaladiecardiaqueTraitementcoeur = "Ne sait pas") {
    if (Dyspnée) {
      Cas = 3.2
    } else if (Anorexie){
      Cas = 3.2
    } else {
      Cas = 3.1
    }
  } else if (Diabétique) {
    if (Dyspnée) {
      Cas = 3.2
    } else if (Anorexie){
      Cas = 3.2
    } else {
      Cas = 3.1
    }
  } else if (Cancer) {
    if (Dyspnée) {
      Cas = 3.2
    } else if (Anorexie){
      Cas = 3.2
    } else {
      Cas = 3.1
    }
  } else if (MaladieRespiratoire = "Oui") {
    if (Dyspnée) {
      Cas = 3.2
    } else if (Anorexie){
      Cas = 3.2
    } else {
      Cas = 3.1
    }
  } else if (Enceinte = "Oui") {
    if (Dyspnée) {
      Cas = 3.2
    } else if (Anorexie){
      Cas = 3.2
    } else {
      Cas = 3.1
    }
  } else if (Age > 69) {
    if (Dyspnée) {
      Cas = 3.2
    } else if (Anorexie){
      Cas = 3.2
    } else {
      Cas = 3.1
    }
  } else if (IMC ≥ 30 || IMC = "Ne sait pas") {
    if (Dyspnée) {
      Cas = 3.2
    } else if (Anorexie){
      Cas = 3.2
    } else {
      Cas = 3.1
    }
  } else if (Age ≤ 69) {
    Cas 4
  }
} else if (Dyspnée) {
  Cas = 5
} else if (Anorexie) {
  Cas = 5
}
