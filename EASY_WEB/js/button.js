// JavaScript Document

$(window).scroll(function(){
    var divHeight = $(window).height()*1;	
    var divIndex = $(window).scrollTop() / divHeight;
    
    
    console.log(divIndex);
            console.log(divHeight);

    
$(function () {
function runIt() {
  $('#board i').animate({"opacity":"0.4"},500)
           .animate({"opacity":"1"},500, runIt);
}

runIt();
});


    
    $("#n1").append(function() {
        
        if (divIndex < 0.67) {
            $("#n1").css({opacity:'1'},1);}
        else {				
        $("#n1").css({opacity:'0.4'},1);}			
        
    });
    
    
    $("#n2").append(function() {
        
        if (divIndex >= 0.67 && divIndex < 1.34) {
            $("#n2").css({opacity:'1'},1);}
        else {				
        $("#n2").css({opacity:'0.4'},1);}			
        
    });
    
    $("#n3").append(function() {
        
        if (divIndex >= 1.34 && divIndex < 2.01) {
            $("#n3").css({opacity:'1'},1);}
        else {				
        $("#n3").css({opacity:'0.4'},1);}	
    });
    
    $("#n4").append(function() {
       
        if (divIndex >= 3.39 && divIndex < 4.59) {
            $("#n4").css({opacity:'1'},1);}
        else {				
        $("#n4").css({opacity:'0.4'},1);}	
    });
    
    $("#n5").append(function() {
        
    if (divIndex >= 4.59 && divIndex < 5.79) {
    $("#n5").css({opacity:'1'},1);}
        else {				
    $("#n5").css({opacity:'0.4'},1);}	
    });
    
    $("#n6").append(function() {
        
        if (divIndex >= 5.79 && divIndex < 6.99) {
    $("#n6").css({opacity:'1'},1);}
        else {				
    $("#n6").css({opacity:'0.4'},1);}	
    });
    
    $("#n7").append(function() {
        
        if (divIndex >= 6.99 && divIndex < 8.19) {
    $("#n7").css({opacity:'1'},1);}
        else {				
    $("#n7").css({opacity:'0.4'},1);}	
    });
    
    $("#n8").append(function() {
       
    if (divIndex >= 8.19 && divIndex < 9.39) {
    $("#n8").css({opacity:'1'},1);}
        else {				
    $("#n8").css({opacity:'0.4'},1);}	
    });
    
    $("#n9").append(function() {
        
        if (divIndex >= 9.39 && divIndex < 10.59) {
    $("#n9").css({opacity:'1'},1);}
        else {				
    $("#n9").css({opacity:'0.4'},1);}	
    });
    
    $("#n10").append(function() {
        
        if (divIndex >= 10.59 && divIndex < 11.79) {
    $("#n10").css({opacity:'1'},1);}
        else {				
    $("#n10").css({opacity:'0.4'},1);}	
    });
    
    $("#main a").append(function() {
        
        if (divIndex < 1) {
            $("#main a").attr("href", "#board");}	
        if (divIndex >= 1) {
            $("#main a").attr("href", "#Introduce");}            
        if (divIndex >= 2.19) {
            $("#main a").attr("href", "#n4");}
        if (divIndex >= 3.39) {
            $("#main a").attr("href", "#n5");}			
        if (divIndex >= 4.59) {
            $("#main a").attr("href", "#n6");}	
        if (divIndex >= 5.79) {
            $("#main a").attr("href", "#n7");}	
        if (divIndex >= 6.99) {
            $("#main a").attr("href", "#n8");}	
        if (divIndex >= 8.19) {
            $("#main a").attr("href", "#n9");}	
        if (divIndex >= 9.39) {
            $("#main a").attr("href", "#n10");}	
        if (divIndex >= 10.59) {
            $("#main a").css({display:'none'},1);}
        else {
            $("#main a").css({display:'block'},1);}

        
            
        
    });
    
    $("#board img,#board p,#board hr").append(function() {
        if (divIndex >= 0.19 && divIndex <= 1.36) {
    $("#board img").css({display:'block'},1);
    $("#board p,#board hr").fadeIn('fast');}
        else {			
    $("#board img").css({display:'none'},1);			
    $("#board p,#board hr").fadeOut('fast');}				
    });
    
    
    });
    
