import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

export const SETTINGS_ROUTES: Routes = [
    {
        path: '',
        component: SettingsComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(SETTINGS_ROUTES)],
    declarations: [],
    exports: [RouterModule]
})

export class SettingsRoutingModule {}