import { Routes } from '@angular/router';
import { Discentes } from '../telas/discentes/discentes/discentes';
import {Home} from '../telas/home/home';
import { CadastroDiscente } from '../telas/discentes/cadastro-discente/cadastro-discente'
import { ProfessoresHome } from '../telas/professores/professores-home/professores-home';
import { Defesas } from '../telas/defesas/defesas/defesas';

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
    },
     {
        path:'professores',
        component: ProfessoresHome,
        title: 'Professores PPGF'
    },
    {
        path:'defesas',
        component: Defesas,
        title: 'Defesas PPGF'
    }
];

