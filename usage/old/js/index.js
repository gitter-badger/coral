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


 $(document).ready(function(){

      updateImportTable();

 });



 var pageStart = '1';

 function updateImportTable(){
       $('#span_feedback').html('<img src = "images/circle.gif">&nbsp;&nbsp;Loading...');
       $.ajax({
          type:       "GET",
          url:        "ajax_htmldata.php",
          cache:      false,
          data:       "action=getImportTable&pageStart=" + pageStart,
          success:    function(html) {
          	$('#span_feedback').html('');
          	$('#div_recentImports').html(html);
          	tb_reinit();
          }
       });

 }



function setPageStart(pageStartNumber){
 	pageStart=pageStartNumber;
 	updateImportTable();
}

