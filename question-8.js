// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
async function getUsersInfo() {
  return fetch('https://jsonplaceholder.typicode.com/users')
}
async function getUsersName() {
  const response = await getUsersInfo()
  const usersData = await response.json()
  // console.log(usersData);
  const newUsers = usersData.map((user) => user.name)
  console.log(newUsers)
}

getUsersName()
