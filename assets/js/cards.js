
//VARIABLES//
//const BtnInicio =  document.querySelector("#BotonInicio");
//const BtnAsesores =  document.querySelector("#BotonAsesores");
const contCards = document.querySelector(".contAsesor");
const cardSeleccionada =  document.querySelector("#spin-container");
const hiper = document.querySelector("#hiperAsesor");
const blur = document.querySelector("#ground");
const wrapper = document.querySelector("#wrapper");
var drag = document.getElementById('drag-container');
const containBlur = document.querySelector('.contain');
var rotateSpeed = -60

var flag;
var flag2;
var flag3;
//LISTA DE ASESORES//
const objAsesores = [
    {   id:0,
        nombre:"OCTAVIO BORGETTO",
        tarjeta3d:"prueba/pruebaCard.glb",
        foto:"images/foto1.png",
        telefono:"116243613",
        email:"octavio.b@libertec.shop",
        facebook:"https://www.facebook.com/octavio.bor_Libertec",
        instagram:"https://www.instagram.com/octavio.bor_Libertec",
    },
    {   id:1,
        nombre:"LUCAS DARIO RUIZ",
        tarjeta3d:"prueba/pruebaCard.glb",
        foto:"images/foto2.png",
        telefono:"1128502787",
        email:"lucas.rb@libertec.shop",
        facebook:"https://www.facebook.com/lucas.rui_libertec",
        instagram:"https://www.instagram.com/lucas.libertec"
    },
    {   id:2,
        nombre:"NOELIA LEIVA",
        tarjeta3d:"prueba/pruebaCard.glb",
        foto:"images/foto3.png",
        telefono:"1153145206",
        email:"Noelia.l@libertec.shop",
        facebook:"https://www.facebook.com/Noelia.lei_libertec",
        instagram:"https://www.instagram.com/Noe..libertec",
    },
    {   id:3,
        nombre:"SOL ROMPANI",
        tarjeta3d:"prueba/pruebaCard.glb",
        foto:"images/foto2.png",
        telefono:"1160372306",
        email:"Sol.r@libertec.shop",
        facebook:"https://www.facebook.com/Sol.rom_libertec",
        instagram:"https://www.instagram.com/Sol_libertec"
    },    
    {   id:4,
        nombre:"ISABELLA DI NAPOLI",
        tarjeta3d:"prueba/pruebaCard.glb",
        foto:"images/foto.png",
        telefono:"1160372435",
        email:"Isabella.d@libertec.shop",
        facebook:"https://www.facebook.com/Isabella.di_libertec",
        instagram:"https://www.instagram.com/Isa.libertec",
    },
    {   id:5,
        nombre:"MAURO RODRIGUEZ",
        tarjeta3d:"prueba/pruebaCard.glb",
        foto:"images/foto1.png",
        telefono:"1123244571",
        email:"Mauro.r@libertec.shop",
        facebook:"https://www.facebook.com/Mauro.rod_libertec",
        instagram:"https://www.instagram.com/Mauro.rod_libertec"
    },
    {   id:6,
        nombre:"ROCIO COLIZZI",
        tarjeta3d:"prueba/pruebaCard.glb",
        foto:"images/foto3.png",
        telefono:"1161857816",
        email:"rocio.c@libertec.shop",
        facebook:"https://www.facebook.com/Rocio.col_libertec",
        instagram:"https://www.instagram.com/Rocio.col_libertec",
    }
]

//EVENTOS//
eventListeners();
function eventListeners(){
    //Cargo los Empleados
    //BtnInicio.addEventListener('click', limpiarHTML);
    //hiper.addEventListener("click", cargarAsesores);
    document.addEventListener('DOMContentLoaded', iniciarAsesores);
    cardSeleccionada.addEventListener('click', mostrarCardAnimada);
    drag.addEventListener("click", carrucelReturn);
    wrapper.addEventListener("click", carrucelReturn);
}

