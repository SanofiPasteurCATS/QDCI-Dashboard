# Setup & Configuration
This project is configured to interface with a MySQL database. You can find information on how to setup a MySQL database server [here](https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing). 

It is recommended that you instead install the XAMPP web server stack offered [here](https://www.apachefriends.org/index.html) and launch the Apache and MySQL modules. This will automatically setup a MySQL server and provide you with a backend administration tool right out the box by navigating to the url "localhost/phpmyadmin". The database configuration such as username, password, and database name can be modified in the settings.py file. In fact, all global Django and app settings can be found in this file.

To build the project in development mode execute the following command in the root directory 
```bash
npm run dev
```
This will prompt webpack to build the source files. In development mode webapack will also watch the "src" directory and rebuild when changes are detected.
To startup the server exceute the following command in a seperate root directory command prompt
```bash
python manage.py runserver
```
If there are new database migrations that need to be applied you must run the following commands
```bash
python manage.py makemigrations
python manage.py migrate
```
