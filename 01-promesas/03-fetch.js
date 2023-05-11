const resp = fetch('https://reqres.in/api/users');

resp.then((response) => {

  return response.json()

}).then((json) => {


    let content = document.getElementById('conteiner');
    
    let htmlX = '';
    
    json.data.forEach(element => {
      console.log(element);
      let htmlCard = `
      <div class="card" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">${element.first_name}</h5>
          <p class="card-text">${element.last_name}</p>
          <button onclick="mostrarDetalle(${element.id})" class="btn btn-primary">Detalle</button>
        </div>
      </div>`;
      htmlX = htmlX + htmlCard;
    });

    content.innerHTML = htmlX;

  });


let mostrarDetalle = (id) =>{

  if(id !== null){
   
    const resp2 = fetch('https://reqres.in/api/users/'+id);

    resp2.then((response) => {
    
      return response.json()
    
    }).then((json) => {
      let content = document.getElementById('detalle');
      let htmlX = '';
    
      let element = json.data;
       
        let htmlModal = `
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Detalle del Usuario</h5>
              <button type="button" onclick="cerrarModal()" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <img class="img-thumbnail" src="${element.avatar}" alt="Card image cap">
            <br>
              <strong>Nombre:</strong> <span>${element.first_name}</span> <br/>
              <strong>Apellidos:</strong> <span>${element.last_name}</span> <br/>
              <strong>Correo:</strong> <span>${element.email}</span> <br/>
            </div>
            <div class="modal-footer">
              <button type="button"  onclick="cerrarModal()" class="btn btn-secondary" data-dismiss="modal">Close</button>
            
            </div>
          </div>
        </div>`;
        htmlX = htmlX + htmlModal;
     
  
      content.innerHTML = htmlX;
      new bootstrap.Modal(document.querySelector("#detalle")).show();
      
    });

  }


};


let cerrarModal =() =>{
  var myModalEl = document.getElementById('detalle');
  var modal = bootstrap.Modal.getInstance(myModalEl)
  modal.hide();
}