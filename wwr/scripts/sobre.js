const date = new Date(document.lastModified);
document.getElementById("lastModified").textContent = 
  date.toLocaleDateString("pt-BR") + "São Paulo " + date.toLocaleTimeString("pt-BR");
