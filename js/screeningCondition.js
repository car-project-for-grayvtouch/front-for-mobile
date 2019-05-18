
var screeningConditioncn = {
	brand: [],
	carseries: [],
	cartype: [],
	price: [{
			value: '',
			label: '不限'
		},{
			value: '1',
			label: '$10,000以下'
		},{
			value: '2',
			label: '$10,000-$15,000'
		},{
			value: '3',
			label: '$15,000-$20,000'
		},{
			value: '4',
			label: '$20,000-$30,000'
		},{
			value: '5',
			label: '$30,000-$40,000'
		},{
			value: '6',
			label: '$40,000以上'
		}],
	mileage: [{
			value: '',
			label: '不限'
		},{
			value: '1',
			label: '1万英里以内'
		},{
			value: '2',
			label: '3万英里以内'
		},{
			value: '3',
			label: '5万英里以内'
		},{
			value: '4',
			label: '8万英里以内'
		},{
			value: '5',
			label: '10万英里以内'
		},{
			value: '6',
			label: '15万英里以内'
		}],
	age: [{
			value: '',
			label: '不限'
		},{
			value: '1',
			label: '1年以内'
		},{
			value: '2',
			label: '3年以内'
		},{
			value: '3',
			label: '5年以内'
		},{
			value: '4',
			label: '6年以内'
		},{
			value: '5',
			label: '8年以内'
		},{
			value: '6',
			label: '8年以上'
		}],
	gearbox: [{
			value: '',
			label: '不限'
		},{
			value: '手动',
			label: '手动'
		},{
			value: '自动',
			label: '自动'
		},{
			value: '手自一体',
			label: '手自一体'
		},{
			value: '无级变速',
			label: '无级变速'
		},{
			value: '双离合',
			label: '双离合'
		},{
			value: '机械自动变速箱',
			label: '机械自动变速箱'
		},{
			value: '直驱',
			label: '直驱'
		}],
	color: [{
			value: '',
			label: '不限'
		},{
			value: '白色',
			label: '白色'
		},{
			value: '黑色',
			label: '黑色'
		},{
			value: '银灰',
			label: '银灰'
		},{
			value: '灰色',
			label: '灰色'
		},{
			value: '黄色',
			label: '黄色'
		},{
			value: '香槟',
			label: '香槟'
		},{
			value: '红色',
			label: '红色'
		},{
			value: '粉色',
			label: '粉色'
		},{
			value: '紫色',
			label: '紫色'
		},{
			value: '蓝色',
			label: '蓝色'
		},{
			value: '绿色',
			label: '绿色'
		},{
			value: '咖啡',
			label: '咖啡'
		},{
			value: '其他',
			label: '其他'
		}],
}

var screeningConditionen = {
	brand: [],
	carseries: [],
	cartype: [],
	price: [{
			value: '',
			label: 'all'
		},{
			value: '1',
			label: 'Under $10,000'
		},{
			value: '2',
			label: '$10,000-$15,000'
		},{
			value: '3',
			label: '$15,000-$20,000'
		},{
			value: '4',
			label: '$20,000-$30,000'
		},{
			value: '5',
			label: '$30,000-$40,000'
		},{
			value: '6',
			label: '$40,000 Over'
		}],
	mileage: [{
			value: '',
			label: 'all'
		},{
			value: '1',
			label: 'Within 10,000 miles'
		},{
			value: '2',
			label: 'Within 30,000 miles'
		},{
			value: '3',
			label: 'Within 50,000 miles'
		},{
			value: '4',
			label: 'Within 80,000 miles'
		},{
			value: '5',
			label: 'Within 100,000 miles'
		},{
			value: '6',
			label: 'Within 150,000 miles'
		}],
	age: [{
			value: '',
			label: 'all'
		},{
			value: '1',
			label: 'Within 1 year'
		},{
			value: '2',
			label: 'Within 3 year'
		},{
			value: '3',
			label: 'Within 5 year'
		},{
			value: '4',
			label: 'Within 6 year'
		},{
			value: '5',
			label: 'Within 8 year'
		},{
			value: '6',
			label: 'More than 8 years'
		}],
	gearbox: [{
			value: '',
			label: 'all'
		},{
			value: 'manual',
			label: 'manual'
		},{
			value: 'automatic',
			label: 'automatic'
		},{
			value: 'manual and automatic', 
			label: 'manual and automatic'
		},{
			value: 'Infinitely variable speed',
			label: 'Infinitely variable speed'
		},{
			value: 'Double clutch',
			label: 'Double clutch'
		},{
			value: 'Mechanical automatic transmission',
			label: 'Mechanical automatic transmission'
		},{
			value: 'Direct drive',
			label: 'Direct drive'
		}],
	color: [{
			value: '',
			label: 'all'
		},{
			value: 'white',
			label: 'white'
		},{
			value: 'black',
			label: 'black'
		},{
			value: 'Silver grey',
			label: 'Silver grey'
		},{
			value: 'grey',
			label: 'grey'
		},{
			value: 'yellow',
			label: 'yellow'
		},{
			value: 'champagne',
			label: 'champagne'
		},{
			value: 'red',
			label: 'red'
		},{
			value: 'pink',
			label: 'pink'
		},{
			value: 'purple',
			label: 'purple'
		},{
			value: 'blue',
			label: 'blue'
		},{
			value: 'green',
			label: 'green'
		},{
			value: 'coffee',
			label: 'coffee'
		},{
			value: 'other',
			label: 'other'
		}],
}

