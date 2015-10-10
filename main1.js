// create an array 4 x 4 //

var $greenRow = "G G G G G G G G".split(" ");
var $myGame = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

function turnBlack(x, y) {
  $myGame[y][x] = "B";
  var message = ("<p>Changing " + x + ":" + y + " to Black</p>");
  var underline = (("<p>" + Array(message.length).join("-") + ("</p>")));
  $(".game").append(underline + message + underline);

}

function turnWhite(x, y) {
  $myGame[y][x] = "W";
  var message = ("<p>Changing " + x + ":" + y + " to White</p>")
  var underline = (("<p>" + Array(message.length).join("-") + ("</p>")));
  $(".game").append(underline + message + underline);
}

function setGreen() {
  $.each($myGame, function(i, l) {
    $myGame[i] = $greenRow.slice();
    // console.log($myGame[i]);
  });
}


// c
function writeGreen() {
  $.each($myGame, function(i, l) {
    $(".game").append("<p>Row " + i + ": " + l + "</p>");
  });
  console.log($myGame);

}

function printRow() {
  var htmlCell = "";
  var htmlString = "";
  var trString, endtrString;
  $.each($myGame, function(i, row) {
    // console.log(i);
    // console.log(row);
    $row = $(row);
      $.each($row, function(j, value) {
        // console.log($row);
        var text = "<td> " + value + " </td>";
        // console.log(text);
        htmlCell += text;
        // console.log(htmlCell);
      });
      trString = "<tr>";
      endtrString = "</tr>";
      htmlCell = trString + htmlCell + endtrString;
      htmlString = htmlCell;
      // console.log(htmlString);
  });
  $(".inHere").append(htmlString);
};

setGreen();
writeGreen();
turnBlack(3, 3);
turnBlack(4, 4);

// writeGreen();
turnWhite(4, 3);
turnWhite(3, 4);

writeGreen();

printRow();


$("td:contains('W')").css("background-color", "white").css("color", "white");
$("td:contains('B')").css("background-color", "black").css("color", "black");
$("td:contains('G')").css("background-color", "green").css("color", "green");
