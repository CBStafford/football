<?php
namespace App\Traits;

trait HttpResponses {
    protected function success($data, $message="Request was Successful",  $code=200){
        return response()->json([
            'status' => $code,
            'message' => $message,
            'data' => $data
        ], $code);
    }

    protected function error($data, $message='Error has occured',  $code){
        return response()->json([
            'status' => $code,
            'message' => $message,
            'data' => $code
        ], $code);
    }
}