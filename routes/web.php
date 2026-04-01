<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\PostController;

Route::get('/posts/create', [PostController::class, 'create']);
Route::get('/posts/edit', [PostController::class, 'edit']);
Route::get('/posts/delete', [PostController::class, 'delete']);

Route::view('/', 'welcome');
Auth::routes();
Route::get('/login/admin', [LoginController::class, 'showAdminLoginForm']);
Route::get('/login/author', [LoginController::class, 'showAuthorLoginForm']);
Route::get('/register/admin', [RegisterController::class, 'showAdminRegisterForm']);
Route::get('/register/author', [RegisterController::class, 'showAuthorRegisterForm']);
Route::post('/login/admin', [LoginController::class, 'adminLogin']);
Route::post('/login/author', [LoginController::class, 'authorLogin']);
Route::post('/register/admin', [RegisterController::class, 'createAdmin']);
Route::post('/register/author', [RegisterController::class, 'createAuthor']);
Route::group(['middleware' => 'auth:author'], function () {
    Route::view('/author', 'author');
});
Route::group(['middleware' => 'auth:admin'], function () {
    Route::view('/admin', 'admin');
});
Route::get('logout', [LoginController::class, 'logout']);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
