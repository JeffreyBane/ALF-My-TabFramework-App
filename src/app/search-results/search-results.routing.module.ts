import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './search-results.component';

export const SEARCH_ROUTES: Routes = [
    {

        path: '',
        component: SearchResultsComponent
    }
];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(SEARCH_ROUTES)],
    declarations: [],
    exports: [RouterModule]

})

export class SearchResultsRoutingModule {}