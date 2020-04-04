<?php
/******************************************************
  Author: @annralf
  Date: 02 mApril 2020
  Dictionaries data driven
******************************************************/
namespace App\Models;

class Dictionary {
    protected $en;
    protected $es;
    private $es_url;
    private $en_url;

    public function __construct(){
        $this->es_url = "/var/www/html/app/Models/Data/es.txt";
        $this->en_url = "/var/www/html/app/Models/Data/en.txt";
    }

    public function getDictionary($lang){
        if($lang == "en-es"){
            $url = ["es","en"];
        }else{
            $url= [$lang];
        }
        foreach($url as &$lg){
            $url_name= $lg."_url";
            $dict_file = fopen($this->{$url_name}, "r");
            $dic = [];
            while(!feof($dict_file)){
                $data_dic = fgets($dict_file);
                array_push($dic, $data_dic); 
            }
            $this->{$lg} = $dic;
        }
        return 1;
    }

    public function ramdomWord($condition){
        $lang = $condition['lang'];
        if($lang != 'en-es'){
            $dic = $this->{$lang};
        }else{
            $dic = array_merge($this->en, $this->es);
        }
        $limit = $condition['limit'];
        $dic = array_filter($dic, function($elem) use($limit){
            if (strlen(trim($elem)) == $limit) {
                return $elem;
            }
        });
        $list = [];
        foreach ($dic as &$valor) {
            $comp = str_split($valor);
            $result = array_intersect($condition['array'],$comp);
            if(count($result) == count($comp)){
                $word = htmlentities(trim($valor));
                if(strlen($word) > 0){
                    array_push($list, $word);

                }
            }
        }
        return $list;
    }

    public function getWord($array_word, $limit, $lang){
        $this->getDictionary($lang);
        $condition = ["lang" => $lang, "array" => $array_word, "limit" => $limit];
        $result = $this->ramdomWord($condition);
        return $result;
    }
}

// $lol = new Dictionary();
// $array = str_split(strtolower("TJEUINGRTSDA"));
// print_r($lol->getWord($array, 7, "es"));