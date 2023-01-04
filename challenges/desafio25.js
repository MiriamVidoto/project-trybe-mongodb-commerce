db.produtos.updateMany(
  {
    $and: [
      { "valoresNutricionais.tipo": "sódio" },
      { "valoresNutricionais.percentual": { $gte: 40 } },
    ],
  },
  {
    $addToSet: {
      tags: "muito sódio",
    },
  },
);

db.produtos.find({},
  { nome: true, tags: true, _id: false },
);
