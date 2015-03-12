/**
 * @jsx React.DOM
 */

 'use strict';

var React = require('react'); 
var JQuery = require('../components/jquery.min.js');

var ImportPaidInvoicesPage = React.createClass({
	   
	componentDidMount() {
		var self = this; 
		var theFile;

		JQuery("[data-my-form]").off("submit").on("submit", function() {
			JQuery.ajax({
				url: "http://localhost:9000/api/upload",
				type: 'POST',
				data: theFile,
				success: function(data) {
					console.log(data);
					debugger;
					JQuery("[data-status]").html("it went well!");
				},
				error: function(xhr, status, err) {
					console.log(err);
					JQuery("[data-status]").html("opps.. error!! " + err);
				}
			});
			return false;
		});

		JQuery('[data-my-file]').off('change').on('change', function(e) {
			
			var reader = new FileReader();
			var file = e.target.files[0];
			reader.onload = function(upload) {
				theFile = upload.target.result
			};
			debugger;
			reader.readAsDataURL(file);

			return false;
		});
    },

    render() {		
        return (
			<div>
				<div data-status="true">zzz</div>
				<form data-my-form="true" enctype="multipart/form-data">
					<input type="file" data-my-file="true" name="myFile"/>
					<input data-my-button="true" type="submit" value="Submit" />
				</form>
			</div>
        );
    }

	
});

module.exports = ImportPaidInvoicesPage;
