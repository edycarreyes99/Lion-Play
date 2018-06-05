import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  //Task principal
  task: AngularFireUploadTask;

  //monitoreo de progreso
  porcentaje: Observable<number>;
  snapshot: Observable<any>;

  //URL de descarga
  URL: string;

  //estado del toggling css para el dropZone
  isHovering: boolean;

  constructor(public storage: AngularFireStorage) { }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    //El objeto del Archivo
    const file = event.item(0);

    //validacion del lado del cliente
    if (file.type.split('/')[0] !== 'image') {
      console.error('Tipo de archivo no soportado');
      return;
    }

    //el path del storage
    const path = `test/${new Date().getTime()}_${file.name}`;

    //Metadatos
    const customMetadata = { app: 'Juegos de Prueba' };

    //el task principal
    this.task = this.storage.upload(path, file, { customMetadata });

    //monitoreo del progreso
    this.porcentaje = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    //URL de descarga
    this.URL = this.task.task.snapshot.downloadURL;



    
  }


  //Determinar si la carga esta en progreso
  isActive(snapshot){
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
  ngOnInit() {
  }

}
