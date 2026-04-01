<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return view('posts.index', ['posts' => $posts]); //posts.index means resources/views/posts/index
    }

    public function show(Post $post)
    {
        $posts = Post::all();
        return view('posts.show', ['posts' => $posts]);
    }

    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();
        return response()->json(['message' => 'Post deleted successfully']);
    }

    public function create()
    {
        if (Gate::allows('isAuthor')) {
            dd('Author allowed');
        } else {
            dd('You are not an Author');
        }
    }
    public function edit()
    {
        if (Gate::allows('isAuthor')) {
            dd('Author allowed');
        } else {
            dd('You are not an Author');
        }
    }
    public function delete()
    {
        if (Gate::allows('isAdmin') || Gate::allows('isAuthor')) {
            dd('Admin and Author allowed');
        } else {
            dd('You are not Admin and Author');
        }
    }
}
