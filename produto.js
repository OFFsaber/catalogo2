// Array de ofertas: id do produto e % de desconto
const ofertas = [
  { id: 4, desconto: 15 }, // Pré-Treino Thunder
  { id: 1, desconto: 10 }, // Whey Protein Gold
  { id: 3, desconto: 20 }  // BCAA 2400
];

const svgCarrinho = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2b80ff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="19" cy="21" r="1.5"/><path d="M5 6h2l1.68 9.39a2 2 0 0 0 2 1.61h6.72a2 2 0 0 0 2-1.61L21 8H7.42"/></svg>`;

const produtos = [
  {
    "id": 1,
    "nome": "Whey Protein Gold",
    "descricao": "Proteína premium para ganho de massa",
    "preco": 149.9,
    "imagem": "imagens/whey-gold.jpeg",
    "video": "https://www.youtube.com/embed/McXWc4ZUjK0",
    "detalhes": "Whey Protein Gold é ideal para recuperação muscular pós-treino contém 24g de proteína por dose."
  },
  {
    "id": 2,
    "nome": "Creatina Monohidratada",
    "descricao": "Auxilia no aumento de força",
    "preco": 89.9,
    "imagem": "imagens/creatina.jpeg",
    "video": "https://www.youtube.com/embed/McXWc4ZUjK0",
    "detalhes": "A creatina é um composto natural ideal para treinos intensos melhorando o desempenho físico."
  },
  {
    "id": 3,
    "nome": "BCAA 2400",
    "descricao": "Aminoácidos essenciais em cápsulas",
    "preco": 69.9,
    "imagem": "imagens/bcaa.jpeg",
    "video": "https://www.youtube.com/embed/McXWc4ZUjK0",
    "detalhes": "O BCAA auxilia na recuperação muscular e evita o catabolismo especialmente em atividades intensas."
  }
];