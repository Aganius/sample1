  <?php
  $selectedRB = $_POST['selectedRB'];
  $selectedCBs = json_decode($_POST['jsonObject'], true);
  $strResponse = '<li>'.'Nothing to do'.'</li>';
  $objXML = simplexml_load_file('sample2.xml');
  echo "<br>";

  foreach($objXML->MediaItem as $MediaItem) {
    if ($MediaItem->children()->radiobutton == $selectedRB) {
      $MediaItem->children()->value = "true";
    } else if ($MediaItem->children()->getName() === "radiobutton") {
      $MediaItem->children()->value = "false";

    } 
    foreach ($selectedCBs as $selectedCB) {

      if ($MediaItem->children() == $selectedCB) {
        $MediaItem->children()->value = "true";
      }else if ($MediaItem->children()->getName() === "checkbox" && !in_array($MediaItem->children(), $selectedCBs)) {
        echo in_array($MediaItem->children()->checkbox, $selectedCBs) . "<br>";
        $MediaItem->children()->value = "false";

      } 
    }
  }
  $objXML->saveXML('sample2.xml');
  ?>