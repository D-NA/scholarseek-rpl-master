<?php

  include 'db_connect.php';

    $postdata = file_get_contents("php://input");
    $username = "";
    $nama = "";
    $nim = "";
    $ipk = "";
    $password ="";
    $cpassword="";

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $username = $request->username;
        $nama = $request->nama;
        $nim = $request->nim;
        $ipk = $request->ipk;
        $password = $request->password;
        $cpassword = $request->cpassword;

        //ini buat cek apakah JSON ada isisnya atau tidak
        if($request){
            $query_register = mysqli_query($connect,"INSERT INTO mahasiswa (username, nama, nim, ipk, password, cpassword) VALUES ('$username', '$nama', '$nim', '$ipk', '$password', '$cpassword') ");

            if($query_register){
         
                 $data =array(
                     'message' => "Register Success!",
                     'status' => "200"
                 );
             }
             else {
                 $data =array(
                     'message' => "Register Failed!",
                     'status' => "404"
                 ); 
             }
        }
        else{
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            ); 
        }
        echo json_encode($data);
    }
?>
