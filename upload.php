<?PHP
if(isset($_FILES['dosya'])) {
   $dosya = $_FILES['dosya']['tmp_name'];
   copy($dosya, 'mp3/' . $_FILES['dosya']['name']);
   echo 'Dosya gönderilmiş';
} else {
   echo 'Lütfen bir dosya gönderin';
}

session_start();

  if ( isset( $_GET['progress'] ) ) {

    $progress_key = strtolower(ini_get("session.upload_progress.prefix").'demo');
  
    if ( !isset( $_SESSION[$progress_key] ) ) exit( "uploading..." );

    $upload_progress = $_SESSION[$progress_key];
    /* get percentage */
    $progress = round( ($upload_progress['bytes_processed'] / $upload_progress['content_length']) * 100, 2 );

    exit( "Upload progress: $progress%" );
  }  

?>



