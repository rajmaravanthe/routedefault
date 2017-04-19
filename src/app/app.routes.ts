import { RouterModule, Route } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

const routes: Route[] = [
    { path: '', component: AddComponent },
    { path: 'view', component: ViewComponent },
    { path: 'add', component: AddComponent }
]

export const RoutesProvider = RouterModule.forRoot(routes);