/*
* debouncedresize: special jQuery event that happens once after a window resize
*
* latest version and complete README available on Github:
* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
*
* Copyright 2011 @louis_remi
* Licensed under the MIT license.
*/
var $event = $.event,
$special,
resizeTimeout;

$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
				$event.dispatch.apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 500
};

// ======================= imagesLoaded Plugin ===============================
// https://github.com/desandro/imagesloaded

// $('#my-container').imagesLoaded(myFunction)
// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images

// callback function gets image collection as argument
//  this is the container

// original: MIT license. Paul Irish. 2010.
// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

// blank image data-uri bypasses webkit log warning (thx doug jones)
var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

$.fn.imagesLoaded = function( callback ) {
	var $this = this,
		deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
		hasNotify = $.isFunction(deferred.notify),
		$images = $this.find('img').add( $this.filter('img') ),
		loaded = [],
		proper = [],
		broken = [];

	// Register deferred callbacks
	if ($.isPlainObject(callback)) {
		$.each(callback, function (key, value) {
			if (key === 'callback') {
				callback = value;
			} else if (deferred) {
				deferred[key](value);
			}
		});
	}

	function doneLoading() {
		var $proper = $(proper),
			$broken = $(broken);

		if ( deferred ) {
			if ( broken.length ) {
				deferred.reject( $images, $proper, $broken );
			} else {
				deferred.resolve( $images );
			}
		}

		if ( $.isFunction( callback ) ) {
			callback.call( $this, $images, $proper, $broken );
		}
	}

	function imgLoaded( img, isBroken ) {
		// don't proceed if BLANK image, or image is already loaded
		if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
			return;
		}

		// store element in loaded images array
		loaded.push( img );

		// keep track of broken and properly loaded images
		if ( isBroken ) {
			broken.push( img );
		} else {
			proper.push( img );
		}

		// cache image and its state for future calls
		$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

		// trigger deferred progress method if present
		if ( hasNotify ) {
			deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
		}

		// call doneLoading and clean listeners if all images are loaded
		if ( $images.length === loaded.length ){
			setTimeout( doneLoading );
			$images.unbind( '.imagesLoaded' );
		}
	}

	// if no images, trigger immediately
	if ( !$images.length ) {
		doneLoading();
	} else {
		$images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
			// trigger imgLoaded
			imgLoaded( event.target, event.type === 'error' );
		}).each( function( i, el ) {
			var src = el.src;

			// find out if this image has been already checked for status
			// if it was, and src has not changed, call imgLoaded on it
			var cached = $.data( el, 'imagesLoaded' );
			if ( cached && cached.src === src ) {
				imgLoaded( el, cached.isBroken );
				return;
			}

			// if complete is true and browser supports natural sizes, try
			// to check for image status manually
			if ( el.complete && el.naturalWidth !== undefined ) {
				imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
				return;
			}

			// cached images don't fire load sometimes, so we reset src, but only when
			// dealing with IE, or image is complete (loaded) and failed manual check
			// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
			if ( el.readyState || el.complete ) {
				el.src = BLANK;
				el.src = src;
			}
		});
	}

	return deferred ? deferred.promise( $this ) : $this;
};

