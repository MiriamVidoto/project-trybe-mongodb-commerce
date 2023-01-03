db.produtos.updateMany({},
  { 
    $set: { avaliacao: 0 },
  },
);

db.produtos.updateMany(
  {
    tags: { $elemMatch: { $eq: "bovino" } }
  },
  { 
    $set: { avaliacao: 5 },
  },
);

db.produtos.updateMany(
  {
    tags: { $elemMatch: { $eq: "ave" }}
  },
  { 
    $set: { avaliacao: 3 },
  },
);

db.produtos.find({},
  { nome: true, avaliacao: true, _id: false },
);
