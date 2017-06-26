var $ = require('jquery')
var counter = 0


$('#catImg').click(function() {
	counter += 1
	showCounter()
})

showCounter = function() {
	$('#counter').html('Cat was clicked ' + counter + ' times' )
}