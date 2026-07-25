async function iniciarCamera(){

    try{

        const stream =
            await navigator.mediaDevices.getUserMedia({

                video:{
                    facingMode:"user"
                },

                audio:false

            });

        document
            .getElementById("camera")
            .srcObject = stream;

    }

    catch(e){

        alert("Não foi possível acessar sua câmera.");

    }

}

iniciarCamera();

/* partículas */

const area =
document.getElementById("particles");

for(let i=0;i<120;i++){

    const p=document.createElement("div");

    p.className="particula";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=
    (4+Math.random()*8)+"s";

    p.style.animationDelay=
    (-Math.random()*10)+"s";

    p.style.opacity=Math.random();

    p.style.transform=
    `scale(${0.5+Math.random()*2})`;

    area.appendChild(p);

}
