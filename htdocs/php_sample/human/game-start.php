<?php require '../header.php'; ?>
<?php
function console_log($data){
  echo '<script>';
  echo 'console.log('.json_encode($data).')';
  echo '</script>';
}

echo "ゲームを開始します。";
// for ($i = 1; $i <= 10; $i++)
for ($s = 1; $s <= 3; $s++){
    print($s.$s);
    // header("Refresh:1");
}
?>
<div class="num3">
    3秒前
</div>
<div class="num">
    2秒前
</div>      
<div class="num">
    1秒前
</div>  
<?php require '../footer.php'; ?>