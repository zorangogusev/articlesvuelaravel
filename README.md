SPA app for creating, editing, deleting, displaying articles, with registration and login for users

Used Technologies <br/>
Docker (PHP7.3, Maria-DB10.1), <br/>
Laravel8.0, <br/>
Vue.js(Vuex, Passport, BootstrapVue, VeeVaildate, AnimateCss, cxlt-vue2-toastr) <br/>

Live demo on Heroku http://app-articlesvuelaravel.herokuapp.com/ <br/>

register, login and can add/edit/delete articles, and display them in home page <br/>

================================================================================

Instalation

    sudo composer install
    sudo php artisan key:generate

to connect to database add/replace in .env file
   
    DB_CONNECTION=mysql
    DB_HOST=articlesvuelaravel-mariadb-10.1
    DB_PORT=3306
    DB_DATABASE=articlesvuelaravel
    DB_USERNAME=zoran
    DB_PASSWORD=zoran



check/update/modify in docker/dev/docker-compose.yml file, volumes on line 12 and line 26
check/update/modify .docker/dev/articlesvuelaravel.conf file

change owner and permissions on storage folder
   
    sudo chmod -R 777 storage
    sudo chown -R www-data:www-data storage

run docker in .docker/dev/ folder
    
sudo docker-compose up -d --build

add in /etc/hosts file <ipaddres> articlesvuelaravel.test
id the browser type articlesvuelaravel.test

to execute migrations and seeds enter in the docker bash in /var/www/html/articlesvuelaravel folder
    
sudo docker exec -it articlesvuelaravel bash
    
    cd /var/www/html/articlesvuelaravel/
    php artisan migrate
    php artisan db:seed


to install passport use
    
    php artisan passport:install
    -get the Client Secret from grant client-Client ID:2 and with it set in .env file the PASSPORT_CLIENT_SECRET
     and PASSPORT_CLIENT=2


in .env file(user own credentials)
    
    PASSPORT_LOGIN_ENDPOINT=http://articlesvuelaravel.test/oauth/token
    PASSPORT_CLIENT_UP=2
    PASSPORT_CLIENT_SECRET=1HjAdY6PoWVCXdAUM8Z8LtANVjVSgeWomwYIBC9L
