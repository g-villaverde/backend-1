
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        nombre =this.nombre,
        apellido = this.apellido,
        libros = this.libros, 
        mascotas = this.mascotas
    }

    getFullName() {
        return `Usuario completo: ${this.nombre} ${this.apellido}`
    }
}