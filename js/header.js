	Vue.component('car-header',{
		props: ['todo'],
		data: function() {
			return{
				show: false,
				topshow: false,
				botshow: false,
				enshow: "中文",
				curmes:'',
			}
		},
		mounted() {
			this.curmes = i18n.messages[i18n.locale];
		},
		methods: {
			change :function() {
			  this.enshow = this.enshow == '中文' ? "english" : "中文";
			  var that = this;
				that.exchange();
				if(that.enshow == '中文'){
					i18n.locale = 'en';
				}else if(that.enshow == 'english'){
					i18n.locale = 'zh-cn';
				}
			},
			exchange:function() {
				this.curmes = i18n.messages[i18n.locale];
			},
			top:function(){
				this.topshow = !this.topshow;
				$('html,body').animate({scrollTop: '0'}, 1100);
			},
			consult:function(){
				this.botshow = !this.botshow;
				setTimeout(function(){
					alert("功能完善中！")
				},1100)
			}
		},
		template: '<div class="header">\
			<img class="logo" src="images/logo.png">\
			<svg class="icon nav-menu-switch" aria-hidden="true" @click="show = !show">\
			    <use xlink:href="#icon-caidan"></use>\
			</svg>\
			<transition name="fade" mode="out-in">\
					<button class="back-to-top" :key="topshow" @click="top()">{{curmes.header.top}}</button>\
			</transition>\
			<transition name="fadel" mode="out-in">\
			<button class="language-switch" :key="enshow" @click="change()">{{enshow}}</button>\
			</transition>\
			<transition name="fadeo" mode="out-in">\
					<button class="online-consultation" :key="botshow" @click="consult()">{{curmes.header.online}}</button>\
			</transition>\
			<transition name="slide-fade">\
				<div v-if="show">\
					<div class="mask" v-on:click="show = !show">\
					</div>\
					<div class="nav-menu">\
						<ul>\
							<li>\
								<a href="#">\
									<svg class="icon" aria-hidden="true">\
									    <use xlink:href="#icon-xiazai45"></use>\
									</svg>\
									<span>{{ curmes.header.home }}</span>\
								</a>\
							</li>\
							<li>\
								<a href="#">\
									<svg class="icon" aria-hidden="true">\
									    <use xlink:href="#icon-car"></use>\
									</svg>\
									<span>{{ curmes.header.buy }}</span>\
								</a>\
							</li>\
							<li>\
								<a href="#">\
									<svg class="icon" aria-hidden="true">\
									    <use xlink:href="#icon-maiche"></use>\
									</svg>\
									<span>{{ curmes.header.sale }}</span>\
								</a>\
							</li>\
							<li>\
								<a href="#">\
									<svg class="icon" aria-hidden="true">\
									    <use xlink:href="#icon-cart"></use>\
									</svg>\
									<span>{{ curmes.header.bargain }}</span>\
								</a>\
							</li>\
							<li>\
								<a href="#">\
									<svg class="icon" aria-hidden="true">\
									    <use xlink:href="#icon-huankuanri"></use>\
									</svg>\
									<span>{{ curmes.header.hire }}</span>\
								</a>\
							</li>\
							<li>\
								<a href="#">\
									<svg class="icon" aria-hidden="true">\
									    <use xlink:href="#icon-chehangBmen"></use>\
									</svg>\
									<span>{{ curmes.header.about }}</span>\
								</a>\
							</li>\
							<li>\
								<a href="#">\
									<svg class="icon" aria-hidden="true">\
									    <use xlink:href="#icon-gerenzhongxin"></use>\
									</svg>\
									<span>{{ curmes.header.center }}</span>\
								</a>\
							</li>\
							<li>\
								<a href="#">\
								</a>\
							</li>\
						</ul>\
					</div>\
				</div>\
			</transition>\
		</div>'
	})