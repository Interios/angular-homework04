# AngularHomework04

stackblitz: https://stackblitz.com/edit/github-72968p?file=src%2Fapp%2Fapp.component.ts

1) Why should we use getter and setter instead of just setting the variable in the service?

У класса есть специальные методы getter, setter для доступа к свойствам.
getter и setter должны иметь одно и то же имя, поскольку они представляют собой еще один способ определения свойства.
getter - получаем свойство, setter - устанавливаем новое значение для нашего свойства

2) How to set a default value for @Input() property?

Декоратор @Input используется дл ппередачи данных от родителя к потомку, можно поставить значения по умолчанию в самом потомке
example:
import { Input } from '@angular/core';
@Input() title: string = 'homework 04';

3) What is the difference between @ViewChild() і @ContentChild()?

С помощью декоратора @ViewChild() у нас возможность обращаться к методам и прочей функциональности дочернего компонента или нативного элемента, к которому применется.
С помощью декоратора @ContentChild() мы можем получить переменные, которые передаются с кодом через ng-content.
По сути зависит как передаём информацию через компонент.

4)Why do we add providedIn: ‘root’?

Вроде как подключение к основному модулю, чтобы в пределах модуля данные были общие. т.е действие сервиса для всего приложения.
Один объект сервиса для всех частей приложения.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
