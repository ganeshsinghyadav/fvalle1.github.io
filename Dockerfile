# Use an official Python runtime as a parent image
FROM php:7.1-apache

MAINTAINER Filippo Valle filippo_valle@protonmail.com

RUN mkdir /var/www/html/project
RUN mkdir /var/www/html/project/web

RUN sed -i 's/DocumentRoot \/var\/www\/html/DocumentRoot \/var\/www\/html\/project\/web/g' /etc/apache2/apache2.conf

RUN echo "" >> /etc/apache2/apache2.conf
RUN echo "<Directory /var/www/html/project/>" >> /etc/apache2/apache2.conf
RUN echo "  Options FollowSymLinks" >> /etc/apache2/apache2.conf
RUN echo "  AllowOverride All" >> /etc/apache2/apache2.conf
RUN echo "  Order allow,deny" >> /etc/apache2/apache2.conf
RUN echo "  Allow from all" >> /etc/apache2/apache2.conf
#RUN echo " ServerName localhost" >> /etc/apache2/apache2.conf
RUN echo "</Directory>" >> /etc/apache2/apache2.conf
RUN echo "" >> /etc/apache2/apache2.conf

# APC
RUN pear config-set php_ini /usr/local/etc/php/php.ini
RUN pecl config-set php_ini /usr/local/etc/php/php.ini

RUN a2enmod rewrite

RUN usermod -u 1000 www-data

# Make port 80 available to the world outside this container
EXPOSE 80
