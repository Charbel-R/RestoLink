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

// TODO check the functionality of the log out !! the token is not beig deleted
export const logOut = async () => {
  await fetch(`${baseUrl}/auth/signout`) 
}  