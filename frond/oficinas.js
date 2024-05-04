

document.addEventListener("DOMContentLoaded", () => {
	

	getOficinas();
	
  });

  function getOficinas() {
    const urlOficinas = `http://localhost:8080/api/oficinas`;
    
    fetch(urlOficinas)
      .then((response) => {
      return response.json();
      })
    
      .then((data) => {
      console.log(data);
      renderingOficinas(data);
      });
    
    function renderingOficinas(oficinas) {
      const ofi = document.querySelector("#oficinas");
      const actual = document.querySelector("#actual");
      let html = "";
      let html2= "";
    
      oficinas.forEach((oficina) => {
      const { nombre, direccion, telefono,zona,ref,_id } = oficina;
      html += `
      

      <div class="card" style="width: 27rem; height:30rem">
    
      <div class="card-body">
      <h2 class="card-title">${nombre}</h2>
      <p class="card-text">
            
      Direccion: ${direccion}<br>
      Telefono: ${telefono}<br>
      Zona: ${zona}<br>
      Numero de Referencia: ${ref}<br>
    </p>
    <a type="button" class="btn btn-primary boton" _id="${_id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Actualizar
  </a> 
      </div>
    </div>







            
          

        `;
        ofi.innerHTML = html;
       
      });
    }
    }


    const oficinas= document.querySelector("#oficinas");
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
        const urlProductos = `http://localhost:8080/api/oficinas`;
        console.log(disponible);
        
        fetch(`${urlProductos}/${disponible}`)
          .then((response) => {
          return response.json();
          })
        
          .then((data) => {
          console.log(data);
          renderingOficinas_id(data);
          });
        
        
        }

          
        function renderingOficinas_id(oficinas) {
        
          const actual = document.querySelector("#actual");
       
          let html2= "";
        
          oficinas.forEach((oficina) => {
          const { nombre, direccion, telefono,zona,ref,_id } = oficina;
                
          if(zona=="NORTE"){
            html2 += `
            <div class="mb-3 fs-2">
           
            <input type="hidden" class="form-control" id="idOficina" value="${_id}" >
      
          </div>
                        <div class="mb-3 fs-2">
                        <label  class="form-label">Nombre Oficiana</label>
                        <input type="text" class="form-control" id="nombreOficina" value="${nombre}" >
                  
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
                      <label  class="form-label">Zona</label>
                      <select class="form-select" aria-label="Default select example" id="zonaOficina">
                      
              
                          <option value="${zona}">${zona}</option>
                          <option value="SUR">SUR</option>
                          <option value="ESTE">ESTE</option>
                          <option value="OESTE">OESTE</option>
                    </select>
                     
                    </div>
                    <div class="mb-3 fs-2">
                    <label  class="form-label">Referencia</label>
                        <input type="text" class="form-control"  id="Referencia" value="${ref}" disabled>
                   
                     
                  </div>
            `;
          }else if(zona=="SUR"){

            html2 += `
            <div class="mb-3 fs-2">
           
            <input type="hidden" class="form-control" id="idOficina" value="${_id}" >
      
          </div>
                        <div class="mb-3 fs-2">
                        <label  class="form-label">Nombre Oficiana</label>
                        <input type="text" class="form-control" id="nombreOficina" value="${nombre}" >
                  
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
                      <label  class="form-label">Zona</label>
                      <select class="form-select" aria-label="Default select example" id="zonaOficina">
                    
              
                          <option value="${zona}">"${zona}</option>
                          <option value="NORETE">NORETE</option>
                          <option value="ESTE">ESTE</option>
                          <option value="OESTE">OESTE</option>
                    </select>
                     
                    </div>
                    <div class="mb-3 fs-2">
                    <label  class="form-label">Referencia</label>
                        <input type="text" class="form-control"  id="Referencia" value="${ref}" disabled>
                   
                     
                  </div>
            `;
          }else if(zona=="ESTE"){

            html2 += `
            <div class="mb-3 fs-2">
           
            <input type="hidden" class="form-control" id="idOficina" value="${_id}" >
      
          </div>
                        <div class="mb-3 fs-2">
                        <label  class="form-label">Nombre Oficiana</label>
                        <input type="text" class="form-control" id="nombreOficina" value="${nombre}" >
                  
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
                      <label  class="form-label">Zona</label>
                      <select class="form-select" aria-label="Default select example" id="zonaOficina">
                    
              
                          <option value="${zona}">${zona}</option>
                          <option value="NORETE">NORETE</option>
                          <option value="SUR">ESTE</option>
                          <option value="OESTE">OESTE</option>
                    </select>
                     
                    </div>
                    <div class="mb-3 fs-2">
                    <label  class="form-label">Referencia</label>
                        <input type="text" class="form-control"  id="Referencia" value="${ref}" disabled>
                   
                     
                  </div>
            `;
          } if(zona=="OESTE"){

            html2 += `
            <div class="mb-3 fs-2">
           
            <input type="hidden" class="form-control" id="idOficina" value="${_id}" >
      
          </div>
                        <div class="mb-3 fs-2">
                        <label  class="form-label">Nombre Oficiana</label>
                        <input type="text" class="form-control" id="nombreOficina" value="${nombre}" >
                  
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
                      <label  class="form-label">Zona</label>
                      <select class="form-select" aria-label="Default select example" id="zonaOficina">
                
              
                          <option value="${zona}">${zona}</option>
                          <option value="NORETE">NORETE</option>
                          <option value="SUR">SUR</option>
                          <option value="ESTE">ESTE</option>
                    </select>
                     
                    </div>
                    <div class="mb-3 fs-2">
                    <label  class="form-label">Referencia</label>
                        <input type="text" class="form-control"  id="Referencia" value="${ref}" disabled>
                   
                     
                  </div>
            `;
          }
           
            actual.innerHTML = html2;
          });
        }


    const getupdateoficna = async (oficina) => {
      const urlOficinas = `http://localhost:8080/api/oficinas/add`;
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
          window.location.href = "oficinas.html";
         
        
        
        }
        const createoficina = async (oficina) => {
          const urlOficinas = `http://localhost:8080/api/oficinas`;
       
            
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
              window.location.href = "oficinas.html";
             
            
            
            }
            
        
        const formulario = document.querySelector("#formulario2");
        formulario.addEventListener("submit", Crearoficina);

        async function Crearoficina(e) {
          console.log("HOLA")
          e.preventDefault(e);
         
          const nombre = document.querySelector("#nombreOficina2").value;
          const direccion= document.querySelector("#direccionOficina2").value;
          const telefono = document.querySelector("#telefonoOficina2").value;
          const zona = document.querySelector("#zonaOficina2").value;
          const ref = document.querySelector("#Referencia2").value;
          const Disponible="true"
        
          const Oficina = {
         
            nombre,
            direccion,
            telefono,
            zona,
            Disponible,
            ref,
      
           
          };
          /* llamamos a la funcion metodo HTTP POST */
          createoficina(Oficina);
        }

    const formularioo = document.querySelector("#formulario");
    formularioo.addEventListener("submit", ActualizarOficina);

    async function ActualizarOficina(e) {
      console.log("hola")
      e.preventDefault(e);
      const _id = document.querySelector("#idOficina").value;
      const nombre = document.querySelector("#nombreOficina").value;
      const direccion= document.querySelector("#direccionOficina").value;
      const telefono = document.querySelector("#telefonoOficina").value;
      const zona = document.querySelector("#zonaOficina").value;
      const ref = document.querySelector("#Referencia").value;
      console.log(nombre)
    
      const Oficina = {
        _id,
        nombre,
        direccion,
        telefono,
        zona,
        ref,
  
       
      };
      /* llamamos a la funcion metodo HTTP POST */
      getupdateoficna(Oficina);
    }
    const elimi = document.querySelector("#eliminar");
    elimi.addEventListener("click", EliminarOficina);

 

    const elimiarrr = async (oficina) => {
      const urlOficinas = `http://localhost:8080/api/oficinas`;
   
        
        try {
          await fetch(`${urlOficinas}/${oficina._id}`, {
            method: "DELETE",

          });
          } catch (error) {
          console.log(error);
          }
         
        }




    async function EliminarOficina(e) {
      console.log("hola")
      e.preventDefault(e);
      const _id = document.querySelector("#idOficina").value;
      const Disponible = "falso";
      const Oficina = {
        _id,
        Disponible
  
       
      };

      /* llamamos a la funcion metodo HTTP POST */
      getupdateoficna(Oficina);
    }