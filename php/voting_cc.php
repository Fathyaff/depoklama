<?php

try {
    $connection = new PDO($dsn, $username, $password, $options);
    $sql = "SELECT * FROM voting_cc";
    $statement = $connection->prepare($sql);
    $statement->execute();
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);
    foreach($result as $row) {
        $row['penjajah'];
     }
} catch(PDOException $error) {
    echo $sql . "<br>" . $error->getMessage();
}

if (isset($_POST['penjajah_x']) || isset($_POST['penjajah_y']) ) {

    try  {
      $connection = new PDO($dsn, $username, $password, $options);
    //   $sql = "SELECT * FROM voting_cc";
    //   $statement = $connection->prepare($sql);
    //   $statement->execute();
    //   $result = $statement->fetch(PDO::FETCH_ASSOC);

      $new_voting_cc = array(
        "id" => 1,
        "penjajah"  => $row['penjajah']+1,
        "orang_suci"     => $row['orang_suci']+0,
        "pebisnis"     => $row['pebisnis']+0,
        );
      $sql = "UPDATE voting_cc
              SET
                penjajah = :penjajah,
                orang_suci = :orang_suci,
                pebisnis = :pebisnis
              WHERE id = :id";

      $statement = $connection->prepare($sql);
      $statement->execute($new_voting_cc);
    } catch(PDOException $error) {
        echo $sql . "ERORTAYO<br>" . $error->getMessage();
    }
  }


  if (isset($_POST['orangsuci_x']) || isset($_POST['orangsuci_y']) ) {

    try  {
      $connection = new PDO($dsn, $username, $password, $options);

    //   $sql = "SELECT * FROM voting_cc";
    //   $statement = $connection->prepare($sql);
    //   $statement->execute();
    //   $result = $statement->fetch(PDO::FETCH_ASSOC);

      $new_voting_cc = array(
        "id" => 1,
        "penjajah"  => $row['penjajah']+0,
        "orang_suci"     => $row['orang_suci']+1,
        "pebisnis"     => $row['pebisnis']+0,
        );
      $sql = "UPDATE voting_cc
              SET
                penjajah = :penjajah,
                orang_suci = :orang_suci,
                pebisnis = :pebisnis
              WHERE id = :id";

      $statement = $connection->prepare($sql);
      $statement->execute($new_voting_cc);
    } catch(PDOException $error) {
        echo $sql . "ERORTAYO<br>" . $error->getMessage();
    }
  }

  if (isset($_POST['pebisnis_x']) || isset($_POST['pebisnis_y']) ) {

    try  {
      $connection = new PDO($dsn, $username, $password, $options);

    //   $sql = "SELECT * FROM voting_cc";
    //   $statement = $connection->prepare($sql);
    //   $statement->execute();
    //   $result = $statement->fetch(PDO::FETCH_ASSOC);

      $new_voting_cc = array(
        "id" => 1,
        "penjajah"  => $row['penjajah']+0,
        "orang_suci"     => $row['orang_suci']+0,
        "pebisnis"     => $row['pebisnis']+1,
        );
      $sql = "UPDATE voting_cc
              SET
                penjajah = :penjajah,
                orang_suci = :orang_suci,
                pebisnis = :pebisnis
              WHERE id = :id";

      $statement = $connection->prepare($sql);
      $statement->execute($new_voting_cc);
    } catch(PDOException $error) {
        echo $sql . "ERORTAYO<br>" . $error->getMessage();
    }
  }


?>

