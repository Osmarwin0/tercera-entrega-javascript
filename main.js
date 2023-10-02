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
        { nombre: "Superman", precio: 10, categoría: "Cómics" },
        { nombre: "Batman", precio: 12, categoría: "Cómics" },
        { nombre: "Wonder Woman", precio: 9, categoría: "Cómics" },
        { nombre: "Spider-Man", precio: 11, categoría: "Cómics" },
        { nombre: "Iron Man", precio: 10, categoría: "Cómics" },
        { nombre: "Hulk", precio: 8, categoría: "Cómics" }
    ]
    const mangas = [
        { nombre: "Chainsaw Man", precio: 15, categoría: "Mangas" },
        { nombre: "Kimetsu no Yaiba", precio: 14, categoría: "Mangas" },
        { nombre: "Naruto", precio: 13, categoría: "Mangas" },
        { nombre: "Naruto Shippuden", precio: 16, categoría: "Mangas" },
        { nombre: "Fullmetal Alchemist", precio: 12, categoría: "Mangas" },
        { nombre: "Death Note", precio: 10, categoría: "Mangas" }
    ];

    const librosFantasia = [
        { nombre: "El Señor de los Anillos", precio: 20, categoría: "Libros de Fantasía" },
        { nombre: "Canción de Hielo y Fuego", precio: 18, categoría: "Libros de Fantasía" },
        { nombre: "La Rueda del Tiempo", precio: 16, categoría: "Libros de Fantasía" },
        { nombre: "Saga Mistborn", precio: 15, categoría: "Libros de Fantasía" }
    ];

    const opcion = parseInt(prompt('¿En qué estás interesado?:\n1. Cómics\n2. Mangas\n3. Libros de fantasía\n4. Salir'));

    switch (opcion) {
        case 1:
            const escogerComics = comics.map(producto => producto.nombre);
            alert('Te invitamos a escoger tus cómics favoritos: \n-' + escogerComics.join('\n-'));
            break;
        case 2:
            const escogerMangas = mangas.map(producto => producto.nombre);
            alert('Te invitamos a escoger tus mangas favoritos: \n-' + escogerMangas.join('\n-'));
            break;
        case 3:
            const escogerLibrosFantasía = librosFantasia.map(producto => producto.nombre);
            alert('Te invitamos a escoger tus libros de fantasía favoritos: \n-' + escogerLibrosFantasía.join('\n-'));
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
        { nombre: "Naruto Uzumaki (Naruto)", precio: 20, categoría: "Figuras de Anime" },
        { nombre: "Goku (Dragon Ball)", precio: 25, categoría: "Figuras de Anime" },
        { nombre: "Luffy (One Piece)", precio: 20, categoría: "Figuras de Anime" },
        { nombre: "Ichigo Kurosaki (Bleach)", precio: 25, categoría: "Figuras de Anime" },
        { nombre: "Monkey D. Luffy (One Piece)", precio: 20, categoría: "Figuras de Anime" },
        { nombre: "Light Yagami (Death Note)", precio: 25, categoría: "Figuras de Anime" },
    ];
    const figurasDeSuperHeroes = [
        { nombre: "Superman", precio: 20, categoría: "Figuras de Super Héroes" },
        { nombre: "Batman", precio: 25, categoría: "Figuras de Super Héroes" },
        { nombre: "Spider-Man", precio: 20, categoría: "Figuras de Super Héroes" },
        { nombre: "Iron Man", precio: 25, categoría: "Figuras de Super Héroes" },
        { nombre: "Black Widow", precio: 20, categoría: "Figuras de Super Héroes" },
        { nombre: "Wolverine", precio: 25, categoría: "Figuras de Super Héroes" },
    ];
    const figurasDeColeccion = [
        { nombre: "Terminator", precio: 20, categoría: "Figuras de Colección" },
        { nombre: "Robocop", precio: 25, categoría: "Figuras de Colección" },
        { nombre: "Darth Vader (Star Wars)", precio: 20, categoría: "Figuras de Colección" },
        { nombre: "Luke Skywalker (Star Wars)", precio: 25, categoría: "Figuras de Colección" },
        { nombre: "Yoda (Star Wars)", precio: 20, categoría: "Figuras de Colección" },
        { nombre: "Gandalf (Lord of the Rings)", precio: 25, categoría: "Figuras de Colección" },
    ];

    const opcion = parseInt(prompt('¿Qué figuras te interesan?:\n1. Figuras de anime\n2. Figuras de super héroes\n3. Figuras de colección\n4. Salir'));

    switch (opcion) {
        case 1:
            const escogerFigurasDeAnime = figurasDeAnime.map(producto => producto.nombre);
            alert('Te invitamos a escoger las figuras de anime que más te gusten: \n-' + escogerFigurasDeAnime.join('\n-'));
            break;
        case 2:
            const figurasSuperHeroes = figurasDeSuperHeroes.map(producto => producto.nombre);
            alert('Te invitamos a escoger las figuras de super héroes que más te gusten: \n-' + figurasSuperHeroes.join('\n-'));
            break;
        case 3:
            const figurasColeccion = figurasDeColeccion.map(producto => producto.nombre);
            alert('Te invitamos a escoger las figuras de colección que más te gusten: ' + figurasColeccion.join('\n-'));
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
        { nombre: "Camisetas estampadas con diseños de personaje.", precio: 20, categoría: "Ropa" },
        { nombre: "Sudaderas con capucha con logotipos de franquicias.", precio: 25, categoría: "Ropa" },
        { nombre: "Chaquetas inspiradas en personajes de películas.", precio: 20, categoría: "Ropa" },
        { nombre: "Vestidos temáticos de franquicias.", precio: 25, categoría: "Ropa" },
        { nombre: "Pijamas con estampados de personajes.", precio: 25, categoría: "Ropa" },
    ];
    const accesorios = [
        { nombre: "Gorras con logos de superhéroes.", precio: 20, categoría: "Accesorios" },
        { nombre: "Gorros de lana con símbolos de superhéroes.", precio: 25, categoría: "Accesorios" },
        { nombre: "Bolsos con estampados de personajes.", precio: 20, categoría: "Accesorios" },
        { nombre: "Bufandas con motivos de películas de fantasía.", precio: 25, categoría: "Accesorios" },
        { nombre: "Calcetines con diseños de personajes de cómics y videojuegos.", precio: 25, categoría: "Accesorios" },
    ];
    const cosplay = [
        { nombre: "Trajes completos de personajes de anime.", precio: 20, categoría: "Cosplay" },
        { nombre: "Pelucas de colores de personajes de anime.", precio: 25, categoría: "Cosplay" },
        { nombre: "Accesorios de cosplay como (espadas, escudos o varitas mágicas).", precio: 20, categoría: "Cosplay" },
        { nombre: "Maquillaje especial de Cosplay.", precio: 25, categoría: "Cosplay" },
        { nombre: "Lentes de contacto de colores.", precio: 20, categoría: "Cosplay" },
    ];

    const opcion = parseInt(prompt('¿Qué tipo de ropa te interesa?:\n1. Ropa\n2. Accesorios\n3. Cosplay\n4. Salir'));

    switch (opcion) {
        case 1:
            const escogerRopa = ropa.map(producto => producto.nombre);
            alert('Puedes escoger la ropa que más se adapte a tu estilo: \n-' + escogerRopa.join('\n-'));
            break;
        case 2:
            const escogerAccesorios = accesorios.map(producto => producto.nombre);
            alert('Puedes escoger los accesorios que más te gusten: \n-' + escogerAccesorios.join('\n-'));
            break;
        case 3:
            const escogerCosplays = cosplay.map(producto => producto.nombre);
            alert('Puedes escoger los cosplays que más te gusten: \n-' + escogerCosplays.join('\n-'));
            break;
        case 4:
            alert('Gracias por visitar nuestra tienda.');
            break;
        default:
            alert('Gracias por visitar nuestra tienda.');
    }
}
tienda();