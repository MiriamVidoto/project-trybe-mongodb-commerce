db.produtos.find(
  { vendidos: { $lt: 100, $gt: 50 } },
  { nome: true, vendidos: true, _id: false },
);
