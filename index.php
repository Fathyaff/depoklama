<?php
require "config.php";
require "common.php";

if (isset($_POST['submit'])) {
    if (!hash_equals($_SESSION['csrf'], $_POST['csrf'])) die();
    echo "hai";
    try  {
      $connection = new PDO($dsn, $username, $password, $options);

      $new_user = array(
        "nama" => $_POST['name'],
        "email"  => $_POST['email'],
        "pesan"     => $_POST['message'],
      );

      $sql = sprintf(
        "INSERT INTO %s (%s) values (%s)",
        "contact",
        implode(", ", array_keys($new_user)),
        ":" . implode(", :", array_keys($new_user))
      );

      $statement = $connection->prepare($sql);
      $statement->execute($new_user);
    } catch(PDOException $error) {
        echo $sql . "<br>" . $error->getMessage();
    }
  }

?>

<!DOCTYPE html>
<html>

    <?php include "templates/header.php"; ?>

    <body>

        <!-- Navigation -->
        <nav class="navbar navbar-default" role="navigation">
            <div class="container">
            <div class="navbar-header">
                    <button
                        type="button"
                        class="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".navbar-ex1-collapse">
                        <span class="sr-only">Toggle nav</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#"><img src="img/asets/logo.png" width="5%" style="margin-top:-1%;" alt=""></a>

                </div>
                <a class="menu-toggle rounded" href="#">
                    <i class="fa fa-bars"></i>
                  </a>
                  <div id="sidebar-wrapper">
                    <ul class="sidebar-nav #sidebar-nav-ul">
                      <li class="sidebar-brand">
                        <a class="js-scroll-trigger" href="#"></a>
                      </li>
                      <li class="sidebar-nav-item">
                        <a class="js-scroll-trigger" href="#">Ke Halaman Utama</a>
                      </li>
                      <li class="sidebar-nav-item">
                        <a class="js-scroll-trigger" href="#pengantar">Pengantar</a>
                      </li>
                      <li class="sidebar-nav-item">
                        <a class="js-scroll-trigger" href="#penutur-kisah-1">Penutur Kisah</a>
                      </li>
                      <li class="sidebar-nav-item">
                        <a class="js-scroll-trigger" href="#asal_kata_depok">Asal Kota Depok</a>
                      </li>
                      <!-- <li class="sidebar-nav-item">
                        <a class="js-scroll-trigger" href="#contact">Hubungi Kami</a>
                      </li> -->
                    </ul>
                </div>
            </div>
        </nav>

        <!-- intro area -->
        <div id="intro">
            <div class="intro-text">
                <div class="container">
                    <div class="col-md-12 logo">
                        <img id="logo-img" src="img/asets/logo.png" width="10%" style="margin-top:10%;margin-bottom: 5%" alt="">   
                        <h3>DEPOK LAMA PROJECT</h3>
                        <p>SEJARAH, PERISTIWA, DAN TINGGALAN MATERINYA</p>
                    </div>
                    <div class="col-md-12 slide-kebawah">
                        <img id="slide-bawah" src="img/asets/panah.png" width="100px" alt="">
                        <p>mulai bertualang</p>
                    </div>
                </div>
            </div>
        </div>

        <?php include "php/video.php"; ?>
        <?php include "php/pengantar.php"; ?>
        <?php include "php/penutur_kisah_1.php"; ?>
        <?php include "php/asal_kata_depok.php"; ?>
        <section class="container-content"  style="
        background-image: url(img/asets/bg-dmc.png); background-size: cover;background-attachment:fixed;background-position: center; padding-top:-50%; padding-botton:-30%; background-size: cover;
        ">
        <?php include "php/depok_masa_chastelein.php"; ?>
        <?php include "php/siapakah_cornelis_chastelein.php"; ?>
        </section>
        <!-- Footer -->
        <?php include "templates/footer.php"; ?>


        <a href="#" class="back-to-top">
            <i class="fa fa-chevron-up"></i>
        </a>
        <!-- js -->

        <script src="js/wow.min.js"></script>
        <script src="js/mb.bgndGallery.js"></script>
        <script src="js/mb.bgndGallery.effects.js"></script>
        <script src="js/jquery.simple-text-rotator.min.js"></script>
        <script src="js/jquery.scrollTo.min.js"></script>
        <script src="js/jquery.nav.js"></script>
        <script src="js/modernizr.custom.js"></script>
        <script src="js/grid.js"></script>
        <script src="js/stellar.js"></script>
        <!-- Contact Form JavaScript File -->
        <!-- <script src="contactform/contactform.js"></script> -->

        <!-- Template Custom Javascript File -->
        <script src="js/custom.js"></script>

    </body>

</html>
