<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

use Illuminate\Support\Facades\DB;

class PlayerGames extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'user_id',
        'year',
        'week',
        'game',
        'v_score',
        'h_score',
        'total',
        'spread',
        'winner',
    ];

    public function SetScores($data, $userID, $week, $game){
        $total = $data['v'] + $data['h'];
        $spread = $this->GetSpread($data);
        $winner =  $this->GetWinner($data);

        DB::select(
            "insert into player_games
            (user_id, week, game, v_score, h_score, total, spread, winner)
            values
            (?,?,?,?,?,?,?,?)",

            [$userID, $week, $game, $data['v'], $data['h'], $total, $spread, $winner ]            
        );

        // return $league;
    }

    public function GetSpread($data){
        if($data['v'] > $data['h']){
            return $data['v'] - $data['h'];

        }elseif($data['v'] < $data['h']){
            return $data['h'] - $data['v'];

        }else{
            return 0;
        }
    }

    public function GetWinner($data){
        if(!$data['v'] || !$data['h']){
            return "n";
        }

        if($data['v'] > $data['h']){
            return "v";
        }elseif($data['v'] < $data['h']){
            return "h";
        }else{
            return "t";
        }
    }
}

