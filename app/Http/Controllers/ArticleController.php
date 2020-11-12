<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Http\Resources\Article as ArticleResource;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::where('user_id', auth()->user()->id)->orderBy('created_at', 'desc')->paginate(3);

        return ArticleResource::collection($articles);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->isMethod('put')) {
            if($request->user_id !== auth()->user()->id) return response()->json('Unauthorized', 401);
            $article = Article::findOrFail($request->article_id);
        } else {
            $article = new Article();
        }

        $article->id = $request->input('article_id');
        $article->user_id = auth()->user()->id;
        $article->title = $request->input('title');
        $article->body = $request->input('body');

        if($article->save()) return new ArticleResource($article);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $article = Article::findOrFail($id);

        return new ArticleResource($article);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $article = Article::findOrFail($id);

        if($article->user_id !== auth()->user()->id) return response()->json('Unauthorized', 401);

        if($article->delete()) return new ArticleResource($article);
    }

    public function home()
    {
        $articles = Article::orderBy('created_at', 'desc')->paginate(3);

        return ArticleResource::collection($articles);
    }
}