var Grid = (function() {

		// list of items
		console.log($( '#og1-grid' ));
	var $grid1 = $( '#og1-grid' ),
		// the items
		$items1 = $grid1.children( 'li' ),
		// current expanded item's index
		current1 = -1,
		// position (top) of the expanded item
		// used to know if the preview will expand in a different row
		previewPos1 = -1,
		// extra amount of pixels to scroll the window
		scrollExtra1 = 0,
		// extra margin when expanded (between preview overlay and the next items)
		marginExpanded1 = 10,
		$window1 = $( window ), winsize1,
		$body1 = $( 'html, body' ),
		// transitionend events
		transEndEventNames1 = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},
		transEndEventName1 = transEndEventNames1[ Modernizr.prefixed( 'transition' ) ],
		// support for csstransitions
		support1 = Modernizr.csstransitions,
		// default settings
		settings1 = {
			minHeight : 400,
			speed : 350,
			easing : 'ease'
		};

	function init( config ) {
		
		// the settings..
		settings1 = $.extend( true, {}, settings1, config );

		// preload all images
		$grid1.imagesLoaded( function() {

			// save item´s size and offset
			saveItemInfo( true );
			// get window´s size
			getWinSize();
			// initialize some events
			initEvents();

		} );

	}

	// saves the item´s offset top and height (if saveheight is true)
	function saveItemInfo( saveheight ) {
		$items1.each( function() {
			var $item1 = $( this );
			$item1.data( 'offsetTop', $item1.offset().top );
			if( saveheight ) {
				$item1.data( 'height', $item1.height() );
				$item1.data( 'width', $item1.width() );
				// $item.height() 
			}
		} );
	}

	function initEvents() {
		
		// when clicking an item, show the preview with the item´s info and large image.
		// close the item if already expanded.
		// also close if clicking on the item´s cross
		$items1.on( 'click', 'span.og1-close', function() {
			hidePreview();
			return false;
		} ).children( 'a' ).on( 'click', function(e) {
			
			var $item1 = $( this ).parent();
			// check if item already opened
			current1 === $item1.index() ? hidePreview() : showPreview( $item1 );
			return false;

		} );

		// on window resize get the window´s size again
		// reset some values..
		$window.on( 'debouncedresize', function() {
			
			scrollExtra1 = 0;
			previewPos1 = -1;
			// save item´s offset
			saveItemInfo();
			getWinSize();
			var preview1 = $.data( this, 'preview' );
			if( typeof preview1 != 'undefined' ) {
				hidePreview();
			}

		} );

	}

	function getWinSize() {
		winsize1 = { width1 : $window.width(), height1 : $window.height() };
	}

	function showPreview( $item1 ) {

		var preview1 = $.data( this, 'preview' ),
			// item´s offset top
			position1 = $item1.data( 'offsetTop' );

		scrollExtra1 = 0;

		// if a preview exists and previewPos is different (different row) from item´s top then close it
		if( typeof preview1 != 'undefined' ) {

			// not in the same row
			if( previewPos1 !== position1 ) {
				// if position > previewPos then we need to take te current preview´s height in consideration when scrolling the window
				if( position1 > previewPos1 ) {
					scrollExtra1 = preview1.height;
				}
				hidePreview();
			}
			// same row
			else {
				preview1.update( $item1 );
				return false;
			}
			
		}

		// update previewPos
		previewPos1 = position1;
		// initialize new preview for the clicked item
		preview1 = $.data( this, 'preview', new Preview( $item1 ) );
		// expand preview overlay
		preview1.open();

	}

	function hidePreview() {
		current1 = -1;
		var preview1 = $.data( this, 'preview' );
		preview1.close();
		$.removeData( this, 'preview' );
	}

	// the preview obj / overlay
	function Preview( $item1 ) {
		this.$item1 = $item1;
		this.expandedIdx1 = this.$item1.index();
		this.create();
		this.update();
	}

	Preview.prototype = {
		create : function() {
			// create Preview structure:
			this.$title1 = $( '<h4></h4>' );
			this.$description1 = $( '<p></p>' );
			this.$href1 = $( '' );
			// this.$videosrc = $( '<iframe width="1300" height="480" src="#" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' );
			this.$details1 = $( '<div class="og1-details"></div>' ).append( this.$title1, this.$description1, this.$href1);
			this.$loading1 = $( '<div class="og1-loading"></div>' );
			this.$fullimage1 = $( '<div class="og1-fullimg"></div>' ).append( this.$loading1 );
			this.$closePreview1 = $( '<span class="og1-close"></span>' );
			this.$previewInner1 = $( '<div class="og1-expander-inner"></div>' ).append( this.$closePreview1, this.$fullimage1, this.$details1 );
			this.$previewEl1 = $( '<div class="og1-expander"></div>' ).append( this.$previewInner1 );
			// append preview element to the item
			this.$item1.append( this.getEl() );
			// set the transitions for the preview and the item
			if( support1 ) {
				this.setTransition();
			}
		},
		update : function( $item ) {

			if( $item1 ) {
				this.$item1 = $item;
			}
			
			// if already expanded remove class "og-expanded" from current item and add it to new item
			if( current1 !== -1 ) {
				var $currentItem1 = $items1.eq( current1 );
				$currentItem1.removeClass( 'og1-expanded' );
				this.$item1.addClass( 'og1-expanded' );
				// position the preview correctly
				this.positionPreview();
			}

			// update current value
			current1 = this.$item1.index();

			// update preview´s content
			var $itemEl1 = this.$item1.children( 'a' ),
				eldata1 = {
					href1 : $itemEl1.attr( 'href' ),
					largesrc1 : $itemEl1.data( 'largesrc' ),
					title1 : $itemEl1.data( 'title' ),
					description1 : $itemEl1.data( 'description' )
					// videosrc : $itemEl.data( 'videosrc' )
				};

			this.$title1.html( eldata1.title );
			this.$description1.html( eldata1.description );
			this.$href1.attr( 'href', eldata1.href );
			// this.$videosrc.attr('src', eldata.videosrc);
			var self = this;
			
			// remove the current image in the preview
			if( typeof self.$largeImg1 != 'undefined' ) {
				self.$largeImg1.remove();
			}

			// preload large image and add it to the preview
			// for smaller screens we don´t display the large image (the media query will hide the fullimage wrapper)
			if( self.$fullimage1.is( ':visible' ) ) {
				this.$loading1.show();
				$( '<img/>' ).load( function() {
					var $img1 = $( this );
					if( $img1.attr( 'src' ) === self.$item1.children('a').data( 'largesrc' ) ) {
						self.$loading1.hide();
						self.$fullimage1.find( 'img' ).remove();
						self.$largeImg1 = $img1.fadeIn( 350 );
						self.$fullimage1.append( self.$largeImg1 );
					}
				} ).attr( 'src', eldata1.largesrc );	

				// $( '<iframe/>' ).load( function() {
				// 	var $img = $( this );
				// 	if( $img.attr( 'src' ) === self.$item.children('a').data( 'videosrc' ) ) {
				// 		self.$loading.hide();
				// 		self.$fullimage.find( 'img' ).remove();
				// 		self.$largeImg = $img.fadeIn( 350 );
				// 		self.$fullimage.append( self.$largeImg );
				// 	}
				// } ).attr( 'src', eldata.videosrc );	

			}

		},
		open : function() {

			setTimeout( $.proxy( function() {	
				// set the height for the preview and the item
				this.setHeights();
				// scroll to position the preview in the right place
				this.positionPreview();
			}, this ), 25 );

		},
		close : function() {

			var self = this,
				onEndFn = function() {
					if( support ) {
						$( this ).off( transEndEventName );
					}
					self.$item1.removeClass( 'og1-expanded' );
					self.$previewEl1.remove();
				};

			setTimeout( $.proxy( function() {

				if( typeof this.$largeImg1 !== 'undefined' ) {
					this.$largeImg1.fadeOut( 'fast' );
				}
				this.$previewEl1.css( 'height', 0 );
				// the current expanded item (might be different from this.$item)
				var $expandedItem1 = $items1.eq( this.expandedIdx1 );
				$expandedItem1.css( 'height', $expandedItem1.data( 'height' ) ).on( transEndEventName1, onEndFn );

				if( !support ) {
					onEndFn.call();
				}

			}, this ), 25 );
			
			return false;

		},
		calcHeight : function() {

			var heightPreview1 = winsize1.height1 - this.$item1.data( 'height' ) - marginExpanded1,
				itemHeight1 = winsize1.height1;

			if( heightPreview1 < settings1.minHeight ) {
				heightPreview1 = settings1.minHeight;
				itemHeight1 = settings1.minHeight + this.$item1.data( 'height' ) + marginExpanded1;
			}

			this.height1 = heightPreview1;
			this.itemHeight1 = itemHeight1;

		},
		setHeights : function() {

			var self = this,
				onEndFn = function() {
					if( support ) {
						self.$item1.off( transEndEventName1 );
					}
					self.$item1.addClass( 'og1-expanded' );
				};

			this.calcHeight();
			this.$previewEl1.css( 'height', this.height1 );
			this.$item1.css( 'height', this.itemHeight1 ).on( transEndEventName1, onEndFn );

			if( !support ) {
				onEndFn.call();
			}

		},
		positionPreview : function() {

			// scroll page
			// case 1 : preview height + item height fits in window´s height
			// case 2 : preview height + item height does not fit in window´s height and preview height is smaller than window´s height
			// case 3 : preview height + item height does not fit in window´s height and preview height is bigger than window´s height
			var position1 = this.$item1.data( 'offsetTop' ),
				previewOffsetT1 = this.$previewEl1.offset().top - scrollExtra1,
				scrollVal11 = this.height1 + this.$item1.data( 'height' ) + marginExpanded1 <= winsize1.height1 ? position1 : this.height1 < winsize1.height1 ? previewOffsetT1 - ( winsize1.height1 - this.height1 ) : previewOffsetT1;
			
			$body1.animate( { scrollTop : scrollVal1 }, settings1.speed );

		},
		setTransition  : function() {
			this.$previewEl1.css( 'transition', 'height ' + settings1.speed + 'ms ' + settings1.easing );
			this.$item1.css( 'transition', 'height ' + settings1.speed + 'ms ' + settings1.easing );
		},
		getEl : function() {
			return this.$previewEl1;
		}
	}

	return { init : init };

})();