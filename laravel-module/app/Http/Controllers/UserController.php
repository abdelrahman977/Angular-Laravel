<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\User;
use input;
use DB;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
class UserController extends Controller
{
    public function signup(Request $request)
    {
      $this->validate($request,[
          'username'=>'required',
          'email'=>'required|email|unique:users',//the unique work like this pass argument and the table name
          'password'=>'required|string|min:6'
      ]);
      $name = $request->input('username');
      $email = $request->input('email');
      $password =bcrypt($request->input('password'));
      DB::insert('insert into  users (name,email,password) values (?, ?,?)',[$name,$email, $password]);
      return response()->json([
          'message'=>'you have successfully signed up'
      ],201);
    }
    public function signin(Request $request)
    {
        $this->validate($request,[
            'email'=>'required|email',
            'password'=>'required'
        ]);
        
        $credentials = request(['email', 'password']);
        try{
            if (! $token = JWTAuth::attempt($credentials)){
                return response()->json([
                   'error'=>'invalid Usename or password'
                ]);
            }
        }catch(JWTException $exception){
            return response()->json([
                'error'=>'could not create token!'
             ],500);
        }
        return response()->json([
            'token'=> $token,
         ],200);;
    }
    public function getCurrentUser(){
        $user= JWTAuth::parseToken()->toUser();
        return response()->json([
            'username'=> $user->name,
            'email'=> $user->email
            ],200);

    }

}
