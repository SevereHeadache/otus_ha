# HAProxy

### Настроена репликация posgres'а:
* **otus_ha-db-1** - мастер
* **otus_ha-db_slave-1** - первый слейв
* **otus_ha-db_slave-2** - второй слейв
* Настроена синхронная репликация
* В _.env_ включена репликация
```
DB_REPLICATION_ENABLED=true
```
### Настроен HAProxy:
* Поднят контейнер с HAProxy **otus_ha-haproxy**
```shell
docker run -dit -v $PWD/haproxy.cfg:/usr/local/etc/haproxy/haproxy.cfg --restart=unless-stopped --network=otus_ha_internal --name=otus_ha-haproxy haproxy
```
[Конфигурация HAProxy](haproxy.cfg)
* В _.env_ cоединение с бд проходит через HAProxy
```
DB_HOST_SLAVE=otus_ha-haproxy
```

### Нагрузка
1. Обеспечиваем постоянную нагрузку. [Скрипт](testDb.sh) отправляет запрос каждую секунду. HAProxy распределяет нагрузку методом round-robin
2. Останавливаем один из слейвов (**otus_ha-db_slave-1**)
3. Вся нагрузка идет только на второй слейв (**otus_ha-db_slave-2**)
[Логи](haproxy.log)

# Nginx
### Конфигурация

* Поднято два бэкенда приложения **otus_ha-web-1** и **otus_ha-web-2**
<!--
docker run -dit -v .:/var/www/html -v ./.docker/conf/nginx/default.conf:/etc/nginx/conf.d/default.conf --restart=unless-stopped --network=otus_ha_internal --name=otus_ha-web-2 -p 8898:80 nginx
-->
* И Nginx балансер **otus_ha-web-balancer**
```shell
docker run -dit -v ./nginx.conf:/etc/nginx/conf.d/default.conf --restart=unless-stopped --network=otus_ha_internal --name=otus_ha-web-balancer -p 8808:80 nginx
```
[Конфигурация балансера](nginx.conf)

### Нагрузка
1. Обеспечиваем постоянную нагрузку ([скрипт](testDb.sh))
2. Останавливаем один из бэкендов приложения (**otus_ha-web-1**)
3. Вся нагрузка идет только на второй бэкенд (**otus_ha-web-2**)
[Логи](nginx.log)
