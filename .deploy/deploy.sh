cd /root/social-network
npm run build:prod

rm -rf /root/../var/www/social-network/html
mv /root/social-network/build ~/../var/www/social-network/html
pm2 restart 0