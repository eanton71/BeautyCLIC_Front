export interface Servicio { 
    _id: string;
    nombre: string; 
    duracion: number;
    descripcion: string;
    precio: number; 
    //ObjectID ref Categoria
    categoria: string; 
    foto: string;
}