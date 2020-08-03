const { DynamoDB } = require('aws-sdk');
const dynamoDb = new DynamoDB.DocumentClient();

async function obtenerPlanetas (event) {

  let idInicial = 3;

//  for (idInicial; index <= 10; idInicial++) {
    let planeta = await obtenerPlanetasApiStarWars(idInicial);

    let planetaEspañol = Object.entries(planeta).map((atributos) =>{
        atributos
    })

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
 // }

 
}

async function obtenerPlanetasApiStarWars(idInicial){
    const data = await fetch(`https://swapi.py4e.com/api/planets/${idInicial}/`)
    .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        return myJson
      });
    return data;
}
module.exports = obtenerPlanetas;