СОЗДАНИЕ ИНДЕКСА
===
```
CREATE INDEX first_name_second_name ON users USING GIN(first_name gin_trgm_ops, second_name gin_trgm_ops);
```
***Индекс GIN был выбран как наиболее подходяший, т.к. поик проводиться по частям двух полей***

EXPLAIN ЗАПРОСА
===
```
EXPLAIN SELECT * FROM users WHERE first_name LIKE 'Дм%' AND second_name LIKE 'Па%' ORDER BY id;
                                                QUERY PLAN                                                
----------------------------------------------------------------------------------------------------------
 Sort  (cost=182.11..182.19 rows=31 width=146)
   Sort Key: id
   ->  Bitmap Heap Scan on users  (cost=60.32..181.34 rows=31 width=146)
         Recheck Cond: (((first_name)::text ~~ 'Дм%'::text) AND ((second_name)::text ~~ 'Па%'::text))
         ->  Bitmap Index Scan on first_name_second_name  (cost=0.00..60.31 rows=31 width=0)
               Index Cond: (((first_name)::text ~~ 'Дм%'::text) AND ((second_name)::text ~~ 'Па%'::text))
(6 rows)

```

ГРАФИКИ ДО ИНДЕКСА
===

![latency-1](./images/without-indexes/latency-1.png 'latency-1')
![latency-10](./images/without-indexes/latency-10.png 'latency-10')
![latency-100](./images/without-indexes/latency-100.png 'latency-100')
![latency-1000](./images/without-indexes/latency-1000.png 'latency-1000')
![throughput-1](./images/without-indexes/throughput-1.png 'throughput-1')
![throughput-10](./images/without-indexes/throughput-10.png 'throughput-10')
![throughput-100](./images/without-indexes/throughput-100.png 'throughput-100')
![throughput-1000](./images/without-indexes/throughput-1000.png 'throughput-1000')


ГРАФИКИ ПОСЛЕ ИНДЕКСА
===

![latency-1](./images/with-indexes/latency-1.png 'latency-1')
![latency-10](./images/with-indexes/latency-10.png 'latency-10')
![latency-100](./images/with-indexes/latency-100.png 'latency-100')
![latency-1000](./images/with-indexes/latency-1000.png 'latency-1000')
![throughput-1](./images/with-indexes/throughput-1.png 'throughput-1')
![throughput-10](./images/with-indexes/throughput-10.png 'throughput-10')
![throughput-100](./images/with-indexes/throughput-100.png 'throughput-100')
![throughput-1000](./images/with-indexes/throughput-1000.png 'throughput-1000')