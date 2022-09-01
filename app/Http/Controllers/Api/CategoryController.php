<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
//Libraries
use App\Http\Controllers\Api\BaseController;
use App\Services\CategoryService;

class CategoryController extends BaseController
{
    public function index()
    {
        $category  = CategoryService::index(request());
        return $this->sendResponse($category, __('responseMessages.fetchSessionSuccessfully'));
    }

    public function create()
    {  
        $createCategory  = CategoryService::store(request());
        return $this->sendResponse($createCategory, __('responseMessages.createCategory'));
    }

    public function updateStatus($id)
    {
        $updateCategory  = CategoryService::updateStatus($id);
        return $this->sendResponse($updateCategory, __('responseMessages.updateCategory'));
    }

    public function getCategoriesById ($id)
    {
         $category =  CategoryService::show($id);
         return $this->sendResponse($category, __('responseMessages.createdCategorySuccessfully'));
    }

     public function updateCategory()
     {
        $updateCategory  = CategoryService::update(request());
        return $this->sendResponse($updateCategory, __('responseMessages.updateCategory'));
     }

     public function subcategory(Request $request)
     {
            return $sub_categories = SubCategory::where('category_id',$request->category)->get();
     }

}
