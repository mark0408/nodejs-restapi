const { DynamoDB } = require('aws-sdk');
const uuidv1 = require('uuid/v1');

const dynamoDb = new DynamoDB.DocumentClient()


  async function planetaRegistrar(event) {
  const data = JSON.parse(event.body)

  console.log(data);

  let planeta = {
    "id":"2",
    "nombre":            "Tatooine", 
    "periodo_rotacion":  "23", 
    "periodo_orbital":   "304", 
    "diametro":          "10465", 
    "clima":             "arid", 
    "gravedad":          "1 standard", 
    "terreno":           "desert", 
    "superficie_agua":   "1", 
    "poblacion":         "200000", 
    "residentes": [
        "https://swapi.py4e.com/api/people/1/", 
        "https://swapi.py4e.com/api/people/2/", 
        "https://swapi.py4e.com/api/people/4/", 
        "https://swapi.py4e.com/api/people/6/", 
        "https://swapi.py4e.com/api/people/7/", 
        "https://swapi.py4e.com/api/people/8/", 
        "https://swapi.py4e.com/api/people/9/", 
        "https://swapi.py4e.com/api/people/11/", 
        "https://swapi.py4e.com/api/people/43/", 
        "https://swapi.py4e.com/api/people/62/"
    ], 
    "filmes": [
        "https://swapi.py4e.com/api/films/1/", 
        "https://swapi.py4e.com/api/films/3/", 
        "https://swapi.py4e.com/api/films/4/", 
        "https://swapi.py4e.com/api/films/5/", 
        "https://swapi.py4e.com/api/films/6/"
    ], 
    "creado": "2014-12-09T13:50:49.641000Z", 
    "editado": "2014-12-20T20:58:18.411000Z", 
    "url": "https://swapi.py4e.com/api/planets/1/"
  }
 
  const params = {
    TableName: process.env.PLANETA_DYNAMODB_TABLE,
    Item: planeta
  }

  return dynamoDb.put(params)
    .promise()
    .then(() =>{
      return {message: 'Registro exitoso'};
    })
    .catch(error =>{
      return {message: 'erro en dynamoDb'}
    })
}

module.exports = planetaRegistrar;
