<?php

header("Access-Control-Allow-Origin: *");

$endpoint = "https://pl014419.prizelogic.com/api";
$type = htmlspecialchars($_GET["type"]);

$curl = curl_init();

if ($type === 'getGallery') {
  curl_setopt_array($curl, array(
    CURLOPT_URL => $endpoint . "/ugc/gallery",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS =>"{\n  \"Page\": 1,\n  \"PageSize\": 1000\n}",
    CURLOPT_HTTPHEADER => array(
      "Content-Type: application/json",
       "Cache-Control: no-store"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
}

?>
