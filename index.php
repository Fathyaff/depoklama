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
                        <a class="js-scroll-trigger" href="#team">Tentang Kami</a>
                      </li>
                      <li class="sidebar-nav-item">
                        <a class="js-scroll-trigger" href="#what-we-do">Yang Kami Lakukan</a>
                      </li>
                      <li class="sidebar-nav-item">
                        <a class="js-scroll-trigger" href="#portfolio2">Portfolio Kami</a>
                      </li>
                      <li class="sidebar-nav-item">
                        <a class="js-scroll-trigger" href="#contact">Hubungi Kami</a>
                      </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- intro area -->
        <div id="intro">
            <div class="intro-text">
                <div class="container">
                    <div class="col-md-12 logo">
                        <img src="img/asets/logo.png" width="150px" alt="">
                    </div>
                    <div class="col-md-12">
                        <div id="rotator">
                            <h3>MUSEUM AND HERITAGE INTERACTIVE INDONESIA</h3>
                            <div class="line-spacer"></div>
                            <p>
                                <span>Digital Engagement in</span>
                                <span class="2ndrotate">
                                    Culture, Heritage, Museum</span>
                            </p>
                        </div>
                        <img id="slide-bawah" src="img/asets/slide-bawah.png" width="100px" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!-- Team -->
        <section id="team" class="home-section bg-white" style="
        background-image: url(img/asets/bg-2-bw.png); background-position: center; background-size: cover;
    ">
            <div class="container">
                <div class="row">
                    <div class=" col-md-12">
                        <div class="section-heading">
                            <h2>Tentang Kami</h2>
                            <div class="heading-line"></div>
                            <p>Kami memiliki mimpi agar masyarakat Indonesia memiliki keinginan untuk
                                mengunjungi warisan budaya dan museum yang tersebar di seluruh penjuru negeri.
                                Melalui teknologi imersif, kami berusaha mempromosikan keunikan dan keragaman
                                budaya, sejarah, dan tradisi yang ada di Indonesia. Tim kami senang berbagi
                                pengetahuan mengenai cagar budaya, museum, dan penggunaan teknologi interaktif.
                                Kami semangat untuk dapat berkolaborasi dengan institusi visioner yang memiliki
                                mimpi yang sama dengan kami.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-offset-1 col-xs-12 col-sm-2 col-md-2 col-lg-2 box-team">
                            <div class="wow bounceInUp" data-wow-delay="0.1s">
                                <div class="member-hover" data-toggle="modal" href="#portfolioModal1">
                                    <img src="img/tim/alqiz.png" alt="" class=" img-responsive"/>
                                    <div class="content-member-img">
                                        <h4>Alqiz Alqiz</h4> <p>Pendiri</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 box-team" data-wow-delay="0.3s">
                            <div class="wow bounceInUp">
                                <div class="member-hover" data-toggle="modal" href="#portfolioModal2">
                                    <img src="img/tim/danang.png" alt="" class="img-person img-responsive"/>
                                    <div class="content-member-img">
                                        <h4>Danang Aryo</h4><p>Bukan apa-apa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 box-team" data-wow-delay="0.5s">
                            <div class="wow bounceInUp">
                                <div class="member-hover" data-toggle="modal" href="#portfolioModal3">
                                    <img src="img/tim/jazmi.png" alt="" class="img-person img-responsive"/>
                                    <div class="content-member-img">
                                        <h4>M Jazmi</h4> <p>Budak Chastelein</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 box-team" data-wow-delay="0.7s">
                            <div class="wow bounceInUp">
                                <div class="member-hover" data-toggle="modal" href="#portfolioModal4">
                                    <img src="img/tim/ide.png" alt="" class="img-person img-responsive"/>
                                    <div class="content-member-img">
                                        <h4>Ide Nada</h4> <p>Penulis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 box-team" data-wow-delay="0.7s">
                            <div class="wow bounceInUp">
                                <div class="member-hover" data-toggle="modal" href="#portfolioModal5">
                                    <img src="img/tim/kae.png" alt="" class="img-person img-responsive"/>
                                    <div class="content-member-img">
                                        <h4>Ide Nada</h4> <p>Videographer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- What We Do -->
        <section id="what-we-do" class="home-section bg-white" style="
        background-image: url(img/asets/bg-2-bw.png); background-position: center; background-size: cover;
    ">
            <div class="container">
                <div class="row">
                    <div class=" col-md-12">
                        <div class="section-heading">
                            <h2>Yang Kami Lakukan</h2>
                        </div>
                    </div>
                </div>
                <div class="row wow fadeInUp">
                    <div class="row">
                        <div class="col-xs-12 col-md-12">
                            <div class="box-team col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div class="wow bounceInUp col-md-4 col-xs-9" data-wow-delay="0.1s">
                                    <img src="img/asets/web.png" alt="" width="75%" class=" img-responsive"/>
                                </div>
                                <div class="col-xs-12 col-md-8 content">
                                    <h2>Website</h2>
                                    <p>Kami dapat mengembangkan website untuk kebutuhan promosi, edukasi, hingga
                                        menginspirasi masyarakat</p>
                                </div>
                            </div>
                            <div class="box-team col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div class=" wow bounceInUp col-md-4 col-xs-9" data-wow-delay="0.1s">
                                    <img
                                        src="img/asets/virtual tour.png"
                                        width="75%"
                                        alt=""
                                        class=" img-responsive"/>
                                </div>
                                <div class="col-xs-12 col-md-8 content">
                                    <h2>Virtual Tour</h2>
                                    <p>Kami berusaha agar warisan budaya dapat diakses berbagai kalangan dan
                                        darimana pun.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box-team col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div class="wow bounceInUp col-md-4 col-xs-9" data-wow-delay="0.1s">
                                    <img src="img/asets/sosmed.png" alt="" width="75%" class=" img-responsive"/>
                                </div>
                                <div class="col-xs-12 col-md-8 content">
                                    <h2>Media Sosial</h2>
                                    <p>Kami membangun interaksi dan komunikasi dua arah dengan masyarakat di sosial
                                        media melalui foto, video, dan platform lainnya.</p>
                                </div>
                            </div>
                            <div class="box-team  col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div class="wow bounceInUp col-md-4 col-xs-9" data-wow-delay="0.1s">
                                    <img src="img/asets/ide.png" width="75%" alt="" class=" img-responsive"/>
                                </div>
                                <div class="col-xs-12 col-md-8 content">
                                    <h2>Eksperimen Lainnya</h2>
                                    <p>Kami senang mencoba hal baru. Apabila anda memiliki ide inovatif, kami siap
                                        berkolaborasi!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Grid -->
        <section class="home-section bg-white" id="portfolio2" style="
        background-image: url(img/asets/bg-2-bw.png); background-position: center; background-size: cover;
        ">
            <div class="container">
                <div class="row">
                    <div class="col-md-offset-2 col-md-8">
                        <div class="section-heading">
                            <h2>Portfolio Kami</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-6 portfolio-item col-xs-6">
                            <div class="portfolio-hover">
                                <img class="img-fluid" src="img/asets/banner.png" width="100%" alt="">
                                <div class="portfolio-hover-content">
                                    <h2>DEPOK HERITAGE PROJECT</h2>
                                    <p>Lore m ipsu m dolor s it amet, con s ectetur adipis cin g elit. Pell en t e s q ue curs us id ne q ue e g et fe ug i a t . Null a ve ne na t i s
                                        ve ne natis qu am, volutpat varius ligul a orn are varius . Morbi t e m p o r p o rt t i to r l o b o rt i s . Cura bi t ur ri s us a ug ue ,
                                        e le me ntu m ne c la cus eu, facilis is gravida erat. Proin el eifen d ul t ri ci e s ni s i co ns e q ua t d i c t um . Ph a s e llus no n m a g na id
                                        ex tincidu nt fringill a vel at ligul a. D uis l obortis auctor imperdiet . U t a ug ue m a g na , fini b us e u rut rum e u, s a g i t t i s no n
                                        u rna. Mau ris ne c turpis s ed s apien gravida l obortis eget vel ni s l . Na m a uc to r im p e rd i et e ro s , a t vo lut p a t q ua m
                                        sagittis se d. In jus to nibh , aliquam ut mauris s it amet, eges tas t incid unt q ua m . D o ne c int e rd um g ra vid a t e m p us . S e d
                                        ve hicula massa mauris . Don ec bl an dit es t tin cidun t, commodo m et us no n, d a p i b us m a uri s . D ui s p ret i um ni s i ve l mi
                                        vulpu tate sagittis.
                                        <br>
                                        Vivamu s et fe u giat purus . Aliquam n ec volutpat diam, vitae effi ci t ur ip s um . Int e g e r t e m p us p o rt t i to r m a uri s id
                                        pulvinar. Inte ge r maximus ris us orn are purus tris tique, ut p ul vina r nunc ul t ri ci e s . Cra s fe ug i a t o rci et to rto r
                                        male su ada, e get maximus quam mattis . Pell en tes que erat mag na , o rna re id p e ll e nt e s q ue id , bl a nd i t id e nim . Null a
                                        libe ro se m, gravida ut aliquam viverra, tin cidun t ac nibh . Aliqua m a m a uri s a ni s i ull a m co rp e r d i c t um . M a uri s e ra t
                                        u rna, pulvinar et con gue ph aretra, pl acerat s it amet s em. Viva m us t e llus e li t , l a o re et s e d p urus a , fa cili s i s m o l e s t i e
                                        au gu e .</p>>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section id="contact" class="home-section bg-gray" style="
        background-image: url(img/asets/bg-2-bw.png); background-position: center; background-size: cover;">
            <div class="container">
                <div class="row">
                    <div class="col-md-offset-2 col-md-8">
                        <div class="section-heading">
                            <h2>Kami sangat menantikan ide brilian anda!</h2>
                            <div class="heading-line"></div>
                            <p>Jika ingin bertanya lebih lanjut silakan isi formulir berikut!</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-offset-2 col-md-8">
                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                        <div id="errormessage"></div>

                        <form method="post" class="form-horizontal">
                            <input name="csrf" type="hidden" value="<?php echo escape($_SESSION['csrf']); ?>">
                            <div class="col-md-5">
                                <div class="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        class="form-control"
                                        id="name"
                                        placeholder="Nama"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"/>
                                    <div class="validation"></div>
                                </div>
                            </div>

                            <div class="col-md-offset-1 col-md-6">
                                <div class="form-group">
                                    <input
                                        type="email"
                                        class="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        data-rule="email"
                                        data-msg="Please enter a valid email"/>
                                    <div class="validation"></div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <textarea
                                        class="form-control"
                                        name="message"
                                        rows="5"
                                        data-rule="required"
                                        data-msg="Please write something for us"
                                        placeholder="Pesan"></textarea>
                                    <div class="validation"></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class=" col-md-offset-4 col-md-4">
                                    <button type="submit" name="submit" value="Submit" class="btn btn-theme btn-lg btn-block contact-btn">Kirim Pesan</button>
                                </div>
                            </div>
                        </form>
                        <?php if (isset($_POST['submit']) && $statement) : ?>
                            <blockquote><?php echo escape($_POST['firstname']); ?> successfully added.</blockquote>
                        <?php endif; ?>
                    </div>
                </div>

            </div>
        </section>

        <!-- Footer -->
        <?php include "templates/footer.php"; ?>


        <a href="#" class="back-to-top">
            <i class="fa fa-chevron-up"></i>
        </a>

        <!-- Modal 1 -->
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                    <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="modal-body">
                        <!-- Project Details Go Here -->
                        <div class="row">
                            <div class="col-md-3">
                                <img src="img/tim/alqiz.png" alt="" class=" img-responsive"/>
                            </div>
                            <div class="col-md-9 modal-description">
                                <h2>Alqiz</h2>
                                <p class="item-intro">Pendiri</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia
                                expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <h5>"Hidup untuk Tidur"</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <!-- Modal 2 -->
        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                    <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="modal-body">
                        <!-- Project Details Go Here -->
                        <div class="row">
                            <div class="col-md-3">
                                <img src="img/tim/danang.png" alt="" class="img-person img-responsive"/>
                            </div>
                            <div class="col-md-9 modal-description">
                                <h2>Danang Aryo</h2>
                                <p class="item-intro">Bukan apa-apa</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia
                                expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <h5>"Hidup untuk Tidur"</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <!-- Modal 3 -->
        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                    <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="modal-body">
                        <!-- Project Details Go Here -->
                        <div class="row">
                            <div class="col-md-3">
                                <img src="img/tim/jazmi.png" alt="" class="img-person img-responsive"/>
                            </div>
                            <div class="col-md-9 modal-description">
                                <h2>M. Jazmi</h2>
                                <p class="item-intro">Budak Chastelein</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia
                                expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <h5>"Hidup untuk Tidur"</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <!-- Modal 4-->
        <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                    <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="modal-body">
                        <!-- Project Details Go Here -->
                        <div class="row">
                            <div class="col-md-3">
                                <img src="img/tim/ide.png" alt="" class="img-person img-responsive"/>
                            </div>
                            <div class="col-md-9 modal-description">
                                <h2>Ide Nada</h2>
                                <p class="item-intro">Pendiri</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia
                                expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <h5>"Hidup untuk Tidur"</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <!-- Modal 5 -->
        <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                    <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="modal-body">
                        <!-- Project Details Go Here -->
                        <div class="row">
                            <div class="col-md-3">
                                <img src="img/tim/kae.png" alt="" class="img-person img-responsive"/>
                            </div>
                            <div class="col-md-9 modal-description">
                                <h2>Kae</h2>
                                <p class="item-intro">Videographer</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia
                                expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <h5>"Hidup untuk Tidur"</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <!-- js -->
        <script src="js/jquery.js"></script>
        <script src="js/bootstrap.min.js"></script>
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
        <script src="contactform/contactform.js"></script>

        <!-- Template Custom Javascript File -->
        <script src="js/custom.js"></script>
        <?php include "php/penutur_kisah_1.php"; ?>
    </body>

</html>
