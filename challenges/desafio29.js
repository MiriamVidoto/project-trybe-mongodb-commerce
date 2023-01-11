db.produtos.updateMany({},
  { $rename: { descricao: "descricaoSite" } });

db.produtos.find({},
  { nome: true, descricaoSite: true, _id: false });
