async function iniciarCamera(){

    try{

        const stream = await navigator.mediaDevices.getUserMedia({
            video:{
                facingMode:"user"
            },
            audio:false
        });

        document.getElementById("camera").srcObject = stream;

    }catch(e){

        alert("Não foi possível acessar sua câmera.");

        console.error(e);

    }

}

iniciarCamera();
