<?php
/**
 * <%= projectName %>
 * @package <%= objectName %>
 * @version <%= projectVersion %>
 * @link https://github.com/<%= githubAccount %>/<%= projectName %>
 * @author <%= githubAccount %> <https://github.com/<%= githubAccount %>>
 * @license https://github.com/<%= githubAccount %>/<%= projectName %>/blob/master/LICENSE
 * @copyright Copyright (c) 2014, <%= githubAccount %> 
 */

require(dirname(dirname(dirname(dirname(__FILE__)))) . '/vendor/autoload.php');

namespace <%= githubAccount %>\<%= objectName %>;

/**
 * The <%= objectName %> class
 * @author <%= githubAccount %> <https://github.com/<%= githubAccount %>>
 * @since 0.1.0
 */
class <%= objectName %> {

	/**
	 * A sample parameter
	 * @var int $myParam This is my parameter
	 * @since 0.1.0
	 */
	public $myParam = 0;

	/**
	 * A sample function that adds the $n param to $myParam
	 * @name increase
	 * @param int $n The number to add to $myParam
	 * @since 0.1.0
	 * @return object the <%= objectName %> object
	 */
	public function increase ( $n ) {
		$this->myParam += $n;
		return $this;
	}

	/**
	 * A sample function that sets $myParam to 0
	 * @name negate
	 * @since 0.1.0
	 * @return object the <%= objectName %> object
	 */
	public function negate (){
		$this->myParam = 0;
		return $this;
	}
}
?>