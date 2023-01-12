$(function(){
	var $gallery = $('.gallery a').simpleLightbox();

	$gallery.on('show.simplelightbox', function(){
		PrintLog('Requested for showing');
	})
	.on('shown.simplelightbox', function(){
		PrintLog('Shown');
	})
	.on('close.simplelightbox', function(){
		PrintLog('Requested for closing');
	})
	.on('closed.simplelightbox', function(){
		PrintLog('Closed');
	})
	.on('change.simplelightbox', function(){
		PrintLog('Requested for change');
	})
	.on('next.simplelightbox', function(){
		PrintLog('Requested for next');
	})
	.on('prev.simplelightbox', function(){
		PrintLog('Requested for prev');
	})
	.on('nextImageLoaded.simplelightbox', function(){
		PrintLog('Next image loaded');
	})
	.on('prevImageLoaded.simplelightbox', function(){
		PrintLog('Prev image loaded');
	})
	.on('changed.simplelightbox', function(){
		PrintLog('Image changed');
	})
	.on('nextDone.simplelightbox', function(){
		PrintLog('Image changed to next');
	})
	.on('prevDone.simplelightbox', function(){
		PrintLog('Image changed to prev');
	})
	.on('error.simplelightbox', function(e){
		PrintLog('No image found, go to the next/prev');
		PrintLog(e);
	});

	var $gallery1 = $('.gallery1 a').simpleLightbox();

	$gallery1.on('show.simplelightbox', function(){
		PrintLog('Requested for showing');
	})
	.on('shown.simplelightbox', function(){
		PrintLog('Shown');
	})
	.on('close.simplelightbox', function(){
		PrintLog('Requested for closing');
	})
	.on('closed.simplelightbox', function(){
		PrintLog('Closed');
	})
	.on('change.simplelightbox', function(){
		PrintLog('Requested for change');
	})
	.on('next.simplelightbox', function(){
		PrintLog('Requested for next');
	})
	.on('prev.simplelightbox', function(){
		PrintLog('Requested for prev');
	})
	.on('nextImageLoaded.simplelightbox', function(){
		PrintLog('Next image loaded');
	})
	.on('prevImageLoaded.simplelightbox', function(){
		PrintLog('Prev image loaded');
	})
	.on('changed.simplelightbox', function(){
		PrintLog('Image changed');
	})
	.on('nextDone.simplelightbox', function(){
		PrintLog('Image changed to next');
	})
	.on('prevDone.simplelightbox', function(){
		PrintLog('Image changed to prev');
	})
	.on('error.simplelightbox', function(e){
		PrintLog('No image found, go to the next/prev');
		PrintLog(e);
	});


});