<?php


$i = 0;

// while($i <= (10000 - 500)){
//     $id = ($i).'-'.($i+500);
//     shell_exec('XDEBUG_MODE=off php ./makepostdump.php '.($i).' '.($i+500).' > '.$id.'.log 2>&1 &');
//     $i+= 500;
//     if ($i % 4000 ===0) {
//         echo "Sleep 120 sec;".PHP_EOL;
//         sleep(120);
//     }
// }

while($i <= (10000 - 500)){
    $id = ($i).'-'.($i+500);
    if (!is_file($id.'.sql')) {
        continue;
    }
    $content = file_get_contents($id.'.sql');
    unlink($id.'.sql');
    unlink($id.'.log');
    file_put_contents('posts.sql', $content, FILE_APPEND);
    $i+= 500;
}
