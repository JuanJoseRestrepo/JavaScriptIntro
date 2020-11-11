//Declaraciones (Referencias)
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const usuario = document.getElementById('usuario');
const correo = document.getElementById('correo');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const regis = document.getElementById('regis');
const aux = document.getElementById('aux');

var users = [];


//arrow funcion
const registrarse = () =>{
    var userObj = {
        nombre: nombre.value,
        apellido: apellido.value,
        usuario: usuario.value,
        correo: correo.value,
        password: password.value
    }

    users.push(userObj);

    console.log(users);

}

regis.addEventListener('click',registrarse);

aux.addEventListener('click', () =>{
    //users.splice(2,1);
    var busqueda = null;
    var busquedaAux = users.find( (user) =>{
        return user.nombre === 'Carlos';
    });

    for(let i=0; i < users.length;i++){

        if(users[i].nombre === 'Carlos'){
            busqueda = users[i];
        }

    }
    console.log('Encontrado');

    console.log( busqueda);

    console.log(users);


    users.forEach(

        (user) =>{
            console.log(user);
        }

    );

});

const miFuncion = () =>{

}

/*
regis.addEventListener('click', function() {

    alert(`hola mundo  ${nombre.value}` );
}
);
*/

/*
function registrarse(){
    alert(`hola mundo  ${nombre.value}`);
}
*/