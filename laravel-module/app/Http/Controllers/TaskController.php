<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\User;
use input;
use DB;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
class TaskController extends Controller
{
    public function addTask(Request $request)
    {
        $this->validate($request,[
            'title'=>'required',
        ]);
      $title = $request->input('title');
      $description = $request->input('description');
      $isChecked = $request->input('isChecked');
      $user = JWTAuth::parseToken()->toUser();
      $userid =  $user->id;
      DB::insert('insert into tasks (title,description, isChecked,user) values (?,?,?,?)',[$title,$description, $isChecked, $userid]);
      return response()->json([
          'message'=>'task is Successfully created!'
      ],201);
    }
    public function getTasks(Request $request)
    {
      $user = JWTAuth::parseToken()->toUser();
      $userid =  $user->id;
      $Tasks = DB::select('select * from tasks where user =?',[$userid]);
      return response()->json(
        $Tasks
      ,201);
    }
    public function checkOrUncheck(Request $request)
    {
      $taskId = $request->id;
      $isChecked =  $request->isChecked;
      $isChecked = !$isChecked;
      DB::update('update tasks set isChecked = ? where id = ?', [$isChecked,$taskId]);
      return response()->json([
      'id' =>  $taskId,
      'isChecked' => $isChecked,
      'message' => 'Successfully updated']
      ,201);
    }
    public function deleteTask(Request $request)
    {
      $taskId = $request->id;
      DB::delete('delete from tasks where id = ?', [$taskId]);
      return response()->json([
      'message' => 'Successfully deleted']
      ,201);
    }
    public function updateTask(Request $request)
    {
      $taskId = $request->id;
      $description =  $request->description;
      DB::update('update tasks set description = ? where id = ?', [$description,$taskId]);
      return response()->json([
        'id' =>  $taskId,
        'description' => $description,
      'message' => 'Task successfully updated']
      ,201);
    }
}
