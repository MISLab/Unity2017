var File=React.createClass({
	render:function(){
		return React.createElement(
			"a",
			{className:"file", href:this.props.file},
			React.createElement(
				"div",
				{style:{"background-image":"url("+this.props.img+")"}, className:"fileImg"}
			),
			React.createElement(
				"div",
				{className:"filename"},
				this.props.filename
			)
		);
	}
});


var Tutorial=React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{id:"tutorialBody"},
			React.createElement(
				"h1",
				null,
				"Homework 1: Unreal Engine 4 Practice"
			),
			React.createElement(
				"div",
				{className:"paragraph"},
				React.createElement(
					"h2",
					null,
					"Introduction"
				),
				React.createElement(
					"p",
					null,
					"The Unreal Engine is a game engine developed by Epic Games.\
                    The Unreal Engine features a high degree of portability and is \
                    a tool used by many game developers today. It has won several awards,\
                    including the Guinness World Records award for \"most successful video game engine.\""
				),
				React.createElement(
					"p",
					null,
					"In this assignment, you will have to follow the video in the link below. By learning how to use a popular game engine, you have to figure out what is a game development pipeline"
				)
			),
            React.createElement(
				"div",
				{className:"paragraph clear"},
				React.createElement(
					"h2",
					null,
					"Download Unreal Props Assets "
				),
				React.createElement(
					File,
					{filename:"Unreal Assets", img:"./art/UnrealTutorial.png", file:"https://goo.gl/5WPUwo"}
				)
			),
			React.createElement(
				"div",
				{className:"paragraph clear"},
				React.createElement(
					"h2",
					null,
					"Unreal Tutorial Videos "
				),
				React.createElement(
					File,
					{filename:"Unreal Tutorials", img:"./art/UnrealTutorial.png", file:"https://goo.gl/nB19Fc"}
				)
			),
			React.createElement(
				"div",
				{className:"paragraph"},
				React.createElement(
					"h2",
					null,
					"Homework Submission"
				),
				React.createElement(
					"div",
					{className:"listInfo"},
					"Submit \"Student ID.zip\" to Moodle.",
					React.createElement(
						"br",
						null
					),
					"Include your game development pipeline /(in image formate like png, jpg, ..., or in ppt and pdf/).",
					React.createElement(
						"br",
						null
					),
					React.createElement(
						"span",
						{className:"alert"},
						"Deadline: 2017/10/2 22:00"
					)
				)

			),
			React.createElement(
				"div",
				{id:"score", className:"paragraph"},
				React.createElement(
					"h2",
					null,
					"Scoring"
				),
				React.createElement(
					"div",
					{className:"listInfo"},
					"Game Development Pipeline(100%)",						
					React.createElement(
						"br",
						null
					)
				)
			),
			
		)
	}
});

var Main = React.createClass({
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
				Tutorial,
				null
			),
			React.createElement(
				Footer,
				null
			)
		)
	}
});
currentPage.homework="currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));