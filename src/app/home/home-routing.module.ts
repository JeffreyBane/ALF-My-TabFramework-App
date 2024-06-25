import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


export const HOME_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(HOME_ROUTES)],
    declarations: [],
    exports: [RouterModule]
})

export class HomeRoutingModule {}