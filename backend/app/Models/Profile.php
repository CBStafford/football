<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Facades\DB;

class Profile extends Model
{
    use HasFactory;

    public function read($id){
        $profileArr =array();

        $profileArr['user'] = $this->getProfileData($id);
        $profileArr['teams'] = $this->getTeams($id);
        $profileArr['scores']= $this->getScores($id);

        return $profileArr ;
    }

    private function getProfileData($id){
        $profile = DB::select(
            "select id, name, email
            from users
            where id = ?",

            [$id]            
        );


        return $profile;
    }

    private function getTeams($user_id){
        $league = DB::select(
            "select 
            t.name as teamName, t.display_name as owner,
            l.id as leagueId, l.name as leagueName
            from teams as t
            inner join leagues as l on l.id = t.league_id
            where user_id = ?",

            [$user_id]            
        );


        return $league;
    }   

    private function getScores($user_id){
        $league = DB::select(
            "select year, week, game, v_score, h_score, total, spread, winner, locked
            from player_games
            where user_id = ?",

            [$user_id]            
        );


        return $league;
    }   


}
