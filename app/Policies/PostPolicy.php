<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    use HandlesAuthorization;


    public function viewAny(User $user)
    {
        return true; // Allow all users to view any post
    }


    public function view(User $user, Post $post)
    {
        return $user->id === $post->user_id; //Only the owner can view the post
    }


    public function create(User $user)
    {
        return $user->role === 'author'; // Only authors can create posts
    }


    public function update(User $user, Post $post)
    {
        return $user->id === $post->user_id; // Only the owner can update the post
    }


    public function delete(User $user, Post $post)
    {
        return $user->id === $post->user_id || $user->role === 'admin'; // Only the owner or admin can delete the post
    }


    public function restore(User $user, Post $post)
    {
        //
    }


    public function forceDelete(User $user, Post $post)
    {
        //
    }
}
