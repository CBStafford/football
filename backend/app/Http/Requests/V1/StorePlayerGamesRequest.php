<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;

class StorePlayerGamesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => ['required', 'integer'],
            'year' => ['required', 'date'],
            'week' => ['required', 'integer'], 	
            'game' => ['required', 'integer'],	
            'v_score' => ['required', 'integer'], 	
            'h_score' => ['required', 'integer'], 	
            'total' => ['required', 'integer'],
            'spread' => ['required', 'integer'], 	
            'winner' => ['required', 'string', 'max:1'],		
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'user_id' => $this->userId,
            'v_score' => $this->vScore,
            'h_score' => $this->hScore,
        ]);
    }
}
