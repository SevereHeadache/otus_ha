# OTUS Highload Architect
OTUS Highload Architect

## Run project in docker

```
docker-compose up -d
```

### Run tests in docker

```
./vendor/bin/codecept run
```

## Use project with Postman

1. exec command `php ./.postman/create_postman_user.php`
2. open postman and import collection `.postman/otus_ha.postman_collection.json`
