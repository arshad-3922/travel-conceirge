<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Models\Packages;
use App\Http\Controllers\Api\BaseController;
;
class PackageController extends BaseController
{
    public function index()
    {
        $subscriptions = Packages::all();
        return $this->sendResponse($subscriptions, __('responseMessages.fetchPackagesSuccessfully'));
    }

    public function create(Request $request)
    {  
    
        $createPackage = Packages::create([
            'name'         => $request->name,
            'amount'       => $request->amount,
            'duration'     => $request->duration,
            'type'         => $request->name, 
            'features'     => $request->features, 
            'description'  => $request->description,  
        ]);

        return $this->sendResponse($createPackage, __('responseMessages.createSubscription'));
    }

        public function getPackageById($id){
            $package     =  Packages::find($id);
            return $this->sendResponse($package, __('responseMessages.fetchPackegeSuccessfully'));
        }

        public function update(Request $request)
        {
        $package = Packages::whereId($request->id)->update([
            'name'         => $request->name,
            'amount'       => $request->amount,
            'description'  => $request->description,  
        ]);

        return $this->sendResponse($package, __('responseMessages.updateSubscription'));
    }
}
