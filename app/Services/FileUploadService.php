<?php

namespace App\Services;
use Carbon\Carbon;
class FileUploadService{

    public static function uploadImages($files,$folder)
    {
            if(isset($files)){
                $file_photo = $files;
                $timestamp  = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());
                $image   = $timestamp.'-'.str_replace([' ', ':'], '-', $file_photo->getClientOriginalName());
                $file_photo->move(public_path('assets/upload/'.$folder.'/'), $image );
                return $image;
            }
            return false;
     }

    public static function uploadfile($file,$folder)
    {
        $data = $file;
        $thumbnail_array_1 = explode(";", $data);
        $thumbnail_array_2 = explode(",", $thumbnail_array_1[1]);
        $data = base64_decode($thumbnail_array_2[1]);
        $thumbnailName = time() . '.png';
        $thumbnailNameToSave = public_path()."/assets/upload/$folder/$thumbnailName";
        $thumbnailSaved  = file_put_contents($thumbnailNameToSave, $data);  
        if ($thumbnailSaved !== false) {
           return $thumbnailName;
        } else {
            return '';
        }
    }
}