var mayuse = {
	brand: [{
			value: 'A',
			label: 'A',
			children: [{value:'阿尔法罗密欧',label:'阿尔法罗密欧'},{value:'AMC',label:'AMC'},{value:'奥迪',label:'奥迪'},{value:'奥兹莫比尔',label:'奥兹莫比尔'},{value:'阿斯顿马丁',label:'阿斯顿马丁'}],
			},{
			value: 'B',
			label: 'B',
			children: [{value:'宝马',label:'宝马'},{value:'保时捷',label:'保时捷'},{value:'奔驰',label:'奔驰'},{value:'本田',label:'本田'},{value:'标致',label:'标致'},{value:'别克',label:'别克'},{value:'宾利',label:'宾利'},],
			},{
			value: 'D',
			label: 'D',
			children: [{value:'道奇RAM',label:'道奇RAM'},{value:'道奇',label:'道奇'},{value:'达特桑',label:'达特桑'},{value:'大宇',label:'大宇'},{value:'大众',label:'大众'},{value:'德劳瑞恩',label:'德劳瑞恩'},],
			},{
			value: 'F',
			label: 'F',
			children: [],
			},{
			value: 'G',
			label: 'G',
			children: [],
			},{
			value: 'H',
			label: 'H',
			children: [],
			},{
			value: 'I',
			label: 'I',
			children: [],
			},{
			value: 'J',
			label: 'J',
			children: [],
			},{
			value: 'K',
			label: 'K',
			children: [],
			},{
			value: 'L',
			label: 'L',
			children: [],
			},{
			value: 'M',
			label: 'M',
			children: [],
			},{
			value: 'O',
			label: 'O',
			children: [],
			},{
			value: 'P',
			label: 'P',
			children: [],
			},{
			value: 'Q',
			label: 'Q',
			children: [],
			},{
			value: 'R',
			label: 'R',
			children: [],
			},{
			value: 'S',
			label: 'S',
			children: [],
			},{
			value: 'T',
			label: 'T',
			children: [],
			},{
			value: 'w',
			label: 'w',
			children: [],
			},{
			value: 'X',
			label: 'X',
			children: [],
			},{
			value: 'Y',
			label: 'Y',
			children: [],
			}],
		carseries: [{
			value: '不限',
			label: '不限'
		},{
			value: '宝马 3系',
			label: '宝马 3系'
		},{
			value: '奔驰 C系',
			label: '奔驰 C系'
		},{
			value: '丰田 凯美瑞',
			label: '丰田 凯美瑞'
		},{
			value: '宝马 5系',
			label: '宝马 5系'
		},{
			value: '奔驰 E系',
			label: '奔驰 E系'
		},{
			value: '福特 野马',
			label: '福特 野马'
		},{
			value: '保时捷 卡宴',
			label: '保时捷 卡宴'
		},{
			value: '本田 雅阁',
			label: '本田 雅阁'
		},{
			value: '丰田 卡罗拉',
			label: '丰田 卡罗拉'
		},{
			value: '本田 思域',
			label: '本田 思域'
		}],
		cartype: [{
				value: '不限',
				label: '不限'
			},{
				value: '轿车',
				label: '轿车'
			},{
				value: '跑车',
				label: '跑车'
			},{
				value: '皮卡',
				label: '皮卡'
			},{
				value: 'SUV',
				label: 'SUV'
			},{
				value: 'MPV',
				label: 'MPV'
			}],
}