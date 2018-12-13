/*jQuery  Navbar*/
$(".menu").click(function() { //clicking on a menu shows/hides associated submenu
    $(this).next(".submenu").slideToggle(); //us jQuery to slide the menu up and down when showing/hiding
});

/*jQuery AJAX content load*/
let text = "story0.txt"; //display story0.txt by default

//changes the menu option to my name and the date by default
$("#stories").val(text);
$("#story").load(text);

//click the link and have the correlating story appear
$("#stories").change(function(){
    this = $(this).val();
    $("#story").load(text);
})

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