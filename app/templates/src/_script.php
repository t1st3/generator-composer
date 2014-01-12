<?php
/**
 * URL: https://github.com/<%= githubAccount %>/<%= projectName %>
 * Author: <%= githubAccount %>
 * Version: <%= projectVersion %>
 * License: https://github.com/<%= githubAccount %>/<%= projectName %>/blob/master/LICENSE
 * 
 */

require(dirname(dirname((__FILE__)) . '/vendor/autoload.php');
/**
 * @package <%= projectName %>
 */
class <%= projectName %> {

	/**
	 * @property number $myParam This is my parameter
	 */
	public $myParam = 0;

	/**
	 * @method increase
	 * @name increase
	 * @param number $n The number to add to $myParam
	 * @since 0.1.0
	 */
	public function increase ( $n ) {
		$this->myParam += $n;
		return $this;
	}

	/**
	 * @method negate
	 * @name negate
	 * @since 0.1.0
	 */
	public function negate (){
		$this->myParam = 0;
		return $this;
	}
}
?>