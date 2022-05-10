from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import pyodbc
import psycopg2

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/',methods=['GET'])
@cross_origin()
def verifica():
    return "API Produtos",200

@app.route('/lista',methods=['GET'])
@cross_origin()
def status():
    server = '10.200.111.124' 
    database = 'sempretem' 
    username = 'mobile' 
    password = 'ADS@univc2022' 
    cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)
    cursor = cnxn.cursor()
    cursor.execute("SELECT * FROM produtos")

    lista_produtos=[]
    for aux in cursor:
        lista_produtos.append({'id':aux[0],'nome':str(aux[1]),'preco':aux[2]})
    
    return jsonify(lista_produtos),200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)