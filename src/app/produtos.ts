export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Gaming mouse", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg", quantidadeEstoque: 10 },
    { id: 2, descricao: "Great monitor", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-1.jpg", quantidadeEstoque: 10 },
    { id: 3, descricao: "Excellent keyboard", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg", quantidadeEstoque: 10 },
    { id: 4, descricao: "Headphone for gamers", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Headphone", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 10 },
    { id: 6, descricao: "Good headphone", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg", quantidadeEstoque: 10 },
    { id: 8, descricao: "Graphics card combo", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidadeEstoque: 10 },
    { id: 9, descricao: "Ryzen processor", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg", quantidadeEstoque: 10 },
    { id: 10, descricao: "Good laptop", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidadeEstoque: 10 },
    { id: 11, descricao: "Excellent laptop", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", quantidadeEstoque: 10 },
    { id: 12, descricao: "Cheap mouse", preco: 20, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.png", quantidadeEstoque: 10 },
    { id: 13, descricao: "Great mouse", preco: 200, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "Small mouse", preco: 50, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg", quantidadeEstoque: 10 },
    { id: 15, descricao: "Good keyboard", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", quantidadeEstoque: 10 },
]