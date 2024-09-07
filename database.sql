-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS cadastro_clientes;
USE cadastro_clientes;

-- Tabela de Estados
CREATE TABLE Estado (
    id_estado INT AUTO_INCREMENT PRIMARY KEY,
    sigla VARCHAR(2) NOT NULL,
    nome_estado VARCHAR(100) NOT NULL
);

-- Tabela de TipoTelefone
CREATE TABLE TipoTelefone (
    id_tipo_telefone INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL
);

-- Tabela de Cliente
CREATE TABLE Cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    razao_social VARCHAR(255) NOT NULL,
    id_estado INT,
    FOREIGN KEY (id_estado) REFERENCES Estado(id_estado)
);

-- Tabela de Telefone
CREATE TABLE Telefone (
    id_telefone INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    numero VARCHAR(20) NOT NULL,
    id_tipo_telefone INT,
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente) ON DELETE CASCADE,
    FOREIGN KEY (id_tipo_telefone) REFERENCES TipoTelefone(id_tipo_telefone)
);

-- Inserir alguns exemplos de dados

-- Inserir Estados
INSERT INTO Estado (sigla, nome_estado) VALUES ('SP', 'São Paulo'), ('RJ', 'Rio de Janeiro');

-- Inserir Tipos de Telefone
INSERT INTO TipoTelefone (descricao) VALUES ('Residencial'), ('Comercial'), ('Celular');

-- Inserir Clientes
INSERT INTO Cliente (razao_social, id_estado) VALUES ('Empresa X', 1), ('Empresa Y', 2);

-- Inserir Telefones
INSERT INTO Telefone (id_cliente, numero, id_tipo_telefone) VALUES (1, '11999999999', 3), (1, '1122222222', 1), (2, '2133333333', 2);

-- Consulta SQL para buscar clientes e seus telefones do estado de São Paulo (SP)
SELECT 
    c.id_cliente,
    c.razao_social,
    GROUP_CONCAT(t.numero SEPARATOR ', ') AS telefones
FROM 
    Cliente c
JOIN 
    Telefone t ON c.id_cliente = t.id_cliente
JOIN 
    Estado e ON c.id_estado = e.id_estado
WHERE 
    e.sigla = 'SP'
GROUP BY 
    c.id_cliente, c.razao_social;
