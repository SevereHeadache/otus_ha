<?php
require __DIR__.'/bootstrap.php';

if (is_file('user_ids')) {
    $user_ids = unserialize(file_get_contents('user_ids'));
} else {
    // $db_config = require PROJECT_PATH.'/config/database.php';
    // $connection = new PDO(sprintf(
    //     'pgsql:dbname=%s;host=%s;password=%s;',
    //     $db_config['dbname'],
    //     $db_config['host'],
    //     $db_config['password']
    // ), $db_config['usermane'], $db_config['password']);
    // $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // $query = "SELECT id FROM `users`";
    // $request = $connection->prepare($query);
    // $request->execute();
    // $user_ids = $request->fetchColumn();
    $users = file_get_contents('user.csv');
    $users = str_replace('"', '', $users);
    $user_ids = array_filter(explode(PHP_EOL, $users));
    file_put_contents('user_ids', serialize($user_ids));
}

// var_dump($user_ids);

$faker = Faker\Factory::create();


$from = (int)$argv[1];
$to =   (int)$argv[2];
$fileName = $argv[1].'-'.$argv[2];

$rowIndex = $from;
$result = [];
$csv = explode(PHP_EOL, file_get_contents(__DIR__.'/database/dumps/posts.txt'));
// var_dump($csv);
$csvArr = uniqid();
$$csvArr = array_slice($csv, $from, $to-$from);
unset($csv);
// var_dump($$csvArr);
foreach($$csvArr as $text) {
    // $data = explode(',', $data);
    if ($rowIndex == $from) {
        $result[] = 'INSERT INTO posts (text,author_user_id) values '.PHP_EOL;
    }
    echo "$rowIndex\n";
        $rowIndex++;
        $values = [];
        $values[] = "'".$text."'";
        $values[] = "'".$faker->randomElement($user_ids)."'";
        $valuesSeparator = ',';
        if ($rowIndex == $to) {
            $valuesSeparator = ';';
        }
        $result[]= '('.implode(',', $values).')'.$valuesSeparator.PHP_EOL;
}
unset($$csvArr);
if (!empty($result)) {
    file_put_contents($fileName.'.sql', implode('', $result));
}
