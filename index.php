<?php
require "config.php";
require "common.php";

if (isset($_POST['submit'])) {
    if (!hash_equals($_SESSION['csrf'], $_POST['csrf'])) die();
    
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
                        <a class="js-scroll-trigger" href="#penutur-kisah-1">Penutur Kisah</a>
                      </li>
                      <li class="sidebar-nav-item">
                        <a class="js-scroll-trigger" href="#asal_kata_depok">Asal Kota Depok</a>
                      </li>
                      <li class="sidebar-nav-item">
                        <a class="js-scroll-trigger" href="#depok-masa-chastelein">Depok Masa Chastelein</a>
                      </li>
                      <li class="sidebar-nav-item">
                        <a class="js-scroll-trigger" href="#peristiwa-berdarah-depok">Peristiwa Berdarah di Depok</a>
                      </li>
                      <li class="sidebar-nav-item">
                        <a class="js-scroll-trigger" href="#arti-depok-lama">Menjadi Kaum Depok Lama</a>
                      </li>
                      <li class="sidebar-nav-item">
                        <a class="js-scroll-trigger" href="#bangunan-bersejarah">Bangunan Bersejarah di Kota Depok</a>
                      </li>
                      <li class="sidebar-nav-item">
                        <a class="js-scroll-trigger" href="#tanggapan-warga-depok">Tanggapan Warga Depok</a>
                      </li>
                      <li class="sidebar-nav-item">
                        <a class="js-scroll-trigger" href="#tentang-kami">Tentang Kami</a>
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
                        <p style="font-family: 'TrajanProRegular';">SEJARAH, PERISTIWA, DAN TINGGALAN MATERINYA</p>
                    </div>
                    <div class="col-md-12 slide-kebawah">
                        <img id="slide-bawah" src="img/asets/panah.png" width="100px" alt="">
                        <br>
                        <p style="font-family: 'TrajanProRegular';">mulai bertualang</p>
                    </div>
                </div>
            </div>
        </div>
        <?php include "php/preloader.php"; ?>
        <?php include "php/video.php"; ?>
        <?php include "php/pengantar.php"; ?>
        <?php include "php/penutur_kisah_1.php"; ?>
        <?php include "php/asal_kata_depok.php"; ?>
        <section class="container-content"  style="
        background-image: url(img/asets/bg-dmc.png); background-size: cover;background-attachment:fixed;background-position: center; padding-top:-50%; padding-botton:-30%; background-size: cover;
        ">
        <?php include "php/depok_masa_chastelein.php"; ?>
        <div class="col-md-8" style="margin-left:17%;">
          <img id="pembatas" src="img/asets/batas_website_depok.png" alt="" width="100%" class=" img-responsive"/>
        </div>
        <?php include "php/siapakah_cornelis_chastelein.php"; ?>
        </section>
        <?php include "php/kehidupan_masa_chastelein.php"; ?>
        <section class="container-content"  style="
        background-image: url(img/asets/bg-kwc.png); background-size: cover;background-attachment:fixed;background-position: center; padding-top:-50%; padding-botton:-30%; background-size: cover;
        ">
        <?php include "php/kematian_warisan_chastelein.php"; ?>
        <div class="col-md-8" style="margin-left:17%;">
          <br>
          <img id="pembatas" src="img/asets/batas_website_depok.png" alt="" width="100%" class=" img-responsive"/>
          <br>
        </div>
        <?php include "php/voting_cc.php"; ?>
        
        <?php include "php/video_proklamasi.php"; ?>
        </section>

        <section class="container-content"  style="
        background-image: url(img/asets/bg-gedoran.png); background-size: cover;background-attachment:fixed;background-position: center; padding-top:-50%; padding-botton:-30%; background-size: cover;
        ">
        <!-- GEDORAN -->
        <?php include "php/peristiwa_berdarah_depok.php"; ?>
        <div class="col-md-8" style="margin-left:17%;">
          <br>
          <img id="pembatas" src="img/asets/batas_website_depok.png" alt="" width="100%" class=" img-responsive"/>
          <br>
        </div>
        <?php include "php/gedoran.php"; ?>
        <?php include "php/saksi_gedoran.php"; ?>
        <?php include "php/penyelamatan_nica.php"; ?>
        <div class="col-md-8" style="margin-left:17%;">
          
          <img id="pembatas" src="img/asets/batas_website_depok.png" alt="" width="100%" class=" img-responsive"/>
          
        </div>
        <?php include "php/nica_dan_tkr.php"; ?>
        </section>

        <section class="container-content"  style="
        background-image: url(img/asets/bg-bangunan.png); background-size: cover;background-attachment:fixed;background-position: center; padding-top:-50%; padding-botton:-30%; background-size: cover;
        ">
        <?php include "php/arti_menjadi_kaum.php"; ?>
        <?php include "php/bangunan_bersejarah.php"; ?>
        <div class="col-md-8" style="margin-left:17%;">
          
          <img id="pembatas" src="img/asets/batas_website_depok.png" alt="" width="100%" class=" img-responsive"/>
          
        </div>
        <?php include "php/tanggapan_warga_depok.php"; ?>
        <?php include "php/tentang_kami.php"; ?>
        <?php include "templates/footer.php"; ?>
        </section>
        <!-- Footer -->
        


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
        <script src="js/close_pop_up.js"></script>
        <!-- Contact Form JavaScript File -->
        <!-- <script src="contactform/contactform.js"></script> -->

        <!-- Template Custom Javascript File -->
        <script src="js/custom.js"></script>

    </body>

</html>
