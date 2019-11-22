window.onload = function(){
    tabla = document.getElementById("divTabla");
}

function dibujartabla(){
   
    codigo = "<table border ='2'><tr><td>Celda 1,1</td><td>Celda 1,2</td></tr>";
    codigo += "<tr><td>Celda 2,1</td><td>Celda 2,2</td></tr></table>";
    tabla.innerHTML = codigo;
   

}

function validar(){
 
    if(tabla.innerHTML.length==''){
        alert("NO se genero");
    }else{
        alert("Ya se genero");
    }
}