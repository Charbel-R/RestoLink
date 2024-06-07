const baseUrl = 'http://localhost:3000'


export const signUp = async ({username, email, password}) => {
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

export const signIn = async ({ email, password}) => {
  const user = await fetch(`${baseUrl}/auth/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password})
  })
  
  const resp = await user.json()
  return resp

}  