import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import { MATERIAL_MODULES } from '../../../app/shared/material';



@Component({
  selector: 'app-professores-home',
  imports: [RouterLink, MATERIAL_MODULES],
  templateUrl: './professores-home.html',
  styleUrl: './professores-home.css',
})
export class ProfessoresHome {
  nomeDocente : String = '';
  emailDocente: String = '';
}
