(function(){

var counter = 0, items, next, prev, numItems;
	next = document.querySelector('.next');
	prev = document.querySelector('.prev');
	items = document.querySelectorAll('.slideshow figure');
	numItems = items.length;

function showCurrent(){
	var itemsToShow = Math.abs(counter % numItems);
	for(var i = 0; i < numItems; i++){
		items[i].classList.remove('show');
	}
	items[itemsToShow].classList.add('show');
};


next.addEventListener('click', function(){
	counter++;
	showCurrent();	
});

prev.addEventListener('click', function(){
	counter--;
	showCurrent();
});


})();

