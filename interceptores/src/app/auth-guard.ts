//Importar injectabñe
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Auth } from './auth'; //Servicio creado

export const authGuard: CanActivateFn = (route, state) => {
  const auth=inject(Auth);
  return auth.estaAutentificado()        // configuracion del servicio (Verdadero o Falso)

};
