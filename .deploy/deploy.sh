cd ..
npm run build:prod

rm -rf /root/../var/www/social-network/html
mv /root/.delpoy/build ~/../var/www/social-network/html