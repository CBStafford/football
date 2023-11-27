<?php

namespace App\Util;

use Illuminate\Support\Facades\Facade;

class CurrentWeek extends Facade {
    protected static function getFacadeAccessor() { return 'currentweek'; }
    
    public function thisWeek(){
        // Thursday, September 7th
        $weeks = [
            1=> null, 
            2=> null, 
            3=> null, 
            4=> null, 
            5=> null, 
            6=> null, 
            7=> null, 
            8=> null, 
            9=> null, 
            10=> null, 
            11=> null, 
            12=> null, 
            13=> null, 
            14=> null, 
            15=> null, 
            15=> null, 
            16=> null, 
            17=> null, 
            18=> null, 
        ];

        $weeks1 = date_create("09/07/2023");

        for($i = 1; $i <= 18; $i++){
            $weeks[$i] = $i;
        }

        return $weeks;

    }
}