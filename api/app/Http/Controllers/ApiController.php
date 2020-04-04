<?php
/******************************************************
  Author: @annralf -  Ana Rafaela Guere
  Date: 02 April 2020
******************************************************/
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Dictionary;

class ApiController extends Controller{

  public function getWord(Request $request){
    $dictionary = new Dictionary();
    if($request->get('letters') &&  $request->get('limit') &&  $request->get('lang')){
      $letters = $request->get('letters');
      $limit = $request->get('limit');
      $lang = $request->get('lang'); //es, en, en-es
      $letters_arr = str_split(strtolower($letters));
      $result = $dictionary->getWord($letters_arr, $limit, $lang);
      $response = (new Response($result, 200));
    }else {
      $response = (new Response("Por favor, verifique que los valores enviados sean los correctos ['string' => letters, 'idioma' => lang, 'limite de letras' => limit]", 404));
    }
    return $response;
  }
}
?>
