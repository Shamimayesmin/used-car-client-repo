export const hostRequest = async hostData => {
    const url = `${process.env.REACT_APP_API_URL}/user/${hostData?.email}`
  
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(hostData),
    })
  
    const data = await response.json()
  
    return data
  }
  
  // Get user role
  export const getRole = async email => {
    const url = `${process.env.REACT_APP_API_URL}/user/${email}`
    // const url =`http://localhost:5000/user?email=${email}`
  
    console.log(url);
    const response = await fetch(url)
  
    const user = await response.json()
    console.log(user);
  
    return user?.role
  }
  
  // Get All Users
  export const getAllUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`)
  
    const users = await response.json()
  
    return users
  }
  
  export const makeHost = async user => {
    delete user._id
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/user/${user?.email}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ ...user, role: 'host' }),
      }
    )
    const users = await response.json()
  
    return users
  }