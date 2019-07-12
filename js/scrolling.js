/*function setScrollElements(element){

  var scrollelements = jQuery(element);
  var removedArray = [];

  jQuery(window).scroll(function() {
    scrollelements.each(function(index) {   
      if (jQuery(this).offset().top <= (jQuery(window).scrollTop() + jQuery(window).height() -100) && jQuery(this).css("opacity") == 0) {
        jQuery(this).slideDown().animate({
          opacity: 1,
	      left: "+=80%"
		  
        }, 900);        
        removedArray[index] = index; 
      }
    })  
    
  })

}
function setZoomElements(element){

  var zoomelements = jQuery(element);
  var removedArrays = [];

  jQuery(window).scroll(function() {
    zoomelements.each(function(index) {   
      if (jQuery(this).offset().top <= (jQuery(window).scrollTop() + jQuery(window).height() -100) && jQuery(this).css("opacity") == 0) {
        jQuery(this).slideDown().animate({
		jQuery(this("transform","scale(1)"))
       
		  
        }, 900);        
        removedArrays[index] = index; 
      }
    })  
    
  })

}
jQuery(document).ready(function() {

setScrollElements(".hometitle" );
setScrollElements(".pane-title" );
setScrollElements(".pane-content");
setScrollElements(".panel-panel");
setZoomElements(".pane-content");
})
*/
jQuery(document).ready(function($) {
	
var waypoints = $('.col-md-6.col-lg-4').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('p.lead').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});
var waypoints = $('h2').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});
var waypoints = $('h1').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('a.btn').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('div#homeimages').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});
var waypoints = $('.panel-pane.pane-fieldable-panels-pane.pane-vuuid-158bd89c-4474-498d-9cd1-711a6c97736a.pane-bundle-text').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('div#mini-panel-middlehome h2').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});
var waypoints = $('p.middleblocktxt').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('img.lawview').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('div#facebook1').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('div#mini-panel-timelinetop h1').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('div#mini-panel-timelinetop h1').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('div#mini-panel-timelinetop h2').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('p.centretext').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});


var waypoints = $('a.button').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('div#visitinfo').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

/*var waypoints = $('div#visitcolumn1').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
}); */
var waypoints = $('div#visitcircle').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('div#stats').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});
var waypoints = $('.page-node-5 h2.pane-title').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('h4.subtitle').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('p.viewtext').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('.panel-pane.pane-block.pane-webform-client-block-8 h2').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});
var waypoints = $('.form-item.webform-component').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});
var waypoints = $('body').waypoint(function() {


    $(this.element).addClass('loaded');


}, {
    offset: '90%'
});
var waypoints = $('.page-node-11 h1.title').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('.not-front h2.pane-title').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});
var waypoints = $('.not-front .pane-content p').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '95%'
});
var waypoints = $('.pane-content li').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('.rightinner2').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});
var waypoints = $('.rightinner1').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});


var waypoints = $('img.volcimg').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});



var waypoints = $('div#wtsstructure h3').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});

var waypoints = $('div#wtsstructure img').waypoint(function() {


    $(this.element).addClass('inView');


}, {
    offset: '90%'
});











});
