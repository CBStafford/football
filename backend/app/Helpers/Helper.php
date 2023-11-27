<?php
/* NOTE - Regisister this helper in the composer.json 
    run composer dump-autoload in the terminal.
    Restart server.
*/
    function showStuff(){
        $stuff = 10;
        return $stuff;
    }

    function thisWeek(){
        // Thursday, September 7th
        $today = date("Y-m-d");
        $weeks = [];

        $week1 = "2023-09-07"; //NOTE - Yr - Mo - Day

        for($i = 1; $i <= 18; $i++){
            if($i == 1){
                $weeks[$i]["date"] = $week1;
                $weeks[$i]["week"] = $i;
            }else{
                $thursday = $weeks[$i-1]["date"];
                $date = date('Y-m-d', strtotime($thursday. ' + 7 days'));
                $weeks[$i]["date"] = $date;
                $weeks[$i]["week"] = $i;
            }
            
        }

        $thisWeek = array_filter($weeks, function($data){
            $today = date("Y-m-d");
            $nextThursday = strtotime('next thursday');

            
            return $data["date"] >= $today;
        });

        $thisWeek =array_values($thisWeek);
        
        return $thisWeek[0];

    }
?>