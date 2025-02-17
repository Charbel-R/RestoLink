const baseUrl = 'http://localhost:3000'


export const signUp = async ({username, email, password, gender}) => {
  const user = await fetch(`${baseUrl}/auth/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, email, password, gender})
  })
  
  const resp = await user.json()
  if (!user.ok) {
    throw new Error(`Request failed with status ${user.status}`);
  }

  if (resp.error) {
    throw new Error(resp.error.message || "Signup failed. Please check your information.");
  }
  
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
  
  if (!user.ok) {
    throw new Error(`Request failed with status ${user.status}`);
  }

  if (resp.error) { 
    throw new Error(resp.error.message || "Sign-in failed. Please check your credentials.");
  }

  return resp
} 


export const logOut = async () => {
  await fetch(`${baseUrl}/auth/signout`) 
}  