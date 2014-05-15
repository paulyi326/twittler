$(document).ready(function() {
  var $body = $('body');
  // $body.html('');


  var numberTweeted = 0;
  var currentUser = "";

  while (numberTweeted <= 10) {
    printNewTweet();
  }

  $(".tweetsList").on("click", "i", function() {
    var thisClass = "." + $(this).data("user");
    currentUser = thisClass;
    $(".tweetsList").find("div").not(thisClass).slideUp();
    $(".header").remove();
    var user = $(this).data("user");
    var $user = $("<h1></h1>");
    $user.addClass("header");
    $user.html(user);
    $(".top").after($user);
  });

  $("#bird").on("click", function() {
    $(".header").remove();
    $(".tweetsList").find("div").slideDown();
    $("<h1>Twittler</h1>").addClass("header").insertAfter(".top");
    currentUser = "";
  });

  setInterval(printNewTweet, 1000);

  function printNewTweet() {
    if (streams.home.length > numberTweeted) {
        var tweet = streams.home[numberTweeted];
        var $tweet = $("<div class=\"" + tweet.user + " tweets\"></div>");
        var $tweetedAt = $("<div class=\"tweetedAt " + tweet.user + "\">Tweeted At: " + tweet.created_at + "</div>");
        if ("." + tweet.user !== currentUser && currentUser !== "") {
          $tweet.addClass("hidden");
          $tweetedAt.addClass("hidden");
        }
        var timeline = "<i class=\"tweeter\" data-user=" + tweet.user + ">" + tweet.user + "</i>";
        $tweet.html('@' + timeline + ': ' + tweet.message);
        // $tweet.prependTo($body);
        $(".tweetsList").prepend($tweetedAt); 
        $(".tweetsList").prepend($tweet);
        numberTweeted++;
    }
  }

});