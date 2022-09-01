<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Api\BaseController;
use App\Models\CMS;
use App\Models\CMSImages;
use Illuminate\Http\Request;

class CMSController extends BaseController
{
    public function index()
    {
        $cms_content  = CMS::with('images')->paginate(10);
        return $this->sendResponse($cms_content, __('responseMessages.fetchcmssuccefully'));
    }

    public function show($id)
    {
        $cms_content  = CMS::with('images')->findOrFail($id);
        return $this->sendResponse($cms_content, __('responseMessages.fetchcmssuccefully'));
    }

    public function update(Request $request , $id)
    {
        if(isset($request->image) ||  $request->image != null)
        {
            $image = $this->cmsUpload($request->image);
            $cmsUpdated = CMSImages::where('id',$id)->update([
                'image'    => $image
            ]);
        }

        if($cmsUpdated)
        {
            return $this->sendResponse($cmsUpdated, __('responseMessages.CMSUpdated'));
        }
       
    }

    public function delete($id)
    {
        $deleteCmsImage = CMSImages::where('id',$id)->delete();
        if($deleteCmsImage)
        {
            return $this->sendResponse($deleteCmsImage, __('responseMessages.CMSUpdated'));
        }
    }
}
