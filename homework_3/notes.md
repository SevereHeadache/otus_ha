НАСТРОЙКА АСИНХРОННОЙ РЕПЛИКАЦИИ
===
- Запускаем контейнер мастера (_otus\_ha-db-1_) и настраиваем конфиг **postgresql.conf**
```
[postgresql.conf]
ssl = off
wal_level = replica
```
- На мастере создаем пользователя для репликации
- Добавляем клиент в **pg_hba.conf**

- Создаем бэкап и копируем его локально
- Создаем standby.signal и настраиваем конфиг
```
[postgresql.conf]
primary_conninfo = 'host=otus_ha-db-1 port=5432 user=replicator password=pass application_name=slave1'
```
- Из бэкапа поднимаем контейнер с репликой (_otus\_ha-db-2_)
![replication-state-1](./images/replication-state-1.png 'replication-state-1')

НАГРУЗОЧНЫЙ ТЕСТ
===
Запросы _/user/get/{id}_ и _/user/search_ были перенесены на чтение со слейва.
Нагрузка на контейнеры бд до репликации:
![before-replication](./images/before-replication.png 'before-replication')
Нагрузка после репликации:
![after-replication](./images/after-replication.png 'after-replication')
Нагрузочный тест показал, что нагрузка перешла на слейв.

СИНХРОННАЯ РЕПЛИКАЦИЯ
===
- Из бекапа поднимаем второго слейва и настраиваем конфиг
- Настраиваем конфиг мастера для синхронной репликации
```
[postgresql.conf]
synchronous_commit = on
synchronous_standby_names = 'FIRST 2(slave1, slave2)'
```
![replication-state-2](./images/replication-state-2.png 'replication-state-2')

ЭКСПЕРИМЕНТ
===
- Создаем тестовую таблицу
```
create table test(id serial primary key not null, col null);
```
- Создаем нагрузку на запись (скрипт _./test.php_)
- Убиваем мастера
![row-count](./images/row-count.png 'row-count')
- Промоутим реплику
```
select * from pg_promote();

[postgresql.conf]
synchronous_commit = on
synchronous_standby_names = 'ANY 1 (slave2)'
```
- Подключаем вторую реплику к новому мастеру
```
[postgresql.conf]
primary_conninfo = 'host=otus_ha-db-2 port=5432 user=replicator password=pass application_name=slave2'
```
![replication-state-3](./images/replication-state-3.png 'replication-state-3')
- Проверяем есть ли потери транзакций
![test-result](./images/test-result.png 'test-result')
