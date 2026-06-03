import { Component, input } from '@angular/core';
import { MenuInfo } from './menu_info'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-card.html',
  styleUrl: './menu-card.css',
})
export class MenuCard {
  menu = input.required<MenuInfo>();
}
