import { Component } from '@angular/core';
import { MATERIAL_MODULES } from '../../../app/shared/material';
import { RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-discentes',
  imports: [RouterLink, ...MATERIAL_MODULES],
  templateUrl: './discentes.html',
  styleUrl: './discentes.css',
})

export class Discentes {
  termo: string = '';
}
