db.produtos.updateMany(
  {
    $and: [
      { "valoresNutricionais.tipo": "sódio" },
      { "valoresNutricionais.percentual": { $gt: 20, $lt: 40 } },
    ],
  },
  {
    $addToSet: {
      tags: "contém sódio",
    },
  },
);

db.produtos.find({},
  { nome: true, tags: true, _id: false },
);
