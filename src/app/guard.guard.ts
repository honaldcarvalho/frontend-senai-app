import { CanActivateFn, Router } from '@angular/router';

export const GuardGuard: CanActivateFn = (route, state) => {
  let router  = new Router();
  
  if(localStorage.getItem('token') != undefined) 
    return true;
  router.navigate(['login']);
  return false;
};
