<?php


$i = 0;

while($i <= (1000000 - 1000)){
    $id = ($i).'-'.($i+1000);
    shell_exec('php ./makedump.php '.($i).' '.($i+1000).' > '.$id.'.log 2>&1 &');
    $i+= 1000;
    if ($i % 20000 ===0) {
        echo "Sleep 120 sec;".PHP_EOL;
        sleep(120);
    }
}

// while($i <= (1000000 - 1000)){
    // $id = ($i).'-'.($i+1000);
    // $content = file_get_contents($id.'.sql');
    // unlink($id.'.sql');
    // unlink($id.'.log');
    // file_put_contents('users.sql', $content, FILE_APPEND);
    // $i+= 1000;
// }
// 