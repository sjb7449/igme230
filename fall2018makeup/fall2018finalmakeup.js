/*JS / jQuery  Navbar*/
$(".menu").click(function() { //clicking on a menu shows/hides associated submenu
    $(this).next(".submenu").slideToggle(); //us jQuery to slide the menu up and down when showing/hiding
});

/*JS / jQuery AJAX Content Loading*/
//load story0.txt by default
let text0 = ("story0.txt")
$("#story").load(text0);

/*EXTRA CREDIT BUTTON*/
int clicks =0;

$(document).ready(function(){
  $("button#increment").click(function(){
    clicks += 1;
    document.getElementById("currentcounter").innerHTML = clicks;
  });
});

/*
<section id="extracredit">
    <h2>Extra Credit Option</h2>
    <button id="increment">Click Me!</button>
    <h2>Button Click Count</h2>
    <p id="currentcount"></p>
</section>


int clicks = 0;
    function click() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };





//change the story text based on whichever link you click
$("ul#stories li#story0.txt").click(function(){
    $("#story").load(text);
})

let text1 = ("story1.txt")
$("ul#stories li#story1.txt").click(function(){
    $("#story").load(text1);
})

let text2 = ("story1.txt")
$("ul#stories li#story2.txt").click(function(){
    $("#story").load(text2);
})
*/

/*
<div>
    <p class="menu">Story Text</p>
    <ul class="submenu" id="stories">
        <li id="story0.txt">A Soldier's Surprise</li>
        <li id="story1.txt">A Small Fortune</li>
        <li id="story2.txt">My Masterpiece</li>
    </ul>
</div>


            let myContent = "content1.txt";

            $("#choose-content").val(myContent); //changes the menu option to my name and the date by default
            $("#content").load(myContent); //changes the #content to my name and the date

            $("#choose-content").change(function(){
                myContent = $(this).val();
                $("#content").load(myContent);
            })

            <!--PAGE #1-->
            <div id="page1">
                <img class="sea" src="media/water.png" onclick="clickSea()" alt="sea"/>
                <img class="land" src="media/land.png" onclick="clickLand()" alt="land"/>
                <div class="content"></div>
            </div>


            //change the content text when clicking on the images
            let descr = ("direction.txt") //load "direction.txt" by default
            $(".content").load(descr);
            
            //a function to change the content text from whatever it was to "land.txt"
            function clickLand() {
                var descr2 = ("land.txt");
                $(".content").load(descr2);
            }
            
            //a function to change the content text from whatever it was to "sea.txt"
            function clickSea() {
                var descr3 = ("sea.txt");
                $(".content").load(descr3);
            }
*/