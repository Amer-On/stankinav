#!/bin/bash
# update apt
yes | sudo apt update && sudo apt upgrade
sudo apt -y install software-properties-common -y

# UPDATE LOCALE TO UTF-8
sudo apt-get install -y locales
yes | sudo locale-gen en_US.UTF-8
echo export LC_ALL=en_US.UTF-8 >> ~/.bashrc
echo export LANG=en_US.UTF-8 >> ~/.bashrc

# install node and npm
sudo apt -y install curl
yes | curl -sL https://deb.nodesource.com/setup_18.x | sudo bash -
sudo apt -y install nodejs
sudo apt -y install npm
yes | npm install -g npm@latest


# install nginx
sudo apt -y install nginx
yes | sudo systemctl start nginx
sudo systemctl enable nginx

# install certbot
sudo apt -y install snapd
yes | sudo snap install core
yes | sudo snap refresh core
yes | sudo snap install --classic certbot

# run ~/.bashrc to apply aliases
exec bash
source ~/.bashrc
exec zsh