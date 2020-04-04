FROM annralf/php-lumen:v1.2
WORKDIR /var/www/html/
RUN mkdir /var/www/html/public
RUN cd /var/www/html/public
#CMD [ "php", "-S 0.0.0.0:8000", "public/index.php" ]
CMD [ "bash" ]