<?php
try {
    $connection = new PDO($dsn, $username, $password, $options);
    $sql = "SELECT * FROM voting_nica_tkr";
    $statement = $connection->prepare($sql);
    $statement->execute();
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);
    foreach($result as $rowz) {
        $rowz['nica'];
        $rowz['tkr'];
     }
} catch(PDOException $error) {
    echo $sql . "erur<br>" . $error->getMessage();
}

if (isset($_POST['nica_x']) || isset($_POST['nica_y']) ) {

    try  {
        $connection = new PDO($dsn, $username, $password, $options);
    //   $sql = "SELECT * FROM voting_cc";
    //   $statement = $connection->prepare($sql);
    //   $statement->execute();
    //   $result = $statement->fetch(PDO::FETCH_ASSOC);

        $new_voting_nica_tkr = array(
        "id" => 1,
        "nica"  => $rowz['nica']+1,
        "tkr"     => $rowz['tkr']+0
        );
        $sql = "UPDATE voting_nica_tkr
                SET
                nica = :nica,
                tkr = :tkr
                WHERE id = :id";

        $statement = $connection->prepare($sql);
        $statement->execute($new_voting_nica_tkr);
    } catch(PDOException $error) {
        echo $sql . "ERORTAYO<br>" . $error->getMessage();
    }
}

  if (isset($_POST['tkr_x']) || isset($_POST['tkr_yr']) ) {

    try  {
      $connection = new PDO($dsn, $username, $password, $options);



      $new_voting_nica_tkr = array(
        "id" => 1,
        "nica"  => $rowz['nica']+0,
        "tkr"     => $rowz['tkr']+1
        );
        $sql = "UPDATE voting_nica_tkr
                SET
                nica = :nica,
                tkr = :tkr
                WHERE id = :id";

      $statement = $connection->prepare($sql);
      $statement->execute($new_voting_nica_tkr);
    } catch(PDOException $error) {
        echo $sql . "ERORTAYO<br>" . $error->getMessage();
    }
  }
?>

<!-- What We Do -->
<section id="voting-nica-tkr" class="default-section">
    <div class="container-voting-nica-tkr">
        <div class="row">
            <div class="col align-self-center">
                <div class="title-voting-nica-tkr">
                    <h1>NICA DAN TKR<br> MANA YANG LEBIH BAIK</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col align-self-center">
                <div class="subtitle-voting-cc">
                    <p style="text-align:center">Tak dapat dipungkiri, kolonialisme memang harus dihilangkan. Maka
                    tak heran kebencian terhadap kompeni kian memuncak menjelang kemerdekaan Indonesia.
                    Tentara Keamanan Rakyat (TKR) dibentuk untuk memerangi segala bentuk kolonialisme.
                    Namun demikian, saat peristiwa Gedoran, justru NICA yang datang membantu kaum Depok.
                    </p>
                    <p><strong style="color:#FFD600;">Jadi, dalam kisah ini siapakah yang lebih baik?</strong></p>
                </div>
            </div>
        </div>


            <div class="row nica-tkr-row">
                <!-- <div class="col-6 col-md-3"></div> -->
                <iframe name="votar" style="display:none;"></iframe>
                    <form method="post" class="form-horizontal" target="votar">
                        <div class="col-6 col-md-4">
                        <h4 id="angka-nica" class="angka-voting-nica-tkr"><?php echo $rowz['nica'];?></h4>
                        <div id="hasil-voting-nica" class="hasil-voting-nica-tkr"></div>
                        <input type="image"
                        name="nica"
                        id="voting-button-nica"
                        class="voting-button-nica-tkr"
                        src="img/asets/voting/circle.png"
                        onmouseover="onHoverNica();"
                        onmouseout="offHoverNica();"
                        onclick="animateAfterClick('nica');">
                        <!-- <img name="nica"src="img/asets/voting/circle.png" onmouseover="onHoverNica();" onmouseout="offHoverNica();"/> -->

                        <h4 class="text-voting-button"> NICA </h4>
                    </div>
                    <div class="col-6 col-md-4">
                        <!-- <img name="tkr" id="voting-button-tkr" class="voting-button-nica-tkr" src="img/asets/voting/circle.png" onmouseover="onHoverTkr();" onmouseout="offHoverTkr();"/> -->
                        <h4 id="angka-tkr" class="angka-voting-nica-tkr"><?php echo $rowz['tkr'];?></h4>
                        <div id="hasil-voting-tkr" class="hasil-voting-nica-tkr"></div>
                        <input type="image"
                        name="tkr"
                        id="voting-button-tkr"
                        class="voting-button-nica-tkr"
                        src="img/asets/voting/circle.png"
                        onmouseover="onHoverTkr();"
                        onmouseout="offHoverTkr();"
                        onclick="animateAfterClick('tkr');">
                        <h4 class="text-voting-button"> TKR </h4>
                    </div>
                </form>
            </div>
    </div>
</section>
        <script src="js/nica_tkr.js"></script>

