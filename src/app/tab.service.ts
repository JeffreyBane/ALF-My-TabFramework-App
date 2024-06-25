import { Injectable } from '@angular/core';
import { Tab } from './tab';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class TabService {

    public tabs: Tab[] = [];

    constructor(private _router: Router) {
    }

    public removeTab(index: number) {

        let navigateAway = false;
        if (this._router.url === this.tabs[index].routerLink) {
            navigateAway = true;
        }

        this.tabs.splice(index, 1);

        if (navigateAway) {
            this._router.navigate([this.tabs[index - 1].routerLink]);
        }

    }



    public addTab(tab: Tab) {

        const exists = this.tabs.find(t => t.routerLink === tab.routerLink);

        if (!exists) {
            this.tabs.push(tab);
        }

        // navigate to either the new tab or the existing tab
        this._router.navigate([tab.routerLink]);
    }


}