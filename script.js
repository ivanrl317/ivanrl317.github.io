async function cargarJSON(ruta) {
  const respuesta = await fetch(ruta);
  if (!respuesta.ok) {
    console.error("Error al cargar", ruta);
    return null;
  }
  return await respuesta.json();
}

// Noticias (fútbol o F1)
async function cargarNoticias(tipo, idContenedor) {
  const datos = await cargarJSON("noticias.json");
  if (!datos) return;

  const contenedor = document.getElementById(idContenedor);
  contenedor.innerHTML = "";

  (datos[tipo] || []).forEach(noticia => {
    const item = document.createElement("article");
    item.classList.add("news-item");

    item.innerHTML = `
      <h3>${noticia.titulo}</h3>
      <div class="news-meta">${noticia.categoria || ""}</div>
      <p>${noticia.texto}</p>
      <a href="${noticia.link}">Leer más</a>
    `;

    contenedor.appendChild(item);
  });
}

// Clasificaciones de fútbol
async function cargarClasificacionesFutbol() {
  const datos = await cargarJSON("futbol.json");
  if (!datos) return;

  generarTabla("tabla-laliga", datos.laliga, ["pos", "equipo", "puntos"]);
  generarTabla("tabla-premier", datos.premier, ["pos", "equipo", "puntos"]);
  generarTabla("tabla-seriea", datos.seriea, ["pos", "equipo", "puntos"]);
  generarTabla("tabla-bundesliga", datos.bundesliga, ["pos", "equipo", "puntos"]);
  generarTabla("tabla-ligue1", datos.ligue1, ["pos", "equipo", "puntos"]);
  generarTabla("tabla-champions", datos.champions, ["grupo", "pos", "equipo", "puntos"]);
}

// Clasificación F1
async function cargarClasificacionF1() {
  const datos = await cargarJSON("f1.json");
  if (!datos) return;

  generarTabla("tabla-pilotos", datos.pilotos, ["pos", "piloto", "equipo", "puntos"]);
  generarTabla("tabla-constructores", datos.constructores, ["pos", "equipo", "puntos"]);
}

// Generador genérico de tablas
function generarTabla(idTabla, datos, columnas) {
  const tbody = document.getElementById(idTabla);
  if (!tbody || !datos) return;

  tbody.innerHTML = "";

  datos.forEach(fila => {
    const tr = document.createElement("tr");

    columnas.forEach(col => {
      const td = document.createElement("td");
      td.textContent = fila[col];
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
}