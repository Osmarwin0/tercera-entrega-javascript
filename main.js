const tienda = () => {
    let opcion = parseInt(prompt('Bienvenido a nuestra tienda. Dinos qué te interesa comprar:\n1. Cómics\n2. Figuras de Acción\n3. Ropa y Accesorios\n4. Salir'));

    switch (opcion) {
        case 1:
            comprarComicsMangasLibros();
            break;
        case 2:
            comprarFigurasDeAccion();
            break;
        case 3:
            comprarRopaYAccesorios();
            break;
        case 4:
            alert('Gracias por visitar nuestra tienda.');
            break;
        default:
            alert('Gracias por visitar nuestra tienda.');
    }
}

const comprarComicsMangasLibros = () => {
    const comics = [
        { nombre: "Superman", precio: 10, imagen: "./img/productos/comic-superman.jpg", categoría: "Cómics" },
        { nombre: "Batman", precio: 12, imagen: "./img/productos/comic-batman.jpg", categoría: "Cómics" },
        { nombre: "Wonder Woman", precio: 9, imagen: "./img/productos/comic-ww.jpg", categoría: "Cómics" },
        { nombre: "Spider-Man", precio: 11, imagen: "./img/productos/comic-spiderman.jpg", categoría: "Cómics" },
        { nombre: "Iron Man", precio: 10, imagen: "./img/productos/comic-ironman.jpg", categoría: "Cómics" },
        { nombre: "Hulk", precio: 8, imagen: "./img/productos/comic-hulk.jpg", categoría: "Cómics" }
    ]
    const mangas = [
        { nombre: "Chainsaw Man", precio: 15, imagen: "./img/productos/manga-chainsawman.jpg", categoría: "Mangas" },
        { nombre: "Kimetsu no Yaiba", precio: 14, imagen: "./img/productos/manga-kny.jpg", categoría: "Mangas" },
        { nombre: "Naruto", precio: 13, imagen: "./img/productos/manga-naruto.jpg", categoría: "Mangas" },
        { nombre: "Naruto Shippuden", precio: 16, imagen: "./img/productos/manga-narutoshp.jpg", categoría: "Mangas" },
        { nombre: "Fullmetal Alchemist", precio: 12, imagen: "./img/productos/manga-fma.jpg", categoría: "Mangas" },
        { nombre: "Death Note", precio: 10, imagen: "./img/productos/manga-deathnote.jpg", categoría: "Mangas" }
    ];

    const librosFantasia = [
        { nombre: "El Señor de los Anillos", precio: 20, imagen: "./img/productos/libro-anillos.jpg", categoría: "Libros de Fantasía" },
        { nombre: "Canción de Hielo y Fuego", precio: 18, imagen: "./img/productos/libro-cancion.jpg", categoría: "Libros de Fantasía" },
        { nombre: "La Rueda del Tiempo", precio: 16, imagen: "./img/productos/libro-rueda.jpg", categoría: "Libros de Fantasía" },
        { nombre: "Saga Mistborn", precio: 15, imagen: "./img/productos/libro-mistborn.jpg", categoría: "Libros de Fantasía" }
    ];

    const opcion = parseInt(prompt('¿En qué estás interesado?:\n1. Cómics\n2. Mangas\n3. Libros de fantasía\n4. Salir'));

    switch (opcion) {
        case 1:
            const escogerComics = comics.map(producto => producto.nombre);
            alert('Te invitamos a escoger tus cómics favoritos: \n-' + escogerComics.join('\n-'));
            localStorage.setItem('comics', JSON.stringify(comics));
            break;
        case 2:
            const escogerMangas = mangas.map(producto => producto.nombre);
            alert('Te invitamos a escoger tus mangas favoritos: \n-' + escogerMangas.join('\n-'));
            localStorage.setItem('mangas', JSON.stringify(mangas));
            break;
        case 3:
            const escogerLibrosFantasía = librosFantasia.map(producto => producto.nombre);
            alert('Te invitamos a escoger tus libros de fantasía favoritos: \n-' + escogerLibrosFantasía.join('\n-'));
            localStorage.setItem('librosFantasia', JSON.stringify(librosFantasia));
            break;
        case 4:
            alert('Gracias por visitar nuestra tienda.');
            break;
        default:
            alert('Gracias por visitar nuestra tienda.');
    }
}

