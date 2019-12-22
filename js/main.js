$(document).ready(function(){
  $('.header').height($(window).height());
  
})

$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 })
function count(){
  var counter = { var: 0 };
  TweenMax.to(counter, 6, {
    var: 4483,
    onUpdate: function () {
      var number = Math.ceil(counter.var);
      $('.counter').html(number);
      if(number === counter.var){ count.kill(); }
    },
    onComplete: function(){
      count();
    },    
    ease:Circ.easeOut
  });
}
function count2(){
  var counter = { var: 0 };
  TweenMax.to(counter, 6, {
    var: 100, 
    onUpdate: function () {
      var number = Math.ceil(counter.var);
      $('.counter-2').html(number);
      if(number === counter.var){ count.kill(); }
    },
    onComplete: function(){
      count();
    },    
    ease:Circ.easeOut
  });
}
function count3(){
  var counter = { var: 0 };
  TweenMax.to(counter, 6, {
    var: 4, 
    onUpdate: function () {
      var number = Math.ceil(counter.var);
      $('.counter-3').html(number);
      if(number === counter.var){ count.kill(); }
    },
    onComplete: function(){
      count();
    },    
    ease:Circ.easeOut
  });
}
function count4(){
  var counter = { var: 0 };
  TweenMax.to(counter, 6, {
    var: 4000, 
    onUpdate: function () {
      var number = Math.ceil(counter.var);
      $('.counter-4').html(number);
      if(number === counter.var){ count.kill(); }
    },
    onComplete: function(){
      count();
    },    
    ease:Circ.easeOut
  });
}
count();
count2();
count3();
count4();

