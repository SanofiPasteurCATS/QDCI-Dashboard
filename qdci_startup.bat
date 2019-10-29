cd ../
cd enviroment/Scripts
activate.bat
cd ../../qdci_project
python manage.py migrate
python manage.py runserver
pause