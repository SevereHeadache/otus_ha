<?php

require __DIR__.'/bootstrap.php';

$from = (int)$argv[1];
$to =   (int)$argv[2];
$fileName = $argv[1].'-'.$argv[2];

$rowIndex = $from;
$result = [];
$csv = explode(PHP_EOL, file_get_contents(__DIR__.'/database/dumps/people.csv'));
$csvArr = uniqid();
$$csvArr = array_slice($csv, $from, $to-$from);
unset($csv);
// var_dump($$csvArr);
foreach($$csvArr as $data) {
    $data = explode(',', $data);
    if ($rowIndex == $from) {
        $result[] = 'INSERT INTO users (password,first_name,second_name,age,birthdate,biography,city) values '.PHP_EOL;
    }
    echo "$rowIndex\n";
        $rowIndex++;
        $values = [];
        $nameAndLastname = explode(' ', $data[0]);
        $values[] = "'".password_hash('Pa$$w0rd', PASSWORD_BCRYPT)."'";
        $values[] = "'".$nameAndLastname[0]."'";
        $values[] = "'".$nameAndLastname[1]."'";
        $values[] = $data[1];
        $values[] = "'".Carbon\Carbon::now()->addYears($data[1])->__toString()."'";
        $values[] = "'some text'";
        $values[] = "'".$data[2]."'";
        $valuesSeparator = ',';
        if ($rowIndex == $to) {
            $valuesSeparator = ';';
        }
        $result[]= '('.implode(',', $values).')'.$valuesSeparator.PHP_EOL;
}
unset($$csvArr);
file_put_contents($fileName.'.sql', implode('', $result));