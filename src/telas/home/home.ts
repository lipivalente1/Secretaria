import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MenuCard } from './components/menu-card/menu-card';
import { MenuInfo } from './components/menu-card/menu_info';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, MenuCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly title = signal('secretaria');

  menu : MenuInfo = {
      title : "Discentes",
      desc : ["Matricula1", "Matricula2", "Matricula3"],
      cor : "rgba(0, 243, 12, 0.47)",
  };

  menu2 : MenuInfo = {
      title : "Professores",
      desc : ["Matricula1", "Matricula2", "Matricula3"],
      cor : "rgba(255, 166, 0, 0.47)",
  };

  menu3 : MenuInfo = {
      title : "Defesas",
      desc : ["Matricula1", "Matricula2", "Matricula3"],
      cor : "rgba(89, 7, 255, 0.47)",
  };

  menu4 : MenuInfo = {
      title : "Defesas",
      desc : ["Matricula1", "Matricula2", "Matricula3"],
      cor : "rgba(0, 204, 255, 0.47)",
  };

  menu5 : MenuInfo = {
      title : "Defesas",
      desc : ["Matricula1", "Matricula2", "Matricula3"],
      cor : "rgba(253, 2, 232, 0.47)",
  };

  menu6 : MenuInfo = {
      title : "Defesas",
      desc : ["Matricula1", "Matricula2", "Matricula3"],
      cor : "rgba(153, 255, 106, 0.47)",
  };

  menu7 : MenuInfo = {
      title : "Defesas",
      desc : ["Matricula1", "Matricula2", "Matricula3"],
      cor : "rgba(0, 0, 0, 0.47)",
  };

  menu8 : MenuInfo = {
      title : "Defesas",
      desc : ["Matricula1", "Matricula2", "Matricula3"],
      cor : "rgba(255, 0, 0, 0.47)",
  };
}
