import { Injectable } from '@angular/core';
import {
  ActivationEnd,
  NavigationEnd,
  Params,
  Router,
  UrlSegment,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterHistoryService {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        const {
          snapshot: { routeConfig, data, params },
        } = event;

        const parent: string = `${data['parent']}`;
        const link = {
          params,
          title: routeConfig?.path,
          path: `${parent}/${routeConfig?.path}`,
        };

        if (this.history.some(elem => elem.title === link.title)) {
          return;
        }

        this.history.push(link);
      }
    });
  }

  public history: Array<{ params: Params; title?: string; path: string }> = [];
}
