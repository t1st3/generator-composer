<?php
class <%= projectName %>Test extends PHPUnit_Framework_TestCase
{

	public function testCanBeNegated () {
		require_once(dirname(dirname(__FILE__)) . '/src/<%= projectName %>.php');
		$a = new <%= projectName %>();
		$a->increase(9)->increase(8);
		$b = $a->negate();
		$this->assertEquals(0, $b->myParam);
	}

}
?>