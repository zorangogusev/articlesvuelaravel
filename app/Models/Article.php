<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'title', 'body'];

    public function user()
    {
        $this->belongsTo(User::class, 'user_id', 'id');
    }
}
