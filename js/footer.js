	Vue.component('car-footer',{
		data:function() {
			return {
				misc:''
			}
		},
		mounted() {
			this.misc = i18n.messages[i18n.locale].misc;
		},
		template: '<div class="footer" v-cloak>\
		<div class="contact">\
			<div class="top">\
				<div class="logo"><img src="images/logo.png" ></div>\
				<div class="wx">\
					<a href="#">\
						<img src="images/humacar.png" >\
						<span>CAR</span>\
					</a>\
				</div>\
				<div class="phone">\
					<a href="#">\
						<img src="images/phone.png" >\
						<span>+1(888)-888-6518</span>\
					</a>\
				</div>\
			</div>\
		</div>\
		<div class="adress">\
			<ul>\
				<a href="#">\
					<li>\
						<span>洛杉矶旗舰店地址</span>\
						<p>19575 E Walnut Dr S Ste C13&C14 City of Industry CA 91748</p>\
					</li>\
				</a>\
				<a href="#">\
					<li>\
						<span>洛杉矶旗舰店地址</span>\
						<p>19575 E Walnut Dr S Ste C13&C14 City of Industry CA 91748</p>\
					</li>\
				</a>\
				<a href="#">\
					<li>\
						<span>洛杉矶旗舰店地址</span>\
						<p>19575 E Walnut Dr S Ste C13&C14 City of Industry CA 91748</p>\
					</li>\
				</a>\
			</ul>\
		</div>\
		<div class="misc">\
			<ul>\
				<li>\
					<a v-for="item in misc">\
						{{item}}\
					</a>\
				</li>\
			</ul>\
		</div>\
		<div class="copy">\
			<span>\
				Copyright@2016 HUMACAR Inc. Privacy Terms\
			</span>\
		</div>\
	</div>'
	})