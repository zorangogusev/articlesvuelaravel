Used Technologies
Docker (PHP7.3, Maria-DB10.1)


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

can connect to mariadb on port 4306
            - MYSQL_ROOT_PASSWORD=zoran   
            - MYSQL_DATABASE=articlesvuelaravel
            - MYSQL_USER=zoran            
            - MYSQL_PASSWORD=zoran        
            - MYSQL_ROOT_HOST=0.0.0.0     
