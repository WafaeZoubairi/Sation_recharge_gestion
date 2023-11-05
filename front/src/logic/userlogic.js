let veryfiyUser=async(mail,password)=>{ 
    console.log (mail,password)
    let res; 
    let data ={ email:mail,password:password,  };
      let result =await fetch('http://localhost:3000/login',
    {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(data)
    }
    )
    .then(response => {

       res= response;
    }
    )
    return res;
 
}
export default {
    veryfiyUser,
  };