$("#btn").click(function (e) {
  e.preventDefault();
  for (let i = 0; ; i++) {
    var num = prompt("Enter element to push in the stack. max element:10");

    // const myList = $("#myList");
    if ($("#myList").children().length < 10 && num != "enough") {
      //   let NewListItem = document.createElement("div");
      //   NewListItem.id = "boxId1";
      $("#myList").prepend("<div class=stack>" + num + "</div>");

      $(".stack").css({
        "font-family": "Roboto",
        "background-color": "black",
        "font-weight": "bold",
        color: "white",
        "font-size": "22px",
        width: "400px",
        height: "50px",
        border: "3px solid black",
        "margin-top": "10px",
        "margin-bottom": "10px",
        "margin-left": "10px",
        "text-align": "center",
      });
      //   NewListItem.innerHTML = num;
      //   var list = document.getElementById("myList");
      //   list.insertBefore(NewListItem, list.childNodes[0]);
    } else {
      alert("Stack Limit Reached 10");
      return;
    }
  }
});

$("#btn1").click(function (e) {
  e.preventDefault();
  $("#myList :first-child").remove();
});
