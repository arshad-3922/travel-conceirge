<?php

namespace App\Notifications;
use Illuminate\Support\Collection;

class PushNotifications
{
    protected $url;
    protected $deviceIds;
    protected $headers;
    protected $result;
    protected $title;
    protected $body;
    protected $isFail;
    protected $isSuccess;
    protected $payload;
    protected $notificationType;

    function __construct()
    {
        $this->url = 'https://fcm.googleapis.com/fcm/send';
        $this->deviceIds = [];
        $this->headers = ['Authorization: key=AAAAosZP1Ic:APA91bGqVZzA1OEn1_QD9LI-M0eJm2OkHPtnRSt4KFQdememYcOghvRBNcUgo2NdkgcehEmmZFQqDESYte0HUevQWazZwJ6WDoJfDY_ea5B04crtzW5sSUaPkbRGsEMqLwZPor3lOkJE', 'Content-Type: application/json'];
    }

    function addDevice($id, $device_type)
    {
        $this->deviceIds[$id] = $device_type;
    }

    function addDevices($ids)
    {
        foreach($ids as $id => $device_type)
            $this->deviceIds[$id] = $device_type;
    }

    function send($title, $description, Array $payload = [])
    {
        $this->payload = $payload;

        $this->title = $title;
        $this->body = $description;
        $this->summary = $title;

        $AndroidDevices = collect($this->deviceIds)->filter(function($device){ return strtoupper($device) === 'ANDROID'; });

        $IOSDevices = collect($this->deviceIds)->filter(function($device){ return strtoupper($device) === 'IOS'; });
        // dd($this->payload);

        $this->sendAndroidNotification($AndroidDevices);

        $this->sendIOSNotification($IOSDevices);
    }

    private function preparePayload(Collection $devicesIds, $device_type)
    {
        $fields = array('registration_ids' => $devicesIds->keys());

        /*if(strtoupper($device_type) === 'ANDROID') {
            $fields['data'] = array_merge([
                'title' => $this->title,
                'body' => $this->body,
                'type' => $this->notificationType,
            ], $this->payload);
            $fields['priority'] = 'high';
            $fields['content_available'] = '1';
            $fields['icon'] = 'notifications_icon';
            $fields['color'] = '#FCBB2E';
        }

        if(strtoupper($device_type) === 'IOS')
        {
            $fields['notification'] = array_merge([
                'title' => $this->title,
                'body' => $this->description,
            ], $this->payload);
        }*/

        $fields['notification'] = [
            'title' => $this->title,
            'body' => $this->body,
            'summary' => $this->title,
            'content_available' => true,
            'icon' => 'notifications_icon',
            'priority' => 'high',
            'color' => '#FCBB2E',
        ];
        $fields['data'] = $fields['notification'] + $this->payload;

        return json_encode( $fields );
    }

    private function sendAndroidNotification(Collection $AndroidDevices)
    {
        if($AndroidDevices->isNotEmpty())
        {
            $payload = $this->preparePayload($AndroidDevices, "ANDROID");
            $this->push($payload);
        }
    }

    private function sendIOSNotification($IOSDevices)
    {
        $payload = $this->preparePayload($IOSDevices, "IOS");
        $this->push($payload);
    }

    public function push($data)
    {
        $this->data = $data;
        $ch = curl_init ();
        curl_setopt( $ch, CURLOPT_URL, $this->url );
        curl_setopt( $ch, CURLOPT_POST, true );
        curl_setopt( $ch, CURLOPT_HTTPHEADER, $this->headers );
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
        curl_setopt( $ch, CURLOPT_POSTFIELDS, $data );
        $result = curl_exec($ch);
        $result = json_decode($result);
        if($result)
        {
            $this->result = $result;
            $this->isSuccess = !! $result->success;
            $this->isFail = !! $result->failure;

            if(array_key_exists('error', $result->results))
                $this->error = $result->results['errors'];
        }
    }

    public function getResults()
    {
        return $this->result;
    }

    public function getData()
    {
        return json_decode($this->data, true);
    }
}
