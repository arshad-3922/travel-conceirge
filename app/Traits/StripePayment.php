<?php

namespace App\Traits;
use Illuminate\Http\booking;
use Session;
use Stripe;
use DB;

trait StripePayment
{
	public function stripe($card_number, $card_expiry, $cvv, $amount)
	{
			$card_expiry  = explode('/', $card_expiry);
			$card  = explode('-', $card_number);
			try{
				Stripe\Stripe::setApiKey('sk_test_6mb3q2e2DC5qsrTVlkX82lkQ00RqzFBxvP');
			
			$token = \Stripe\Token::create([
				'card' => [
					'number' 	=> $card[0],
					'exp_month' => $card_expiry[0],
					'exp_year'  => $card_expiry[1],
					'cvc'	 	=> $cvv
				]
			]);
			
			$charge = Stripe\Charge::create ([
				"amount" => $amount *100,
				"currency" => "eur",
				"source" => $token->id,
			      //  "customer" => $customer_id,
			      //  "type" => $type
			]);
				 return $charge;
			}
			catch (\Stripe\Error\Card $error) {

				return $data = array(
					'error'   =>true,
					'message' =>$error->getError()->message
				);

            } // Invalid parameters were supplied to Stripe's API

            catch (\Stripe\Error\InvalidRequest $error) {

				return $data = array(
					'error'   =>true,
					'message' =>$error->getError()->message
				);

            } // Authentication with Stripe's API failed

            catch (\Stripe\Error\Authentication $error) {

				return $data = array(
					'error'   =>true,
					'message' =>$error->getError()->message
				);
            } // Network communication with Stripe failed

            catch (\Stripe\Error\ApiConnection $error) {

				return $data = array(
					'error'   =>true,
					'message' =>$error->getError()->message
				);
            } // Display a very generic error to the user, and maybe send

            catch (\Stripe\Error\Base $error) {

				return $data = array(
					'error'   =>true,
					'message' =>$error->getError()->message
				);
            } 
            
			catch(\Stripe\Exception\CardException $error) {

				return $data = array(
					'error'   =>true,
					'message' =>$error->getError()->message
				);
			 } 

			 catch (\Exception $e) {
				return $e->getMessage();
            } 
            
		}
	}