db.produtos.find({
  "valoresNutricionais.3.percentual": {$gte: 30, $lte: 40}
},
  { nome: true, _id: false },
);
