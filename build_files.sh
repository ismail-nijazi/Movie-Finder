# build_files.sh
cd ~ && wget https://www.sqlite.org/2019/sqlite-autoconf-3280000.tar.gz
tar zxvf sqlite-autoconf-3280000.tar.gz
cd sqlite-autoconf-3280000
make
sudo make install
pip install -r requirements.txt
