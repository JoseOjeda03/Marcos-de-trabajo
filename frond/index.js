
document.addEventListener("DOMContentLoaded", () => {
	
	getImuebles();
  

  });

  const createImueble = async (oficina) => {
    const urlOficinas = `http://localhost:8080/api/imuebles`;
   console.log(oficina._id)
      
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
      
  const formulario = document.querySelector("#formulario2");
  formulario.addEventListener("submit", Crearoficina);

  async function Crearoficina(e) {
    console.log("HOLA")
    e.preventDefault(e);
    
    const imueble = document.querySelector("#nombre").value;
    const superficie= document.querySelector("#Superficie").value;
    const direccion = document.querySelector("#Direccion").value;
    const Nombre_propetario= document.querySelector("#Propetario").value;
    const telefono_propetario = document.querySelector("#TelefonoPro").value;

    if(imueble=="CASA"||imueble=="PISO"){
      const zona= document.querySelector("#zonass").value;
      const baños = document.querySelector("#Baños").value;
      const habitaciones = document.querySelector("#Habitaciones").value;
      const caracteristica = document.querySelector("#Caracteristica").value;
      const llaves_lugar = document.querySelector("#llaves").value;
      const Cocina = document.querySelector("#Cocinas").value;
      const precio_alquiler = document.querySelector("#Prealq").value;
      const precio_venta = document.querySelector("#Preven").value;
      const Disponible = "true";
      const ref = document.querySelector("#Referencia").value;
  
    
       const Oficina = {
     
        superficie,
        direccion,
        baños,
        habitaciones,
        Cocina,
        zona,
        precio_venta,
        precio_alquiler,
        ref,
        imueble,
        caracteristica,
        Nombre_propetario,
        telefono_propetario,
        llaves_lugar,
        Disponible
  
       
      };
      createImueble(Oficina);
    }else if(imueble=="VILLA"){


     
      const baños = document.querySelector("#Baños").value;
      const habitaciones = document.querySelector("#Habitaciones").value;
      const caracteristica = document.querySelector("#Caracteristica").value;
      const llaves_lugar = document.querySelector("#llaves").value;
      const Cocina = document.querySelector("#Cocinas").value;
      const precio_alquiler = document.querySelector("#Prealq").value;
      const precio_venta = document.querySelector("#Preven").value;
      const Disponible = "true";
      const ref = document.querySelector("#Referencia").value;
      const  urbanisacion= document.querySelector("#Ubarnisacion").value;
      const  tamaño_par= document.querySelector("#Tamaño").value;
    
      const Oficina = {
     
        superficie,
        direccion,
        baños,
        habitaciones,
        Cocina,
        urbanisacion,
        tamaño_par,
        precio_venta,
        precio_alquiler,
        ref,
        imueble,
        caracteristica,
        Nombre_propetario,
        telefono_propetario,
        llaves_lugar,
        Disponible
  
 
      };

      createImueble(Oficina);
    }else if(imueble=="LOCAL"){
      const zona= document.querySelector("#zonass").value;
      const diafono = document.querySelector("#Diafono").value;
      const puertas_entrada = document.querySelector("#Puertas").value;
      const llaves_lugar = document.querySelector("#llaves").value;
        const  acondicionado= document.querySelector("#Acondicionado").value;
        const precio_alquiler = document.querySelector("#Prealq").value;
        const precio_venta = document.querySelector("#Preven").value;
        const Disponible = "true";
        const ref = document.querySelector("#Referencia").value;


        const Oficina = {
          
          superficie,
          direccion,

          diafono,
          puertas_entrada,
          acondicionado,
          precio_venta,
          precio_alquiler,
          ref,
          zona,
          imueble,

          Nombre_propetario,
          telefono_propetario,
          llaves_lugar,
          Disponible
    
         
        };
        createImueble(Oficina);
    }



    /* llamamos a la funcion metodo HTTP POST */

  }





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
      const ofi = document.querySelector("#zonass");
     
      const llaves = document.querySelector("#llaves");
      let html = "";
      let html2= "";
      var i=0;
      oficinas.forEach((oficina) => {
        
      const { nombre, direccion, telefono,zona,ref,_id } = oficina;
      html += `
      
      <option value="${zona}">${zona}</option>
       

          

        `;



        ofi.innerHTML = html;
        


        
      });
    }

    const checkzona= document.querySelector("#zonass");
    checkzona.addEventListener('change',oficnaszonas);



    }



    function oficnaszonas(e){
      
        console.log("holaaaaaaaa");
        const zona= document.querySelector("#zonass").value;
        console.log(zona);
        getOficinaszona(zona);
     

      
     
  
      }
    function getOficinaszona(zona) {
      const urlOficinas = `http://localhost:8080/api/oficinas/zona`;
      
      fetch(`${urlOficinas}/${zona}`)
        .then((response) => {
        return response.json();
        })
      
        .then((data) => {
        console.log(data);
        renderingOficinaszona(data);
        });
      }
      function renderingOficinaszona(oficinas) {
        console.log("malps")
      
        const llaves = document.querySelector("#llaves");
       
      
        let html22= "";
        var i=0;
        oficinas.forEach((oficina) => {
          
        const { nombre, direccion, telefono,zona,ref,_id } = oficina;

        if(nombre=="VILLA"){

        }else{
          html22 += `
         
          <option value="${nombre}">${nombre}</option>
           
    
              
    
            `;
          
        }

        
  
       
          llaves.innerHTML = html22;
  
  
          
        });
      }
  
  
  
     
  
  

    

  
  function getImuebles() {
	const urlImuebles = `http://localhost:8080/api/imuebles`;
  
	fetch(urlImuebles)
	  .then((response) => {
		return response.json();
	  })
  
	  .then((data) => {
		console.log(data);
		renderingImuebles(data);
	  });
  
	function renderingImuebles(imuenbles) {
	  const categorias = document.querySelector("#imuebles");
  
	  let html = "";

  
	  imuenbles.forEach((imuenble) => {
		const {superficie,direccion,baños,habitaciones,cocina,zona,precio_venta,precio_alquiler,ref,imueble,tamaño_par,urbanisacion,caracteristica,puertas_entrada,diafono,acondicionado,Nombre_propetario,telefono_propetario ,llaves_lugar,_id} = imuenble;

        if(imueble=="CASA" || imueble=="PISO"){
            html += `
        

            <div class="card" style="width: 27rem; ">
    
            <div class="card-body">
            <h2 class="card-title">${imueble}</h2>
            <p class="card-text">
            Superficie: ${superficie}<br>
             Direccion:${direccion}<br>
             Baños: ${baños}<br>
             Habitaciones:${habitaciones}<br>
             Cocinas: ${cocina}<br>
             Zona:${zona}<br>
             precio_venta: ${precio_venta}<br>
             precio_alquiler:${precio_alquiler}<br>
             Caracteristica:${caracteristica}
         </p>
          <a type="button" class="btn btn-primary boton" _id="${_id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Detalle
        </a> 
            </div>
          </div>







    

            
              
              `;
        }

        if(imueble=="VILLA"){
          html += `
        
          <div class="card" style="width: 27rem; ">
    
          <div class="card-body">
          <h2 class="card-title">${imueble}</h2>
          <p class="card-text">
          Superficie: ${superficie}<br>
           Direccion: ${direccion}<br>
           Tamaño Parcela: ${tamaño_par}<br>
           Urbanisacion: ${urbanisacion}<br>
           Baños: ${baños}<br>
           Habitaciones: ${habitaciones}<br>
           Cocinas: ${cocina}<br>
           Zona: ${zona}<br>
           precio_venta: ${precio_venta}<br>
           precio_alquiler: ${precio_alquiler}<br>
           Caracteristica: ${caracteristica}
       </p>
        <a type="button" class="btn btn-primary boton" _id="${_id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Detalle
      </a> 
          </div>
        </div>


  

            `;
        }
        if(imueble=="LOCAL"){
          html += `



          
          <div class="card" style="width: 27rem; ">
    
          <div class="card-body">
          <h2 class="card-title">${imueble}</h2>
          <p class="card-text">
          Superficie: ${superficie}<br>
           Direccion: ${direccion}<br>
           Zona: ${zona}<br>
           Puertas De Entrada: ${puertas_entrada}<br>
           Diafono : ${diafono}<br>
           Acondicionado: ${acondicionado} <br>
           precio_venta: ${precio_venta}<br>
           precio_alquiler: ${precio_alquiler}<br>

       </p>
 
        <a type="button" class="btn btn-primary boton" _id="${_id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Detalle
      </a> 
          </div>
        </div>
        
          

            `;
        }

		
		categorias.innerHTML = html;
	  });
	}
  }

  const check= document.querySelector("#nombre");
  check.addEventListener('change',checknombre);


  function checknombre(e){
    if(e.target.classList.contains("boton")){

      const nombre = check.value;

    console.log(nombre)
    const complemento = document.querySelector("#complemento");
    let html3 = "";
    if(nombre=="PISO" ||nombre=="CASA" ){
      html3 +=`    
      <div class="mb-3 fs-2">
      <label  class="form-label">Zona</label>
     
        <select class="form-select" aria-label="Default select example" id="zonass">
          <option selected>Open this select menu</option>
               <div id="divcc">
               <option selected>Open this select menu</option>  </div>
        </select>

     
     
    </div>
    <div class="mb-3 fs-2">
    <label  class="form-label">Baños</label>
        <input type="number" class="form-control"  id="Baños"  >
        
     
  </div>
  <div class="mb-3 fs-2">
  <label  class="form-label">Cocinas</label>
      <input type="number" class="form-control"  id="Cocinas"  >
      
   
</div>
<div class="mb-3 fs-2">
<label  class="form-label">Habitaciones</label>
    <input type="number" class="form-control"  id="Habitaciones"  >
    
 
</div>
    <div class="mb-3 fs-2">
    <label  class="form-label">Caracteristica</label>
        <input type="text" class="form-control"  id="Caracteristica"  >
        
     
  </div>
  <div class="mb-3 fs-2">
  <label  class="form-label">LLaves lugar</label>
 
    <select class="form-select" aria-label="Default select example" id="llaves">
      <option selected>Open this select menu</option>

    </select>

 
 
</div>



      `
      complemento.innerHTML = html3;

    }

   else if(nombre=="VILLA"){
      html3 +=`    
      <div class="mb-3 fs-2">
      <label  class="form-label">Tamaño Parcela</label>
          <input type="number" class="form-control"  id="Tamaño"  >
          
       
    </div>
    <div class="mb-3 fs-2">
    <label  class="form-label">Ubarnisacion</label>
        <input type="number" class="form-control"  id="Ubarnisacion"  >
        
     
  </div>
    <div class="mb-3 fs-2">
    <label  class="form-label">Baños</label>
        <input type="number" class="form-control"  id="Baños"  >
        
     
  </div>
  <div class="mb-3 fs-2">
  <label  class="form-label">Cocinas</label>
      <input type="number" class="form-control"  id="Cocinas"  >
      
   
</div>
<div class="mb-3 fs-2">
<label  class="form-label">Habitaciones</label>
    <input type="number" class="form-control"  id="Habitaciones"  >
    
 
</div>
    <div class="mb-3 fs-2">
    <label  class="form-label">Caracteristica</label>
        <input type="text" class="form-control"  id="Caracteristica"  >
        
     
  </div>



  <div class="mb-3 fs-2">
  <label  class="form-label">LLaves lugar</label>
 
    <select class="form-select" aria-label="Default select example" id="llaves">
      <option selected>Open this select menu</option>

    </select>

 
 
</div>

      `
      complemento.innerHTML = html3;
    }

    else if(nombre=="LOCAL"){
      html3 +=`   
      
      <div class="mb-3 fs-2">
      <label  class="form-label">Zona</label>
     
        <select class="form-select" aria-label="Default select example" id="zonass">
          <option selected>Open this select menu</option>
          <div id="div">  </div>
        </select>

     
     
    </div>
      <div class="mb-3 fs-2">
      <label  class="form-label">Puertas</label>
          <input type="number" class="form-control"  id="Puertas"  >
          
       
    </div>
    <div class="mb-3 fs-2">
    <label  class="form-label">Diafono</label>
     
    <select class="form-select" aria-label="Default select example" id="Diafono" >
      
      <option value"Si">Si</option>
      <option value"No">No</option>
      </select>
     
  </div>
    <div class="mb-3 fs-2">
    <label  class="form-label">Acondicionado</label>
    <select class="form-select" aria-label="Default select example" id="Acondicionado">
      
    <option value"Si">Si</option>
    <option value"No">No</option>
    </select>
     
  </div>


    <div class="mb-3 fs-2">
    <label  class="form-label">Caracteristica</label>
        <input type="text" class="form-control"  id="Caracteristica"  >
        
     
  </div>

  <div class="mb-3 fs-2">
  <label  class="form-label">LLaves lugar</label>
 
    <select class="form-select" aria-label="Default select example" id="llaves">
      <option selected>Open this select menu</option>

    </select>

 
 
</div>


      `
      complemento.innerHTML = html3;
    }
       getOficinas()



    }
    
    }
  const oficinas= document.querySelector("#imuebles");
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
      const urlProductos = `http://localhost:8080/api/imuebles/id`;
      console.log(disponible);
      
      fetch(`${urlProductos}/${disponible}`)
        .then((response) => {
        return response.json();
        })
      
        .then((data) => {
        console.log(data);
        renderingimuebles_id(data);
        });
      
      
      }



      function renderingimuebles_id(oficinas) {
        
        const detalles = document.querySelector("#detalles");
     
        let html2= "";
      
        oficinas.forEach((oficina) => {
        const { Nombre_propetario, telefono_propetario, llaves_lugar,ref,imueble,_id} = oficina;
      
          html2 += `
          

          <div class="modal-header">
          <h1 class="modal-title fs-1" id="exampleModalLabel">Detalles ${imueble}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <p class="fs-3">
        Numero de referncia: ${ref}<br>
        Nombre propetario:${Nombre_propetario}<br>
        Telefono: ${telefono_propetario}<br>
        Oficina en donde se enunetra las llaves :${llaves_lugar}<br>

        </p>
        </div>
        <div class="modal-footer">
          <a type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</a>
          <a type="button" href="/frond/citas.html"  class="btn btn-primary cita" _id="${_id}">AGENDAR CITA</a>
        </div>



       
          `;
          localStorage.setItem("id", _id);


              

          detalles.innerHTML = html2;
        });
      }





  function getdisponible(disponible) {
    const urlProductos = `http://localhost:8080/api/imuebles`;
    console.log(disponible);
    
    fetch(`${urlProductos}/${disponible}`)
      .then((response) => {
      return response.json();
      })
    
      .then((data) => {
      console.log(data);
      renderreferencia(data);
      });
    
    
    }

    const pum = document.querySelector("#boton");
    pum.addEventListener("click", selecionarid);
    async function selecionarid(e) {

      e.preventDefault(e);
      
      const idselct1  = document.querySelector("#digito").value ;

     
    

       console.log(idselct1);
    
        getdisponible(idselct1);
        
  
    }
    const clear = document.querySelector("#cerrar");
    clear.addEventListener("click", clearr);
    async function clearr(e) {

      e.preventDefault(e);
      
      const  refer= document.querySelector("#uno");
      const  refer2= document.querySelector("#dos");

      refer.innerHTML="";
      refer2.innerHTML="";

   
    
        
  
    }

    

    function renderreferencia(referencias) {
      const  refer= document.querySelector("#uno");
      const  refer2= document.querySelector("#dos");
      let html = "";
      let html2 = "";
  
      referencias.forEach((referncia) => {
        const {superficie,direccion,baños,habitaciones,cocina,zona,precio_venta,precio_alquiler,ref,imueble,tamaño_par,urbanisacion,caracteristica,puertas_entrada,diafono,acondicionado,Nombre_propetario,telefono_propetario ,llaves_lugar,_id} = referncia;
    
            if(imueble=="CASA" || imueble=="PISO"){
                html += `
                <div class="card" style="width:26rem" >
                <div class="card-body">
                <p class="fs-1 fw-bold">${imueble}</p>
      
                        <p class="card-text">
                           Superficie: ${superficie}<br>
                            Direccion:${direccion}<br>
                            Baños: ${baños}<br>
                            Habitaciones:${habitaciones}<br>
                            Cocinas: ${cocina}<br>
                            Zona:${zona}<br>
                            precio_venta: ${precio_venta}<br>
                            precio_alquiler:${precio_alquiler}<br>
                            Caracteristica:${caracteristica}
                        </p>
                  
                        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Detalles</button>

      
                </div>
                
                
                  `;
                  html2 += `<div class="modal-header">
                  <h1 class="modal-title fs-2" id="exampleModalLabel">Detalles ${imueble}</h1>
                  

                </div>
                <div class="modal-body">
                  <p class="fs-3">
                  Numero de referncia: ${ref}<br>
                  Nombre propetario:${Nombre_propetario}<br>
                  Telefono: ${telefono_propetario}<br>
                  Oficina en donde se enunetra las llaves :${llaves_lugar}<br>
         
                  </p>
                  <a type="button" href="/frond/citas.html"  class="btn btn-primary cita" _id="${_id}">AGENDAR CITA</a>
                </div>`;

            }
    
            if(imueble=="VILLA"){
              html += `
              <div class="card" style="width:26rem" >
              <div class="card-body">
              <p class="fs-1 fw-bold">${imueble}</p>
    
                      <p class="card-text">
                         Superficie: ${superficie}<br>
                          Direccion: ${direccion}<br>
                          Tamaño Parcela: ${tamaño_par}<br>
                          Urbanisacion: ${urbanisacion}<br>
                          Baños: ${baños}<br>
                          Habitaciones: ${habitaciones}<br>
                          Cocinas: ${cocina}<br>
                          Zona: ${zona}<br>
                          precio_venta: ${precio_venta}<br>
                          precio_alquiler: ${precio_alquiler}<br>
                          Caracteristica: ${caracteristica}
                      </p>
                
                      <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Detalles</button>
    
              </div>
             
                `;
                html2 += `<div class="modal-header">
                <h1 class="modal-title fs-2" id="exampleModalLabel">Detalles ${imueble}</h1>

              </div>
              <div class="modal-body">
                <p class="fs-3">
                Numero de referncia: ${ref}<br>
                Nombre propetario:${Nombre_propetario}<br>
                Telefono: ${telefono_propetario}<br>
                Oficina en donde se enunetra las llaves :${llaves_lugar}<br>
       
                </p>
                <a type="button" href="/frond/citas.html"  class="btn btn-primary cita" _id="${_id}">AGENDAR CITA</a>
              </div>`;
            }
            if(imueble=="LOCAL"){
              html += `
            
              <div class="card " style="width:26rem" >
              <div class="card-body">
              <p class="fs-1 fw-bold">${imueble}</p>
    
                      <p class="card-text">
                         Superficie: ${superficie}<br>
                          Direccion: ${direccion}<br>
                          Zona: ${zona}<br>
                          Puertas De Entrada: ${puertas_entrada}<br>
                          Diafono : ${diafono}<br>
                          Acondicionado: ${acondicionado} <br>
                          precio_venta: ${precio_venta}<br>
                          precio_alquiler: ${precio_alquiler}<br>
  
                      </p>
                
                      <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Detalles</button>
    
              </div>
              
                `;
                html2 += `<div class="modal-header">
                <h1 class="modal-title fs-2" id="exampleModalLabel">Detalles ${imueble}</h1>
             
              </div>
              <div class="modal-body">
                <p class="fs-3">
                Numero de referncia: ${ref}<br>
                Nombre propetario:${Nombre_propetario}<br>
                Telefono: ${telefono_propetario}<br>
                Oficina en donde se enunetra las llaves :${llaves_lugar}<br>
       
                </p>
                <a type="button" href="/frond/citas.html"  class="btn btn-primary cita" _id="${_id}">AGENDAR CITA</a>
              </div>`;
            }
    
            
            refer.innerHTML = html;
            refer2.innerHTML= html2;
        });
    }
    const getupdateoficna = async (oficina) => {
    const urlOficinas = `http://localhost:8080/api/oficinas/add`;
 
      
      try {
        await fetch(`${urlOficinas}/${oficina.ref}`, {
          method: "PUT",
          body: JSON.stringify(oficina), // data puede ser string o un objeto
          headers: {
          "Content-Type": "application/json", // Y le decimos que los datos se enviaran como JSON
          },
        });
        } catch (error) {
        console.log(error);
        }
        window.location.href = "index.html";
      
      
      }

   
      const formularioo = document.querySelector("#formulario");
      formularioo.addEventListener("click", ActualizarOficina);

      async function ActualizarOficina(e) {
        console.log("hola")
        e.preventDefault(e);
      
        const nombre = document.querySelector("#nombreOficina").value;
        const direccion= document.querySelector("#direccionOfina").value;
        const telefono = document.querySelector("#telefonoOficina").value;
        const zona = document.querySelector("#zonaOficina").value;
        const ref = document.querySelector("#Referencia").value;
         
      
        const Oficina = {
          nombre,
          direccion,
          telefono,
          zona,
          ref,
    
         
        };
        /* llamamos a la funcion metodo HTTP POST */
        getupdateoficna(Oficina);
      }
      const foraa = document.querySelector("#click");
      foraa.addEventListener("click", activa);

      async function activa(e) {
        console.log("hola")

      }

      const detalles= document.querySelector("#detalles");
      detalles.addEventListener('click',selecionarid2);
      async function selecionarid2(e) {
        if(e.target.classList.contains("cita")){

          const idImueble =e.target.parentElement.parentElement;
          const _id= idImueble.querySelector("a").getAttribute("_id");
          get_idcita(_id);
  
         
      
  
    
       
 

        }
        
       
          
    
      }