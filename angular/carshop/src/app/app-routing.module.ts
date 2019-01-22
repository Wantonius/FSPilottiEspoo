import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {CarList} from './carlist.component';
import {CarForm} from './carform.component';

const appRoutes:Routes = [
	{path:"carlist", component:CarList},
	{path:"carform", component:CarForm},
	{path:"", redirectTo:"/carlist", pathMatch:"full"}
]

@NgModule({
	exports:[
		RouterModule
	],
	imports:[
		RouterModule.forRoot(appRoutes)
	]
})

export class AppRoutingModule {}

