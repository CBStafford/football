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
        $teams =  $this->getTeams($id);
        // print_r($teams);
        $profileArr['teams'] = $teams['teams'];
        $profileArr['lteams'] = $teams['lteams'];
        $profileArr['scores']= $this->getScores($id);
        $profileArr['officialscores']= $this->getOfficialScores();
        

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
        $lteams = [];
        $teams = DB::select(
            "select 
            t.name as teamName, t.display_name as owner,
            l.id as leagueId, l.name as leagueName
            from teams as t
            inner join leagues as l on l.id = t.league_id
            where user_id = ?",

            [$user_id]            
        );

        foreach($teams as $key => $team){
            $x = $this->getleague($team->leagueId);
            array_push($lteams, $x);
        }
        
        return ['teams'=> $teams, 'lteams'=> $lteams];
    }   

    private function getleague($league_id){
        $league = DB::select(
            "select 
            t.name as teamName, t.display_name as owner, league_id 
            from teams as t
            where league_id = ?",

            [$league_id]            
        );

        return $league;
    }   

    private function getScores($user_id){
        $scores = DB::select(
            "select year, week, game, v_score, h_score, total, spread, winner, locked
            from player_games
            where user_id = ?
            order by game",

            [$user_id]            
        );

        return $scores;
    }   

    private function getOfficialScores(){
        $scores = DB::select(
            "select year, week, game, Kickoff, date, tv, visitor, v_score, home, h_score, total, spread, winner
             from nfl_games"           
        );

        return $scores;
    } 


}