const comprarFigurasDeAccion = () => {
    const figurasDeAnime = [
        { nombre: "Naruto Uzumaki (Naruto)", precio: 20, imagen: "./img/productos/figura-naruto.jpg", categoría: "Figuras de Anime" },
        { nombre: "Goku (Dragon Ball)", precio: 25, imagen: "./img/productos/figura-goku.jpg", categoría: "Figuras de Anime" },
        { nombre: "Luffy (One Piece)", precio: 20, imagen: "./img/productos/figura-luffy.jpg", categoría: "Figuras de Anime" },
        { nombre: "Ichigo Kurosaki (Bleach)", precio: 25, imagen: "./img/productos/figura-ichigo.jpg", categoría: "Figuras de Anime" },
        { nombre: "Monkey D. Luffy (One Piece)", precio: 20, imagen: "./img/productos/figura-monkey.jpg", categoría: "Figuras de Anime" },
        { nombre: "Light Yagami (Death Note)", precio: 25, imagen: "./img/productos/figura-light.jpg", categoría: "Figuras de Anime" },
    ];
    const figurasDeSuperHeroes = [
        { nombre: "Superman", precio: 20, imagen: "./img/productos/figura-superman.jpg", categoría: "Figuras de Super Héroes" },
        { nombre: "Batman", precio: 25, imagen: "./img/productos/figura-batman.jpg", categoría: "Figuras de Super Héroes" },
        { nombre: "Spider-Man", precio: 20, imagen: "./img/productos/figura-spiderman.jpg", categoría: "Figuras de Super Héroes" },
        { nombre: "Iron Man", precio: 25, imagen: "./img/productos/figura-ironman.jpg", categoría: "Figuras de Super Héroes" },
        { nombre: "Black Widow", precio: 20, imagen: "./img/productos/figura-blackwidow.jpg", categoría: "Figuras de Super Héroes" },
        { nombre: "Wolverine", precio: 25, imagen: "./img/productos/figura-wolverine.jpg", categoría: "Figuras de Super Héroes" },
    ];
    const figurasDeColeccion = [
        { nombre: "Terminator", precio: 20, imagen: "./img/productos/figura-terminator.jpg", categoría: "Figuras de Colección" },
        { nombre: "Robocop", precio: 25, imagen: "./img/productos/figura-robocop.jpg", categoría: "Figuras de Colección" },
        { nombre: "Darth Vader (Star Wars)", precio: 20, imagen: "./img/productos/figura-vader.jpg", categoría: "Figuras de Colección" },
        { nombre: "Luke Skywalker (Star Wars)", precio: 25, imagen: "./img/productos/figura-luke.jpg", categoría: "Figuras de Colección" },
        { nombre: "Yoda (Star Wars)", precio: 20, imagen: "./img/productos/figura-yoda.jpg", categoría: "Figuras de Colección" },
        { nombre: "Gandalf (Lord of the Rings)", precio: 25, imagen: "./img/productos/figura-gandalf.jpg", categoría: "Figuras de Colección" },
    ];

    const opcion = parseInt(prompt('¿Qué figuras te interesan?:\n1. Figuras de anime\n2. Figuras de super héroes\n3. Figuras de colección\n4. Salir'));

    switch (opcion) {
        case 1:
            const escogerFigurasDeAnime = figurasDeAnime.map(producto => producto.nombre);
            alert('Te invitamos a escoger las figuras de anime que más te gusten: \n-' + escogerFigurasDeAnime.join('\n-'));
            localStorage.setItem('figurasDeAnime', JSON.stringify(figurasDeAnime));
            break;
        case 2:
            const figurasSuperHeroes = figurasDeSuperHeroes.map(producto => producto.nombre);
            alert('Te invitamos a escoger las figuras de super héroes que más te gusten: \n-' + figurasSuperHeroes.join('\n-'));
            localStorage.setItem('figurasDeSuperHeroes', JSON.stringify(figurasDeSuperHeroes));
            break;
        case 3:
            const figurasColeccion = figurasDeColeccion.map(producto => producto.nombre);
            alert('Te invitamos a escoger las figuras de colección que más te gusten: ' + figurasColeccion.join('\n-'));
            localStorage.setItem('figurasDeColeccion', JSON.stringify(figurasDeColeccion));
            break;
        case 4:
            alert('Gracias por visitar nuestra tienda.');
            break;
        default:
            alert('Gracias por visitar nuestra tienda.');
    }
}

