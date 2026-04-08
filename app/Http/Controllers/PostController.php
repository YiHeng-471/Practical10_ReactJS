<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;

class PostController extends Controller

{    
    /* Display and return all posts from the database.*/
    public function index()
    { 
        return Post::all();
    } 

    // Show the form for creating a new post.
    public function create(Request $request)
    {       
        return view('post.create');        
    }

    // Store a newly created post in the database.
    public function store(Request $request)
    {       
        return Post::create($request->all());        
    }

    // Update an existing post by its ID.
    public function update(Request $request, $id)
    {
        //If the post does not exist, it will throw a ModelNotFoundException, 
        // which automatically returns a 404 HTTP response (Page not found).
        $post=Post::findOrFail($id);
        $post->update($request->all()); 
        return $post;
    }

    // Delete a post by its ID from the database.
    public function destroy($id)
    {
        $post=Post::findOrFail($id);
        $post->delete();
        return 204;
    }
}