<?php require '../header.php'; ?>
<form action="price-output.php" method="post">
単価 <input type="text" name="price"> 円
×
個数 <input type="text" name="count"> 個
<br>計算だるいなスイッチ</br>
<input type="radio" name="switch" value="ON">ON
<input type="radio" name="switch" value="OFF">OFF
<input type="submit" value="計算">
</form>
<?php require '../footer.php'; ?>
