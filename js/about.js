var About = React.createClass({
	render : function(){ 
		return React.createElement(
			"div",
			{className:"card"},
			React.createElement(
				"div",
				{className:"title"},
				"About"
			),
			React.createElement(
				"p",
				null,
				"Computer graphic is a field of computer science that studies methods for digitally generating visual content. It has been a central part of our live, in entertainment industry, designing, medical science, just to name a few."
			),
			React.createElement(
				"p",
				null,
				"In this course, we will introduce the basics of computer graphic, such as, three-dimensional data manipulation, rendering, animation, surface reconstruction and image processing."
			),
			React.createElement(
				"div",
				{className:"title"},
				"Prerequisites"
			),
			React.createElement(
				"div",
				{className:"listInfo"},
				"Programming skills in C/C++ and javascript",
				React.createElement(
					"br",
					null
				),
				"Data structures",
				React.createElement(
					"br",
					null
				),
				"Linear algebra"
			)
		);
	}
});

var Person = React.createClass({
	render:function(){
		var personEle = [];
		if(this.props.title){
			personEle.push(React.createElement("div",{className:"personInfo"},this.props.title));
		}
		if(this.props.company){
			personEle.push(React.createElement("div",{className:"personInfo"},this.props.company));
		}
		if(this.props.mail){
			personEle.push(React.createElement("div",{className:"personInfo"},"E-mail: "+this.props.mail));
		}
		if(this.props.office){
			personEle.push(React.createElement("div",{className:"personInfo"},"Office: "+this.props.office));
		}
		return React.createElement(
			"div",
			{className:"person"},
			React.createElement(
				"div",
				{className:"personName"},
				this.props.name
			),personEle
		)
	}
});


var Lecturers = React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{className:"card"},
			React.createElement(
				"div",
				{className:"title"},
				"Lecturer"
			),
			React.createElement(
				Person,
				{name:"Min Chun Hu", title:"Assistant Professor", company:"National Cheng Kung University", office:"R65B08, 11F, CSIE New Building"}
			)
		)
	}
});

var Support_Lecturers = React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{className:"card"},
			React.createElement(
				"div",
				{className:"title"},
				"Supporting Lecturers"
			),
			React.createElement(
				Person,
				{name:"Shih-Chin Weng", title:"Senior Software Developer", company:"Style.Me"}
			),
            React.createElement(
                Person,
                {name:"Min-Hsiang Hung", title:"產品開發部總監", company:"Shadoworks Studio"}
            )
		)
	}
});

var Grade = React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{className:"grade"},
			React.createElement(
				"div",
				{className:"gradeItem"},
				this.props.item
			),
			React.createElement(
				"div",
				{className:"gradeScore"},
				this.props.score
			)
		);
	}
});

var Grading = React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{className:"card"},
			React.createElement(
				"div",
				{className:"title"},
				"Grading"
			),
            React.createElement(
				Grade,
				{item:"Class Participation", score:"5%"}
			),
			React.createElement(
				Grade,
				{item:"Homework 1", score:"10%"}
			),
			React.createElement(
				Grade,
				{item:"Homework 2", score:"25%"}
			),
			React.createElement(
				Grade,
				{item:"Homework 3", score:"15%"}
			),
			React.createElement(
				Grade,
				{item:"Project", score:"45%"}
			)
		)
	}
});

var TAs = React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{id:"ta", className:"card"},
			React.createElement(
				"div",
				{className:"title"},
				"TAs"
			),
			React.createElement(
				Person,
				{name:"許友綸"}
			),
			React.createElement(
				Person,
				{name:"林季伯"}
			),
			React.createElement(
				"div",
				{className:"personInfo"},
				"E-mail: cg@mislab.csie.ncku.edu.tw"
			),
			React.createElement(
				"div",
				{className:"personInfo"},
				"Office: R65601, 6F, CSIE New Building"
			)
		)
	}
});

var AboutBody = React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{id:"aboutBody"},
			React.createElement(
				"div",
				{id:"leftContent"},
				React.createElement(
					About,
					null
				)
			),
			React.createElement(
				"div",
				{id:"rightContent"},
				React.createElement(
					Lecturers,
					null
				),
                React.createElement(
                    Support_Lecturers,
                    null
                ),
				React.createElement(
					Grading,
					null
				),
				React.createElement(
					TAs,
					null
				)
			)
		);
	}
});

var Main  =  React.createClass({
	render: function() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"header",
				null,
				React.createElement(Navigator, null)
			),
			React.createElement(
				AboutBody,
				null
			),
			React.createElement(
				Footer,
				null
			)
		)
	}
});
currentPage.about = "currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));