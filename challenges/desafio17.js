db.resumoProdutos.insertOne(
  {
    franquia: "McDonalds",
    totalProdutos: 5,
  },
);

db.resumoProdutos.find({},
  { totalProdutos: true, _id: false },
);
