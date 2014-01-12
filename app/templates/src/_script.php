<?php
/*
 * URL: https://github.com/<%= githubAccount %>/<%= projectName %>
 * Author: <%= githubAccount %>
 * Version: <%= projectVersion %>
 * License: https://github.com/<%= githubAccount %>/<%= projectName %>/blob/master/LICENSE
 * 
 */

class <%= projectName %> {

	public $myParam = 1;

	public function myMethod ( $n ){
		return $n + $myParam;
	}
}
?>