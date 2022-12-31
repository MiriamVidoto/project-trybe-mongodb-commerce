db.produtos.find(
  {
    $and: [{ vendidos: { $ne: 50 } }, { tag: { $exists: false } }],
  },
  { nome: true, vendidos: true, _id: false },
);