//FUNCIONES//
/*Inicia la primer flag en false // Agregar ...// Se puede utilizar para conectar una base de datos*/
function iniciarAsesores(){
    //Maneja la funcion drag solo va a ser true cuando una card se este mostrando
    flag = false;
    //True cuando una card se esta mostrando
    flag3 = false;
    //En caso de que se mueva el el blur siga activado
    flag2 = true;
}

/*Inicia la primer flag en false // Agregar ...// Se puede utilizar para conectar una base de datos*/
//Recibe -1 para utilizar un for y el index si es una card en especifico
function iniciarCarrucel(tZ, width, height,left, top,  modo){
    var aImg = cardSeleccionada.getElementsByTagName('img');
    if(modo == -1)
    {
        for (let index = 0; index < aImg.length; index++) {
            aImg[index].style.transform = `rotateY(${(index * (360 / aImg.length))}deg)  translateZ(${tZ}px)`;
            aImg[index].style.width = `${width}%`; 
            aImg[index].style.height = `${height}%`; 
            aImg[index].style.left = `${left}px`;
            aImg[index].style.top = `${top}px`; 
            aImg[index].style.transition = "transform 1s";
        }
    }else{
        aImg[modo].style.transform = `rotateY(${(modo * (360 / aImg.length))}deg)  translateZ(${tZ}px)`;
        aImg[modo].style.width = `${width}%`; 
        aImg[modo].style.height = `${height}%`; 
        aImg[modo].style.left = `${left}px`;
        aImg[modo].style.top = `${top}px`; 
        aImg[modo].style.transition = "transform 1s";
    }

}

/*Cada vez que se toque el fondo y una card este seleccionada el carrucel vuelve a su lugar*/
function carrucelReturn(){
    //La funcion carrucelReturn solo va a funcionar cuando una card se este mostrando
    if(flag)
    {
        //1. Elimina el blur y las redes
        containBlur.style.display = "none"
        drag.parentNode.removeChild(drag.nextSibling);  
        //2.El carrucel retorna el movimiento inicial si se mueve mientras muestra una card       
        if(!flag2)
        {
            iniciarCarrucel(340,100,50,0,49,-1);
            flag3 = false;
            flag2 = true;
            cardSeleccionada.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
        }
    }
}
/*Retorno el html de las redes */
function addRedes(index){
    return `
    <a href="${objAsesores[index].facebook}" target="_blank" class="fondoLogo2" style="border-style: none;"><i class="fa fa-facebook" id="facebook"></i></a>
    <a href="${objAsesores[index].instagram}" target="_blank" class="fondoLogo2" style="border-style: none;"><i class="fa fa-instagram" id="instagram"></i></a>
    <a href="mailto:${objAsesores[index].email}" target="_blank" class="fondoLogo2" style="border-style: none;"><i class="fa fa-envelope" id="emaill"></i></a>
    <a href="tel:+${objAsesores[index].telefono}" class="fondoLogo2" style="border-style: none;"><i class="fa fa-phone" id="telefono"></i></a>
    `;
}
/*Cuando se selecciona una imagen se muestra en el centro*/
function mostrarCardAnimada(e){
    e.preventDefault();
    //1. Obtengo contenedor, array de imagenes y Data
    var aImg = cardSeleccionada.getElementsByTagName('img');

    //2. Inicializo el carrucel  en su lugar y con su tamaño inicial
    iniciarCarrucel(270,100,50,0,49,-1);

    //3. Si no hay una card activa ni un blur activo entro
    if(!flag3 && flag2){
        //3. Recorro el array de imagenes
        for (let i = 0; i < aImg.length; i++) {
            //4. Activo una card(flag3)y un blur(flag2)
            flag3= true;
            flag2 = false;
            
            //4. Cuando encuentro la imagen...
            if(e.target.dataset.set == aImg[i].dataset.set)        
            {   
                setTimeout(()=>{
                    //Activo el funcionamiento de la funcion carrucelReturn
                    flag = true;
                    //5. Agrego el blur
                    containBlur.style.transform = `rotateY(${i * (360 / aImg.length)}deg) translateZ(400px)`;
                    containBlur.style.display = "block"
                    containBlur.style.transition = "transform 2s";

                    //6. Acomodo el carrucel mostrando la card seleccionada en posicion
                    cardSeleccionada.style.animation = `${(rotateSpeed > 0 ? 'spin' : 'spinStop')} ${Math.abs(rotateSpeed)}s infinite linear`;
                    drag.style.transform = `rotateX(10deg) rotateY(-${i * (360 / aImg.length)}deg)`;

                    //7. Centro la imagen seleccionada, acerco en el eje Z  y acomodo
                    if(screen.width < 400)
                    {
                        iniciarCarrucel(480,147,74,-55,66,i);
                    }else{
                        iniciarCarrucel(480,171,86,-84,66,i);
                    }
                    //8. Agrego las redes sociales
                    const divRedes= document.createElement("div");
                    divRedes.classList.add("containeer");
                    divRedes.innerHTML= addRedes(i);
                    drag.parentNode.insertBefore(divRedes, drag.nextSibling);
                },800);
                break;
            }else{
                //Desactivo blur(flag2) y card(flag3)
                flag3= false;
                flag2 = true;
            }
        }
    }else{
        //Desactivo el funcionamiento de la funcion carrucelReturn
        flag = false;
        
        //Borro el blur
        containBlur.style.display = "none"
        drag.parentNode.removeChild(drag.nextSibling);     

        //Desactivo blur(flag2) y card(flag3)
        flag3= false;
        flag2 = true;

        //Retorno la animacion de movimiento al carrucel
        cardSeleccionada.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
        for (let j = 0; j < aImg.length; j++) {
            aImg[j].style.transform = "rotateY(" + (j * (360 / aImg.length)) + "deg) translateZ(340px)";        
        }
    }   
}

