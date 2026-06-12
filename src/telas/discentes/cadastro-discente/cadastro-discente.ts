import { Component } from '@angular/core';
import { MATERIAL_MODULES } from '../../../app/shared/material'
import { RouterOutlet, RouterLink } from '@angular/router'

@Component({
  selector: 'app-cadastro-discente',
  imports: [RouterLink, MATERIAL_MODULES],
  templateUrl: './cadastro-discente.html',
  styleUrl: './cadastro-discente.css',
})
export class CadastroDiscente {
  termo: String = ''
}
