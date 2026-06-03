import { Routes } from '@angular/router';
import { Discentes } from '../telas/discentes/discentes/discentes';
import {Home} from '../telas/home/home';
import { CadastroDiscente } from '../telas/cadastro-discente/cadastro-discente';

export const routes: Routes = [
    {
        path:'',
        component: Home,
        title: 'Discentes PPGF'
    },
    {
        path:'discentes',
        component: Discentes,
        title: 'Discentes PPGF'
    },
    {
        path:'cadastrarDiscente',
        component: CadastroDiscente,
        title: 'Cadastre Novo Discente'
    }
];

