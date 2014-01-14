<?php
require_once(dirname(dirname(__FILE__)) . '/src/<%= githubAccount %>/<%= objectName %>/<%= objectName %>.php');
use <%= githubAccount %>/<%= objectName %>/<%= objectName %> as myClass

class <%= objectName %>Test extends PHPUnit_Framework_TestCase
{
	public function testCanBeNegated () {
		$a = new myClass();
		$a->increase(9)->increase(8);
		$b = $a->negate();
		$this->assertEquals(0, $b->myParam);
	}

}
?>