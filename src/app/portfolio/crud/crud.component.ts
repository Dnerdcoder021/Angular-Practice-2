import { HttpClientJsonpModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [HttpClientJsonpModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {

}
