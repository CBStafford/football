<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Team extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'league_id',
        'user_id',
        'display_name',
        'name',
        'primary_color',
        'secondary_color',
        'triciary_color',

    ];
}
