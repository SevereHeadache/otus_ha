# OTUS Highload Architect
OTUS Highload Architect

## Run project as php dev server

```
php -S localhost:8888 -t public
```

## Run project in composer

```
docker-compose up -d
```

## Use project with Postman

1. exec command `php ./.postman/create_postman_user.php`
2. open postman and import collection `.postman/otus_ha.postman_collection.json`
