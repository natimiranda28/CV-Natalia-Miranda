function genera_mensaje(){
    let nombre = document.getElementById("nameForm").value;
    let nro = document.getElementById("telForm").value;
    const MensajeCodificado = document.querySelector("#EmployerForm");
    const div = document.createElement("section");
    div.innerHTML = `
    <h1>Se ha enviado tu peticion de contacto con mi persona, tus datos son los siguientes: </h1>
    <h3><b>Nombre:</b> ${nombre}</h5>
    <h5>Telefono: ${nro}</h5>
    <h4 style = "width: 100%; margin = 0;" >Muchas gracias por comunicarte</h4>`;
    div.className="newForm"
    MensajeCodificado.append(div);
}