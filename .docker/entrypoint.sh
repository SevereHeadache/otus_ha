#!/bin/sh

/var/www/html/vendor/bin/phpmig migrate && php-fpm
