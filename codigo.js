$('#formLogin').submit(function(e){
    e.preventDefault();
    var usuario = $.trim($("#usuario").val());
    var password = $.trim($("#password").val());

    if(usuario.length == "" || password == ""){
        Swal.fire({
            type:'warning',
            title:'Debe ingresar un usuario y/o password',
        });
        return false;
        }else{
            $.ajax({
                url:"base_datos/login.php",
                type:"POST",
                datatype: "json",
                data: {usuario:usuario, password:password},
                success:function(data){
                    if(data == "null"){
                        Swal.fire({
                            type:'success',
                            title:'¡Conexión exitosa!',
                            confirmButtonColor:'#3085d6',
                            confirmButtonText:'Ingresar'
                        }).then((result) => {
                            if(result.value){
                                window.location.href = "vistas/pag_inicio.php";
                            }
                        })
                    }
                }
            });
        }
});