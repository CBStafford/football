<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\V1\StorePlayerGamesRequest;
use App\Traits\HttpResponses;

use App\Models\PlayerGames;
use Exception;

class PlayerGamesController extends Controller
{
    use HttpResponses;

    public function index()
    {
        return PlayerGames::all();
    }

    public function show($id)
    {
        $viewData = [];
        return PlayerGames::findOrFail($id);
    }

    public function showWeek($week)
    {

        $res = PlayerGames::where([
            'year' => 2023,
            'week'=> $week
        ])->get();
        
        return $res;
    }

    public function store(Request $request)
    {
        $jsonData = $request->json()->all();

        // var_dump($jsonData[0]['data']);

        $userID = $jsonData[0]['userId'];
        $week = $jsonData[0]['week'];
        $data = $jsonData[0]['data'];
        // print_r($data);

        try{

            foreach($data as $key => $value){
                $setScores = new PlayerGames();
                $game = ($key + 1);
                $setScores->SetScores($value,$userID,$week, $game );
            }
    
            //NOTE - Fill the array with data, its required
             return $this->success([
                "Your picks have been saved."
            ]);
    
            }
        catch(Exception $e){
                echo "This is an Exception!!!!! \n" . $e->getMessage();
            }
    }

    public function update($week)
    {

        $res = PlayerGames::where([
            'year' => 2023,
            'week'=> $week
        ])->get();
        
        return $res;
    }
}
