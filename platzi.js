var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

var vaca = {
    url: "vaca.png",
    cargaOk: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOk: false
};

var pollo = {
    url: "pollo.png",
    cargaOk: false
};

var granjero = {
    url: "granjero.png",
    cargaOk: false
};

var fondo = {
    url: "tile.png",
    cargaOk: false
};

var x_vaca = new Array();
var y_vaca = new Array();

var x_cerdo = new Array();
var y_cerdo = new Array();

var x_pollo = new Array();
var y_pollo = new Array();

var cantidadVaca = aleatorio (1,3);
var cantidadCerdo = aleatorio (1,5);
var cantidadPollo = aleatorio (1,7);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo); 

granjero.imagen = new Image();
granjero.imagen.src = granjero.url;
granjero.imagen.addEventListener("load", cargarGranjero);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarGranjero()
{
    granjero.cargaOk = true;
    dibujar();
}

function cargarVaca()
{
    vaca.cargaOk = true;
    quieto();
}

function cargarCerdo()
{
    cerdo.cargaOk = true;
    quieto();
}

function cargarPollo()
{
    pollo.cargaOk = true;
    quieto();
}

function quieto()
{
  if(vaca.cargaOk)
  {
    for(v = 0; v < cantidadVaca; v++)
    {
      var x = aleatorio (0,3);
      var y = aleatorio (0,3);
      x = x * 60;
      y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
      x_vaca[v] = x;
      y_vaca[v] = y;
    }
  }
  if(cerdo.cargaOk)
  {
    for(c = 0; c < cantidadCerdo; c++)
    {
      var x = aleatorio (4,7);
      var y = aleatorio (4,7);
      x = x * 60;
      y = (y * 60) - 250;
      papel.drawImage(cerdo.imagen, x, y);
      x_cerdo[c] = x;
      y_cerdo[c] = y;
    }
  }
  if(pollo.cargaOk)
  {
    for(p = 0; p < cantidadPollo; p++)
    {
      var x = aleatorio (4,7);
      var y = aleatorio (4,7);
      x = (x * 60) - 250;
      y = y * 60;
      papel.drawImage(pollo.imagen, x, y);
      x_pollo[p] = x;
      y_pollo[p] = y;
    }
  }
}
function dibujar()
{
  if(fondo.cargaOk)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(granjero.cargaOk)
  {
    papel.drawImage(granjero.imagen, x_granjero, y_granjero);
  }
  if(vaca.cargaOk)
  {
    for(v = 0; v < cantidadVaca; v++)
    {
      papel.drawImage(vaca.imagen, x_vaca[v], y_vaca[v]);
      console.log(x_vaca[v], y_vaca[v]);
    }
  }
  if(cerdo.cargaOk)
  {
    for(c = 0; c < cantidadCerdo; c++)
    {
      papel.drawImage(cerdo.imagen, x_cerdo[c], y_cerdo[c]);
    }
  }
  if(pollo.cargaOk)
  {
    for(p = 0; p < cantidadPollo; p++)
    {
      papel.drawImage(pollo.imagen, x_pollo[p], y_pollo[p]);
    }
  }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random () * (maxi - min + 1)) + min;
    return resultado;
}

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var x_granjero = 300;
var y_granjero = 400;
var movimiento = 10;
  
console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);

function dibujarTeclado(evento)
{
  switch(evento.keyCode)
  {
    case teclas.UP:
      y_granjero = y_granjero - movimiento;
      dibujar (x_granjero, y_granjero);
      break;
    case teclas.DOWN:
      y_granjero = y_granjero + movimiento;
      dibujar (x_granjero, y_granjero);
      break;
    case teclas.LEFT:
      x_granjero = x_granjero - movimiento;
      dibujar (x_granjero, y_granjero);
      break;
    case teclas.RIGHT:
      x_granjero = x_granjero + movimiento;
      dibujar (x_granjero, y_granjero);
      break;
    default:
      console.log("otra tecla");
      break;
  }
}
