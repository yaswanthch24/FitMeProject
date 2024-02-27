import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ServicesService } from './services.service';

export const authGuard: CanActivateFn = (route, state) => {
  let service = inject(ServicesService);
  return service.getIsUserLogged();
};
