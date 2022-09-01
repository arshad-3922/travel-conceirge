<?php

namespace App\Console\Commands;

use App\Models\Hotel;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class HotelCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hotel:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command is used to update hotels information';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $apiKey = getenv("Apikey");
        $secret = getenv("secret");
        $currentTimeStamp = Carbon::now()->timestamp;
        $endPoint = "https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels";
        $fields   = "all";
        $language = "ENG";
        $from     = 1;
        $to       = 500;  
        $singnature =  hash('sha256',$apiKey.$secret.$currentTimeStamp);
        $response = Http::withHeaders([
            'Api-key'           => $apiKey,
            'X-Signature'       => $singnature,
            'Accept'            => 'application/json',
            'Accept-Encoding'   => 'gzip',
            ])
            ->get("$endPoint?fields=$fields&language=$language&from=$from&to=$to");
            $responseBody = json_decode($response->getBody(), true);

          if(count($responseBody))
          {

            $hotles  = $responseBody['hotels'];

            foreach($hotles as $data)
            {
               $hotelInfo = array( 
               'name'           => $data['name']['content'],
               'description'    => $data['description']['content'],
               'countryCode'    => $data['countryCode'],
               'stateCode'      => $data['stateCode'],
               'destinationCode'=> $data['destinationCode'],
               'zoneCode'       => $data['zoneCode'],
               'coordinates'    => $data['coordinates'],
               'categoryCode'   => $data['categoryCode'],
               'categoryGroupCode'  => $data['categoryGroupCode'],
               'chainCode'      => $data['chainCode'],
               'accommodationTypeCode'  => $data['accommodationTypeCode'],
               'boardCodes'     => $data['boardCodes'],
               'segmentCodes'   => $data['segmentCodes'],
               'amenityCodes'   => $data['amenityCodes'],
               'address'        => $data['address'],
               'postalCode'     => $data['postalCode'],
               'city'           => $data['city'],
               'email'          => $data['email'],
               'license'        => $data['license'],
               'phones'         => $data['phones'],
               'rooms'          => $data['rooms'],
               'facilities'     => $data['facilities'],
               'terminals'      => $data['terminals'],
               'issues'         => $data['issues'],
               'interestPoints' => $data['interestPoints'],
               'images'         => $data['images'],
               'wildcards'      => $data['wildcards'],
               'web'            => $data['web'],
               'lastUpdate'     => $data['lastUpdate'],
               'S2C'            => $data['S2C'],
               'ranking'        => $data['ranking']);
    
                Hotel::updateOrCreate($hotelInfo);
            }
          }     
    }
}