<!-- What We Do -->
<section id="voting-cc" class="default-section">
    <div class="container-voting-cc">
        <div class="row">
            <div class="col align-self-center">
                <div class="title-voting-cc">
                    <h1 class="title-voting-cc">Cornelis Chastelein<br> Penjajah, Orang Suci, atau Pebisnis?</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col align-self-center">
                <div class="subtitle-voting-cc">
                    <p style="text-align:center">Berdasarkan kisah ini diketahui bahwa Cornelis Chastelein berbeda dengan tuan tanah lainnya pada masa itu yang hanya
                        memanfaatkan tanah dan budaknya untuk kepentingan pribadi. Chastelein membangun Depok untuk dijadikan percontohan
                        koloni yang penduduknya dapat hidup dengan mandiri. Bagi keturunan budak-budaknya, Chastelein merupakan orang suci
                        yang memberikan penerangan bagi para budaknya. Akan tetapi, di sisi lain, ia adalah seorang petinggi VOC yang juga turut
                        berandil dalam menguras kekayaan Indonesia. Bahkan beberapa pendapat menganggap bahwa ia hanya memakmurkan budaknya
                        demi kelancaran bisnisnya sebagai tuan tanah.
                    </p>
                    <p><strong style="color:#FFD600;">Bagaimana menurutmu?</strong></p>
                    <p><strong style="color:#FFD600;">Apakah Chastelein seorang penjajah, orang suci, atau sekadar pebisnis yang
                        menjalankan usahanya?</strong></p>
                </div>
            </div>
        </div>
        <div class="col-md-8" style="margin-left:17%;">
          <br><br><br><br>
          <img id="pembatas" src="img/asets/batas_website_depok.png" alt="" width="100%" class=" img-responsive"/>
          <br><br><br><br>
        </div>
        <div class="row voting-cc-row">
        <div class="row">
            <div class="col align-self-center">
                <div class="title-button-voting-cc">
                    <h1 class="title-button-voting-cc-text">Cornelis Chastelein<br> Penjajah, Orang Suci, atau Pebisnis?</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col align-self-center">
                <div class="button-voting-cc">
                    <iframe name="votar" style="display:none;"></iframe>
                        <form method="post" class="form-horizontal" target="votar">

                        <div class="col-6 col-md-4">
                            <p></p>
                            <h4 id="angka-penjajah" class="angka-voting-penjajah-orangsuci-pebisnis"><?php echo $row['penjajah'];?></h4>
                            <div id="hasil-voting-penjajah" class="hasil-voting-penjajah-orangsuci-pebisnis"></div>
                            <input type="image" name="penjajah" id="voting-button-penjajah" class="voting-button" src="img/asets/voting/circle.png" onmouseover="onHoverPenjajah();" onmouseout="offHoverPenjajah();" onclick="animateAfterClickCC('penjajah');">
                            <h4 class="text-voting-button"> PENJAJAH </h4>
                        </div>
                        <div class="col-6 col-md-4">
                            <p></p>
                            <h4 id="angka-orangsuci" class="angka-voting-penjajah-orangsuci-pebisnis"><?php echo $row['orang_suci'];?></h4>
                            <div id="hasil-voting-orangsuci" class="hasil-voting-penjajah-orangsuci-pebisnis"></div>
                            <input type="image" name="orangsuci" id="voting-button-orang-suci" class="voting-button" src="img/asets/voting/circle.png" onmouseover="onHoverOrangSuci();" onmouseout="offHoverOrangSuci();" onclick="animateAfterClickCC('orangsuci');">
                            <h4 class="text-voting-button"> ORANG SUCI </h4>
                        </div>
                        <div class="col-6 col-md-4">
                            <p></p>
                            <h4 id="angka-pebisnis" class="angka-voting-penjajah-orangsuci-pebisnis"><?php echo $row['pebisnis'];?></h4>
                            <div id="hasil-voting-pebisnis" class="hasil-voting-penjajah-orangsuci-pebisnis"></div>
                            <input type="image" name="pebisnis" id="voting-button-pebisnis" class="voting-button" src="img/asets/voting/circle.png" onmouseover="onHoverPebisnis();" onmouseout="offHoverPebisnis();" onclick="animateAfterClickCC('pebisnis');">
                            <h4 class="text-voting-button"> PEBISNIS </h4>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
        <script src="js/voting-cc.js"></script>

