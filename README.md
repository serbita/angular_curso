# Guia
descargar npm
mkdir angular_curso
cd angular_curso/

sudo npm install -g yo
sudo npm install -g bower
sudo npm install -g grunt-cli
sudo npm install -g generator-angular

//instalar angular-ui-router
bower install angular-ui-router

yo angular <nombre-de-la-app-que-queremos-usar>, ejemplo: yo angular angular_curso
Would you like to use Gulp (experimental) instead of Grunt? NO
Would you like to use Sass (with Compass)? NO
Todo lo demas Yes

//levantar la app
grunt serve

# angular_curso
Pruebas usando angular
This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

