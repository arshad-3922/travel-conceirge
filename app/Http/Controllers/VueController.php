<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VueController extends Controller
{
 
    public function admin()
    {   
        return view('layouts.admin.app');
    } 

}
