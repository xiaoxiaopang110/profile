/**
 * Created by Administrator on 2017/10/7.
 */
$(document).ready(function(){
   $('#main').fullpage({
       navigation:true,
       anchors:['page1','page2','page3','page4','page5',],
       menu:"#menu",
       loopBottom: true,
       afterLoad: function(anchorLink, index){
           var $isAnimates=$('.se-1 .is-animated');
           var $page3li=$('.page3-list li');
           var $page4li=$('.page4-1 li');
           var $page5li=$('.page4li li');
           console.log($page5li);

           if(index==1){
               $isAnimates.addClass('animated fadeInUpBig');
               $isAnimates.eq(0).css('animation-delay', '.3s');
               $isAnimates.eq(1).css('animation-delay', '.6s');
               $isAnimates.eq(2).css('animation-delay', '.9s');
           }
           if(index==3){
               $page3li.addClass('animated rotateIn');

           }
           if(index==4){
               $page4li.addClass('animated zoomIn');
               $page5li.addClass('animated zoomIn');
           }

       },



   });







});