<?php
// 返回内容
header('Access-Control-Allow-Origin: *');
echo file_get_contents('data.json');
?>