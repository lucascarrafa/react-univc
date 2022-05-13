# Executar API
Disciplina de desenvolvimento mobile

## Preparando o ambiente (Windows 10)
Baixar o python no link: https://www.python.org/ftp/python/3.10.4/python-3.10.4-amd64.exe

OBS: Na página de instalação MARCAR o campo PATH

## Instalando as bibliotecas
Abrir o cmd e executar os seguintes comandos:

```
pip install flask-cors
pip install Flask
pip install pyodbc
pip install psycopg2
pip install mysql-connector-python
```

## Executando a API
Na pasta onde está o arquivo app.py excutar o comando no cmd
```
python app.py
```

# Criar o banco
```
CREATE TABLE produtos (id_venda int, varchar(50), preco decimal(6, 2));
```

## Inserir os dados
```
INSERT INTO produtos (id_venda,nome,preco) VALUES (1,'Picanha',45.90);
```
