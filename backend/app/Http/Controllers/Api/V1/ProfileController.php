<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use App\Traits\HttpResponses;
// use Illuminate\Http\Request;
// use App\Models\User, League;
use Exception;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    use HttpResponses;

    public function show($id)
    {   
        
        try{
           $profile = new Profile() ;
           $res = $profile->read($id);

        //    print_r($res);

            return response()->json($res);
            // return "Gronk is AWESOME!!!!!";
        }
        catch(Exception $e){
            echo "Your profile could not be found. \n" . $e->getMessage();
        }        
    }
}
