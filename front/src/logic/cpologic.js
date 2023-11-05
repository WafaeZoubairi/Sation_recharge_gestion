let getAllCpos=async()=>{ 
    let res; 
      let result =await fetch('http://localhost:3000/CPO/list',
    {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',

        },
    }
    )
    .then(r=>r.json())
    .then(response => {

       res= response;
    }
    )
    return res;
 
}
let saveCpos=async(cpouser)=>{ 
    let res; 
      let result =await fetch('http://localhost:3000/CPO/save',
    {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',

        },
        body:JSON.stringify(cpouser),
    }
    )
    .then(r=>r.json())
    .then(response => {

       res= response;
    }
    )
    return res;
 
}
let deleteCpo=async(id)=>{ 
    let res; 
      let result =await fetch('http://localhost:3000/CPO/delete/'+id,
    {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
    }
    )
    .then(r=>r.json())
    .then(response => {

       res= response;
    }
    )
    return res;
 
}
let getCpo=async(id)=>{ 
    let res; 
      let result =await fetch('http://localhost:3000/CPO/get/'+id,
    {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
    }
    )
    .then(r=>r.json())
    .then(response => {

       res= response;
    }
    )
    return res;
 
}
let updateCpo=async(id,user)=>{ 
    let res; 
      let result =await fetch('http://localhost:3000/CPO/update/'+id,
    {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(user),
    }
    )
    .then(r=>r.json())
    .then(response => {

       res= response;
    }
    )
    return res;
 
}
export default {
    getAllCpos ,
    saveCpos,
    deleteCpo,
    getCpo,
    updateCpo
  };