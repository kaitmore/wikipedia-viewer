$(document).ready(function() {
  //get input
  
 $('#search').click(function() {

    var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&continue=&srsearch=wikipedia&srwhat=text&srprop=timestamp";
    var searchTerm = $('#searchInput').val();

    $.ajax({
      type: "GET",
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=?',
      async: false,
      dataType: 'JSON',
      success: function(data) {
        $(".content ul").empty();
        $(".searchTerm").empty();
        for (var i = 0; i < data[1].length; i++) {
          var name = data[1][i];
          var descrip = data[2][i];
          var link = data[3][i];
          if (descrip === name + " may refer to:") {
            $(".searchTerm").html('<h3>' + descrip + '</h3>');
          } else {
            $(".content ul").append('<li><a href = "' + link + '">' + '<h1>' + name + '</h1>' + descrip + '</a></li>');
          };
        };

      },
      error: function(errormessage) {
        $(".content ul").append("error!");
      }
    });
  });
  
});
// data[1][0] name , data[2][0] description, data[3][0] link