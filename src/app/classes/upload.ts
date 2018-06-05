export class Upload {
    $key: string;
    archivo: File;
    nombre: string;
    url: string;
    progreso: number;
    fecha_de_creacion: Date = new Date();

    constructor(archivo:File){
        this.archivo = archivo
    }
}