const comprarRopaYAccesorios = () => {
    const ropa = [
        { nombre: "Camisetas estampadas con diseños de personaje.", imagen: "./img/productos/ropa-camiseta.jpg", precio: 20, categoría: "Ropa" },
        { nombre: "Sudaderas con capucha con logotipos de franquicias.", imagen: "./img/productos/ropa-sudadera.jpg", precio: 25, categoría: "Ropa" },
        { nombre: "Chaquetas inspiradas en personajes de películas.", imagen: "./img/productos/ropa-chaqueta.jpg", precio: 20, categoría: "Ropa" },
        { nombre: "Vestidos temáticos de franquicias.", precio: 25, imagen: "./img/productos/ropa-vestido.jpg", categoría: "Ropa" },
        { nombre: "Pijamas con estampados de personajes.", precio: 25, imagen: "./img/productos/ropa-pijama.jpg", categoría: "Ropa" },
    ];
    const accesorios = [
        { nombre: "Gorras con logos de superhéroes", precio: 20, imagen: "./img/productos/accesorio-gorras.jpg", categoría: "Accesorios" },
        { nombre: "Gorros de lana con símbolos de superhéroes.", imagen: "./img/productos/accesorio-lana.jpg", precio: 25, categoría: "Accesorios" },
        { nombre: "Bolsos con estampados de personajes.", precio: 20, imagen: "./img/productos/accesorio-bolso.jpg", categoría: "Accesorios" },
        { nombre: "Bufandas con motivos de películas de fantasía.", precio: 25, imagen: "./img/productos/accesorio-bufanda.jpg", categoría: "Accesorios" },
        { nombre: "Calcetines con diseños de personajes de cómics y videojuegos.", imagen: "./img/productos/accesorio-calcetines.jpg", precio: 25, categoría: "Accesorios" },
    ];
    const cosplay = [
        { nombre: "Trajes completos de personajes de anime.", imagen: "./img/productos/cosplay-traje.jpg", precio: 20, categoría: "Cosplay" },
        { nombre: "Pelucas de colores de personajes de anime.", imagen: "./img/productos/cosplay-peluca.jpg", precio: 25, categoría: "Cosplay" },
        { nombre: "Accesorios de cosplay como (espadas, escudos o varitas mágicas).", imagen: "./img/productos/cosplay-espada.jpg", precio: 20, categoría: "Cosplay" },
        { nombre: "Maquillaje especial de Cosplay.", imagen: "./img/productos/cosplay-maquillaje.jpg", precio: 25, categoría: "Cosplay" },
        { nombre: "Lentes de contacto de colores.", imagen: "./img/productos/cosplay-lentes.jpg", precio: 20, categoría: "Cosplay" },
    ];

    const opcion = parseInt(prompt('¿Qué tipo de ropa te interesa?:\n1. Ropa\n2. Accesorios\n3. Cosplay\n4. Salir'));

    switch (opcion) {
        case 1:
            const escogerRopa = ropa.map(producto => producto.nombre);
            alert('Puedes escoger la ropa que más se adapte a tu estilo: \n-' + escogerRopa.join('\n-'));
            localStorage.setItem('ropa', JSON.stringify(ropa));
            break;
        case 2:
            const escogerAccesorios = accesorios.map(producto => producto.nombre);
            alert('Puedes escoger los accesorios que más te gusten: \n-' + escogerAccesorios.join('\n-'));
            localStorage.setItem('accesorios', JSON.stringify(accesorios));
            break;
        case 3:
            const escogerCosplays = cosplay.map(producto => producto.nombre);
            alert('Puedes escoger los cosplays que más te gusten: \n-' + escogerCosplays.join('\n-'));
            localStorage.setItem('cosplay', JSON.stringify(cosplay));
            break;
        case 4:
            alert('Gracias por visitar nuestra tienda.');
            break;
        default:
            alert('Gracias por visitar nuestra tienda.');
    }
}
tienda();