// 通过选项创建 VueI18n 实例
	const i18n = new VueI18n({
	  locale: localStorage.getItem('locale') || 'zh-cn', // 设置地区
	  messages: {
		  en: {
			header: {
			  home: 'HOME',
			  buy: 'BUY',
			  sale: 'SALE',
			  bargain: 'CAR OUTLET',
			  hire: 'LOAN',
			  about: 'ABOUT',
			  center: 'PERSONAL CENTER',
					top: 'top',
					online: 'consult<br>ation',
			},
				search: {
					place: "What's in your mind?"
				},
				price: ['Under $10000','$10000-$15000','$15000-$20000','$20000-$30000','$30000-$40000','$40000 Over'],
				cartype:[{'logo':'make0.png','name':'Audi'},
				{'logo':'make1.png','name':'BMW'},
				{'logo':'make2.png','name':'Ford'},
				{'logo':'make3.png','name':'Honda'},
				{'logo':'make4.png','name':'Merced...'}],
				more: 'More',
				recom: 'CHAMPION Recommoned',
				seltype: ['Hot Deal','ECO-Car','Like new'],
				explain: [{'name':'2017 Audi A4 2.0L','price':'22,599','distance':'33,213Miles·0Dr·front wheel drive·4-Cyl·2.0L Turbocharger·Automatic'},
				{'name':'2017 Audi A4 2.0L','price':'22,599','distance':'33,213Miles·0Dr·front wheel drive·4-Cyl·2.0L Turbocharger·Automatic'}],
				mediaVoice: 'Media voice',
				media: [{
					title: 'New York motor show 2018: all-new subaru forest man debuts',
					art: 'Hyundai motor co. Will launch 8 new or redesigned crossover multipurpose vehicles by 2020. The Santa Fe family will also launch an 8-seat SUV in the future, which will be named after the brand new name.The 2019 Santa Fe will have a long-wheelbase version with seven seats. The new car will have a three-row seat layout and will be called the Santa Fe XL. Hyundai also said it will introduce an eight-seat SUV with a new name.In terms of power, the Santa Fe family will offer a choice of 2.4l and 2.0t engines, with a maximum power of 185hp and 235hp respectively.In addition, a 2.2LCRDi turbocharged diesel engine with 190 horsepower output will be provided, which will be matched by an 8-speed automatic transmission.'
				},{
					title: 'New York motor show 2018: all-new subaru forest man debuts',
					art: 'Hyundai motor co. Will launch 8 new or redesigned crossover multipurpose vehicles by 2020. The Santa Fe family will also launch an 8-seat SUV in the future, which will be named after the brand new name.The 2019 Santa Fe will have a long-wheelbase version with seven seats. The new car will have a three-row seat layout and will be called the Santa Fe XL. Hyundai also said it will introduce an eight-seat SUV with a new name.In terms of power, the Santa Fe family will offer a choice of 2.4l and 2.0t engines, with a maximum power of 185hp and 235hp respectively.In addition, a 2.2LCRDi turbocharged diesel engine with 190 horsepower output will be provided, which will be matched by an 8-speed automatic transmission.'
				}],
				misc: ['User agreement','Privacy statement','Suggestion feedback','Contact us'],
				
			},
		  'zh-cn': {
			header: {
			    home: '首页',
			    buy: '我要买车',
			    sale: '我要卖车',
			    bargain: '车行值购',
			    hire: '分期购车',
			    about: '关于车行',
			    center: '个人中心',
				top: '返回<br>顶部',
				online: '在线<br>咨询',
			},
				search: {
					place: "此处搜索车型！！！"
				},
				price: ['$1万以下','$1万-$1.5万','$1.5万-$2万','$2万-$3万','$3万-$4万','$4万以上'],
				cartype: [{'logo':'make0.png','name':'奥迪'},
				{'logo':'make1.png','name':'宝马'},
				{'logo':'make2.png','name':'福特'},
				{'logo':'make3.png','name':'本田'},
				{'logo':'make4.png','name':'奔驰'}],
				more: '更多',
				recom: '车行推荐',
				seltype: ['热门车型','经济车型','最新车型'],
				explain: [{'name':'2017 奥迪 A4 2.0L','price':'22,599','distance':'33,213英里·0门·前轮驱动·4缸·2.0L涡轮增压·自动'},
				{'name':'2017 奥迪 A4 2.0L','price':'22,599','distance':'33,213英里·0门·前轮驱动·4缸·2.0L涡轮增压·自动'}],
				mediaVoice: '媒体声音',
				media: [{
					title: '2018纽约车展：全新斯巴鲁森林人亮相',
					art: '日前，有海外媒体发布了一组2019款现代Santa Fe的图片，据悉，现代汽车公司直至2020年，将推出8款全新或重新设计的跨界多用途车型，Santa Fe系列未来也将推出一款8座SUV车型，并将以全新名称进行命名。据悉，2019款Santa Fe将推出一款长轴距版7座车型，新车将采用三排座椅布局，并命名为Santa Fe XL，此外现代汽车公司表示还将推出一款8座版SUV车型，并将采用全新名称进行命名。力方面，Santa Fe系列产品将提供2.4L发动机以及2.0T发动机可供选择，其最大功率分别为185马力、235马力。此外，还将提供一款可输出190马力的2.2LCRDi涡轮增压柴油机，传动方面与其匹配的均为8速自动变速箱。'
				},{
					title: '2018纽约车展：全新斯巴鲁森林人亮相',
					art: '日前，有海外媒体发布了一组2019款现代Santa Fe的图片，据悉，现代汽车公司直至2020年，将推出8款全新或重新设计的跨界多用途车型，Santa Fe系列未来也将推出一款8座SUV车型，并将以全新名称进行命名。据悉，2019款Santa Fe将推出一款长轴距版7座车型，新车将采用三排座椅布局，并命名为Santa Fe XL，此外现代汽车公司表示还将推出一款8座版SUV车型，并将采用全新名称进行命名。力方面，Santa Fe系列产品将提供2.4L发动机以及2.0T发动机可供选择，其最大功率分别为185马力、235马力。此外，还将提供一款可输出190马力的2.2LCRDi涡轮增压柴油机，传动方面与其匹配的均为8速自动变速箱。'
				}],
				misc: ['用户协议','隐私声明','意见反馈','联系我们'],
		  }
		}// 设置地区信息
	})