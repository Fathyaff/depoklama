<?php
if (isset($_POST['submit-tanggapan'])) {
    if (!hash_equals($_SESSION['csrf'], $_POST['csrf'])) die();

    try  {
      $connection = new PDO($dsn, $username, $password, $options);
      $new_user = array(
        "nama" => $_POST['name'],
        "email"  => $_POST['email'],
        "umur" => $_POST['umur'],
        "pekerjaan" => $_POST['pekerjaan'],
        "tanggapan"     => $_POST['message'],
      );

      $sql = sprintf(
        "INSERT INTO %s (%s) values (%s)",
        "tanggapan",
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

<!-- What We Do -->
<section id="tanggapan-warga-depok" class="default-section">
    <div class="container-tanggapan-warga-depok">
        <div class="row">
            <div class="col align-self-center">
                <div class="title-tanggapan-warga-depok">
                    <h1>Tanggapan Kalian</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col align-self-center">
                <div class="subtitle-tanggapan-warga-depok">
                    <p>Kini kita sudah mengetahui sejarah yang terlupakan dari Kota Depok. Mari beri
                        apresiasi kepada para penutur yang telah mengantarkan kita hingga bagian ini.
                        Namun perlu diingat; aku, kamu, dan kita adalah bagian dari sejarah.</p>
                    <p>Kisah Depok belum lengkap tanpa suaramu.</p>
                    <p id="ayosimak">
                        <strong>Berikan tanggapanmu pada kolom di bawah ini!</strong>
                    </p>
                    <br><br>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="col-md-offset-2 col-md-8">
                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                    <div id="errormessage"></div>
                    <iframe name="votar" style="display:none;"></iframe>
                    <form method="post" class="form-horizontal" target="votar">
                        <input
                            name="csrf"
                            type="hidden"
                            value="<?php echo escape($_SESSION['csrf']); ?>">
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

                        <div class="col-md-5">
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="umur"
                                    id="umur"
                                    placeholder="Umur"
                                    data-rule="umur"
                                    data-msg="Umur"/>
                                <div class="validation"></div>
                            </div>
                        </div>
                        <div class="col-md-offset-1 col-md-6">
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="pekerjaan"
                                    id="pekerjaan"
                                    placeholder="Pekerjaan"
                                    data-rule="pekerjaan"
                                    data-msg="Pekerjaan"/>
                                <div class="validation"></div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="form-group">
                                <textarea
                                    id="message"
                                    class="form-control"
                                    name="message"
                                    rows="5"
                                    data-rule="required"
                                    data-msg="Please write something for us"
                                    placeholder="Tanggapan"></textarea>
                                <div class="validation"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class=" col-md-offset-4 col-md-4">
                                <button
                                    type="submit"
                                    name="submit-tanggapan"
                                    value="Submit"
                                    class="btn btn-theme btn-lg btn-block contact-btn"
                                    onclick="afterSubmitTanggapan()">Kirim Tanggapan</button>
                            </div>
                        </div>
                    </form>

                    <h5 id="tanggapan-berhasil" style='color:white; display:none;'> Terima kasih atas tanggapan yang diberikan!</h5>



                </div>
            </div>
        </div>
    </section>
    <script src="js/tanggapan-warga-depok.js"></script>

    <!-- <div class="row tanggapan-row" style="margin-bottom:5%; margin-left:5%;
    margin-right:5%;"> <div class="col-md-4 col-xs-12 portfolio-hover"> <img
    src="img/asets/putih-oval.png" alt="" width="100%" class="img-responsive" />
    <div class="tanggapan-desc" style="position:absolute; top:0; width:100%;
    display:visible;"> <p style="margin-top:20%;"> “Saya memang bukan berasal dari
    Depok, tetapi saya kuliah di sini. Saya terkadang ke Depok untuk menyambangi
    beberapa mall; seperti Margocity. Depok bagi saya adalah suatu kota yang penuh
    dengan perjuangan. Mungkin karena saya sedang berjuang menimba ilmu di sini,
    jadi kota Depok juga menjadi bagian penting dalam hidup saya. Menurut saya,
    Cornelis Chastelein di Depok tidak hanya mengeksploitasi masyarakat, tetapi juga
    memberikan banyak pengetahuan baru yang juga mensejahterakan; dan adanya
    peristiwa Gedoran Depok pasti menimbulkan trauma yang mendalam bagi masyarakat
    Depok. Semoga Depok bisa semakin berkembang secara keseluruhan; baik
    infrastruktur, pendidikan, dan lain-lain. Semoga pemerintah Depok dapat
    mengembangkan potensi wisata sehingga bisa menarik banyak wisatawan ke Depok.”
    <br><strong>- Olga Laurenza, 20 tahun, Mahasiswi.</strong></p> </div> </div>
    <div class="col-md-4 col-xs-12 portfolio-hover"> <img
    src="img/asets/kuning-oval.png" alt="" width="100%" class="img-responsive" />
    <div class="tanggapan-desc" style="position:absolute; top:0; width:100%;
    display:visible;"> <p style="margin-top:20%;"> “Saya sedang berkuliah di Depok.
    Sebelumnya saya jarang ke Depok namun sejak berkuliah disini, saya jadi lebih
    sering menyambangi wilayah Depok. Cornelis Chastelein sering disebut Belanda
    Depok, yang merupakan seorang tuan tanah yang cukup berjasa tentang perkembangan
    kota Depok. Ia banyak menghibahkan tanahnya untuk para budaknya. Ia juga seorang
    yang baik karena memperhatikan para budaknya, tidak hanya memberikan tanah
    tetapi juga berupa uang. Peristiwa Gedoran Depok, 11 Oktober 1945, meninggalkan
    trauma mendalam bagi keturunan 12 marga bekas budak Belanda. Mereka dianggap
    sebagai pengkhianat karena sehari-hari tak berbahasa Indonesia. Depok adalah
    tempatku menuntut ilmu, semoga Depok terus menjadi kota singgah yang nyaman dan
    kota yang aman bagi para pelajar.”<br> <strong>– Nida Faradisa, 20 tahun,
    Mahasiswi.</strong></p> </div> </div> <div class="col-md-4 col-xs-12
    portfolio-hover"> <img src="img/asets/putih-oval.png" alt="" width="100%"
    class="img-responsive" /> <div class="tanggapan-desc" style="position:absolute;
    top:0; width:100%; display:visible;"> <p> “Saya bukan orang asli Depok namun
    sedang menjalani perkuliahan selama 4 tahun di salah satu universitas yang
    terletak di kota ini. Menurut saya, Cornelis Chastelein merupakan orang Belanda
    yang pernah menduduki kedudukan yang penting di VOC, namun visinya tidak sejalan
    dengan VOC. Kemudian ia beralih menjadi pengusaha di Kota Depok yang memiliki
    budak yang cukup banyak. Chastelein terkenal sebagai tuan tanah yang sangat baik
    hati terhadap budak-budaknya. Ia mewajibkan budaknya beragama Kristen,
    mengajarinya berbahasa Belanda, dan melarang untuk bergaul di luar Kota Depok
    karena Chastelein tidak ingin para budaknya terpengaruh oleh sifat-sifat jelek
    orang Cina yang tinggal di sekitar Kota Depok. Setelah Chastelein meninggal,
    semua budaknya dimerdekakan dengan cara menambahkan nama Belanda di belakangnya
    dan ia juga membagikan tanahnya untuk budaknya. Terkait peristiwa Gedoran Depok,
    menurut saya pertistiwa ini terjadi karena kecemburuan sosial dan orang-orang
    yang tinggal di Depok tidak mau menyatakan kalau Indonesia sudah merdeka. Saat
    ini, Depok merupakan kota transit. Kota ini sudah semakin padat seperti Kota
    Jakarta karena banyak orang-orang yang bermukim di daerah ini. Harapan saya
    untuk Kota Depok harus lebih banyak ditanami pohon agar kota ini tidak terlalu
    panas. Harus pula dibuat aturan lalu lintas agar Kota Depok tidak menjadi sangat
    macet.” <br> <strong>– Nurul Safira, 20 tahun, Mahasiswi.</strong></p> </div>
    </div> </div> <div class="row tanggapan-row" style="margin-bottom:5%;
    margin-left:5%; margin-right:5%;"> <div class="col-md-4 col-xs-12
    portfolio-hover"> <img src="img/asets/putih-oval.png" alt="" width="100%"
    class="img-responsive" /> <div class="tanggapan-desc" style="position:absolute;
    top:0; width:100%; display:visible;"> <p style="margin-top:25%;"> “Saya bukan
    berasal dari Depok namun saya berkuliah selama 3 tahun di kota ini. Menurut
    saya, Cornelis Chastelein di Depok merupakan tuan tanah yang memiliki jiwa
    kepemimpinan yang baik. Jika penyebab peristiwa Gedoran Depok terjadi karena
    kesenjangan sosial yang ada di Depok, menurut saya itu wajar tejadi. Karena
    masyarakat pasti ingin merasakan kemerataan kesejahteraan yang ada. Depok bagi
    saya merupakan tempat menemukan kehidupan baru di dunia kuliah yang ternyata
    sangat penuh lika liku. Semoga Depok bisa menjadi kota yang ramah lingkungan
    bagi siapapun.” <br> <strong>- Shinta Adelia Kusumaningtyas, 20 tahun,
    Mahasiswi.</strong></p> </div> </div> <div class="col-md-4 col-xs-12
    portfolio-hover"> <img src="img/asets/kuning-oval.png" alt="" width="100%"
    class="img-responsive" /> <div class="tanggapan-desc" style="position:absolute;
    top:0; width:100%; display:visible;"> <p style="margin-top:20%;"> “Saya bukan
    berasal dari Depok namun saya sudah tinggal di Depok selama kurang lebih 2 tahun
    karena kuliah di kota ini. Menurut saya, Chastelein adalah orang yang baik
    meskipun ia datang dari kaum penjajah. Gerakannya yang berani untuk lepas dari
    VOC menjadi cikal bakal kota Depok saat ini. Ia juga mengajarkan kebaikan dan
    berbagi sesama manusia, terlepas dari status sosialnya. Terlihat bahwa pola
    pikir orang lokal masih belum dapat merangkul pendatang baru meskipun orang
    lokal tersebut tidak merusak dan mengganggu ketentraman kota Depok, itulah yang
    menyebabkan peristiwa Gedoran Depok. Depok telah memberikan banyak pelajaran
    bagi saya, baik dari tempat maupun dari orang-orangnya. Semoga Kota Depok dapat
    lebih teratur dan manusia yang tinggal di dalamnya dapat menjadi individu yang
    lebih baik lagi sehingga menjadikan Kota Depok kota yang memiliki tempat di hati
    masyarakat Indonesia.” <br> <strong> – Priska Athaya, 20 tahun,
    Mahasiswi.</strong></p> </div> </div> <div class="col-md-4 col-xs-12
    portfolio-hover"> <img src="img/asets/putih-oval.png" alt="" width="100%"
    class="img-responsive" /> <div class="tanggapan-desc" style="position:absolute;
    top:0; width:100%; display:visible;"> <p style="margin-top:20%;"> “Saya merantau
    untuk kuliah di Depok, dan beberapa anggota keluarga saya ada yang tinggal
    disini. Chastelein adalah orang yang bisa dibilang baik pada masanya, karena
    pada umumnya majikan atau pemilik budak dikenal kejam dan semena-mena dibanding
    Chastelein. Meskipun ada beberapa poin tindakan beliau yang melarang mengenai
    kontak dengan orang non-depok, namun secara keseluruhan menurut saya beliau
    adalah orang Belanda yang baik. Terkait Gedoran Depok, peristiwa ini menurut
    saya maklum terjadi di Indonesia. Saat itu, kesenjangan dan kecembruan pasti
    terjadi. Sebagai orang Indonesia, saya juga mengerti alasan Gedoran Depok pecah,
    karena menuntut kesamaan dan kemerdekaan dari unsur-unsur kolonialis. Depok
    adalah kota tempat saya menimba ilmu dan saksi salah satu proses kehidupan saya.
    Semoga Depok dapat menjadi kota yang lebih baik dalam berbagai aspek dan nyaman
    bagi semuanya.”<br> <strong>– Muhammad Fikri, 20 tahun, Mahasiswa.</strong></p>
    </div> </div> </div> <div class="row tanggapan-row" style="margin-bottom:5%;
    margin-left:5%; margin-right:5%;"> <div class="col-md-4 col-xs-12
    portfolio-hover"> <img src="img/asets/putih-oval.png" alt="" width="100%"
    class="img-responsive" /> <div class="tanggapan-desc" style="position:absolute;
    top:0; width:100%; display:visible;"> <p style="margin-top:20%;"> “Saya bukan
    berasal dari Depok namun kuliah di Depok sudah 2 tahun. Depok merupakan kota
    yang sangat padat. Berbagai hiruk-pikuk berlangsung disini mulai dari kegiatan
    jual-beli, pendidikan dan banyak lainnya. Kota Depok bisa dibilang juga sebagai
    kota transit Menurut saya, Chastelein di Depok merupakan orang Belanda yang
    berbeda pemikiran dengan para pemegang kekuasaan di VOC kala itu. Tujuan dari
    Chastelein sendiri adalah mensejahterakan kaum budak yang dikirim ke wilayah
    Depok. Bisa dibilang ia mengajarkan hal yang tidak pernah didapatkan oleh para
    budak pada masa sebelumnya seperti agama dan lainnya. Hingga adanya peristiwa
    Gedoran Depok, ini disebabkan oleh adanya kesenjangan sosial antara warga Depok
    dengan warga Depok lama karena mereka berpikir bahwa warga Depok itu merupakan
    antek-antek Belanda karena mendapatkan tanah dari pihak Belanda. Harapan saya
    bagi Depok, semoga Depok lebih tertata lagi khususnya kawasan Margonda” <br>
    <strong>- Dewi Murni Yuliani, 21 tahun, Mahasiswi.</strong></p> </div> </div>
    <div class="col-md-4 col-xs-12 portfolio-hover"> <img
    src="img/asets/kuning-oval.png" alt="" width="100%" class="img-responsive" />
    <div class="tanggapan-desc" style="position:absolute; top:0; width:100%;
    display:visible;"> <p style="margin-top:30%;"> “Saya lahir dan dibesarkan di
    Depok namun saya bukan asli Depok. Menurut saya Cornelis Chastelein merupakan
    salah satu tokoh yang berpengaruh dalam berkembangannya masyarakat Depok, dan
    masyarakat di luar Depok salah mengartikan kaum Depok sebagai antek-antek
    Belanda. Depok harga mati. Semoga Depok tidak macet, semakin maju, dan tidak
    banyak pembangunan tanpa memikirkan dampak lingkungan sekitar.” <br> <strong>-
    Tiara Pramesti, 20 tahun, Mahasiswi.</strong></p> </div> </div> <div
    class="col-md-4 col-xs-12 portfolio-hover"> <img src="img/asets/putih-oval.png"
    alt="" width="100%" class="img-responsive" /> <div class="tanggapan-desc"
    style="position:absolute; top:0; width:100%; display:visible;"> <p
    style="margin-top:7%;"> “Saya lahir di Jakarta, namun sejak kecil saya sudah
    tinggal di Depok. Bisa dikatakan bahwa saya tumbuh besar di kota ini. Cornelis
    Chastelein menurut saya salah satu penjajah yang 'baik hati'. Mengapa? Karena
    setelah mengetahui kehidupan masyarakat kota Depok pada saat jaman penjajahan,
    saya melihat bahwa Cornelis Chastelein ini, meskipun ia seorang penjajah yang
    ingin menguasai apa yang dimiliki oleh bangsa Indonesia tetapi Ia tetap masih
    memikirkan bagaimana nasib budak-budak yang merupakan orang-orang pribumi. Ia
    tetap ingin budak-budaknya tidak mengikuti perbuatan-perbuatan yang negatif
    seperti misalnya berjudi dan mabuk-mabukan layaknya pedagang Cina pada saat itu.
    Bahkan Ia juga menuntun para budaknya untuk memiliki sebuah keyakinan dalam hal
    ini agama Kristen. Adanya peristiwa Gedoran Depok cukup memilukan. Menurut saya
    peristiwa Gedoran Depok ini seharusnya bisa menjadi pembelajaran bagi kita
    generasi penerus bahwasanya jangan kita merasa tersaingi dan tidak menerima jika
    ada sekelompok orang lebih maju atau lebih baik. Justru seharusnya hal tersebut
    menjadi pemacu/motivasi kita untuk bisa seperti mereka bukan malah melakukan
    penyerangan sebagai bentuk tidak terima. Depok adalah tempat saya kembali kemana
    pun kelak saya akan pergi. Karena Depok sudah menjadi saksi bisu atas perjalanan
    hidup saya. Semoga Depok menjadi kota yang dapat memberikan keamanan,
    kenyamanan, ketentraman, keteduhan serta kesejahteraan bagi siapapun yang
    singgah💛” <br> <strong>- Alya Syafira, 20 tahun, Mahasiswi.</strong></p> </div>
    </div> </div> <div class="row tanggapan-row" style="margin-bottom:5%;
    margin-left:5%; margin-right:5%;"> <div class="col-md-4 col-xs-12
    portfolio-hover"> <img src="img/asets/putih-oval.png" alt="" width="100%"
    class="img-responsive" /> <div class="tanggapan-desc" style="position:absolute;
    top:0; width:100%; display:visible;"> <p style="margin-top:20%;"> “Saya bukan
    lahir di Depok. Saya pindah ke Depok sejak umur 4 tahun dan sampai sekarang
    masih disini. Cornelis Chastelein, walaupun dia sebagai penjajah namun
    kepeduliannya pada rakyat Indonesia yang dia pekerjakan membuat pandangan saya
    padanya berubah. Jadi walaupun penjajah tapi beliau ingin mensejahterakan budak
    yang bekerja padanya, dan itu patut dicontoh apabila menjadi pemimpin suatu
    proyek atau perusahaan. Terkait Peristiwa Gedoran Depok, tidak jauh beda ya
    dengan apa yang pernah dan atau masih terjadi pada masa sekarang, kecemburuan
    sosial merusak segalanya. Bagi saya, Depok adalah sebuah kota yang penuh dengan
    kenangan. Semoga Depok bisa lebih baik lagi baik dalam konstruksi, lalu lintas
    dan ekonominya. Dan semoga bisa hilang gelar "Kota Korupsi" dari Kota Depok.”
    <br> <strong>- Farhan Fadhliansyah, 20 tahun, Mahasiswa.</strong></p> </div>
    </div> <div class="col-md-4 col-xs-12 portfolio-hover"> <img
    src="img/asets/kuning-oval.png" alt="" width="100%" class="img-responsive" />
    <div class="tanggapan-desc" style="position:absolute; top:0; width:100%;
    display:visible;"> <p style="margin-top:15%;"> “Saya bukan lahir di Depok tapi
    saya sudah tinggal di Depok selama 18 tahun. Mulai dari SD hingga perguruan
    tinggi di Depok. Awalnya saya kira Cornelis Chastelein sama saja dengan orang
    Belanda pada zaman itu, yang memeras tenaga pribumi dan tidak mensejahterakan
    pribumi. Tapi ternyata, Cornelis Chastelein orang yang baik karena dia
    berkeinginan untuk mensejahterakan para budaknya dan serta memerdekakan. Ia juga
    mengajarkan tentang agama Kristen dan bahasa Belanda sehingga budak juga paham
    dengan bahasa Belanda. Dia melarang budaknya untuk tidak dekat dengan pedagang
    Cina karena memiliki sifat buruk yaitu berjudi. Menurut saya, peristiwa Gedoran
    Depok itu kecemburuan sosial karena kehidupan orang Depok lebih baik daripada
    sekitar Depok (orang yang tidak bisa bahasa Belanda) otomatis mereka melakukan
    perlawanan dan me-labeling bahwa orang Depok yang bisa berbahasa Belanda dan
    bekerja di instansi Belanda adalah antek-antek Belanda. Bagi saya, Depok adalah
    tempat untuk kembali pulang dan akan sangat dirindukan apabila saya pergi
    meninggalkan. Harapan saya untuk Depok, memberikan keamanan, kenyamanan, dan
    keteraturan.” <br> <strong> - Widya Refriatna Handriat, 19 tahun,
    Mahasiswi.</strong></p> </div> </div> <div class="col-md-4 col-xs-12
    portfolio-hover"> <img src="img/asets/putih-oval.png" alt="" width="100%"
    class="img-responsive" /> <div class="tanggapan-desc" style="position:absolute;
    top:0; width:100%; display:visible;"> <p style="margin-top:25%;"> “Saya lahir di
    Jakarta, namun tumbuh dan besar di Depok. Saya bersekolah dari taman kanak-kanak
    sampai kuliah di Depok. Bagi saya, Depok sebagai kampung halaman dan tempat saya
    tumbuh. Bisa dibilang hampir 80% hidup saya hingga sekarang, dijalani di Depok.
    Cornelis Chastelein adalah seorang tokoh yang membangun dan mengembangkan daerah
    Depok lama. Namun, menurut saya, peran dirinya bagi Depok masa kini tidak
    terlalu berpengaruh bagi kehidupan masyarakat Depok sendiri. Terkait peristiwa
    Gedoran Depok, hal tersebut merupakan fenomena sosial yang wajar. Harapan saya
    untuk Depok, jadilah Depok yang multietnis dan multiidentitas (tidak terdominasi
    satu golongan) ” <br> <strong> – Muhamad Alnoza, 19 tahun,
    Mahasiswa.</strong></p> </div> </div> </div> -->
