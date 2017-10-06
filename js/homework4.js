var File=React.createClass({
	render:function(){
		return React.createElement(
			"a",
			{className:"file", href:this.props.file, target:"_blank"},
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
				"Homework 4: Post-processing"
			),
			React.createElement(
				"div",
				{className:"paragraph"},
				React.createElement(
					"h2",
					null,
					"Learning Objectives"
				),
				React.createElement(
					"div",
					{className:"listInfo"},
					"Image processing",					
					React.createElement(
						"br",
						null
					),
					"Render-to-texture"
				)
			),
			React.createElement(
				"div",
				{className:"paragraph",id:"intro"},
				React.createElement(
					"h2",
					null,
					"Introduction"
				),
				React.createElement(
					"p",
					null,
					"Post progressing enhances the graphic and can be used to create stunning effects. In the graphics pipeline, the technique usually works with \"render-to-texture\" and \"render buffers\".",
					React.createElement(
						"div",
						{className:"paragraph"},
						React.createElement(
							"div",
							{id: "img1", className:"exImg",style:{"background-image":"url(./art/hw4_pic1.jpg)"}}
						)
					),
					React.createElement(
						"p",
						null,
						"In this homework, we asked you to add magnifying and blur effects to HW3 by using post-processing."
					),
					React.createElement(
						"p",
						{className:"alert"},
						"You can only apply the effects by using GPU-based algorithms.  Image libraries such as OpenCV are forbidden."
					)
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
					"Include your well-commented source code and a document explains your program",
					React.createElement(
						"br",
						null
					),
					React.createElement(
						"span",
						{className:"alert"},
						"Deadline: 2016/5/16 22:00"
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
					"Magnifying effect: magnifying the graphic with a controllable scalar.(30%)",
					React.createElement(
						"br",
						null
					),
					"Gaussian blur: blur the graphic with a controllable σ.(30%)",
					React.createElement(
						"br",
						null
					),
					"Apply the above effects on a controllable circle area.(30%)",
					React.createElement(
						"br",
						null
					),
					"Contribute to hackpad.(10%)"
				)
			),
			React.createElement(
				"div",
				{id:"example", className:"paragraph clear"},
				React.createElement(
					"h2",
					null,
					"Links"
				),
				React.createElement(
					File,
					{filename:"Hackpad", img: "./art/hackpad.png", file:"https://hackpad.com/CGHW4-C3YlRHq5uJh"}
				)
			)
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
			),
			React.createElement(
				"div",
				{id:"entryScene"},
				React.createElement(
					"iframe",
					{id:"entryIframe", src:"./postProcessing/index.html"}
				),
				React.createElement(
					"div",
					{id:"entryTitleDiv"},
					React.createElement(
						"div",
						{id:"entryMainTitle"},
						"Homework 4"
					),
					React.createElement(
						"div",
						{id:"entrySubTitle"},
						"Post-processing"
					)
				)
			)
		)
	}
});
currentPage.homework="currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));
setTimeout(function(){
	var scene=document.getElementById("entryScene");
	var sceneTitle=document.getElementById("entryMainTitle");
	var sceneSubTitle=document.getElementById("entrySubTitle");
	scene.style.transform="scale(1.2, 1.2)";
	scene.style.opacity="0";
	sceneTitle.style.transform="scale(1.2, 1.2)";
	sceneSubTitle.style.transform="scale(1.2, 1.2)";
	setTimeout(function(){
		scene.remove();
	}, 1000);
}, 2000);