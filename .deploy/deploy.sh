cd ~/social-network
npm run build:prod

rm -rf ~/../var/www/social-network/html
mv ~/social-network/build ~/../var/www/social-network/html