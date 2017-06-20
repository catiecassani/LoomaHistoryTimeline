<!--
Author: Ellie Kunwar, Jayden Kunwar
Filename: looma-history.php
Date: July 2016
Description: Creates a timeline with search and hover functions. Information accessed through database.
-->

  <?php $page_title = 'Looma - History Timeline';
	  include ("includes/header.php");
	  include ("includes/mongo-connect.php");
  ?>
    <link href='css/looma-history.css' rel='stylesheet' type='text/css'>

    <title>Looma History Timeline</title>
</head>

<body>
    <div id="main-container-vertical">
      <label for="keywords">Search:</label><input id="keywords" class="searchBar" size="18" placeholder="enter words to search">

      <button class="scrollButtonLeft">   <img src="images/back-arrow.png">        </button>
      <button class="scrollButtonRight"> <img src="images/forward-arrow.png">      </button>
      <button class="returnToLeftmost">      <img src="images/reverse-double-arrow.png"> </button><br>

      <?php

        //Load Timeline
        if (isset($_REQUEST["title"]) || (isset($_REQUEST["chapterToLoad"]))) {
        if (isset($_REQUEST["title"])) $hist = $_REQUEST["title"];
        if (isset($_REQUEST["chapterToLoad"])) $ch_id = $_REQUEST["chapterToLoad"];
        //Search Database and Get Cursor
        if (isset($hist)) $query = array("title" => $hist);
        else       $query = array("ch_id" => $ch_id);
              
        $cursor =  $history_collection->find($query, array("title"=>1, "events"=>1)); //should be findOne()  ??

        foreach ($cursor as $doc) {

          $title = array_key_exists('title', $doc) ? $doc['title'] : null;
          echo "<h1> History: $title </h1>";

echo '<div id="playground">';
    echo '<section class ="timeline">';
       echo '<ol>';

          foreach($doc['events'] as $event) {

                 echo '
                 <li>
                   <div class="timeline-description">
                     <div class="dropdown" style="float:">'; // edited out
                 echo '<button class="dropbtn">' . $event['title'] . '</button>';
                 echo '<button class="dropdate">' . $event['date'] . '</button>';
                 echo '<div class="dropdown-content">';
                   echo $event['hover'];
                 echo '</div>
                     </div>
                 </li>';

          }  //end foreach doc[elements] as event
          echo '</ol>';
        } //end foreach cursor as doc
        } //end if isset()
        else
        {echo 'no history found';}
      ?>

 
</div>
</div>

    <?php include ('includes/toolbar.php'); ?>
    <?php include ('includes/js-includes.php'); ?>

    <script type="text/javascript" src="js/hilitor-utf8.js"></script>
    <script type="text/javascript" src="js/looma-history.js"></script>

</body>
</html>