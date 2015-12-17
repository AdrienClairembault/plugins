
<?php

require __DIR__.'/../api/vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as DB;

\API\Core\DB::initCapsule();

$authors = DB::table('author')->get();

foreach ($authors as $author) {
	$fromAuthor = false;
	$user = DB::table('user')->where('author_id', '=', $author->id)->first();
	if (!$user) {
		$user = DB::table('user')->insert([
			'realname' => $author->name
		]);
      $fromAuthor = true;
   }

   if ($fromAuthor) {
      $plugins = DB::table('plugin_author')
                   ->where('author_id', '=', $author->id)
                   ->get();

   } else {
      $plugins = DB::table('');
      // move out of plugin_author every
      // entry that is already 
   }

   foreach ($plugins as $plugin) {
      // DB::table('plugin_status')
      //   ->insert([
      //       'plugin_id' => $plugin->plugin_id,
      //       'user_id' => $user->id,
      //       'contributor' => 1
      //    ]);
   }
   
   // DB::table('author')
   //   ->destroy($author->id);
}