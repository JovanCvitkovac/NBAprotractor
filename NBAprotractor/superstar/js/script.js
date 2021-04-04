$("#addSuperstarForm").submit(function (event) {
  $("#addPlayerAlert").addClass("hide")

  if ($("#playerInput").val() == "") {
    $("#addPlayerAlert").removeClass("hide")

  } else {
    $("#playerList").append("<li class='list-group-item'>" + $("#playerInput").val() + "</li>")
    $("#playerInput").val("")
  }
  event.preventDefault();
});




$("#voteForm").submit(function (event) {
  var team1Votes = $("#teamVotes1").text()
  var team2Votes = $("#teamVotes2").text()
  var team3Votes = $("#teamVotes3").text()
  var team4Votes = $("#teamVotes4").text()
  var team5Votes = $("#teamVotes5").text()

  $("#voteForm").addClass("hide")
  $("#voteAlert").removeClass("hide")


  if ($("#voteTeamRadio1").is(":checked")) {
    team1Votes = parseInt(team1Votes) + 1
    $("#teamVotes1").text(team1Votes)
  } else if ($("#voteTeamRadio2").is(":checked")) {
    team2Votes = parseInt(team2Votes) + 1
    $("#teamVotes2").text(team2Votes)
  } else if ($("#voteTeamRadio3").is(":checked")) {
    team3Votes = parseInt(team3Votes) + 1
    $("#teamVotes3").text(team3Votes)
  } else if ($("#voteTeamRadio4").is(":checked")) {
    team4Votes = parseInt(team4Votes) + 1
    $("#teamVotes4").text(team4Votes)
  } else if ($("#voteTeamRadio5").is(":checked")) {
    team5Votes = parseInt(team5Votes) + 1
    $("#teamVotes5").text(team5Votes)
  }
  event.preventDefault();
});



$("#searchForm").submit(function (event) {
  if ($("#searchBox").val() == "") {

  } else if ($("#searchBox").val().toLowerCase() == "jokic") {
    alert("Yup, we have Joker here")

  } else {
    alert("Your search for " + $("#searchBox").val() + " returned 0 results. Try something else.")
  }



  event.preventDefault();
});


$("#formLogin").submit(function (event) {
  $("#loginAlert").addClass("hide")

  if ($("#loginEmail").val() == "" || $("#loginPassword").val() == "") {
    $("#loginAlert").removeClass("hide")
  } else {
    if ($("#rememberLoginCheck").is(":checked")) {
      var email = $("#loginEmail").text()
      var password = $("#loginPassword").text()
    } else {
      $("#loginEmail").val("")
      $("#loginPassword").val("")
    }
    $("#overlay").addClass("hide")
  }
  event.preventDefault();
});


function logout() {
  $("#overlay").removeClass("hide")
  $("#loginEmail").val(email)
  $("#loginPassword").val(password)

}
