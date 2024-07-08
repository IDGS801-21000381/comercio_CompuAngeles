import { Component } from '@angular/core';
import { IComputadora } from '../interface/Computadoras';
import { ComputadorasService } from '../services/computadoras.service';

@Component({
  selector: 'app-pagina-producto',
  standalone: true,
  imports: [],
  templateUrl: './pagina-producto.component.html',
  styleUrl: './pagina-producto.component.css'
})
export class PaginaProductoComponent {

  title = 'Comercio'; // Añadir esta línea
  listaComputadoras: IComputadora[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  nombreComputadora: string = "";
  descripcion: string = "";
  imagen: string = "";
  precio: number = 0;
  categoria: number = 0;
  IDComputadoraActual: number = 0;

  constructor(private _computadorasService: ComputadorasService) {
    this.obtenerComputadoras();
  }

  obtenerComputadoras() {
    this._computadorasService.getList().subscribe({
      next: (data) => {
        this.listaComputadoras = data;
        this.isResultLoaded = true;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }



  obtenerComputadora(data: IComputadora) {
    this.nombreComputadora = data.nombre;
    this.descripcion = data.descripcion;
    this.imagen = data.imagen;
    this.precio = data.precio;
    this.categoria = data.categoria;
    this.IDComputadoraActual = data.id;
  }






  resetForm() {
    this.nombreComputadora = "";
    this.descripcion = "";
    this.imagen = "";
    this.precio = 0;
    this.categoria = 0;
    this.IDComputadoraActual = 0;
  }
}
