# readingBar

Barra de progreso que muestra el avance de la lectura. Ideal para insertarla en artículos o posts largos. 

Puedes ver el porcentaje de tu avance y el tiempo estimado de lectura.

## Usage

Importa jquery y el archivo readingBar.js y su dependencia css

A continuación tienes dos modos de uso.

### Básico
```
$("#my-content").readingbar();
```

### Personalizado
```
$("#my-content").readingbar({
	backgroundColor : "orange",
	height : 40,
	percent : false
});
```

