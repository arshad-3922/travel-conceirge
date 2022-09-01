<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Api\BaseController;
use App\Services\VendorService;

class  VendorController extends BaseController
{
    public function index(VendorService $vendorService)
    {
        $store  = $vendorService::mystore();
        return $this->sendResponse($store, __('responseMessages.storeFetch'));
    }

    public function edit(VendorService $vendorService ,$id)
    {
        $store  = $vendorService::getStoreById($id);
        return $this->sendResponse($store, __('responseMessages.storeFetch'));
    }

    public function update(VendorService $vendorService)
    {
        $store  = $vendorService::updateStore(request());
        if($store)
        {
            return $this->sendResponse($store, __('responseMessages.updateStore'));
        }else{
            return $this->sendError(__('responseMessages.errorEditingStore'), false);
        }
    }

    public function create(VendorService $vendorService)
    {
        $product  = $vendorService::createProduct(request());
        if($product)
        {
          return $this->sendResponse($product, __('responseMessages.createProduct'));
        }else{
            return $this->sendError(__('responseMessages.errorEditingStore'), false);
        }
    }

    public function inventories(VendorService $vendorService)
    {
        $store  = $vendorService::getInventories(request());
        return $this->sendResponse($store, __('responseMessages.storeFetch'));
    }
}
