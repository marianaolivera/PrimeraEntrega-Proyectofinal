class Producto {
    constructor(nombre,precio,detalle,cantidad){
        this.nombre=nombre;
        this.precio = parseFloat (precio);
        this.detalle =detalle;
        this .cantidad = cantidad;
        this.disponible=true;
    }
    vender(){
        this.disponible= false
    }
}
var arrayProductos =[];
 do{
    var stock = prompt("Ingrese nombre del producto o fin para terminar de agregar");
     if(stock==="fin" ||stock === "FIN" || stock === "Fin"){
        break;
     }else{
        nombreP = stock;
        var precioP =prompt("Ingrese el precio del producto");
        var deatlleP =prompt("Ingrese el detalle del prodcuto");
        var cantidadP =prompt("Ingrese la cantidad del producto");
        arrayProductos.push(new Producto(nombreP,precioP,deatlleP,cantidadP));
     }
 }
while(stock !="fin" ||stock === "FIN" || stock === "Fin")
console.log(arrayProductos);

// reponer stock
 var reponerStock =arrayProductos.filter(producto => producto.cantidad <= 5 && producto.cantidad >=1);
 console.log("Producto con poco stock,reponer: ");
 console.log(reponerStock);
 document.write("<h3>Lista de productos en faltate de stock (menos de 5 unidades):</h3>");
 for(var producto of reponerStock){
    document.write("<ul><li><h3>Nombre:"+ producto.nombre +"</h3></li>");
    document.write("<li><h3>Detalle:" + producto.detalle +"</h3></li>");
    document.write("<li><h3>Cantidad:"+ producto.cantidad +"</h3></li></ul><br>");
 }

 var faltanteStock = arrayProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false);
 console.log(faltanteStock);
 document.write("<h3> Lista de productos sin stock (cantidad = 0 ):</h3>");
   for (var producto of faltanteStock){
    document.write("<ul><li><h3>Nombre:"+ producto.nombre +"</h3></li>");
    document.write("<li><h3>Detalle:" + producto.detalle +"</h3></li>");
    document.write("<li><h3>Cantidad:"+ producto.cantidad +"</h3></li></ul><br>");

   }
//buscador de producto especifico
 var ingresado = prompt("Ingresar el nombre del producto a buscar");
 var proIngresado = arrayProductos.filter(producto =>producto.nombre.includes(ingresado));
 console.log(proIngresado);
 document.write("<h3> Productos ingresados en la busqueda:  </h3>");

 for (var producto of proIngresado){
    document.write("<ul><li><h3>Nombre:"+ producto.nombre +"</h3></li>");
    document.write("<li><h3>Detalle:" + producto.detalle +"</h3></li>");
    document.write("<li><h3>Precio:"+ producto.precio +"</h3></li></ul><br>");
 }
 //listado por precio de todos los productos

 var ordenPrecio = [];
 ordenPrecio= arrayProductos.map(elemento => elemento);
 var ordenPrecio = arrayProductos;
 ordenPrecio.sort(function(a,b){
   return a.precio - b.precio;
 });
 console.log("Ordenados por mayor precio");
 console.log(ordenPrecio);
 document.write("<h3> Lista ordenada por menor precio: <h3/>") ;

for (var producto of ordenPrecio){
    document.write("<ul><li><h3>Nombre:"+ producto.nombre +"</h3></li>");
    document.write("<li><h3>Detalle:" + producto.detalle +"</h3></li>");
    document.write("<li><h3>Precio:"+ producto.precio +"</h3></li></ul><br>");
}