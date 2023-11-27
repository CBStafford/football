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

    public function store(StorePlayerGamesRequest $request)
    {
        try{

            $playerGames = PlayerGames::create($request->validated());
    
            //NOTE - Fill the array with data, its required
             return $this->success([
                "Your picks have been saved."
            ]);
    
            }catch(Exception $e){
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
