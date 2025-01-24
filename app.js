//Jesús Angel Alvaro Castillo 

//funcionalidades del programa 
/*    
Lista Agregar nombres: Los usuarios escribirán el nombre de un amigo en un 
campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Lista Validar entrada: Si el campo de texto está vacío, 
el programa mostrará una alerta pidiendo un nombre válido.

Lista Visualizar la lista: Los nombres ingresados aparecerán en una lista 
debajo del campo de entrada.

Lista Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo",
 se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

//variables 
var listaNombres = []; 
var listaRandom = []; 
var contadorNombre = 0; 
var numeroSorteo = 0; 
var validacion = 0;

//funciones
//funcion para limpiar la caja con id "amigo"
function limpiarcaja ()
{
    document.getElementById("amigo").value = ""
}

//funcion para escribir los nombres que esten en la lista
function mostarLista(lista)
{
    let escribirLista = document.querySelector("#listaAmigos");
    escribirLista.innerHTML += `<li>${lista[contadorNombre]}</li>`
}

//funcion para que agregar los nombres a la lista cuando se de click en el boton añadir
function agregarAmigo()
{
    let nombres = document.getElementById("amigo").value;

    //Valida que no se agregue un texto vacío
    if(nombres == "")
    {
        alert("Ingresa un nombre válido");
    }
    else
    {
        //agrega el nombre a la lista
        listaNombres.push(nombres);
        //llama funcion para mostrar los nombres 
        mostarLista(listaNombres);
        //llama la funcion para limpiar el placeholder
        limpiarcaja(); 
        //el contador aumenta parar no repetir los nombres 
        contadorNombre++;
        validacion = contadorNombre + 1;
    }
    //Verifica que se estén añadiendo los nombres
    console.log(listaNombres);  
    //console.log(contadorNombre);
}

//La funcion genera un número random para poner ese numero en la lista
function numeroAleatorio()
{
    //Se multiplica por el contador para que los arreglos sean del mismo tamaño.
    let numeroRandom = Math.floor(Math.random()*contadorNombre);
    
    if(listaRandom.includes(numeroRandom))
    {
        return numeroAleatorio();
    }
    else
    {
        listaRandom.push(numeroRandom);
        //Se reduce para que se pare el programa y no generar una iteración 
        validacion --; 
        return numeroRandom;
    }
}

//Funcion para cuando se da click en el boton sortear! 
function sortearAmigo()
{
    //llama a la función para generar un numero aleatorio 
    numeroSorteo = numeroAleatorio();
    //Válida para que el programa siga
    if (validacion > 0 )
    {
        let escribirSorteo = document.querySelector("#resultado");
        escribirSorteo.innerHTML = `<li>${listaNombres[numeroSorteo]}</li>`;
        console.log(listaRandom);

        //Si el contador validación es igual a uno el botón se deshabilita y lanza una alerta 
        //alerta para avisar al usuario que el sorteo finalizo 
            if(validacion == 1)
        {
            document.querySelector("#sorteo").setAttribute("disabled", true); 
            alert("¡Este es el ultimo amigo por sortear! \nEl sorteo finalizo.");
        }
    }
}