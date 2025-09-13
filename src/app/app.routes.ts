import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'products',
        loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent)
    },
    {
        path: 'order',
        loadComponent: () => import('./components/order/order.component').then(m => m.OrderComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
    },
    //details route with id parameter
    {
        path: 'details/:id',
        loadComponent: () => import('./components/details/details.component').then(m => m.DetailsComponent)
    },
    //catch all route
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
