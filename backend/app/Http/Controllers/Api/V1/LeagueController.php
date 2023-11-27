<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\StoreLeagueRequest;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use App\Models\League;
use Exception;

class LeagueController extends Controller
{
    use HttpResponses;

    public function index()
    {
        return League::all();
    }

    public function show($id)
    {
        $viewData = [];
        return League::findOrFail($id);
    }

    public function store(StoreLeagueRequest $request)
    {
        try{
            $league = League::create($request->validated());
            return $this->success([
                "Your picks have been saved."
            ]);
        }
        catch(Exception $e){
            return $this->error(
                "",
                "There was an problem creating your League. \n" . $e->getMessage(),
                401
            );

        }
        
    }
}
