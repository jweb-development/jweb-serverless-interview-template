const users = []

const getUsers = async () => {
  users.push({name: 'Jake', position: 'lead something'})
  users.push({name: 'Jeff', position: 'CEO'})
  users.push({name: 'Karina', position: 'Project Manager'})
  return users
}

module.exports = { getUsers }
