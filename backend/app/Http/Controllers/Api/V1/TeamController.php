<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Requests\V1\StoreTeamRequest;

use App\Models\Team;
use Exception;

class TeamController extends Controller
{
    use HttpResponses;

    // public function index()
    // {
    //     return Team::all();
    // }

    public function show($id)
    {   
        try{
            $viewData = [];
            return Team::findOrFail($id);
        }
        catch(Exception $e){
            echo "Your team could not be found. \n" . $e->getMessage();
        }        
    }

    public function store(StoreTeamRequest $request)
    {
        try{

        $team = Team::create($request->validated());

        //NOTE - Fill the array with data, its required
         return $this->success([
            $team->name
        ]);

        }catch(Exception $e){
            echo "This is an Exception!!!!! \n" . $e->getMessage();
        }
    }
}
