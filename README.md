# Sistema de Importação de Produtos

Este sistema permite importar produtos e ofertas através de uma planilha Excel.

## Requisitos

1. Node.js instalado no computador
2. NPM (Node Package Manager) instalado

## Instalação

1. Instale as dependências necessárias:
```bash
npm install xlsx
```

## Como Usar

1. Crie uma planilha Excel (ou use o Google Sheets) seguindo o modelo abaixo:

| Campo      | Descrição                              | Exemplo                |
|------------|----------------------------------------|------------------------|
| nome       | Nome do produto                        | Whey Protein Gold      |
| descricao  | Descrição curta                        | Proteína premium...    |
| preco      | Preço do produto (usar ponto)          | 149.90                 |
| imagem     | Nome do arquivo da imagem              | whey-gold.jpeg         |
| video      | Link do vídeo YouTube (opcional)       | https://youtube...     |
| detalhes   | Descrição detalhada                    | Whey Protein Gold...   |
| em_oferta  | Se está em oferta (true/false)         | true                   |
| desconto   | Percentual de desconto                 | 10                     |

2. Salve a planilha como `produtos.xlsx` no mesmo diretório do sistema

3. Coloque as imagens dos produtos na pasta `imagens/` (mesmo nome definido na planilha)

4. Execute o script de importação:
```bash
node importar_produtos.js
```

5. O sistema irá gerar automaticamente o arquivo `produto.js` com todos os produtos e ofertas

## Observações

- As imagens devem estar na pasta `imagens/`
- Use ponto (.) para decimais nos preços
- Para ofertas, use "true" na coluna em_oferta e o percentual de desconto
- O campo de vídeo é opcional
- Os IDs são gerados automaticamente em sequência

## Exemplo de Planilha

Um arquivo de exemplo `modelo_produtos.csv` foi incluído para referência. Você pode abrir este arquivo no Excel e usar como base para criar sua planilha. 