<?php

namespace App\Http\Controllers\Api;
use App\Services\SalesService;
use App\Http\Controllers\Api\BaseController;
class SalesController extends BaseController
{
    
    public function index(SalesService $salesService)
    {
        $shopOwners  = $salesService::getShopOwners(request());
        return $this->sendResponse($shopOwners, __('responseMessages.fetchShopOwners'));
    }

    public function show(SalesService $salesService ,$id)
    {
        $shopOwner  = $salesService::getShopOwner($id);
        return $this->sendResponse($shopOwner, __('responseMessages.fetchShopOwners'));
    }

    public function create(SalesService $salesService)
    {
        $craeteShopOwner  = $salesService::createShopOwner(request());
        return $this->sendResponse($craeteShopOwner, __('responseMessages.createShopOnwer'));
    }
}
