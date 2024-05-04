





function getClientes(disponible) {
    const urlProductos = `http://localhost:8080/api/clientes/validar`;

    
    fetch(`${urlProductos}/${disponible.usuario}`)
      .then((response) => {
      return response.json();
      })
    
      .then((data) => {
      console.log(data);
      Validar(data,disponible.usuario,disponible.contraseña);
      });
    
    


      
    }




        function Validar(datos,user,pasword){
            const novalido = document.querySelector("#novalido");
        
            const total = document.querySelector("#total");
            let html= "";
            let html2= "";
            let valilador=false;
            datos.forEach((dato) => {
                const { usuario, contraseña,telefono } = dato;
                  if(user==usuario && pasword==contraseña ){
                         

                   
                     valilador=true;
                    
                    


                  }

                });

                if(valilador){

                    html=`
                    
                    <div class=" contenedor-formularios" style="width: 60rem;">
                    <h2 clas="text-white">Agendar cita</h2>


    

  <form id="formulario2" >
<div id="actual"></div>
<div class="input-group mb-3">

<textarea class="form-control" id="Comentario" rows="3"></textarea>
</div>



<div class="input-group mb-3">

<input type="date" class="" id="date" >
</div>
<button type="submit" class="btn btn-primary">Submit</button>

  </form>    











</div>
                    
                    `;
                      
                    AgendarCita(datos)
                }
                else{

                                
                    alert("Usuario o Conntraseña equivocada Vuelve a digitar!");
                    window.location.reload()
                }

       

                total.innerHTML=html;
         





return valilador;
           
      
            }


            function get_id(disponible,usuario) {
                const urlProductos = `http://localhost:8080/api/imuebles/id`;
                console.log(disponible);
                
                fetch(`${urlProductos}/${disponible}`)
                  .then((response) => {
                  return response.json();
                  })
                
                  .then((data) => {
                  console.log(data);
                  renderingCita(data,usuario);
                  });
                
                
                }
function AgendarCita(usuario){

    var id = localStorage.getItem("id");
    get_id(id,usuario)

}

