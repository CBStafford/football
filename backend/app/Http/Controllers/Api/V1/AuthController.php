<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\StoreLoginRequest;
use App\Http\Requests\V1\StoreRegisterUserRequest;
use App\Models\User;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    use HttpResponses;

    public function login(StoreLoginRequest $request){
        $request->validated($request->all());  

        if(!Auth::attempt($request->only(['email', 'password']))){

            //NOTE this->error is from the HttpResponses trait.
            return $this->error('', 'Invalid Credentials Provided', 401);  
        }

        $user = User::where('email', $request->email)->first();

        //NOTE this->success is from the HttpResponses trait.
        return $this->success([
            'user' => $user, 
            'Token' => $user->createToken('API Token of '. $user->name )->plainTextToken
        ]);

    }

    public function register(StoreRegisterUserRequest $request){
        $request->validated($request->all());

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return $this->success([
            'user' => $user,
            'token' => $user->createToken('API Token of '. $user->name)->plainTextToken
        ]);
    }

    public function logout(){
        Auth::user()->currentAccessToken()->delete();

        return $this->success('', 'You have been logged out. Have a nice day! '. Auth::user()->id, 403);
    }
}
