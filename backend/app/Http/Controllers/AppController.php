<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AppController extends Controller
{

    public function getAllUsers(): \Illuminate\Http\JsonResponse
    {
        return response()->json(User::all()->toArray());
    }

    public function saveUser(Request $request)
    {
        $data = [];
        $result = 1;
        try {
            $newUser = new User;
            $newUser->name = $request->name;
            $newUser->city = $request->city;
            $newUser->sex = $request->sex;
            $newUser->email = $request->email;
            $newUser->age = $request->age;
            $newUser->save();
        } catch(\Exception $e) {
            $result = $e->getCode();
        }

        if($result === 1) {
            $token = $newUser->createToken('auth_token')->plainTextToken;
            $data['access_token'] = $token;
        }

        $data['result'] = $result;

        return response()->json($data);
    }
}