function renderingCita(oficinas,usuarios) {
        
    const actual = document.querySelector("#actual");
 
    let html2= "";
    let html= "";

  
    oficinas.forEach((oficina) => {
    const { imueble, direccion, Nombre_propetario,_id,telefono_propetario} = oficina;
    
    html2 = `


                   

  <div class="card-body">
   
    <input type="hidden"  id="idImb" value="${_id}" 
    <label  class="form-label text-white">Nombre Imueble</label>
    <div class="input-group mb-3">
   
    <input type="text"  id="nombreImue" value="${imueble}" >

  </div>
  <label  class="form-label text-white">Telefono Imueble</label>
  <div class="input-group mb-3">

  <input type="text"  id="TelefonoImue" value="${telefono_propetario}">
</div>
<label  class="form-label text-white">Direccion Imueble</label>
  <div class="input-group mb-3">
   
    <input type="text"  id="direccionImue" value="${direccion}">
  </div>
  <label  class="form-label text-white">Nombre Propetario</label>
  <div class="input-group mb-3">
   
    <input type="text"  id="nombrePro" value="${Nombre_propetario}">
  </div>
   
  </div>

  
    `;
     
      
    });

    usuarios.forEach((usuario) => {
        const { nombre, telefono, direccion,_id} = usuario;
        console.log(nombre)
        
        html = `
    
    

        <input type="hidden"  id="idCli" value="${_id}" 
        <label  class="form-label text-white">Nombre Cliente</label>
        <div class="input-group mb-3">
      
        <input type="text" id="nombreCLi" value="${nombre}">
      </div>
      <label  class="form-label text-white">direccion Cliente</label>
      <div class="input-group mb-3">
      
        <input type="text" id="direccionCli" value="${direccion}">
      </div>
      <label  class="form-label text-white">Telefono Cliente</label>
      <div class="input-group mb-3">
        
        <input type="text"  id="telefonoCli" value="${telefono}">
      </div>
     


      
        `;
         
          
        });

        actual.innerHTML=html2+html
        const formulari = document.querySelector("#formulario2");
        formulari.addEventListener("submit", crearcita);
  }

  











  const createCita = async (oficina) => {
    const urlOficinas = `http://localhost:8080/api/citas`;

      
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
        
        window.location.href = "../index.html";

      }


  

            const formularioo = document.querySelector("#formulario");
    formularioo.addEventListener("submit", datoUser);

    async function datoUser(e) {
      
      e.preventDefault(e);
      const  usuario= document.querySelector("#usuario").value;
      const contraseña = document.querySelector("#contraseña").value;

    
    
      const Oficina = {
        usuario,
          contraseña,

       
      };
      /* llamamos a la funcion metodo HTTP POST */
      getClientes(Oficina);
    }



    


    async function crearcita(e) {
      
      e.preventDefault(e);
      const  idCli= document.querySelector("#idCli").value;
      const idPro = document.querySelector("#idImb").value;
      const imuble = document.querySelector("#nombreImue").value;
      const direccionPro= document.querySelector("#direccionImue").value;

      const telefonoPro = document.querySelector("#TelefonoImue").value;
      const nombrePro= document.querySelector("#nombrePro").value;
      const nombreCli= document.querySelector("#nombreCLi").value;
      
      const direccionCli = document.querySelector("#direccionCli").value;
      const telefonoCli= document.querySelector("#telefonoCli").value;
      const dia= document.querySelector("#date").value;
      const comentario= document.querySelector("#Comentario").value;
   
    
      const Oficina = {
          idCli,
          idPro,
          imuble,
          direccionPro,
          telefonoPro,
          nombrePro,
          nombreCli,
          direccionCli,
          telefonoCli,
          dia,
          comentario

       
      };
      /* llamamos a la funcion metodo HTTP POST */
      createCita(Oficina);
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
          window.location.href = "citas.html";
         
        
        
        }


    const formu = document.querySelector("#formu");
    formu.addEventListener("submit", CrearCliente);

    async function CrearCliente(e) {
      console.log("HOLA")
      e.preventDefault(e);
     
      const nombre = document.querySelector("#nombre").value;
      const usuario= document.querySelector("#usuarios").value;
      const contraseña = document.querySelector("#contraseñas").value;
      const direccion = document.querySelector("#direccion").value;
      const telefono = document.querySelector("#telefono").value;
      const sexo = document.querySelector("#sexo").value;
      const Disponible="true"
    
      const Oficina = {
         usuario,
         contraseña,
        nombre,
        direccion,
        telefono,
        sexo,
        Disponible,

  
       
      };
      /* llamamos a la funcion metodo HTTP POST */
      createcliente(Oficina);
    }


    function getcitas_id() {
      const urlProductos = `http://localhost:8080/api/citas`;
 
      
      fetch(`${urlProductos}`)
        .then((response) => {
        return response.json();
        })
      
        .then((data) => {
        console.log(data);
        renderingCitasid(data);
        });
      
      
      }



      function renderingCitasid(oficinas) {
        
        const actual = document.querySelector("#actual");
     
        let html2= "";
        let html= "";
    
      
        oficinas.forEach((oficina) => {
        const { imueble, direccionPro, telefonoPro,_id,nombrePro,nombreCli,direccionCli,telefonoCli,dia,comentario} = oficina;
        
        html2 = `
    
    
                       
    
      <div class="card-body">
       
        <input type="hidden"  id="idImb" value="${_id}" 
        <div class="input-group mb-3">
       
        <input type="text"  id="nombreImue" value="${imueble}" >
    
      </div>
      <div class="input-group mb-3">
       
      <input type="text"  id="TelefonoImue" value="${direccionPro}">
    </div>
      <div class="input-group mb-3">
       
        <input type="text"  id="direccionImue" value="${telefonoPro}">
      </div>
      <div class="input-group mb-3">
       
        <input type="text"  id="nombrePro" value="${nombrePro}">
      </div>
      <div class="input-group mb-3">
       
      <input type="text"  id="nombrePro" value="${nombreCli}">
    </div>
    <div class="input-group mb-3">
       
    <input type="text"  id="nombrePro" value="${nombrePro}">
  </div>
  <div class="input-group mb-3">
       
  <input type="text"  id="nombrePro" value="${direccionCli}">
</div>
<div class="input-group mb-3">
       
<input type="text"  id="nombrePro" value="${telefonoCli}">
</div>
<div class="input-group mb-3">
       
<input type="text"  id="nombrePro" value="${dia}">
</div>
<div class="input-group mb-3">
       
<input type="text"  id="nombrePro" value="${comentario}">
</div>
      </div>
    
      
        `;
         
          
        });
    
      
    
            actual.innerHTML=html2

      }
    