<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;

class StoreTeamRequest extends FormRequest
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
            'league_id' => ['required', 'integer'],
            'user_id' => ['required', 'integer'],
            'display_name' => ['required', 'string'],
            'name' => ['required', 'string'],
            'primary_color' => ['required', 'string'],
            'secondary_color' => ['required', 'string'],
            'triciary_color' => ['required', 'string'],
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'league_id' => $this->leagueId,
            'user_id' => $this->userId,
            'display_name' => $this->displayName,
            'name' => $this->name,
            'primary_color' => $this->primaryColor,
            'secondary_color' => $this->secondayColor,
            'triciary_color' => $this->triciaryColor,
        ]);
    }
}
