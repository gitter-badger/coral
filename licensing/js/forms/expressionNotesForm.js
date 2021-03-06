/*
**************************************************************************************************************************
** CORAL Licensing Module v. 1.0
**
** Copyright (c) 2010 University of Notre Dame
**
** This file is part of CORAL.
**
** CORAL is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
**
** CORAL is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
**
** You should have received a copy of the GNU General Public License along with CORAL.  If not, see <http://www.gnu.org/licenses/>.
**
**************************************************************************************************************************
*/

// Validate expression note
function validateExpressionNote(){
    if($("#expressionNote").val() == '') {
        $("#span_errors").html('Error - Please add some text for the note');
        $("#expressionNote").focus();
        return false;
    }else{
        return true;
    }
}


function addExpressionNote(){
    if(validateExpressionNote() === true) {
        $.ajax({
            type:       "POST",
            url:        "ajax_processing.php?action=submitExpressionNote",
            cache:      false,
            data:       { expressionNote: $("#expressionNote").val(), expressionID: $("#expressionID").val(), displayOrderSeqNumber: $("#displayOrderSeqNumber").val() } ,
            success:    function(response) {
                updateExpressionNoteForm();
            }
        });
    }
}

$("#commitUpdate").click(function () {
    if(validateExpressionNote() === true) {
        $.ajax({
            type:       "POST",
            url:        "ajax_processing.php?action=submitExpressionNote",
            cache:      false,
            data:       { expressionNote: $("#expressionNote").val(), expressionNoteID: $("#expressionNoteID").val(), displayOrderSeqNumber: $("#displayOrderSeqNumber").val() },
            success:    function(response) {
                updateExpressionNoteForm();
            }
        });
    }
});


function updateExpressionNoteForm(expressionNoteID){

  $.ajax({
	 type:       "GET",
	 url:        "ajax_forms.php",
	 cache:      false,
	 data:       "action=getExpressionNotesForm&expressionID=" + $("#expressionID").val() + "&expressionNoteID=" + expressionNoteID + "&org=" + $("#org").val(),
	 success:    function(html) {
		$("#div_expressionNotesForm").html(html);
	 }


 });

}



function removeExpressionNote(expressionNoteID){

  $.ajax({
	 type:       "GET",
	 url:        "ajax_processing.php",
	 cache:      false,
	 data:       "action=deleteExpressionNote&expressionNoteID=" + expressionNoteID,
	 success:    function(html) {
		updateExpressionNoteForm();
	 }


 });

}



function reorder(expressionNoteID, oldSeq, direction){

  $.ajax({
	 type:       "GET",
	 url:        "ajax_processing.php",
	 cache:      false,
	 data:       "action=reorderExpressionNote&expressionNoteID=" + expressionNoteID+"&oldSeq="+ oldSeq+"&direction="+ direction,
	 success:    function(html) {
		updateExpressionNoteForm();
	 }


 });

}
