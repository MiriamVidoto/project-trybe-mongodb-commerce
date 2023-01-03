db.produtos.find(
  {
    ingredientes: { $elemMatch: { $eq: "picles" } },
  },
  { 
    nome: true,
    ingredientes: true,
    valoresNutricionais: { $slice: 3 },
    _id: false,
  },
);
