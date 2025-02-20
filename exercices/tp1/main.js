let nom = prompt("Entrer le nom de produit : ");
let prix = prompt("Entrer le prix de produit : ");
let quantite = prompt("Entrer la quantité de produit : ");
let HT = prix * quantite;
let TVA = HT * 0.2;
let TTC = HT + TVA;

alert(
  "le montant HT de votre produit " +
    nom +
    " est : " +
    HT +
    "DH, le montant TVA est : " +
    TVA +
    "DH, le montant TTC est : " +
    TTC +
    "DH"
);
