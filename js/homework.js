var homeworks=[
	{title:"Homework 1", deadline:"2017/10/2 22:00", img:"./art/homework1.png", file:"./homework1.html"},
    {title:"Homework 2", deadline:"2017/10/30 22:00", img:"./art/homework2.png", file:"./homework2.html"}
]

var Homework=React.createClass({
	render:function(){
		return React.createElement(
			"a",
			{className:"homework", href:this.props.file},
			React.createElement(
				"div",
				{style:{"background-image":"url("+this.props.img+")"}, className:"img"}
			),
			React.createElement(
				"div",
				{className:"titleDiv"},
				React.createElement(
					"div",
					{className:"title"},
					this.props.title
				),
				React.createElement(
					"div",
					{className:"deadline"},
					"Deadline: "+this.props.deadline
				)
			)
		);
	}
});

var Main = React.createClass({
	render: function() {
		var homeworkEle=[];
		for(var a in homeworks){
			homeworkEle.push(React.createElement(Homework, {title:homeworks[a].title, img:homeworks[a].img, file:homeworks[a].file, deadline:homeworks[a].deadline}))
		}
		return React.createElement(
			"div",
			null,
			React.createElement(
				"header",
				null,
				React.createElement(Navigator, null)
			),
			React.createElement(
				"div",
				{id:"homeworkBody"},
				homeworkEle
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