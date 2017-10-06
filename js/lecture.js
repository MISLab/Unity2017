var lectures = [
	{ title: "Week 1: Syllabus & Overview of Computer Graphics", img: "./art/week1.png", slideshow: "./file/20170920 Syllabus.pdf", video: "https://goo.gl/m8Hb5m" },
    { title: "Week 2: Introduction to Graphics Pipeline", img: "./art/week2.jpg", slideshow: "./file/20170926 Introduction to Graphics Pipeline.pdf", video: "https://youtu.be/yFvGRQvUTgU" },
    { title: "Week 3: Introduction to Game Development and VR Applications", img: "./art/week3.jpg", slideshow: "https://goo.gl/FXbyfk", video: "https://youtu.be/MM93V1dOldE" },
]

var Lecture = React.createClass({
	render: function () {
		var slideshowTemp;
		var videoTemp;
		var buttonCount = 0;
		if (this.props.slideshow != undefined) {
			buttonCount++;
		}
		if (this.props.video != undefined) {
			buttonCount++;
		}
		var buttonEle = [];
		if (this.props.slideshow != undefined) {
			buttonEle.push(React.createElement("a", { className: "slideshowB buttonCount" + buttonCount, href: this.props.slideshow, target: "_blank" }));
		}
		if (this.props.video != undefined) {
			buttonEle.push(React.createElement("a", { className: "videoB buttonCount" + buttonCount, href: this.props.video, target: "_blank" }));
		}
		return React.createElement(
			"div",
			{ className: "lecture" },
			React.createElement(
				"div",
				{ style: { "background-image": "url(" + this.props.img + ")" }, className: "lectureImg" }
			),
			React.createElement(
				"div",
				{ className: "lectureTitle" },
				this.props.title
			),
			React.createElement(
				"div",
				{ className: "cardButton" },
				buttonEle
			)
		);
	}
});

var Main = React.createClass({
	render: function () {
		var lecturesEle = [];
		for (var a in lectures) {
			lecturesEle.push(React.createElement(Lecture, { title: lectures[a].title, img: lectures[a].img, slideshow: lectures[a].slideshow, video: lectures[a].video }));
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
				{ id: "lectureBody" },
				lecturesEle
			),
			React.createElement(
				Footer,
				null
			)
		)
	}
});
currentPage.lecture = "currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));