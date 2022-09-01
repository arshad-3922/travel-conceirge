<?php

namespace App\Services;
use App\Models\User;
class DashboardService {

    public static function getUsers()
	{
	  return User::with('user_role')->whereHas('user_role',function($query){
		  $query->where('role_id','!=',1);
	  })->orderby('id','DESC')->get();
	}

	public static function getRecentUsers()
	{
		return User::orderby('id','DESC')->take(10)->get();
	}

	public static function getGraphData()
	{
		$year = request('year', date('Y'));
		$from = $year . '-01-01 00:00:00';
		$to   = $year . '-12-31 00:00:00';
		$data  = User::selectRaw('MONTH(created_at) as month, COUNT(id) as count')
			->whereBetween('created_at', [$from, $to])
			->groupBy('month')
			->get();		
		$temp = [];
		$totalSum = 0;
		for ($i = 1; $i <= 12; $i++){
			$row = $data->where('month', $i)->first();
			$totalSum +=  (int)($row ? $row->count:0);
			$temp[] = $row? $row->count: 0;
		}

		return $temp;
	}

}

?>