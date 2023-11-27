<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;

use App\Models\NFLGames;

// use App\Utils\CurrentWeek;

class NFLGamesController extends Controller
{
    use HttpResponses;

    public function index()
    {
        return NFLGames::all();
    }

    public function show($id)
    {
        $viewData = [];
        return NFLGames::findOrFail($id);
    }     

    public function showWeek($week = null)
    {
        //Get current week of regular seaon.
        //See code - app/Helpers/Helper.php

        $res = NFLGames::where([
            'year' => 2023,
            // 'week'=> (int)$thisWeek
            'week'=> $week
        ])->get();

        return $res;
    }
}