const baseUrl = 'http://localhost:3000'


export const addUser = async ({username, email, password}) => {
  const user = await fetch(`${baseUrl}/auth/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, email, password})
  })
  
  const resp = await user.json()
  return resp

}  