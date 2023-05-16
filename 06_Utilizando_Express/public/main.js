
function getAll(){
    let top = document.getElementById("top").value
    let orderField = document.getElementById("orderField").value
    let sortOrder = document.getElementById("sortOrder").value
    console.log(top)

    axios
    .get("http://localhost:3000/Pizzas/getAll?"+(top != "" ? "top="+top : undefined)+"&"+(orderField != "" ? "oderField="+orderField : undefined)+"&"+(sortOrder != "" ? "sortOrder"+sortOrder : undefined))
    // .get("http://localhost:3000/Pizzas/getAll")
    .then((result) => {    
        console.log(result.data);
    })
    .catch((error) => {
        console.log(error);
    });
}

function getById(){
    let id = document.getElementById("idGet").value
    console.log(id)

    axios    
    .get("http://localhost:3000/Pizzas/getById/"+id)
    .then((result) => {    
        console.log(result.data);
    })
    .catch((error) => {
        console.log(error);
    });
}

function deleteById(){
    let id = document.getElementById("idDelete").value
    console.log(id)

    axios    
    .delete("http://localhost:3000/Pizzas/deleteById/"+id)
    .then((result) => {    
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
}

function insert(){

    let body = {
        "Nombre": (document.getElementById("nombreInsert").value == null ? undefined : document.getElementById("nombreInsert").value),
        "LibreGluten": (document.getElementById("libreGlutenInsert").value == 0 ? false : true),
        "Importe": (document.getElementById("importeInsert").value == null ? undefined : document.getElementById("importeInsert").value),
        "Descripcion": (document.getElementById("descripcionInsert").value == null ? undefined : document.getElementById("descripcionInsert").value)
    }
    console.log(document.getElementById("descripcionInsert").value)

    axios    
    .post("http://localhost:3000/Pizzas/insert", body)
    .then((result) => {    
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
}

function update(){

    console.log(document.getElementById("importeUpdate").value == "")

    let body = {
        "Id": (document.getElementById("idUpdate").value == null ? undefined : document.getElementById("idUpdate").value),
        "Nombre": (document.getElementById("nombreUpdate").value),
        "LibreGluten": document.getElementById("libreGlutenUpdate").value,
        "Importe": (document.getElementById("importeUpdate").value == "" ? undefined : document.getElementById("importeUpdate").value),
        "Descripcion": (document.getElementById("descripcionUpdate").value == "" ? undefined : document.getElementById("descripcionUpdate").value)
    }

    axios    
    .put("http://localhost:3000/Pizzas/update", body)
    .then((result) => {    
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
}


