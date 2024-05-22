import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes = [
    {
        path: '',
        component: AboutComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'projects',
        component: ProjectsComponent,
    },
    {
        path: 'create',
        component: CreateComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'project-details/:_id',
        component: DetailsComponent,
    },
    {
        path: 'project-edit/:_id',
        component: EditComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);