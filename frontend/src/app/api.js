export async function loginUsers(credentials){
    console.log(credentials)
    const res = await fetch('http://localhost:8000/api/v1/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(credentials),  
        next:{ revalidate:0 } //use 0 (zero) to stop cacheing the data.
    });

    return res.json();
}

export async function registerUsers(credentials){
    
    const res = await fetch('http://localhost:8000/api/v1/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(credentials),  
        next:{ revalidate:0 } //use 0 (zero) to stop cacheing the data.
    });

    return res.json();
}