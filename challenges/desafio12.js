db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $addToSet: { ingredientes: "ketchup" } },
);

db.produtos.find({},
  { nome: true, ingredienter:true, _id: false },
);