Vue.component( "z-social-icon", {
	props: [ 'icon' ],
	template: '<i :class="icon.class" class="fab fa-2x"></i>'
});

Vue.component( "z-weather-icon", {
	data: function(){
		return {

			thunder: 0,
			cloudy: 0,
			sunny: 0,
			shower: 0,
			rainy: 1,
			flurries: 0,
			none: 0
		}
	},
	template: '<div v-if="thunder" class="icon thunder-storm"><div class="cloud"></div><div class="lightning"><div class="bolt"></div><div class="bolt"></div></div></div><div v-else-if="cloudy" class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div><div v-else-if="sunny" class="icon sunny"><div class="sun"><div class="rays"></div></div></div><div v-else-if="shower" class="icon sun-shower"><div class="cloud"></div><div class="sun"><div class="rays"></div></div><div class="rain"></div></div><div v-else-if="rainy" class="icon rainy"><div class="cloud"></div><div class="rain"></div></div><div v-else-if="flurries" class="icon flurries"><div class="cloud"></div><div class="snow"><div class="flake"></div><div class="flake"></div></div></div>'
});

Vue.component( "z-channel-zone", {
	data: function(){
		return {

			title: {
				comming: "Comming Soon",
				recent: "Recent Videos"
			},
			comming: [
				{
					date: "Tomorrow",
					name: "Video name1",
					link: ""
				},
				{
					date: "13.12",
					name: "Video name2",
					link: ""
				},
				{
					date: "14.12",
					name: "Video name3",
					link: ""
				}
			],
			recent: [
				{
					date: "Yesterday",
					name: "Video name1",
					link: ""
				},
				{
					date: "13.12",
					name: "Video name2",
					link: ""
				},
				{
					date: "14.12",
					name: "Video name3",
					link: ""
				},
			]
		}
	},
	template: '<div class="zone channel-zone"><div id="z11-btn-box" class="box"><a href="" id="z11-btn" class="btn-big"><i class="fab fa-youtube fa-lg"></i> z11</a></div><div id="video-links-box" class="box text-box"><h1>{{ title.comming }}</h1><ul><li v-for="content in comming">{{ content.date }} - <a :href="content.link">{{ content.name }}</a></li></ul><hr><h1>{{ title.recent }}</h1><ul><li v-for="content in recent">{{ content.date }} - <a :href="content.link">{{ content.name }}</a></li></ul></div></div>'
});

Vue.component( "z-events-zone", {
	data: function(){
		return {

			title: {
				comming: "Comming Events",
				recent: "Recent Events"
			},
			comming: [
				{
					date: "Tomorrow",
					name: "event name1",
					link: ""
				},
				{
					date: "13.12",
					name: "event name2",
					link: ""
				},
				{
					date: "14.12",
					name: "event name3",
					link: ""
				}
			],
			recent: [
				{
					date: "Yesterday",
					name: "event name1",
					link: ""
				},
				{
					date: "13.12",
					name: "event name2",
					link: ""
				},
				{
					date: "14.12",
					name: "event name3",
					link: ""
				},
			]
		}
	},
	template: '<div class="zone events-zone"><div id="events-box" class="box text-box"><h1>{{ title.comming }}</h1><ul><li v-for="event in comming" >{{ event.date }} - <a :href="event.link">{{ event.name }}</a></li></ul><hr><h1>{{ title.recent }}</h1><ul><li v-for="event in recent" >{{ event.date }} - <a :href="event.link">{{ event.name }}</a></li></ul></div><div id="event-btn-box" class="box"><a href="" class="btn-big"><i class="fas fa-calendar-alt"></i> meet</a></div></div>'
});

Vue.component( "z-privacy-zone", {
	data: function(){
		return {

			languages: [
				{ name: "English" },
				{ name: "Українська" },
				{ name: "Magyarul" }
			],
			privacys: [
				{ 
					name: "About",
					link: ""
				},
				{ 
					name: "Privacy",
					link: ""
				},
				{ 
					name: "Cookies",
					link: ""
				},
				{ 
					name: "Help",
					link: ""
				}
			]
		}
	},
	template: '<div id="privacy-zone" class="zone"><div class="box"><ul class="languages"><li v-for="language in languages" ><a href="">{{ language.name }}</a></li></ul><hr><ul class="privacy"><li v-for="page in privacys" ><a href="">{{ page.name }}</a></li></ul><ul><li><span id="copyright">Z11 Tech © 2018</span></li><li>|</li><li><a href="mailto:info@z11.tech">info@z11.tech</a></li></ul></div></div>'
});

Vue.component( "z-tag", { 
	data: function(){
		return {

			tags: [
				{ name: "#casestudies", clicked: "" },
				{ name: "#blog", clicked: "" },
				{ name: "#trends", clicked: "" },
				{ name: "#ourtean", clicked: "" },
				{ name: "#meetup", clicked: "" },
				{ name: "#asdfasf", clicked: "" }
			]
		}
	},
	template: '<div class="box tags-box"><ul><li v-for="tag in tags" :class="tag.clicked" @click="tag.clicked=\'clicked\'">{{ tag.name }}</li></ul></div>'
});

Vue.component( "z-post", {
	data: function(){
		return {

			posts: [
				{
					title: "Vasya Pupkin",
					subtitle: "Software Engineer | IT Business Strategist",
					source: "linkedin",
					date: "Today at 8 pm",
					likes: 1,
					comments: 0,
					views: 10,
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
				},
				{
					title: "Veritasium",
					subtitle: "An element of truth - videos about science, education, and anything else I find interesting.",
					source: "facebook",
					date: "Yesterday",
					likes: 12,
					comments: 2,
					views: 263,
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
				},
				{
					title: "NASA",
					subtitle: "Aviation & Aerospace",
					source: "twitter",
					date: "1 Week",
					likes: 49,
					comments: 27,
					views: 788,
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
				}
			]
		}
	},
	template: '<div><div class="box post-box" :class="post.source" v-for="post in posts"><div class="post-header"><div class="post-header-img"></div><div class="post-header-text"><h1>{{ post.title }}</h1><p>{{ post.subtitle }}</p></div><div class="post-header-date"><p>{{ post.date }}</p></div></div><div class="post-content"><div class="post-content-text"><span>{{ post.text }}</span><button>...see more</button></div><div class="post-content-img"></div></div><div class="post-footer"><i class="far fa-thumbs-up"></i><span> {{ post.likes }}</span>-<i class="far fa-comments"></i><span> {{ post.comments }}</span>-<i class="far fa-eye"></i><span> {{ post.views }}</span></div></div></div>'
});

new Vue({
	el: "#z-posts",
	data: {	}
});

new Vue({
	el: "#right-bar",
	data: { }
});

new Vue({
	el: "#left-bar",
	data: {
		icons: [
			{ id: 1, class: "fa-facebook-square" },
			{ id: 2, class: "fa-youtube-square" },
			{ id: 3, class: "fa-linkedin" }
		]
	},
	components: {
		"z-socials": {
			data: function(){
				return {

					icons: this.icons
				}
			},
			template: '<div><i v-for="icon in icons" :class="icon.class" class="fab fa-2x"></i></div>'
		}
	}
});

new Vue({
	el: "header"
});
