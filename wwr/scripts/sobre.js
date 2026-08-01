const date = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
  "Última modificação: " + date.toLocaleDateString("pt-BR") + " " + date.toLocaleTimeString("pt-BR");
