<?php 
        include "conn.php";
        $sql = "SELECT id,title, body, caption FROM sectiontwo";
        $result = mysqli_query($conn, $sql);

        foreach ($result as $row) {
            echo "
            <div class='col'>
            <button class='btncard'>
                <div class='card'>
                    <div class='top' >
                        <h2>". $row['title'] ."</h2>
                        <div class='EditableArea' id='editableTextArea".strval($row['id'])."'>
                            <p id='ALIGN_MESSAGE'>"
                            . $row['body'] .
                            "<sup><a href='##' onclick='TextEditALIGN(".strval($row['id']).")'>[Click To Edit]</a></sup>
                            </p>
                                
                        </div>
                    </div>
                    <div class='bottom'>
                        <p>". $row['caption'] ."</p>
                    </div>
                </div>
            </button>
            </div>
            ";
            }
        
    ?>