function toggle(source) {
    checkboxes = document.getElementsByName('selectpost');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
  }

  
  function add_post() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
  
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
  
    cell1.innerHTML = "<input  class='postChk, align-middle' type=\"checkbox\">";
    cell2.innerHTML = "Random Post Title here";
    cell3.innerHTML = "Random Content here";
    cell4.innerHTML = "Random date here";
    cell5.innerHTML = "Also random date here";      
    cell6.innerHTML = "<a class=\"btn btn-primary\" href=\"../create-post/index.html\">Edit</a>";
  }

  var mini = true;


  
  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  const deleteRow = function(event) {
    const checks = $('.postChk:checked');

    $(checks).each(function() {
        $(this).parents('tr').remove();
      });
  }

  $(document).ready(function() {
    
    var $submit = $("#delPostBtn").hide(),
        $cbs = $('input[name="selectall"]').click(function() {
            $submit.toggle( $cbs.is(":checked") );
        });
});

$(document).ready(function() {
    
  var $submit = $("#delPostBtn").hide(),
      $cbs = $('input[name="selectpost"]').click(function() {
          $submit.toggle( $cbs.is(":checked") );
      });
});
