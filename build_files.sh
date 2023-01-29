mv /usr/bin/sqlite3 /usr/bin/sqlite3_3.7.9
ln -s /usr/local/bin/sqlite3 /usr/bin/sqlite3
pip install -r requirements.txt
python3.9 manage.py collectstatic
