function validateForm(){
    var valiNombre = /^[a-zA-Z]*$/;
    var valiCorreo = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
    var nombre =$("#name").prop('value');
    var apellido =$("#lastname").prop('value');
    var correo =$("#input-email").prop('value');
    var contra =$("#input-password").prop('value');
    
    console.log($("#name").prop('value'));
    
    if(nombre===""||apellido===""||correo===""||contra===""){
        alert ("Todo los campos son obligatorios.");
    }
    console.log(!valiNombre.test(nombre));
    //validar nombre
    if (!valiNombre.test(nombre)){
       $("#salida1").text("Escriba correctamente su nombre");
    }else {
        if(nombre.toLowerCase())
        {    document.getElementById("name").value=nombre.charAt(0).toUpperCase()+nombre.slice(1);
            $("#salida1").text("");
        }else{
            $("#salida1").text("");
        }  
    }
}
/*function validateForm()
{   var valiNombre = /^[a-zA-Z]*$/;
    var valiCorreo = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var contra = document.getElementById("input-password").value;
    var twitter = document.getElementById("input-social").value;
    
    if(nombre ===" " ||apellido===""||correo===""||contra===""){
        
        alert ("todo los campos son obligatorios");
        return false;
        
    }
 //validando Nombre
    if (nombre.length>30){
        
        alert("el nombre es muy largo");
        return false;
        
    }
   
    if (!valiNombre.test(nombre)){
        salida1.innerHTML="Su nombre no esta escrito correctamente";
        salida.innerHTML="";
       // alert("el nombre no es correcto");
        return false;
        
    }
    if(nombre.charAt(0)!=nombre.charAt(0).toUpperCase()){
        salida1.innerHTML="el primer caracter de su nombre tiene que se mayuscula";
      /*alert ("el primer caracater des su nombre tiene que ser mayuscula");
        return false;
        
    }
 //validando Apellido
    if (apellido.length>40){
        
        alert("el apellido es muy largo");
        return false;
    }
 
 if(apellido.charAt(0)!=apellido.charAt(0).toUpperCase()){
     
        salida2.innerHTML="el primer caracter de su apellido debe se mayuscula";
        //alert ("el primer caracter de su apellido tiene que ser mayuscula");
     
    }
 if (!valiNombre.test(apellido)){
     
        salida2.innerHTML="Su apellido no esta escrito correctamente"
        ///alert("el apellido no es correcto");
        return false;
        
    }
 //validando Correo
 if (correo.length>50){
        salida3.innerHTML="el correo es muy largo";
     
        /*alert("el correo es muy largo");
       return false;
        
    }
 if (!valiCorreo.test(correo)){
        salida3.innerHTML="escriba correctamente  su correo";
        /*alert("escriba correctamente su correo");
        return false;
    }
   //validando la contraseña
 if (contra.length<=6){
        salida4.innerHTML="su contraseña debe ser mayor a 6 caracteres";
       /* alert("la contraseña debe ser mayor a 6 caracteres");
        return false;
    }  
}*/
