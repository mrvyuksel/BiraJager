import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import {LogsComponent} from './logs/logs.component';
import {LogComponent} from './log/log.component';
//
@RouteConfig([
    {path: '/logs', name: 'Logs', component: LogsComponent, usrAsDefault: true},
    {path: '/logs/:appName', name: 'Log', component: LogComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Logs']}
])

@Component({
    selector: 'my-app',
    templateUrl: '/app/main.html',
    directives:[ROUTER_DIRECTIVES]
})
export class AppComponent {
}