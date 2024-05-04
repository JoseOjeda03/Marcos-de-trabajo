document.addEventListener("DOMContentLoaded", () => {
	

	getClientes();
	
  });



  function getClientes() {
    const urlOficinas = `http://localhost:8080/api/clientes`;
    
    fetch(urlOficinas)
      .then((response) => {
      return response.json();
      })
    
      .then((data) => {
      console.log(data);
      renderingOficinas(data);
      });
    
    function renderingOficinas(oficinas) {
      const clientes = document.querySelector("#clientes");
     
      let html = "";
    
      oficinas.forEach((oficina) => {
      const { nombre, direccion, telefono,sexo,_id,usuario } = oficina;
      html += `


      <div class="card" style="width: 30rem;">
  
      <div class="card-body">
         <h2 class="card-title">${nombre}</h2>
         <p class="card-text">
            
         Direccion:${direccion}<br>
         Telefono:${telefono}<br>
         Sexo:${sexo}<br>
         Usuario:${usuario}<br>
       </p>
       <a type="button" class="btn btn-primary boton" _id="${_id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
       Actualizar
     </a> 
      </div>
    </div>




 


            
          

        `;
        clientes.innerHTML = html;
       
      });
    }
    }
    const createcliente = async (oficina) => {
        const urlOficinas = `http://localhost:8080/api/clientes`;

          
          try {
            await fetch(`${urlOficinas}`, {
              method: "POST",
              body: JSON.stringify(oficina), // data puede ser string o un objeto
              headers: {
              "Content-Type": "application/json", // Y le decimos que los datos se enviaran como JSON
              },
            });
            } catch (error) {
            console.log(error);
            }
            window.location.href = "cliente.html";
           
          
          
          }
    const formulario = document.querySelector("#formulario2");
        formulario.addEventListener("submit", CrearCliente);

        async function CrearCliente(e) {
          console.log("HOLA")
          e.preventDefault(e);
         
          const nombre = document.querySelector("#nombreCliente").value;
          const direccion= document.querySelector("#direccionCliente").value;
          const telefono = document.querySelector("#telefonoCliente").value;
          const sexo = document.querySelector("#sexo").value;
          const usuario = document.querySelector("#usuarioCliente").value;
          const contraseña = document.querySelector("#contraseñaCliente").value;
          const Disponible="true"
        
          const Oficina = {
         
            nombre,
            direccion,
            telefono,
            sexo,
            Disponible,
            usuario,
            contraseña

      
           
          };
          /* llamamos a la funcion metodo HTTP POST */
          createcliente(Oficina);
        }
        const getupdateCLiente = async (oficina) => {
            const urlOficinas = `http://localhost:8080/api/clientes/add`;
           console.log(oficina._id)
              
              try {
                await fetch(`${urlOficinas}/${oficina._id}`, {
                  method: "PUT",
                  body: JSON.stringify(oficina), // data puede ser string o un objeto
                  headers: {
                  "Content-Type": "application/json", // Y le decimos que los datos se enviaran como JSON
                  },
                });
                } catch (error) {
                console.log(error);
                }
                window.location.href = "cliente.html";
               
              
              
              }
        const oficinas= document.querySelector("#clientes");
        oficinas.addEventListener('click',SelectMovies);
    
        function SelectMovies(e){
          if(e.target.classList.contains("boton")){
            console.log("holaaaaaaaa");
            const moviedSelecd =e.target.parentElement.parentElement;
            const _id= moviedSelecd.querySelector("a").getAttribute("_id");
            get_id(_id);
          }
         
    
          }

          
      function get_id(disponible) {
        const urlProductos = `http://localhost:8080/api/clientes`;
        console.log(disponible);
        
        fetch(`${urlProductos}/${disponible}`)
          .then((response) => {
          return response.json();
          })
        
          .then((data) => {
          console.log(data);
          renderingCliente_id(data);
          });
        
        


          
        }



        function renderingCliente_id(oficinas) {
        
            const actual = document.querySelector("#actual");
         
            let html2= "";
          
            oficinas.forEach((oficina) => {
            const { nombre, direccion, telefono,sexo,usuario,contraseña,_id } = oficina;
                if(sexo=="FEMENINO"){
                    html2 += `
              <div class="mb-3 fs-2 ">
             
              <input type="hidden" class="form-control" id="idOficina" value="${_id}" >
        
            </div>
                          <div class="mb-3 fs-2">
                          <label  class="form-label">Nombre Cliente</label>
                          <input type="text" class="form-control" id="nombreOficina" value="${nombre}" >
                    
                        </div>
                        <div class="mb-3 fs-2">
                        <label  class="form-label">Usuario</label>
                            <input type="text" class="form-control"  id="Referencias" value="${usuario}" >
                       
                         
                      </div>



                        <div class="mb-3 fs-2">
                          <label  class="form-label">Direccion</label>
                          <input type="text" class="form-control" id="direccionOficina" value="${direccion}">
                        </div>
                        <div class="mb-3 fs-2">
                          <label  class="form-label">Telefono</label>
                          <input type="text" class="form-control" id="telefonoOficina" value="${telefono}">
                        </div>
                        <div class="mb-3 fs-2">
                        <label  class="form-label">Sexo</label>

                          <select class="form-select delete  boton" aria-label="Default select example" id="zona">
                        
                          <option value="${sexo}">${sexo}</option>
                          <option value="MASCULINO">MASCULINO</option>
                  
                        </select>
                      </div>

              `; 
                }else{

                    html2 += `
                    <div class="mb-3 fs-2">
                   
                    <input type="hidden" class="form-control" id="idOficina" value="${_id}" >
              
                  </div>
                                <div class="mb-3 fs-2">
                                <label  class="form-label">Nombre CLiente</label>
                                <input type="text" class="form-control" id="nombreOficina" value="${nombre}" >
                          
                              </div>

                              <div class="mb-3 fs-2">
                              <label  class="form-label">Usuario</label>
                                  <input type="text" class="form-control"  id="Referencias" value="${usuario}" >
                             
                               
                            </div>


                              <div class="mb-3 fs-2">
                                <label  class="form-label">Direccion</label>
                                <input type="text" class="form-control" id="direccionOficina" value="${direccion}">
                              </div>
                              <div class="mb-3 fs-2">
                                <label  class="form-label">Telefono</label>
                                <input type="text" class="form-control" id="telefonoOficina" value="${telefono}">
                              </div>
                              <div class="mb-3 fs-2">
                              <label  class="form-label">Sexo</label>
                           
                                <select class="form-select delete  boton" aria-label="Default select example" id="zona">
                      
                                <option value="${sexo}">${sexo}</option>
                                <option value="FEMENINO">FEMENINO</option>
                        
                              </select>
                            </div>

                    `; 
                }
             
              actual.innerHTML = html2;
            });
          }



          const formularioo = document.querySelector("#formulario");
    formularioo.addEventListener("submit", ActualizarCliente);

    async function ActualizarCliente(e) {
      
      e.preventDefault(e);
      const _id = document.querySelector("#idOficina").value;
      const nombre = document.querySelector("#nombreOficina").value;
      const direccion= document.querySelector("#direccionOficina").value;
      const telefono = document.querySelector("#telefonoOficina").value;
      const sexo = document.querySelector("#zona").value;
      const ref = document.querySelector("#Referencias").value;
      console.log(nombre)
    
      const Oficina = {
        _id,
        nombre,
        direccion,
        telefono,
        sexo,
        ref,
  
       
      };
      /* llamamos a la funcion metodo HTTP POST */
      getupdateCLiente(Oficina);
    }

         