//side bar stuff

var mini = true;

function toggleSidebar() {
    if (mini) {
        /*console.log("opening sidebar");*/
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        this.mini = false;
    } else {
        /*console.log("closing sidebar");*/
        document.getElementById("mySidebar").style.width = "85px";
        document.getElementById("main").style.marginLeft = "85px";
        this.mini = true;
    }
}

//delete visible after checkbox selected

function showHide(event)
{
    const isChecked = $(event.target).prop('checked');
    
    if (isChecked) {
        document.getElementById('delCampaignBtn').style.visibility = 'visible';
    }
    else {
        document.getElementById('delCampaignBtn').style.visibility = 'hidden';
    }
}

// function showHide() {
//     if(document.getElementById('campaignChk').checked) {
//         (document.getElementById('campaignChk').style.visibility = 'visible')
//     }
//     else {
//         document.getElementById('campaignChk').style.visibility = 'visible';
//     };
// }

//insert row button

function add_campaign() {
    var table = document.getElementById("CampaignTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = "<input class='campaignChk' type=\"checkbox\">";
    cell2.innerHTML = "row 2";
    cell3.innerHTML = "row 3";
    cell4.innerHTML = "row 4";
    cell5.innerHTML = "<a class=\"btn btn-primary\" href=\"src/create-campaign/index.html\">Editable</a>";
}

//delete row by checkbox

const deleteRow = function(event) {
    const checks = $('.campaignChk:checked');

    $(checks).each(function() {
        $(this).parents('tr').remove();
    });
}

src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js";
integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0";
crossorigin="anonymous";