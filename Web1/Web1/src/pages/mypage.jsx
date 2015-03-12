/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react'); 
var JQuery = require('../components/jquery.min.js');


var MyPage = React.createClass({
    getInitialState: function() {
        return {
            FirstName: '',
            Surname: '',
            Phone3: '',
            CustKey: '',
			CustContactKey: ''
        };
    },

    componentDidMount: function() {
        JQuery.get('http://localhost:9000/api/example', function(result) {
            var lastGist = result[0];
            debugger;
			//FirstName: "Per", Surname: "Persson", Phone3: "", CustKey: "1", CustContactKey: 2
            if (this.isMounted()) {
                this.setState({
                    FirstName: lastGist.FirstName,
                    Surname: lastGist.Surname,
                    Phone3: lastGist.Phone3,
                    CustKey: lastGist.CustKey,
					CustContactKey: lastGist.CustContactKey
                });
            }
        }.bind(this));
    },

    render: function() {
        return (
          <div class="row" id="theWidget">
            <div class="col-md-4">
                <h2 id="theTitle">{this.state.FirstName} {this.state.Surname}</h2>
                <p id="thePhone">{this.state.Phone3}</p>
                <p id="theCustKey">{this.state.CustKey}</p>
                <p>{this.state.CustContactKey}</p>
            </div>   
          </div>
      );
    }
});


module.exports = MyPage;
