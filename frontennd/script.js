document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const archivo = document.getElementById("archivo").files[0];
    const fecha = document.getElementById("fecha").value;
    const email = document.getElementById("email").value;

    const formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("dia", fecha);
    if (email) formData.append("email", email);

    const headers = new Headers();
    headers.append("x-api-key", "API_KEY_SEGURA");

    const respuesta = await fetch("/resumen/", {
        method: "POST",
        headers: headers,
        body: formData,
    });
    const data = await respuesta.json();
    document.getElementById("respuesta").textContent = `Resumen: ${data.resumen}`;
});
