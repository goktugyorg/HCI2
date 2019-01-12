var onTable = false;

function openTab(evt, TabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(document).ready(function() {

    $('#questionTable').DataTable( {
        select: true
    } );

    $('#assignmentTable').DataTable( {
        select: true
    } );

    $('#ticketTable').DataTable( {
        select: true
    } );

} );

function newPopup(url) {
    popupWindow = window.open(
        url,'popUpWindow','height=600,width=500,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes')
}

$(document).bind("contextmenu",function(e){

    console.log("sc" + onTable)

    e.preventDefault();
    console.log(e.pageX + "," + e.pageY);
    $("#cntnr").css("left",e.pageX);
    $("#cntnr").css("top",e.pageY);
    // $("#cntnr").hide(100);
    $("#cntnr").fadeIn(200,startFocusOut());
    onTable = false;



});

function startFocusOut(){
    $(document).on("click",function(){
        $("#cntnr").hide();
        $(document).off("click");
    });
}

$("#items > li").click(function(){
    if($(this).text() == 'Match')
    {
        newPopup("match.html");
    }
    else if($(this).text() == 'Details')
    {
        newPopup("questionDetails.html");
    }

});


$(window).click(function(e) {
    var x = e.clientX, y = e.clientY,
    elementMouseIsOver = document.elementFromPoint(x, y);

    if(document.elementFromPoint(x, y).className === 'sorting_1')
    {
        onTable = true;
        console.log("asdasd:" + onTable);
    }
});

function endAssignment() {
    var result = confirm('Are you sure you want to delete this item?');

    if(result == true)
    {
        document.getElementById("assignmentTable").deleteRow(1);
    }
}

function lectureSelected(selectObj) {
    var selectIndex=selectObj.selectedIndex;
    var selectValue=selectObj.options[selectIndex].text;
    var subj = $('#subjectDropDown');

    if(selectValue==='Math')
    {
        subj.empty();
        subj.append("<option value=\"kiwi\">Reel Numbers</option>");
        subj.append("<option value=\"kiwi\">Complex Numbers</option>");
        subj.append("<option value=\"kiwi\">Rational Numbers</option>");
    }
    else if(selectValue==='Biology')
    {
        subj.empty();
        subj.append("<option value=\"kiwi\">Diffusion and osmosis</option>");
        subj.append("<option value=\"kiwi\">Cell biology</option>");
        subj.append("<option value=\"kiwi\">Evolution</option>");
    }
    else if(selectValue==='Physics')
    {
        subj.empty();
        subj.append("<option value=\"kiwi\">Mechanics</option>");
        subj.append("<option value=\"kiwi\">Thermodynamics</option>");
        subj.append("<option value=\"kiwi\">Oscillations and Waves</option>");
    }
}

function filter()
{
    var lecture = document.getElementById('lectureDropDown')
    var selectValue=lecture.options[lecture.selectedIndex].text;

    var table = $('#questionTable tbody');

    if(selectValue==='Math')
    {
        table.empty();
        table.append(" <tr><td>MATH123</td><td>Yes</td><td>No</td></tr>");
        table.append(" <tr><td>MATH123</td><td>Yes</td><td>No</td></tr>");
        table.append(" <tr><td>MATH123</td><td>Yes</td><td>No</td></tr>");
        table.append(" <tr><td>MATH123</td><td>Yes</td><td>No</td></tr>");
    }
    else if(selectValue==='Biology')
    {
        table.empty();
        table.append(" <tr><td>BIO123</td><td>Yes</td><td>No</td></tr>");
        table.append(" <tr><td>BIO123</td><td>Yes</td><td>No</td></tr>");
        table.append(" <tr><td>BIO123</td><td>Yes</td><td>No</td></tr>");
        table.append(" <tr><td>BIO123</td><td>Yes</td><td>No</td></tr>");
    }
    else if(selectValue==='Physics')
    {
        table.empty();
        table.append(" <tr><td>PHY123</td><td>Yes</td><td>No</td></tr>");
        table.append(" <tr><td>PHY123</td><td>Yes</td><td>No</td></tr>");
        table.append(" <tr><td>PHY123</td><td>Yes</td><td>No</td></tr>");
        table.append(" <tr><td>PHY123</td><td>Yes</td><td>No</td></tr>");
    }

}