//FUNCIONES VIEJAS
/*
//EVENTOS//
eventListeners();
function eventListeners(){
    Cargo los Empleados
    BtnInicio.addEventListener('click', limpiarHTML);
    hiper.addEventListener("click", cargarAsesores);

}


function cargarAsesores(){
    limpiarHTML();
    for(let i = 0; i< objAsesores.length;i++)
    {
        const img = document.createElement("img");
        img.dataset.src = `${objAsesores[i].tarjeta3d}`;
        img.dataset.id = `${objAsesores[i].id}`;
        contCards.appendChild(img);
    }
}
function limpiarHTML(){
    while(contCards.firstChild){
        contCards.removeChild(contCards.firstChild);
    }
}
function iniciarAsesores(){
    contCards.style.display ="none";
    flag = false;
}
//Inicia un contenedor escondido para agregar html desde js
function esconderAsesores(){
    cardSeleccionada.style.display = "none";
    contCards.style.display ="flex"
}
//Muestra los asesores
function aparecerAsesores(){
    cardSeleccionada.style.display = "flex";
    contCards.style.display ="none"
}

function mostrarCard(e){
    e.preventDefault();
    console.log(e.target.dataset.set);
    limpiarHTML();
    for(let i = 0; i< objAsesores.length;i++)
    {
        if(objAsesores[i].id == e.target.dataset.set){
            esconderAsesores();
            const div = document.createElement("div");
            div.classList.add("datos");
            div.innerHTML=`										
                <div class="foto_asesor">
                    <div class="fotito" src=""></div>
                </div>
                <div class="info_asesor ">
                    <p class="logoFont textoArregloCard">${objAsesores[i].nombre}</p>
                    <h1 class="ArregloCard ">ASESOR OFICIAL</h1>
                </div>
                <ul class="icons">
                    <li><a href="${objAsesores[i].facebook}" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                    <li><a href="${objAsesores[i].instagram}" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                    <li><a href="${objAsesores[i].email}" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                    <li><a href="${objAsesores[i].telefono}" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
                </ul>
                <style>
                    .fotito{
			            background-image: url(../../${objAsesores[i].foto});
			            background-size: cover;
			            height: 100%;
			            width: 100%;
		            }
                </style>`
            ;
            contCards.appendChild(div);            
            break;
        }
    }

}
 */
