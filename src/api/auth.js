export const setAuthToken = user =>{
    const currentUser = {
        email : user.email,
        role : user.role,

    }

    // save user in db  & get token 
    
    fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
        method : 'PUT',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(currentUser),

    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        localStorage.setItem('usedcar-token', data.token)
    })

}

// creaate and save user
 export const saveUser = (name, email) => {
    const user = { name, email };
    fetch(`${process.env.REACT_APP_API_URL}/users}`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log('save user',data);
            // setCreateUserEmail(email);
        });
};