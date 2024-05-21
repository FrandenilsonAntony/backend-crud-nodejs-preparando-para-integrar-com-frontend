const { ObjectId } = require('mongodb')
const { getDatabase } = require('../db/database-connection')

function getColletion() {
  return getDatabase().collection('personagem')
}

function readAll() {
  //Acessamos a lista de personagens na collection do MongoDB
  return getColletion().find().toArray()
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function readById(id) {
  //Retorna o item na collection usando o ID
  return getColletion().findOne({ _id: new ObjectId(id)})
}

function create(newItem) {
  //Adicionamos na collection
  return getColletion().insertOne(newItem)
}
/**
 * 
 * @param {string} id 
 * @returns 
 */
async function updateById(id, newItem) {
     //Atualizamos na collection o newItem pelo ID
     await getColletion().updateOne(
      { _id: new ObjectId(id)},
      { $set: newItem}
     )

}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function deleteById(id) {
  //Remover o item da collection usando o ID
  return getColletion().deleteOne({ _id: new ObjectId(id)})
}
module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById
}