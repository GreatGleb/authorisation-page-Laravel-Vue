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
    public function saveUser(Request $request)
    {
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

        return $result;
    }
}
