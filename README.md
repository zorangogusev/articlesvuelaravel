SPA app for creating, editing, deleting, displaying articles, with registration and login for users

Used Technologies <br/>
Docker (PHP7.3, Maria-DB10.1), <br/>
Laravel8.0, <br/>
Vue.js(Vuex, Passport, BootstrapVue, VeeVaildate, AnimateCss, cxlt-vue2-toastr) <br/>

Live demo on Heroku http://app-articlesvuelaravel.herokuapp.com/ <br/>

register, login and can add/edit/delete articles, and display them in home page <br/>

================================================================================

Instalation

sudo composer install <br/>
sudo php artisan key:generate <br/>

to connect to database add/replace in .env file <br/>
    DB_CONNECTION=mysql <br/>
    DB_HOST=articlesvuelaravel-mariadb-10.1 <br/>
    DB_PORT=3306 <br/>
    DB_DATABASE=articlesvuelaravel <br/>
    DB_USERNAME=zoran <br/>
    DB_PASSWORD=zoran   <br/>



check/update/modify in docker/dev/docker-compose.yml file, volumes on line 12 and line 26 <br/>
check/update/modify .docker/dev/articlesvuelaravel.conf file <br/>

change owner and permissions on storage folder <br/>
    sudo chmod -R 777 storage <br/>
    sudo chown -R www-data:www-data storage <br/>

run docker in .docker/dev/ folder <br/>
    sudo docker-compose up -d --build <br/>

add in /etc/hosts file <ipaddres> articlesvuelaravel.deb.test <br/>
if is used vbox in the browser on articlesvuelaravel.deb.test:8080/ <br/>
or articlesvuelaravel.deb.test <br/>

to execute migrations and seeds enter in the docker bash in /var/www/html/articlesvuelaravel folder <br/>
    sudo docker exec -it articlesvuelaravel bash <br/>
    cd /var/www/html/articlesvuelaravel/ <br/>
    php artisan migrate <br/>
    php artisan db:seed <br/>


to install passport use <br/>
    php artisan passport:install <br/>
    -get the Client Secret from grant client-Client ID:2 and with it set in .env file the PASSPORT_CLIENT_SECRET <br/>
     and PASSPORT_CLIENT=2 <br/>

in .env file(user own credentials) <br/>
    PASSPORT_LOGIN_ENDPOINT=http://articlesvuelaravel.deb.test:8080/oauth/token <br/>
    PASSPORT_CLIENT_UP=2 <br/>
    PASSPORT_CLIENT_SECRET=kHC0vEGoEQLfZsIHgm4riYi3pxbRuEDikJ9PqE5F <br/>
