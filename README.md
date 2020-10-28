Used Technologies
Docker (PHP7.3, Maria-DB10.1), Laravel8.0


================================================================================

sudo composer install
sudo php artisan key:generate

to connect to database add/replace in .env file
    DB_CONNECTION=mysql
    DB_HOST=articlesvuelaravel-mariadb-10.1
    DB_PORT=3306
    DB_DATABASE=articlesvuelaravel
    DB_USERNAME=zoran
    DB_PASSWORD=zoran   


in .docker/dev/ folder 
check-update-modify volumes on line 12 and line 26

change owner and permissions on storage folder
    sudo chmod -R 777 storage
    sudo chown -R www-data:www-data storage 

run docker in .docker/dev/ folder 
    sudo docker-compose up -d --build

add in /etc/hosts file <ipaddres> articlesvuelaravel.deb.test
if is used vbox in the browser on articlesvuelaravel.deb.test:8080/
or articlesvuelaravel.deb.test

to execute migrations and seeds enter in the docker bash in /var/www/html/articlesvuelaravel folder
    sudo docker exec -it articlesvuelaravel bash
    cd /var/www/html/articlesvuelaravel/
    php artisan migrate
    php artisan db:seed
