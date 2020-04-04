<?php
namespace App\Connection;
use MongoDB\Client as Client;
use MongoDB\Collection as Collection;
use MongoDB\Database as DB;
use MongoDB\BSON\ObjectId as ID;

interface UtilApi{
  function condicionanteReturn($response);
}

class Mongo implements UtilApi{
    protected $dbName;
    protected $connection;
    protected $uri = "mongodb://192.168.1.148:27011/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
    protected $collectionDefinition = array(
      'capped' => true,
      'size'   => 10*1024
    );
    public function __construct($databaseName){
      $this->dbName = $databaseName;
    }

    function condicionanteReturn($response){
      $code = ($response == 1 ? 200: 401);
      return $code;
    }

    public function updateCollection(){
      return  array("code" => 201, "msg"=>"collection not enable to update!");
    }

  public function deleteCollection($collectionName){
      return array("code" => 405, "msg"=>"please contact administrator to delete ".$collectionName."!");
    }
    protected function Connect(){
      $conn= new Client($this->uri);
      return $conn;
    }

    protected function getDataBase(){
      $conn = $this->Connect();
      $manager = $conn->getManager();
      $dataBase = new DB($manager, $this->dbName);
      try {
        return $conn->$dataBase;
      } catch (\Exception $e) {
        return array("code" => 505, "msg" => "couldn't connect to data base");
      }
    }

    protected function createCollection($collectionName){
      $dataBase = $this->getDataBase();
      if (!is_array($dataBase)) {
        try {
          $collection = (array) $dataBase->createCollection($collectionName);
          $collection = array("code" => 200, "msg"=>"success created!");
        } catch (\Exception $e) {
          $collection = array("code" => 200, "msg"=>"collection already exist!");
        }
        return $collection;
      }else{
        return $dataBase;
      }

    }

    protected function listCollectionIndexes($collectionName){
      $dataBase = $this->getDataBase();
      if (!is_array($dataBase)) {
        try {
          $collectionIndexList = (array) $dataBase->listCollections();
          $response = (count($collectionIndexList) == 0 ? "Empty collection, no index yet!": $collectionIndexList);
          $collectionIndexList = array("code" => 200, "msg"=>$response);
        } catch (\Exception $e) {
          $collectionIndexList = array("code" => 401, "msg"=>"collection already exist!");
        }
        return $collectionIndexList;
      }else{
        return $dataBase;
      }
    }

    protected function find($collectionName = "", $params = []){
      $dataBase = $this->getDataBase();
      if (!is_array($dataBase)) {
        try {
          $collection = $dataBase->$collectionName;
          $findUser = (count($params) > 1 ? $collection->find($params): $collection->find());
          $response = array("code" => 200, "msg"=>$findUser);
        } catch (\Exception $e) {
          $response = array("code" => 401, "msg"=>"User not found!");
        }
        return $response;
      }else{
        return $dataBase;
      }
    }


}

