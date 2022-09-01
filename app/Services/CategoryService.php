<?php

namespace App\Services;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryService{

    public static function index(Request $request)
    
      {
        $category = new Category();
        if(request()->filled('from') && request()->filled('to')) {
            $category = $category->where(function ($q) {
                $q->where('created_at', '>=', request('from'))
                    ->where('created_at', '<=', request('to'));
            });
        }
        if (request()->filled('search')) {
            $category = $category->where('name', 'like', "%" . request('search') . "%");
        }
         if(request()->filled('status')){
            $category = $category->where('status',$request->status);
        }
        if (request()->filled('page')) {
            $category = $category->latest('id')->paginate(request('entries', 10));
        } else {
            $category = $category->paginate($request->entries);
        }
        return $category;
    }

    public static function store(Request $request)
    {
        return Category::create([
            'name'  =>$request->name,
            'status'=>$request->status
        ]);
    }

    public static function show($id)
    {
        return Category::find($id);
    }

    public static function update(Request $request)
    {
        return Category::where('id',$request->id)->update([
            'name'  =>$request->name,
            'status'=>$request->status
        ]);
    }

    public static function updateStatus($id)
    {
        $category = Category::whereId($id)->first();
        Category::whereId($id)->update([
            'status' => ($category->status == 1) ? 0 : 1
        ]);
        $data = array();
        $data['status'] = ($category->status == 1) ? 0 : 1;
        $data['id']     = $id;

        return $data;
    }


}