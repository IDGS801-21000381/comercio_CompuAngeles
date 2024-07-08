import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  templateUrl: '../app/pagina-producto/pagina-producto.component.html',
  styleUrl: '../app/pagina-producto/pagina-producto.component.css'
  //styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comercio_CompuAngeles';
}
