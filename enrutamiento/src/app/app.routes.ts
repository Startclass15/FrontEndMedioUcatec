import { Routes } from '@angular/router';

//PASO 1. IMPORTAR LAS PAGINAS
import { Pagina1 } from './paginas/pagina1/pagina1';
import { Pagina2 } from './paginas/pagina2/pagina2';
import { Pagina3 } from './paginas/pagina3/pagina3';
import { Pagina4 } from './paginas/pagina4/pagina4';

//PASO 2. CREAR LAS RUTAS
export const routes: Routes = [
    {
        path:'',component:Pagina1
    },
    {
        path:'pagina2',component:Pagina2
    },
    {
        path:'pagina3',component:Pagina3
    },
    {
        path:'pagina4',component:Pagina4
    }
];
