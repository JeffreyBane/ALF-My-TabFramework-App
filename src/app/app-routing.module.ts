import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

 

// Both of the available paths are lazy loaded

export const APP_ROUTES: Routes = [
    {
        path: 'Home/:id',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'SearchResults/:id',
        loadChildren: () => import('./search-results/search-results.module').then(m => m.SearchResultsModule)
    },
    {
        path: 'Settings/:id',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
    },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'corrected' })],
    exports: [RouterModule]
})

export class AppRoutingModule {}

 