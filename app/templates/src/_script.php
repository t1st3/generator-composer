<?php
/**
 * URL: https://github.com/<%= githubAccount %>/<%= projectName %>
 * Author: <%= githubAccount %>
 * Version: <%= projectVersion %>
 * License: https://github.com/<%= githubAccount %>/<%= projectName %>/blob/master/LICENSE
 * 
 */

namespace <%= githubAccount %>\<%= objectName %>;

require(dirname(dirname(dirname(dirname(__FILE__)))) . '/vendor/autoload.php');

/**
 * @package <%= objectName %>
 */
class <%= objectName %> {

	/**
	 * @property int $myParam This is my parameter
	 */
	public $myParam = 0;

	/**
	 * @name increase
	 * @param int $n The number to add to $myParam
	 * @since 0.1.0
	 */
	public function increase ( $n ) {
		$this->myParam += $n;
		return $this;
	}

	/**
	 * @name negate
	 * @since 0.1.0
	 */
	public function negate (){
		$this->myParam = 0;
		return $this;
	}
}
?>