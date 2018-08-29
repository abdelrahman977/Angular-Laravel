<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/*
|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
*/
Route:: get ('/getCurrentUser',[
    'uses'=>'UserController@getCurrentUser',
    'middleware' => 'auth.jwt'
]);
Route:: post ('/signup',[
    'uses'=>'UserController@signup'
]);
Route:: post ('/signin',[
    'uses'=>'UserController@signin',
]);

/*
|--------------------------------------------------------------------------
| Tasks Routes
|--------------------------------------------------------------------------
*/
Route:: post ('/addTask',[
    'uses'=>'TaskController@addTask',
    'middleware' => 'auth.jwt'
]);
Route:: get ('/getTasks',[
    'uses'=>'TaskController@getTasks',
    'middleware' => 'auth.jwt'
]);
Route:: patch('/checkOrUncheck',[
    'uses'=>'TaskController@checkOrUncheck',
]);
Route:: patch('/deleteTask',[
    'uses'=>'TaskController@deleteTask',
]);
Route:: patch('/updateTask',[
    'uses'=>'TaskController@updateTask',
]);

