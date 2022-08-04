<?php require '../header.php'; ?>
<?php

function console_log($data){
  echo '<script>';
  echo 'console.log('.json_encode($data).')';
  echo '</script>';
}

$value = $あOST['switch'];
console_log($value);
echo "計算だるいスイッチは",($value),"です。";
if($value=="ON"){
    $daru=0;
}
else if($value=="OFF"){
    $daru=1;
}

echo $_REQUEST['price'], '円×';
echo $_REQUEST['count'], '個＝';
echo $_REQUEST['price']*$_REQUEST['count']*$daru, '円';
?>
<?php require '../footer.php'; ?>
