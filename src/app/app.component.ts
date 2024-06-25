import { Component, OnInit } from '@angular/core';
import { TabService } from './tab.service';
import { Tab } from './tab';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

const TIME = 250;


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('simpleFadeAnimation', [
            transition('*=>*', [
                style({ transform: 'translateX(100%)' }),
                animate(TIME)
            ])
        ])
    ]
})

export class AppComponent implements OnInit {


    counter = 0;

    tab1: Tab = {
        routerLink: '/Home/' + this.counter++,
        matIcon: 'home',
        label: 'Home'
    }

    tab2: Tab = {
        routerLink: '/Settings/' + this.counter++,
        matIcon: 'settings',
        label: 'Settings'
    }


    ngOnInit(): void {

    }


    constructor(private _coreService: TabService, public _router: Router) {
        _coreService.addTab(this.tab1);
        _coreService.addTab(this.tab2);
        _router.navigate([this.tab1.routerLink]);
    }



    addSearch() {

        const tab: Tab = {
            routerLink: '/SearchResults/' + this.counter++,
            matIcon: 'search',
            label: 'Search'
        }
        this._coreService.addTab(tab);
    }



    addSettings() {
        const tab: Tab = {
            routerLink: '/Settings/' + this.counter++,
            matIcon: 'settings',
            label: 'Settings'
        }
        this._coreService.addTab(tab);
    }

    addExistingSearch() {

        const tab: Tab = {
            routerLink: '/SearchResults/3',
            matIcon: 'search',
            label: 'Search'
        }
        this._coreService.addTab(tab);
    }

    getState() {
        return this._router.url;
    }



}