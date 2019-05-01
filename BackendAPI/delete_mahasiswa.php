<?php
    include 'db_connect.php';

    $postdata = file_get_contents("php://input");
    $username = "";

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $username = $request->username;

        if($request){
            $query = mysqli_query($connect, "DELETE FROM mahasiswa WHERE username = '$username' ");

            if($query){
                $data =array(
                    'message' => "Delete succesfully",
                    'status' => "200"
                );
            }
            else{
                $data =array(
                    'message' => "Failed!",
                    'status' => "404"
                );
                    
            }
        }
        else {
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            ); 
        }          
        
    }
    
    echo json_encode($data);

?>