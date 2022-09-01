<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Api\BaseController;
use App\Services\BusinessService;

class ServicesController extends BaseController
{
    
    public function index()
    {
        $service  = BusinessService::index(request());
        return $this->sendResponse($service, __('responseMessages.fetchServices'));
    }

    public function create()
    {
        $service  = BusinessService::store(request());
        return $this->sendResponse($service, __('responseMessages.createService'));
    }
    
    public function edit($id)
    {
        $service  = BusinessService::show($id);
        return $this->sendResponse($service, __('responseMessages.fetchServices'));
    }

    public function update()
    {
        $serviceUpdate  = BusinessService::update(request());
        return $this->sendResponse($serviceUpdate, __('responseMessages.updateService'));
    }

    public function updateStatus($id)
    {
        $updateServiceStatus   = BusinessService::updateStatus($id);
        return $this->sendResponse($updateServiceStatus, __('responseMessages.updateService'));
    }
   
}
