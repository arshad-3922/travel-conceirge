<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{

    public function home(){
        return view('home');
    }

    public function aboutUs(){
        return view('about-us');
    }

    public function contactUs(){
        return view('contact-us');
    }

    public function faqs(){
        return view('faqs');
    }

    public function requestForDemo(){
        return view('request-for-demo');
    }
}
