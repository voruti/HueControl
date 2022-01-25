# HueControl

Control Philips Hue lights with a web app. \
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Configuration

Configuration values go into `src/assets/config.json` (use `_config.json` as template).

1. `bridgeIp`: The IP of your Philips Hue Bridge.
2. `applicationKey`: The application key (previously username) to authorize on the Hue Bridge.

A CORS proxy is currently needed to access the Hue v2 API. An example Nginx configuration can be found at `nginx/_nginx.conf`. See also [next paragraph](#docker):

### Docker

Before starting the Docker container (`docker-compose up`), the IP of your bridge must be entered in the `nginx/nginx.conf` (use `_nginx.conf` as template). The Nginx configuration will be included as a bind mount during runtime.

## Development server

A CORS proxy is currently needed to access the Hue v2 API: Add your bridge's IP in `src/proxy.conf.js` (use `_proxy.conf.js` as template).

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
