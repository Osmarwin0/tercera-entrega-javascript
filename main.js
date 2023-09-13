let opcion

const tienda = () => {
    let opcion = parseInt(prompt('Bienvenido a nuestra tienda. Dinos que te interesa comprar:\n1. Cómics y Mangas\n2. Figuras de Acción\n3. Ropa y Accesorios\n4. Salir'));

    switch (opcion) {
        case 1:
            comprarComicsYMangas();
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

const comprarComicsYMangas = () => {
    opcion = parseInt(prompt('¿En qué estás interesado?:\n1. Cómics\n2. Mangas\n3. Libros de fantasía\n4. Salir'));
    switch (opcion) {
        case 1:
            alert('Te invitamos a escoger tus cómics favoritos.');
            break;
        case 2:
            alert('Te invitamos a escoger tus mangas favoritos.');
            break;
        case 3:
            alert('Te invitamos a escoger tus libros de fantasía favoritos.');
            break;
        case 4:
            alert('Gracias por visitar nuestra tienda.');
            break;
        default:
            alert('Gracias por visitar nuestra tienda.');
    }
}

const comprarFigurasDeAccion = () => {
    opcion = parseInt(prompt('¿Qué figuras te interesan?:\n1. Figuras de anime\n2. Figuras de super héroes\n3. Figuras de colección\n4. Salir'));
    switch (opcion) {
        case 1:
            alert('Te invitamos a escoger las figuras de animes que mas te gusten.');
            break;
        case 2:
            alert('Te invitamos a escoger las figuras de super héroes que mas te gusten.');
            break;
        case 3:
            alert('Te invitamos a escoger las figuras de colecciones que mas te gusten.');
            break;
        case 4:
            alert('Gracias por visitar nuestra tienda.');
            break;
        default:
            alert('Gracias por visitar nuestra tienda.');
    }
}

const comprarRopaYAccesorios = () => {
    opcion = parseInt(prompt('¿Qué tipo de ropa te interesa?:\n1. Ropa\n2. Accesorios\n3. Cosplay\n4. Salir'));
    switch (opcion) {
        case 1:
            alert('Puedes escoger la ropa que mas se adapte a tu estilo.');
            break;
        case 2:
            alert('Puedes escoger los accesorios que mas te gusten.');
            break;
        case 3:
            alert('Puedes escoger los cosplays que mas te gusten.');
            break;
        case 4:
            alert('Gracias por visitar nuestra tienda.');
            break;
        default:
            alert('Gracias por visitar nuestra tienda.');
    }
}

tienda();