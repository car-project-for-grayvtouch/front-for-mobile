	
// 通过选项创建 VueI18n 实例
	let i18n = new VueI18n({
	    locale: localStorage.getItem('locale') || 'en', // 设置地区
		// silentTranslationWarn: true,
	    messages: {
		    en: {
				//头部导航
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
				// 搜索
				search: {
					place: "What's in your mind?"
				},
				//首页价格
				carPrice: 'CAR Price',
				price: [{id:1, detail:'Under $10000'},{id:2, detail:'$10000-$15000'},{id:3, detail:'$15000-$20000'},{id:4,detail:'$20000-$30000'},{id:5,detail:'$30000-$40000'},{id:6,detail:'$40000 Over'}],
				//首页品牌
				carBrand: 'CAR brand',
				cartype:[],
				more: 'More',
				//cham推荐
				seltype: ['Latest-hot','ECO','Prospective','luxury'],
				recom: 'CHAMPION Recommoned',
				explain: [],
				extip: 'Remind',
				extipc: 'No comment, please inform customer service',
				// 媒体声音
				mediaVoice: 'Media voice',
				media: [],
				metip: 'Remind',
				metipc: 'No articles, notice customer service on the new',
				tipsArr:['Free transfer','A variety of financial loan services','Within a year the national road rescue service','Multiple payment channels (POS machine, WeChat, alipay, etc.)','There is no 100% commission'],
				wantBuy: 'Search',
				hotSearch: 'Hot Search',
				hotsearchArr: [],
				comment: [],
				adv1: 'CHAMPION is dedicated to delivering a premium car experience',
				storyTitle: 'CHAMPION Story',
				storyDes: 'Buy Car description',
				froms: 'from ',
				scom: "'s comment",
				strongRecom: 'is highly recommended',
				score: 'score',
				miles: 'Miles',
				door: 'Dr',
				cylinder: 'cylinder',
				//登录注册
				login: 'Login',
				log: 'Login',
				register: 'Register',
				pname: 'Please enter your username',
				ppass: 'Please enter the password',
				loginagree: 'Login is consent',
				registeragree: 'Register is consent',
				useragree: 'User agreement',
				and: 'and',
				privacyPolicy: 'Privacy policy',
				//首页步骤
				indexstep: {
					step0: 'Step one',
					step1: 'Step two',
					step2: 'Step three',
					step3: 'Step four',
					step4: 'Step five',
					step5: 'Step six',
				},
				// 页面footer
				misc: [{"content":'Service agreement','src':"serivceAgreement.html"},
				{"content":'Privacy statement','src':"private.html"},
				{"content":'Contact us','src':"contactUs.html"}],
				address: 'Massachusetts state',
				other: 'other',
				champion: 'CHAMPION WECHAT',
				addressphone: '617-481-7697',
				addressDetail: '134 east Howard st，Quincy，ma，02169，usa',
				// 卖车页
				sale: {
					personPosi: 'Please enter your location',
					vin: 'Please enter 17 bits vin code',
					mileage: "mileage",
					pmileage: 'Please enter the current mileage',
					preprice: 'The expected price',
					ppreprice: 'Please enter your desired price',
					owner: 'The Car owner information',
					phoneNumber: 'Please enter your mobile phone number',
					wxNumber: 'Please enter your WeChat ID',
					serifyCode: 'Please enter your verification code',
					body: 'The body color',
					interior: 'Interior color',
					remark: 'remark',
					premark: 'Please input the configuration of your car so that we can know more about your car.',
					submit: 'submit',
					facecolor: ['white', 'black', 'silver grey', 'gray', 'yellow', 'champagne', 'red pink and purple', 'blue', 'green and coffee', 'the other'],
					insidecolor: ['white', 'black', 'silver grey', 'gray', 'yellow', 'champagne', 'red pink and purple', 'blue', 'green and coffee', 'the other'],
				},
				loan: {
					service: 'Please make sure that your mobile phone number is available, support China, the United States mobile phone number.',
					pphone: 'Please enter your mobile phone number',
					weixin: 'Please enter your WeChat ID',
					verifyCode: 'Please enter your verification code',
					identity: 'Choose your identity',
					work: 'work',
					student: 'student',
					ssn: 'Is there a SSN',
					yes: 'yes',
					no: 'no',
					apply: 'Apply immediately',
					payment: 'Lower down payment',
					paymentc: 'Down payment as low as 30%',
					lending: 'Lending fast',
					lendingc: 'Ninety-eight percent is available as soon as the day',
					threshold: 'The low threshold',
					thresholdc: 'Over 80% pass rate',
					customized: 'customized',
					customizedc: 'Professional customer service throughout the service',
					loanProcess: 'Loan process',
					tapply: 'For 30 seconds',
					tapplyc: 'Fill in 4 basic information online (name, id number, savings card number, mobile phone number), and the result will come out in seconds',
					Telephone: 'Telephone pays a return visit',
					Telephonec: 'Financial specialist one-to-one explanation, customized financial solutions',
					approval: 'Online examination and approval',
					approvalc: 'Materials submitted immediately after approval, no running water, no home visit, the fastest 30 minutes out of the results',
					pickup: 'Pick up the car loan',
					pickupc: 'CHAM to help you complete the transfer of vehicles, mortgages and other procedures, the day loan',
				},
				bargin: {
					existing: 'Existing',
					request:  "people submitted a vehicle request",
					find: 'Looking for a car on the way is not lonely, leave your contact information, we contact you.',
					service: 'CHAMPION for you',
					brand: 'Please enter your desired brand and model.',
					brandc: 'Example: BMW428i in 2016',
					price: 'Please enter your expected price',
					pricec: 'Example: 3w to 4.5w',
					mileage: 'Please enter your expected mileage',
					mileagec: 'Example: 10,000-30,000 (miles)',
					tip: 'Please make sure that your mobile phone number is available, support China, the United States mobile phone number.',
					remark: 'remark',
					remarkc: 'Please input the configuration of your car so that we can know more about your car',
					phone: 'Please enter your mobile phone number',
					weixin: 'Please enter your WeChat ID',
					verifyCode: 'Please enter your verification code',
					submit: 'Confirm to submit',
					special: 'CHAMPION of car ownership',
					specialone: 'Wholesale price of high quality vehicles',
					specialtwo: 'No need to see the car directly online purchase',
					specialthree: 'ASE certified engineer with over 300 full-vehicle tests',
					specialfour: 'All 49 states within 7 days',
					process: 'CHAMPION values the process of buying a car',
					processone: 'Customer service will contact you at the appropriate time',
					processtwo: 'CHAM will help you choose your car more accurately',
					processthree: 'Value of car purchase source look ahead',
					processfour: 'CHAM is responsive to your needs',
				},
				buy:{
					screeningCondition: screeningConditionen,
					conditions: 'Filter',
					clearAll: 'Removal<br>filter',
					Determine: 'Determine the screening',
					brand: 'Brand',
					series: 'Series',
					price: 'Price',
					model: 'Model',
					mileage: 'Mileage',
					age: 'Age',
					color: 'Color',
					gearbox: 'Gearbox',
					defaultSort: 'Default sort',
					priceSort: 'Price sorted',
					ageSort: 'Age sorted',
					mileageSort: 'Mileage sorted',
					tips: 'Tips',
					tipsc: 'There is no selected vehicle at present, please inform the customer service of the new one.',
					searchArr: [],
				},
				detail:{
					collect: '',
					topinfo:{
						name: '',
						price: '',
					},
					mileage: '',
					level: 'A',
					transfer: '',
					point: [],
					// 初始配置
					config: {
						displacement: '0',
						gearbox: '',
						cityfuelConsumption: '0.00',
						speedfuelConsumption: '0.00',
						type: '',
						size: '',
						seat: '0',
					},
					// 配置表格一
					columns: [
						{
							title: 'The basic parameters',
							key: 'name'
						},{
							title: 'Engine parameters',
							key: 'age'
						},{
							title: 'Chassis and braking',
							key: 'address'
						},
					],
					datada: [],
					// 配置表格二
					columnss: [
						{
							title: 'Security configuration',
							key: 'name'
						},{
							title: 'External configuration',
							key: 'age'
						},{
							title: 'The internal configuration',
							key: 'address'
						}
					],
					datads: [],
					// 检测报告
					reportTime: '',
					reportresult: [{},{},{},{}],
					accidentArrone: [],
					accidentArrtwo: [],
					facecheck: [],
					autodeviceone: [],
					autodevicetwo: [],
					autodevicethree: [],
					autodevicefour: [],
					autodevicefive: [],
					autodevicesix: [],
					dirveSysone: [],
					dirveSystwo: [],
					dirveSysthree: [],
					dirveSysfour: [],
					dirveSysfive: [],
					carreport: 'true',
					championprice: 'CHAMPION price',
					minloan: 'The minimum loan',
					proposal: 'View the loan proposal',
					appointment: 'To make an appointment car',
					consultant: 'online consultant',
					date: 'option date',
					time: 'selection time',
					phone: 'cell-phone number',
					weixin: 'Wechat ID',
					verifycode: 'verification code',
					tipsp: 'Mass car source, custom demand!You can choose CHAMPIONAUTO value and purchasing',
					cv: 'click to view',
					td: 'travlled<br>distance',
					mile: 'mileage',
					reviewlevel: 'Review of the level',
					tranferRecord: 'The transfer record',
					degr: 'time',
					Highlight: 'Highlight the configuration',
					displace: 'displacement',
					gear:　'gearbox',
					fuel: 'oil wear',
					ci: 'city',
					hs: 'high speed',
					le: 'Level',
					si: 'size',
					sc: 'Carrying amount',
					c: 'seat',
					vd: 'vehicle disposition',
					vtr: 'Vehicle test report',
					dt: 'detection time',
					dm: 'Detection models',
					normal: 'normal',
					repair: 'Sheet metal repair',
					update: 'Change of cover',
					norepair: 'Minor defects, not yet repaired',
					launch: 'launch',
					starting: 'starting',
					speedup : 'speed up',
					constant : 'Driving at a constant speed',
					dab: 'Deceleration and braking',
					tips: 'Tips',
					tipsc: 'No vehicle report, waiting for test',
					wp: 'Whole process',
					sw: 'Suppose you want to see',
					guesswant: [],
					moreparam: 'More detailed parameter configuration',
					detailReport: 'View the detailed test report',
					item: ' item',
					accidentTime: '',
					facecheckTime: '',
					autodeviceTime: '',
					dirveSysTime: '',
				},
				about: {'Championa what kind of company is that？':'CHIMPON in North America is a integration of offline quality resources O2O auto service platform, we provide the user with car rental, student driver, purchases, loans, localization services such as maintenance of one-stop Chinese car platform, let each user, save money at ease purchase good car.',
				'What is the process of buying a car？':'1. Call the car number/make an appointment online.<br>2. The consultant calls to confirm and pick you up to see the car.<br>3. Selected vehicles, after 300 tests.<br>4. Select your car and help you with all the formalities.<br>',
				'What materials are needed to sell a car？':'You only need to fill in the complete information in the online car sales department, and our staff will contact you and arrange a comprehensive test for your car offline.'},
				contactUs: {
					title: 'Contact us',
					phone: '7x24 Chinese customer service phone number',
					country: 'The United States',
					email: 'Email',
				},
				privat: "<h3>User privacy policy</h3>\
				<p class='content-sy-b'>\
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dear users, your trust is very important for CHAMPION platform. CHAMPION platform is well aware of the importance of personal information for you. CHAMPION platform will take corresponding security protection measures according to laws and regulations, and try its best to protect your personal information in a safe and controllable way.As a result, Beijing CHAMPION old motor vehicle brokerage co., LTD and its affiliates (hereinafter referred to as the 'CHAMPION'), the CHAMPION website (www.championcargroup.com) and the application of APP, etc. (hereinafter referred to as 'CHAMPION platform') formulated the user privacy policy (hereinafter referred to as 'the policy') and remind you to:：<br>\
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This policy applies to all products or services of CHAMPION company and CHAMPION platform.CHAMPION. If no independent privacy policy exists for the products or services provided by CHAMPION, this policy applies to such products or services as well.<br>\
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Before you use the products or services of CHAMPION platform, please be sure to read and fully understand this policy. Once you start to use the products or services of CHAMPION platform, you have fully understood and agreed to this policy.\
				</p>\
				<h4 class='content-sy-b'>1. 【The collection scope of personal information】</h4>\
				<p>\
					CHAMPION platform is authorized to collect the following personal information of you：<br>\
					1）Personal information: when you select the CHAMPION platform to provide related services, according to you to choose the type of service may need to submit to the CHAMPION platform or voluntarily by the CHAMPION platform for personal id card, phone number, address, email, financial vehicles, vehicle information application, the power of attorney, credit registries, driving license, and bank CARDS, pay information, bank water, third-party payment of social security system records, trading records and related information.<br>\
					2）Your password, password prompts, and other security information that can be used to verify and access your account.<br>\
					3）When CHAMPION platform customer service team, staff and partners to contact you or you with CHAMPION platform customer service team, staff, partners contact, CHAMPION platform will call recording and manually to record both sides of the phone information and your opinions or Suggestions, you provide the name and contact information, so that the CHAMPION platform to provide better service for you, handling disputes, solve a problem or to feedback the result to you.If you refuse to collect such information on the CHAMPION platform, you may be unable to use the core business functions of the CHAMPION platform.<br>\
					4）When you use CHAMPION platform service, the server will automatically record some information, including but not limited to, usage, IP address, the type of access service URL, browser, access the vehicle location, access to information, such as access to the date and time log, in order to improve the function, improve the user experience, to provide you with better service.<br>\
					5）Some products and/or services contain unique application Numbers.This number is sent to the CHAMPION platform along with installation-related information, such as operating system type and application version number, when you install, activate, update, uninstall, or when these services communicate with the CHAMPION platform on a regular basis (such as software updates).When you use CHAMPION platform services with location capabilities, the system automatically processes location information about the device so that you don't have to manually enter your own geographic coordinates to get the service.In order to provide better service and improve user experience, CHAMPION platform may record information such as hardware model, operating system version number, international mobile device identity code (IMEI), network device hardware address (MAC), etc.<br>\
					6）To achieve the personalized requirements of your online experience, so that you have a more relaxed access experience.CHAMPION platform sends one or more small data files called Cookies on your computer or mobile device. The Cookies assigned to you are unique and can only be read by Web servers that publish Cookies to your domain.CHAMPION platform sends Cookies to you in order to simplify the steps of your repeated login, store data such as your preference of car selection, and then provide you with the preference setting of car selection, help you optimize the selection and interaction of advertisements, and help you judge your login status and account or data security.CHAMPION platform does not use Cookies for any purpose other than those described in this privacy policy.You may manage or delete Cookies according to your preferences.You can clear all Cookies saved on the computer. Most web browsers automatically accept Cookies, but you can usually change the Settings of the browser to reject Cookies according to your own needs.In addition, you can clear all Cookies saved in the browser, and the mobile terminal can clear all Cookies after logging out.However, if you do this, you may need to personally change the user Settings every time you visit the CHAMPION platform website, and the corresponding information you previously recorded will be deleted and may have an impact on the security of the services you use. <br>\
					7）Other personal information collected according to the needs of specific products and services of CHAMPION platform, including but not limited to your opinions and Suggestions on CHAMPION platform and products or services of CHAMPION platform.\
				</p>\
				<h4 class='content-sy-b'>2. 【Personal information collection methods】</h4>\
				<p>\
					You authorize the CHAMPION platform to collect your personal information in the following ways：<br>\
					1）CHAMPION platform will collect and store information that you proactively provide to CHAMPION platform when browsing, accessing, and/or using products or services of CHAMPION platform；<br>\
					2）CHAMPION platform will collect and store information relevant to you that is recorded by CHAMPION platform in providing products or services of CHAMPION platform to you；<br>\
					3）CHAMPION platform will collect and store information that you voluntarily submit or provide feedback through CHAMPION platform's customer service staff, staff, partners and/or other channels；<br>\
					4）CHAMPION platform will collect and store legally obtained information about you from affiliates, business partners and independent third party sources；<br>\
					5）CHAMPION platform will inquire your relevant credit information from the credit investigation institution established according to law, including but not limited to any credit score, credit report, etc.\
				</p>\
				<h4 class='content-sy-b'>3.【Use of personal information】</h4>\
				<p>\
					You authorize the CHAMPION platform to use your personal information for the following purposes：<br>\
					1）We will provide you with the products and services of CHAMPION platform and manage and optimize the relevant websites and apps of CHAMPION platform；<br>\
					2）CHAMPION platform promotes and improves the functionality and quality of existing products and services, including but not limited to the customization and updating of products and services；<br>\
					3）CHAMPION carries out marketing activities related to products and services of the CHAMPION platform to push the latest information of marketing activities and preferential schemes to you；<br>\
					4）Design, develop and promote new products and services；<br>\
					5）CHAMPION platform product and service security, including but not limited to authentication, user services, security precautions, fraud monitoring, archiving and backup；<br>\
					6）To assist administrative organs, judicial organs and other competent organs in carrying out investigations, and to abide by applicable laws and regulations and other obligations committed to competent organs；<br>\
					7）The purpose for which you are notified at the time the information is collected and other purposes related to any of the above purposes；<br>\
					8）Subject to applicable laws and regulations, CHAMPION may anonymize, summarize, desensitize and encrypt your personal information to form a statistical information or user portrait (but the portrait cannot identify any individual user) to display and push relevant services, products or functions for you.<br>\
					9）In addition, the CHAMPION platform may send you information and notifications relevant to the above purposes，This includes, but is not limited to, captchas required to ensure the completion of the service, push notifications necessary to use the product or service, news about CHAMPION platform products or services, and marketing activities and promotional information.\
				</p>\
					<h4 class='content-sy-b'>4.【Sharing of personal information】</h4>\
				<p>\
					CHAMPION platform is obliged to keep your personal information confidential, but you authorize CHAMPION platform to share your information with a third party if：<br>\
					1）In order to improve the quality of products and services of CHAMPION platform or provide you with brand new products and services, CHAMPION platform will share your relevant information within affiliated companies, and may also provide the information collected by CHAMPION platform to a third party for analysis and statistics；<br>\
					2）If certain products and services that you use through the CHAMPION platform are provided by or in conjunction with a partner, partner or supplier of the CHAMPION platform, the CHAMPION platform will share with you the information necessary to provide you with the products and services；<br>\
					3）CHAMPION platform may provide aggregated information, anonymized information or other information that would not identify you to third party advertisers, application developers, open platforms or other partners for joint promotional activities with third parties；<br>\
					4）In order to protect the legitimate rights and interests of you and the parties to the transaction, CHAMPION platform will provide the information necessary for the settlement of the transaction dispute or dispute to the other party or a third party with an interest when assisting in the settlement of the transaction dispute or dispute related to you；<br>\
					5）Champiplatform may provide you with information that would be subject to audit or due diligence by investors, third parties, in accordance with applicable laws and regulations and business practices；<br>\
					6）CHAMPION platform will provide you with relevant information in accordance with the provisions of laws and regulations or the requirements of competent authorities such as administrative authorities and judicial organs；<br>\
					7）CHAMPION's related services may share your personal information with CHAMPION's vendors, service providers, consultants, or agents to provide better customer service and user experience.For example, if you participate in the lucky draw, we need to provide your personal information to the logistics service provider in order to send prizes；<br>\
					8）Other circumstances in which your personal information can be provided to a third party with your consent or authorization。<br>\
					You agree to release the receiving and/or using party of the above personal information from all claims, liabilities and losses arising out of or likely to result from the disclosure and use of such information in accordance with the circumstances set forth in this policy.\
				</p>\
				<h4 class='content-sy-b'>5.【Exceptions to the collection, use and provision of personal information】</h4>\
				<p>\
					You fully understand and accept that CHAMPION platform collects, USES and provides your personal information to others without your authorization and consent if：<br>\
					1）Relating to national security and national defence security；<br>\
					2）Relating to public safety, public health or major public interests；<br>\
					3）Related to criminal investigation, prosecution, trial and execution of judgment, or requested by public security, procuratorate, court, market supervision, commerce and other authorities；<br>\
					4）In order to protect the main body of personal information or other personal life, property and other major legitimate rights and interests but it is difficult to get my consent；<br>\
					5）The personal information collected is disclosed to the public by the subject of personal information；<br>\
					6）The personal information collected is disclosed to The public by The subject of personal information；<br>\
					7）It is necessary to sign the contract according to your requirement；<br>\
					8）Necessary to maintain the safe and stable operation of the provided services and/or products, such as the discovery and disposition of failures of the services and/or products；<br>\
					9）Necessary for legitimate news reporting；<br>\
					10）When it is necessary for an academic research institution to carry out statistics or academic research on the basis of public interest, and provide the results of academic research or description to the public, it shall de-label the personal information contained in the results；<br>\
					11）Other circumstances prescribed by laws and regulations。\
				</p>\
				<h4 class='content-sy-b'> 6.【Personal information security measures】</h4>\
				<p>\
					1）CHAMPION platform and its affiliates will safeguard, store, transmit and encrypt your personal information using a rigorous security regime and industry-accepted security techniques and procedures to ensure that your personal information is not lost, compromised or misused.<br>\
					2）CHAMPION stores your personal information only for such period of time as is necessary for the purposes of this privacy policy and as may be required by applicable laws and regulations.<br>\
					3）如CHAMPION will cease operations and we will promptly cease any further efforts to collect your personal information, notify you of such cessation of operations in the form of individual notices or announcements, and remove or anonymize our stored personal information.<br>\
				</p>\
				<h4 class='content-sy-b'> 7.【Inquiry, correction and deletion of personal information】</h4>\
				<p>\
					You can query and correct your personal information on the CHAMPION website.CHAMPION reserves the right to require CHAMPION to delete your personal information if：<br>\
					1）We have collected your personal information without your express consent.<br>\
					2）We handled your personal information in violation of laws and regulations.<br>\
					3）We have violated our agreement with you to use and process your personal information.<br>\
					4）You have logged out, uninstalled or are no longer using our products or services.<br>\
					5）We cease to serve you.<br>\
					After receiving your notice to delete your personal information, we will reply within 15 working days.When we delete your personal information from the server, we may not immediately delete the data from the backup system, but we will delete the information when the backup is updated.<br>\
					You can log on to the website and submit an application to log out of your account.Please note that if you choose to log out of your account, your account will not be available and the relevant account information will be deleted. You will not be able to log in to your account and use the functions that you must log in to use (but will not affect the services and functions that you can use without having to log in to your account)）.<br>\
					When you log out of the account, we will stop providing relevant products (or services) to you and delete or anonymize your personal information within 15 working days, except for the circumstances where laws and regulations require us to keep relevant information.\
				</p>\
				<h4 class='content-sy-b'> 8.【Information protection for minors】</h4>\
				<p>\
					Minors are not allowed to create their own user accounts without the consent of their parents or guardians.If you are a minor, you are advised to ask your parents or guardians to read this privacy policy carefully and to use the services of CHAMPION platform or provide information to CHAMPION platform with the consent of your parents or guardians.<br>\
					In cases where personal information of minors is collected through the use of CHAMPION platform's products or services with the consent of the parents or guardians, CHAMPION platform will only use, share, transfer or disclose such information if permitted by laws and regulations, with the explicit consent of the parents or guardians or necessary to protect the minors.\
				</p>\
				<h4 class='content-sy-b'>9.【Privacy disclaimer】</h4>\
				<p>Your trade each other, you access to a third party web site operator, you are using a third party service providers and through our access to your personal information of a third party, might have their own privacy policies and methods and measures for your personal information, the third party's right of privacy, access to personal information protection policies and measures will not under our control.Although we will sign the confidentiality agreement with our partners and other third parties who may have access to your personal information and make reasonable efforts to urge them to fulfill the confidentiality obligation, we cannot guarantee that the third party will take confidentiality measures as required by us, and we will not assume any responsibility for the behavior and consequences of the third party.</p>\
				<h4 class='content-sy-b'>10.【update】</h4>\
				<p> CHAMPION platform does not restrict your rights under this policy without your express consent.The content of this policy may be updated from time to time as CHAMPION platform services continue to improve.The updated policy effectively replaces the original privacy policy once it is officially implemented on the CHAMPION platform.</p>\
				<h4 class='content-sy-b'>11.【contact】</h4>\
				<p>\
					You can contact CHAMPION platform through the following ways, and CHAMPION platform will reply to your request as soon as possible：<br>\
					1）If you have any questions, comments or Suggestions on the content of this policy, you can call the customer service hotline at 617-481-7697 and contact CHAMPION platform；<br>\
					2）If you find that your personal information may be leaked or need to correct your personal information or cancel your personal account, you can handle it by calling 617-481-7697；<br>\
					3）If you are not satisfied with the response of CHAMPION platform, especially if you believe that the personal information processing behavior of CHAMPION platform has damaged your legitimate rights and interests, you may also seek a solution by filing a lawsuit to the court with jurisdiction in the place where the defendant resides。\
				</p>",
				serviceAgreement: "<h3>CHAMPION platform user service agreement</h3>\
				<div class='content-sy-f'>\
					<p>Effective date：&nbsp;&nbsp;April 5, 2019</p>\
					<p>The version number：&nbsp;&nbsp;V 2.0</p>\
				</div>\
				<p class='content-sy-b'>\
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respect of customer, visit, browse or use the CHAMPION in you website (http://www.championcargroup.com), the APP application (hereinafter generally referred to as the 'CHAMPION platform') and related services, show that you have carefully read and fully understand all the terms and conditions under this agreement and agree to be bound by this agreement, to ensure compliance with all applicable laws and regulations.<br>\
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CHAMPION platform may amend or update this agreement and its relevant supplements and annexes, platform rules, individual service rules and other documents as required.You should visit this page frequently to understand the current terms. If you do not accept the relevant amendments and updates, please immediately stop using the services provided by CHAMPION platform.If you continue to use the services provided by CHAMPION platform, you have fully accepted the revision or update.\
				</p>\
				<h4 class='content-sy-b'>1. Confirmation and acceptance of terms of service</h4>\
				<p>\
					1.1 This agreement is a user service agreement between CHAMPION co., LTD. (hereinafter referred to as 'CHAMPION') of North America and you, which stipulates that CHAMPION shall provide relevant services based on the CHAMPION platform and the terms of the agreement to be observed by both parties.If the subordinate websites of CHAMPION platform are increased, the increased websites as part of the network services provided by CHAMPION platform will still apply the provisions of this agreement.The contents and services of the CHAMPION platform are provided by the CHAMPION company, its affiliates, its partners and partners.<br>\
					1.2 You confirm that, prior to your registration, logging in and browsing CHAMPION platform, you shall have the civil capacity in accordance with the laws of the People's Republic of China and be qualified to conduct relevant transactions.If you do not have the aforementioned civil capacity corresponding to your behavior, you and your guardian shall bear all the consequences caused thereby according to the law.In addition, you need to ensure that you are not subject to restrictions, sanctions or other legal or regulatory restrictions imposed by any country, international organization or territory, otherwise you may not be able to properly register and log on to CHAMPION platform and use the services provided by CHAMPION platform.\
				</p>\
				<h4 class='content-sy-b'>2. Account registration and use</h4>\
				<h5>2.1【Account for】</h5>\
				<p>\
					2.1.1After you fill in the information as indicated on the registration page, read and agree to this agreement and complete the registration process, you can get the CHAMPION platform account and become a CHAMPION platform user.<br>\
					2.1.2You once registered CHAMPION platform account, unless the child channel requires separate open access, you have the right to use the account to use each channel single CHAMPION platform service, when you use each single CHAMPION platform service, your usage behavior as its terms of service as well as the CHAMPION of the single service platform in the single service of all kinds of the consent of the announcement.\
				</p>\
				<h5>2.2【Account use】</h5>\
				<p>\
					2.2.1You have the right to set and change your account password and log in with your username and password.<br>\
					2.2.2As your CHAMPION platform account is associated with your personal information and business information of CHAMPION platform, your CHAMPION platform account is only for your own use.Without the consent of CHAMPION platform, you directly or indirectly authorize a third party to use your CHAMPION platform account or obtain information under your account.\
				</p>\
				<h5>2.3【Account security】</h5>\
				<p>\
					2.3.1CHAMPION platform does not require you to provide your account password at any time.Therefore, it is recommended that you keep your account safe.<br>\
					2.3.2CHAMPION platform shall not be liable for any loss or consequence caused by your voluntary disclosure of the account or any attack or fraud on your behalf. You shall recover such loss or consequence from the tortsmen through judicial and administrative remedies.Except for the fault of CHAMPION platform, you shall be responsible for all results of actions under your account, including but not limited to signing various agreements, releasing information, proposing transaction demands and disclosing information, etc.<br>\
					2.3.3If you find any unauthorized use of your account on CHAMPION platform or other circumstances that may lead to the theft or loss of your account, you are advised to notify CHAMPION platform immediately.You understand that any action taken by the CHAMPION platform on any of your requests will take reasonable time and that actions taken by the CHAMPION platform on your request may not prevent or prevent the consequences of the infringement from forming or expanding.\
				</p>\
				<h5>2.4【Account cancellation】</h5>\
				<p>\
					If you no longer need to register an account, you can call 617-481-7691 or apply for account cancellation according to the prompts on the website. CHAMPION platform will handle account cancellation for you in time after receiving your application.After the account is cancelled, all the information in your account will be cleared.Please keep relevant information before you apply for account cancellation.\
				</p>\
				<h4 class='content-sy-b'>3.Information management</h4>\
				<p>\
					3.1 【Information is true】When using the services of CHAMPION platform, you shall provide your information and trade-related information (including but not limited to your name, contact information, vehicle information, etc.) accurately and completely as required and prompted by CHAMPION platform, so that CHAMPION platform can contact you and provide relevant services.You understand and agree that you are obligated to guarantee the authenticity and validity of all information you provide and that you shall be solely responsible for any adverse consequences arising out of inaccurate or false information you provide. CHAMPION platform is irrelevant.\
				</p>\
				<h5>3.2 【Authorization information】</h5>\
				<p>\
					3.2.1In order to ensure the transaction security and provide better service to you, you understand and agree to be irrevocably authorized CHAMPION platform for your information to a third party certification, CHAMPION platform, query service providers and their designated third party access, query, retained, sorting and processing your certification information, but the authentication information only for the trading through the CHAMPION platform and related services.<br>\
					3.2.2For you to provide, release and formed in the CHAMPION platform service in addition to the personal information of text, images, video, audio and other non-personal information, during the term of the protection of the law you free awarded the CHAMPION platform, CHAMPION, the company and its affiliates worldwide exclusive licensing rights and license to other third party to use and can own name infringement evidence and filed a lawsuit against a third party's rights.You agree that CHAMPION platform and its affiliates store, use, copy, modify, edit, publish, display, translate, distribute or make derivative works of your non-personal information and incorporate such information into other works in the form, media or technology known or developed in the future.<br>\
					3.2.3Use for the convenience of your CHAMPION platform and other related services, you authorize CHAMPION platform would you register account and use the CHAMPION platform service providing, in the process of information transfer to CHAMPION platform and other related services provider, or from the CHAMPION platform and other related services provider for you provide during registration, using the related service, the formation of the information.\
				</p>\
				<p>\
					3.3 【Violation information processing】Any information you submit such information may not appear in the illegal information, confirmed by the CHAMPION platform, such as the existence of the above, CHAMPION platform shall have the right to unilaterally without further notice to deadline to correct, stop using, the cancellation of registration, suspend/terminate the service, back your account, to contain illegal information, such as links to the content of the shielding or disconnected measures.The approval of all information submitted by CHAMPION platform does not mean any approval, license, authorization, consent, support or commitment from CHAMPION platform, and you shall be liable for such approval.\
				</p>\
				<p>3.4 【Information correct】You have the obligation to verify the authenticity and accuracy of the information you provide.When browsing and using the CHAMPION platform, if you find that the information published on the CHAMPION platform is inconsistent with the information you provide or other information related to you, you shall contact the CHAMPION company in time for correction, and the CHAMPION platform shall not exempt you from the obligation and responsibility of providing true information due to the error in information presentation.</p>\
				<h4 class='content-sy-b'>4. The service content</h4>\
				<p>\
					4.1 CHAMPION platform provides services to you in accordance with the published agreements or rules, the services you participate in and any agreements or terms entered into between you and the CHAMPION company (and/or its affiliates, partners and partners).<br>\
					4.2 Unless otherwise expressly provided in this service agreement, new products, new functions and new services launched by CHAMPION platform shall be governed by this agreement.<br>\
					4.3In view of the particularity of the network services, you agree that CHAMPION platform has the right to change, interrupt or terminate part or all of the network services at any time without prior notice.CHAMPION platform does not guarantee the timeliness, security, accuracy and non-interruption of network services.<br>\
				</p>\
				<h4 class='content-sy-b'>5. User information acquisition and protection</h4>\
				<p>\
					5.1CHAMPION platform attaches great importance to the protection of your personal information. When you use the services provided by CHAMPION platform, you agree that CHAMPION platform shall collect, store, use, share, disclose and protect your personal information in accordance with the published user privacy policy.<br>\
					5.2Warranty and authorization of non-personal information<br>\
					5.2.1【Dissemination of information】You represent and warrant that you have appropriate and lawful rights to the information you publish on the website.Otherwise, CHAMPION platform may delete or block your information in accordance with the law or this agreement.<br>\
					5.2.2【Prohibited information】You should ensure that the information you publish does not include the following：<br>\
					<span>\
					1）Violating the prohibitive provisions of state laws and regulations；<br>\
					2）Political propaganda, feudal superstition, obscenity, pornography, gambling, violence, terror or abetting a crime；<br>\
					3）Fraudulent, false, inaccurate or misleading；<br>\
					4）Infringing intellectual property rights of others or involving trade secrets and other proprietary rights of third parties；<br>\
					5）Insulting, slandering, intimidating, or infringing upon the lawful rights and interests of others, such as privacy；<br>\
					6）There are viruses, trojans, crawlers and other malicious software and program codes that may damage, tamper with, delete or affect the normal operation of any system of CHAMPION platform or secretly obtain data and personal data of CHAMPION platform and other users without authorization；<br>\
					7）Other provisions that violate social public interests or public morality or are not suitable for publication on the CHAMPION platform in accordance with relevant agreements and rules of the CHAMPION platform.\
					</span>\
				</p>\
				<h4 class='content-sy-b'>6. 【Limitation of liability】</h4>\
				<p>\
					1.CHAMPION platform shall not be liable for any disruption of network services within a reasonable period of time arising from any of the following circumstances：<br>\
					1)	CHAMPION platform reserves the right to suspend any part of the service without prior notice for maintenance, upgrade or other purposes if the platform or related equipment providing network services needs to be overhauled or maintained regularly or irregularly. <br>\
					2)	Force majeure such as typhoon, earthquake, flood, lightning or terrorist attack； <br>\
					3)	Failure of the user's computer software or hardware, communication lines or power supply lines； <br>\
					4)	Due to viruses, trojans, malicious program attacks, network congestion, system instability, system or equipment failure, communication failure, power failure, banking reasons, third-party service defects or government behavior and other reasons.\
				</p>\
				<p>\
					2.You understand and accept that CHAMPION shall not be liable for any defects in the quality of any of the following products or services provided to you and any losses (if any) arising therefrom:  <br>\
					1)	CHAMPION platform provides you with products or services free of charge； <br>\
					2)	CHAMPION platform presents any product or service to you。\
				</p>\
				<p>\
					3.CHAMPION the information contained in the platform, including but not limited to, text, images, data, opinions, web pages or links, while trying to accurate and detailed, but the CHAMPION, the company does not contain the information and content of accurate and complete, fully and reliability do any commitment, also not the content of these information and liable for errors or omissions, or the information and content to make any express or implied, including but not limited to, without infringing on lawful rights and interests of a third party.\
				</p>\
				<h4 class='content-sy-b'>7. notice</h4>\
				<h5>7.1Your valid contact information includes：</h5>\
				<p>\
					1）When you register as a user of CHAMPION platform and accept the services of CHAMPION platform, you shall provide real and effective contact information (including your email address, phone number, contact address, etc.) to CHAMPION platform. In case of any change of contact information, you are obliged to update relevant information in time and keep the state that can be contacted.<br>\
					2）The user account (including sub-accounts) that you created when you registered the CHAMPION platform user for logging on to the CHAMPION platform to receive system notifications or other instant messages also serves as your effective contact information.<br>\
					3）CHAMPION platform will serve you with one or more of the above communications on notices of any kind that may materially or adversely affect your rights and obligations.\
				</p>\
				<h5>7.2 Service of notice</h5>\
				<p>\
					1）CHAMPION platform through the notice sent to your contact information, including a written notice in the form of electronic, including but not limited to notice the CHAMPION platform, provide you with the contact phone number to send SMS, provide you with email addresses to send e-mails, send your account system messages, be deemed to have been served after send success;A written notice sent by a paper carrier shall be deemed to have been delivered on the fifth natural day after it is mailed to the address provided.<br>\
					2）In the event of any dispute arising from the CHAMPION's trading activities on the CHAMPION platform, you agree that the judicial and administrative authorities may serve you with relevant legal documents through SMS, email or other modern means of communication or by mail.The mobile phone number, E-mail address or CHAMPION platform account and other contact information designated by you to receive the legal documents shall be the mobile phone number, E-mail address and other contact information provided by you when you register and update the CHAMPION platform. Any legal document sent to such contact information by judicial or administrative authorities shall be deemed to have been served.The mailing address you specify is your legal contact address or the valid contact address you provide.<br>\
					3）You agree that the judicial or administrative authority may serve legal documents to you in one or more of the above ways, and the judicial or administrative authority may serve legal documents to you in various ways, and the time of service shall be whichever is the first.<br>\
					4）You agree that the above service method applies to all stages of administrative and judicial proceedings.<br>\
					5）You should ensure that the contact information provided is accurate, valid and updated in real time.If the contact information provided is not accurate, or you do not timely inform the changed contact information, so that the legal documents can not be served or not served in time, you may bear the legal consequences arising therefrom.\
				</p>\
				<h4 class='content-sy-b'>8. Termination of agreement</h4>\
				<p>\
					8.1【User-initiated termination】You have the right to terminate this agreement in any of the following ways：<br>\
					<span>\
					1）You can log out of your account through the prompts function of the website；<br>\
					2）You cease to use and expressly refuse to accept the change before the change takes effect；<br>\
					3）You expressly disapprove of continuing to use the services of CHAMPION platform and you are eligible for termination of CHAMPION platform.\
					</span>\
				</p>\
				<p>\
					8.2【CHAMPION platform initiated termination】CHAMPION platform may notify you of the termination of this agreement in the manner set forth in section 6 of this agreement if：<br>\
					<span>\
					1）CHAMPION platform terminates this agreement under the terms of breach if you breach this agreement；<br>\
					2）CHAMPION platform seals up your account in accordance with the rules of CHAMPION platform for misappropriating others' accounts, releasing false and untrue information, prohibited information, swindling others' property, selling fake products, disrupting the market order, and taking improper measures for profits；<br>\
					3）Your account was reclaimed by the CHAMPION platform under this agreement；<br>\
					4）CHAMPION platform where you have committed fraud, infringed upon the legitimate rights and interests of others or committed other serious violations；<br>\
					5）Other circumstances under which the service shall be terminated.\
					</span>\
				</p>\
				<p>\
					8.3  Treatment after termination of the agreement<br>\
					8.3.1【User information disclosure】Upon termination of this agreement, CHAMPION platform shall not be obligated to disclose any information in your account to you or any third party designated by you, except as expressly provided by law.<br>\
					8.3.2 【Rights reserved】Upon termination of this agreement, CHAMPION platform shall still enjoy the following rights：<br>\
					<span>\
					1）CHAMPION platform continues to retain all information you retain under section 5 of this agreement；<br>\
					2）CHAMPION platform may still pursue you for breach of contract in accordance with this agreement.\
					</span>\
				</p>\
				<h4 class='content-sy-b'>9. Application of law, jurisdiction and others</h4>\
				<p>9.1【The applicable law】The conclusion, effectiveness, interpretation, amendment, supplement, termination, execution and dispute resolution of this agreement shall be governed by the laws of mainland China.Refer to business practices and/or industry practices in the absence of relevant legal provisions.</p>\
				<p>9.2【Under the jurisdiction of】Any dispute arising from the use of the service of CHAMPION platform and related to the service of CHAMPION platform shall be settled by the CHAMPION platform through negotiation with you.If no agreement can be reached through negotiation, either party may bring a lawsuit to the people's court that has jurisdiction over the place where the CHAMPION company is located.</p>\
				<p>9.3【separability】Any provision of this agreement shall be deemed void, invalid or unenforceable and shall be deemed divisible without prejudice to the validity and enforceability of the remaining provisions of this agreement.</p>",
				person: {
					hello: 'hello',
					toadd: '<span>No phone num information, to add ></span>',
					sa: 'Switch account',
					lo: 'Sign out',
					pcinfo: 'Improve personal information',
					sellapply: 'To apply for to sell cars',
					updateps: 'Change the password',
					barecord: 'Value and purchasing records',
					av: 'Installment application',
					preorder: 'Reserve a vehicle',
					coll: 'My collection'
				},
				proveInfo: {
					nick: 'Nickname',
					nickc: 'Enter your nickname',
					phone: 'Phone',
					phonec: 'Enter your dialling code',
					gender: 'Gender',
					male: 'Male',
					female: 'Female',
					birthday: 'Birthday',
					birthdayc: 'Select date',
					submit: 'Submit',
					reset: 'Reset'
				},
				sellApply: {
					data: []
				},
				barginRecord: {
					data: []
				},
				updatePs: {
					op: 'old password',
					opc: 'Please enter the old password',
					np: 'new password',
					npc: 'Please enter the new password',
					npcc: 'Please enter the new password again',
					update: 'Update'
				},
				installmentRecord: {
					data: []
				},
				collectionList: [],
				collectionRe: 'Remind',
				collectionRec: 'You have not collected vehicles'
			},
		    'zh-cn':{
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
					price: [{id:1,detail:'$1万以下'},{id:2,detail:'$1万-$1.5万'},{id:3,detail:'$1.5万-$2万'},{id:4,detail:'$2万-$3万'},{id:5,detail:'$3万-$4万'},{id:6,detail:'$4万以上'}],
					cartype: [],
					more: '更多',
					recom: '车行推荐',
					seltype: ['最新最热','经济实惠','准新车','豪华车'],
					explain: [],
					extip: '提示',
					extipc: '暂无评论，通知客服上新',
					mediaVoice: '媒体声音',
					media: [],
					metip: '提示',
					metipc: '暂无文章，通知客服上新',
					misc: [{"content":'服务协议','src':"serivceAgreement.html"},
					{"content":'隐私声明','src':"private.html"},
					{"content":'联系我们','src':"contactUs.html"}],
					tipsArr:['免费代办过户','多种金融贷款服务','一年内全美道路救援服务','多种支付渠道（POS机、微信、支付宝等）多种支付渠道（POS机、微信、支付宝等）','100%无佣金'],
					wantBuy: '我要买车',
					hotSearch: '热门搜索',
					hotsearchArr: [],
					comment: [],
					adv1: 'CHAMPION 专为用户带来更加优质的购车体验',
					storyTitle: 'CHAMPION 故事',
					storyDes: '购车描述',
					froms: '来自',
					scom: '的评价',
					strongRecom: '强烈推荐',
					score: '分',
					miles: '英里',
					door: '门',
					cylinder: '缸',
					login: '登录',
					log: '登录',
					register: '注册',
					pname: '请输入用户名',
					ppass: '请输入密码',
					loginagree: '登录即为同意',
					registeragree: '注册即为同意',
					useragree: '用户使用协议',
					and: '及',
					privacyPolicy: '隐私权条款',
					carPrice: '车辆价格',
					carBrand: '车辆品牌',
					indexstep: {
						step0: '步骤一',
						step1: '步骤二',
						step2: '步骤三',
						step3: '步骤四',
						step4: '步骤五',
						step5: '步骤六',
					},
					// 页面footer
					address: '马塞诸萨州',
					other: '其他',
					champion: 'CHAMPION WECHAT',
					addressphone: '617-481-7697',
					addressDetail: '134 east Howard st，Quincy，ma，02169，usa',
					sale:{
						personPosi: '请输入您的所在地',
						vin: '请输入17位的vin码',
						mileage: "行驶里程",
						pmileage: '请输入当前英里数',
						preprice: '预期价格',
						ppreprice: '请输入您的预期价格',
						owner: '车主信息',
						phoneNumber: '请输入您的手机号',
						wxNumber: '请输入您的微信号',
						serifyCode: '请输入您的验证码',
						body: '车身颜色',
						interior: '内饰颜色',
						remark: '备注',
						premark: '请输入您爱车的配置,以便我们对您的车辆有更多的了解。',
						submit: '提交',
						facecolor: ['白色','黑色','银灰','灰色','黄色','香槟','红色 粉红','紫色','蓝色','绿色','咖啡','其他'],
						insidecolor: ['白色','黑色','银灰','灰色','黄色','香槟','红色 粉红','紫色','蓝色','绿色','咖啡','其他'],
					},
					loan: {
						service: '请确保您的手机号可用，支持中国，美国手机号',
						pphone: '请输入您的手机号',
						weixin: '请输入您的微信号',
						verifyCode: '请输入您的验证码',
						identity: '选择你的身份',
						work: '工作',
						student: '学生',
						ssn: '是否有SSN',
						yes: '是',
						no: '否',
						apply: '立即申请',
						payment: '低首付',
						paymentc: '首付低至3成',
						lending: '放款快',
						lendingc: '98%最快当天放款',
						threshold: '低门槛',
						thresholdc: '80%以上通过率',
						customized: '定制化',
						customizedc: '专业客服全程服务',
						loanProcess: '贷款流程',
						tapply: '30秒申请',
						tapplyc: '在线填写4项基本信息（姓名、身份证号、储蓄卡号、手机号)，秒出结果',
						Telephone: '电话回访',
						Telephonec: '金融专员一对一讲解，定制金融方案',
						approval: '线上审批',
						approvalc: '资料提交后立即审批，免流水、免家访，最快30分钟出结果',
						pickup: '放款提车',
						pickupc: 'CHAM助您完成车辆过户、抵押等手续后，当天放款',
					},
					bargin: {
						existing: '已有',
						request:  "人提交了车辆需求",
						find: '寻找爱车的路上不孤单，留下您的联系方式，我们联系您!',
						service: 'CHAMPION 为您服务',
						brand: '请输入您心仪的品牌和车型',
						brandc: '例:2016年BMW428i',
						price: '请输入您的预期价格',
						pricec: '例:3w-4.5w',
						mileage: '请输入您的预期里程',
						mileagec: '例:10000-30000(英里)',
						tip: '请确保您的手机号可用，支持中国，美国手机号',
						remark: '备注',
						remarkc: '请输入您爱车的配置,以便我们对您的车辆有更多的了解',
						phone: '请输入您的手机号',
						weixin: '请输入您的微信号',
						verifyCode: '请输入您的验证码',
						submit: '确认提交',
						special: 'CHAMPION值购车特点',
						specialone: '优质车源批发价',
						specialtwo: '无需现场看车直接网上购买',
						specialthree: 'ASE认证工程师300+项全车检测',
						specialfour: '全美49个州7日内送达',
						process: 'CHAMPION值购车流程',
						processone: '客服会在适当的时间与您联系',
						processtwo: 'CHAM会更精确的帮您选择您的爱车',
						processthree: '值购车源抢先看',
						processfour: 'CHAM及时响应您的需求',
					},
					buy:{
						screeningCondition:screeningConditioncn,
						conditions: '条件筛选',
						clearAll: '清除<br>筛选',
						Determine: '确定筛选',
						brand: '品牌',
						series: '车系',
						price: '价格',
						model: '车型',
						mileage: '里程',
						age: '车龄',
						color: '颜色',
						gearbox: '变速箱',
						defaultSort: '默认排序',
						priceSort: '价格排序',
						ageSort: '车龄排序',
						mileageSort: '里程排序',
						tips: '提示',
						tipsc: '暂无所选车辆,通知客服上新',
						searchArr: [],
					},
					detail:{
						collect: '',
						topinfo:{
							name: '',
							price: '',
						},
						mileage: '0',
						level: 'A',
						transfer: '0',
						point: [],
						// 初始配置
						config: {
							displacement: '0',
							gearbox: '',
							cityfuelConsumption: '0.00',
							speedfuelConsumption: '0.00',
							type: '',
							size: '',
							seat: '0',
						},
						// 配置表格一
						columns: [
							{
								title: '基本参数',
								key: 'name'
							},{
								title: '发动机参数',
								key: 'age'
							},{
								title: '底盘及制动',
								key: 'address'
							},
						],
						datada: [],
						// 配置表格二
						columnss: [
							{
								title: '安全配置',
								key: 'name'
							},{
								title: '外部配置',
								key: 'age'
							},{
								title: '内部配置',
								key: 'address'
							}
						],
						datads: [],
						// 检测报告
						reportTime: '',
						reportresult: [{},{},{},{}],
						accidentArrone: [],
						accidentArrtwo: [],
						facecheck: [],
						autodeviceone: [],
						autodevicetwo: [],
						autodevicethree: [],
						autodevicefour: [],
						autodevicefive: [],
						autodevicesix: [],
						dirveSysone: [],
						dirveSystwo: [],
						dirveSysthree: [],
						dirveSysfour: [],
						dirveSysfive: [],
						carreport: 'true',
						championprice: 'CHAMPION 价格',
						minloan: '最低贷款',
						proposal: '查看贷款方案',
						appointment: '预约看车',
						consultant: '在线咨询',
						date: '选择日期',
						time: '选择时间',
						phone: '手机号',
						weixin: '微信号',
						verifycode: '验证码',
						tipsp: '海量车源、定制需求！您可以选择CHAMPIONAUTO值购',
						cv: '点击查看',
						td: '行驶里程',
						mile: '英里',
						reviewlevel: '复查等级',
						tranferRecord: '过户记录',
						degr: '次',
						Highlight: '亮点配置',
						displace: '排量',
						gear:　'变速箱',
						fuel: '油耗',
						ci: '城市',
						hs: '高速',
						le: '级别',
						si: '尺寸',
						sc: '承载数量',
						c: '座',
						vd: '车辆配置',
						vtr: '车辆检测报告',
						dt: '检测时间',
						dm: '检测车型',
						normal: '正常',
						repair: '曾有钣金修复',
						update: '曾有覆盖件更换',
						norepair: '轻微瑕疵，尚未修复',
						launch: '启动',
						starting: '起步',
						speedup : '加速',
						constant : '匀速驾驶',
						dab: '减速及制动',
						tips: '提示',
						tipsc: '暂无车辆报告,等待检测',
						wp: '购车流程',
						sw: '猜你想看',
						guesswant: [],
						moreparam: '更多详细参数配置',
						detailReport: '查看详细检测报告',
						item: '项',
						accidentTime: '',
						facecheckTime: '',
						autodeviceTime: '',
						dirveSysTime: ''
					},
					about: {'CHAMPION是一家怎样的公司呢？':'CHIMPON是北美一家整合线下优质资源的O2O汽车服务平台，我们为用户提供租车、学车、购车、贷款、维修保养等本地化服务的一站式中文汽车平台，让每一个用户，省钱安心购好车。',
					'购车流程是怎样的？':'1. 拨打看车电话/在线预约<br>2. 顾问电话确认并接你看车<br>3. 严选车辆，经过 300 项检测<br>4. 选定爱车，帮你代办一切手续<br>',
					'卖车需要准备什么材料？':'您只需在线上卖车处填写完整的信息，我们的工作人员会联系您并安排线下给您的爱车做全面的检测'},
					contactUs: {
						title: '联系我们',
						phone: '7x24小时中文客服电话',
						country: '美国',
						email: '邮箱',
					},
					privat: "<h3>用户隐私权政策</h3>\
					<p class='content-sy-b'>\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尊敬的用户，您的信任对CHAMPION平台非常重要，CHAMPION平台深知个人信息对您的重要性，CHAMPION平台将按法律法规要求，采取相应安全保护措施，尽力保护您的个人信息安全可控。鉴此，北京CHAMPION旧机动车经纪有限公司及其关联公司（下称“CHAMPION公司”）、CHAMPION网站（www.championcargroup.com）及应用程序APP等（下称“CHAMPION平台”）制定本《用户隐私权政策》（下称“本政策 ”）并提醒您：<br>\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本政策适用于CHAMPION公司和CHAMPION平台所有产品或服务。如CHAMPION公司提供的产品或服务中未设独立隐私权政策的，则本政策同样适用于该部分产品或服务。<br>\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在您使用CHAMPION平台各项产品或服务前，请您务必仔细阅读并完全理解本政策，一旦您开始使用CHAMPION平台各项产品或服务，即表示您已充分理解并同意本政策。\
					</p>\
					<h4 class='content-sy-b'>1. 【个人信息的收集范围】</h4>\
					<p>\
						您授权CHAMPION平台收集您的以下个人信息：<br>\
						1）个人相关信息：当您选择CHAMPION平台提供的相关服务时，依据您选择的服务类型可能需向CHAMPION平台提交或由CHAMPION平台主动获取的个人身份证、手机号、住址、邮箱、车辆信息、金融购车申请、授权委托书、征信记录、驾驶证、行驶证、银行卡、社保缴纳信息、银行流水、第三方支付系统记录、交易记录等相关个人信息。<br>\
						2）您的密码、密码提示以及其他可用于验证和访问您的账户的安全信息。<br>\
						3）当CHAMPION平台的客服团队、工作人员、合伙人与您联系或者您与CHAMPION平台的客服团队、工作人员、合伙人联系时，CHAMPION平台会以通话录音及人工录入等方式记录双方的通话信息及您提出的意见或建议、您提供的姓名、联系方式，以便CHAMPION平台为您更好的提供服务、处理纠纷、解决问题或向您反馈结果。如果您拒绝CHAMPION平台收集此类信息，可能会导致您无法使用CHAMPION平台核心业务功能。<br>\
						4）当您使用CHAMPION平台服务时，服务器会自动记录一些信息，包括但不限于使用情况、IP地址、所访问服务的URL、浏览器的类型、访问的地理位置、访问的车辆信息、访问日期和时间等日志，以便改进功能、改善用户体验，为您提供更好的服务。<br>\
						5）某些产品和/或服务包含唯一应用程序编号。当您安装、激活、更新、卸载相关服务或当这些服务定期与CHAMPION平台通信（例如软件的更新）时，系统会将此编号以及与安装相关的信息（例如操作系统类型和应用程序版本号）发送给CHAMPION平台。当您使用具有定位功能的CHAMPION平台服务时，系统会自动处理有关设备的位置信息，以使得您不需要手动输入自身地理坐标就可获得相关服务。 为了提供更好的服务与改善用户体验，CHAMPION平台可能会记录硬件型号、操作系统版本号、国际移动设备身份码（IMEI）、网络设备硬件地址（MAC）等信息。<br>\
						6）为实现您联机体验的个性化需求，使您获得更轻松的访问体验。CHAMPION平台会在您的计算机或移动设备上发送一个或多个名为Cookies的小数据文件，指定给您的Cookies 是唯一的，它只能被将Cookies发布给您的域中的Web服务器读取。CHAMPION平台向您发送Cookies是为了简化您重复登录的步骤、存储您的选车偏好等数据进而为您提供选车的偏好设置、帮助您优化对广告的选择与互动、帮助判断您的登录状态以及账户或数据安全。CHAMPION平台不会将 Cookies 用于本隐私政策所述目的之外的任何用途。您可根据自己的偏好管理或删除 Cookies。您可以清除计算机上保存的所有 Cookies，大部分网络浏览器会自动接受Cookies，但您通常可根据自己的需要来修改浏览器的设置以拒绝 Cookies；另外，您也可以清除浏览器内保存的所有Cookies，移动端退出登录后也可以清除所有Cookies。但如果您这么做，您可能需要在每一次访问CHAMPION平台网站时亲自更改用户设置，而且您之前所记录的相应信息也均会被删除，并且可能会对您所使用服务的安全性有一定影响。 <br>\
						7）其他根据CHAMPION平台具体产品及服务的需要而收集的您的个人信息，包括但不限于您对CHAMPION平台及CHAMPION平台的产品或服务的意见、建议等信息。\
					</p>\
					<h4 class='content-sy-b'>2. 【个人信息的收集方法】</h4>\
					<p>\
						您授权CHAMPION平台通过以下方法收集您的个人信息：<br>\
						1）CHAMPION平台将收集和储存在您浏览、访问CHAMPION平台及/或使用CHAMPION平台的产品或服务时主动向CHAMPION平台提供的信息；<br>\
						2）CHAMPION平台将收集和储存CHAMPION平台在向您提供CHAMPION平台的产品或服务的过程中记录的与您有关的信息；<br>\
						3）CHAMPION平台将收集和储存您通过CHAMPION平台的客服人员、工作人员、合伙人及/或其他渠道主动提交或反馈的信息；<br>\
						4）CHAMPION平台将向关联公司、商业合作伙伴及第三方独立资料来源，收集和储存其合法获得的与您有关的信息；<br>\
						5）CHAMPION平台将向依法设立的征信机构査询您的相关信用信息，包括但不限于任何信用分、信用报告等。\
					</p>\
					<h4 class='content-sy-b'>3.【个人信息的用途】</h4>\
					<p>\
						您授权CHAMPION平台出于以下用途使用您的个人信息：<br>\
						1）向您提供CHAMPION平台的产品及服务，并进行CHAMPION平台相关网站及APP的管理和优化；<br>\
						2）提升和改善CHAMPION平台现有产品及服务的功能和质量，包括但不限于产品及服务内容的个性化定制及更新；<br>\
						3）开展CHAMPION平台产品及服务相关的市场活动，向您推送最新的市场活动信息及优惠方案；<br>\
						4）设计、开发、推广全新的产品及服务；<br>\
						5）提高CHAMPION平台产品及服务安全性，包括但不限于身份验证、用户服务、安全防范、诈骗监测、存档和备份；<br>\
						6）协助行政机关、司法机构等有权机关开展调査，并遵守适用法律法规及其他向有权机关承诺之义务；<br>\
						7）在收集信息之时所通知您的用途以及与上述任何用途有关的其他用途；<br>\
						8）在符合法律法规的前提下，CHAMPION可能会将您的个人信息在匿名化、汇总、脱敏和加密处理后，形成统计信息或用户画像（但画像无法识别任何用户个人），为您展示和推送相关服务、产品或功能。<br>\
						9）此外，CHAMPION平台可能向您发送与上述用途有关的信息和通知，包括但不限于为保证服务完成所必须的验证码、使用产品或服务时所必要的推送通知、关于CHAMPION平台产品或服务的新闻以及市场活动及优惠促销信息。\
					</p>\
						<h4 class='content-sy-b'>4.【个人信息的共享】</h4>\
					<p>\
						CHAMPION平台对您的个人信息承担保密义务，但您授权CHAMPION平台在下列情况下将您的信息与第三方共享，CHAMPION在共享信息时将采取必要的保护措施：<br>\
						1）为了提升CHAMPION平台的产品及服务质量或向您提供全新的产品及服务，CHAMPION平台会在关联公司内部共享您的相关信息，也可能将CHAMPION平台收集的信息提供给第三方用于分析和统计；<br>\
						2）如果您通过CHAMPION平台使用的某些产品及服务是由CHAMPION平台的合伙人、合作伙伴提供的，或是由CHAMPION平台与合伙人、合作伙伴或供应商共同提供的，CHAMPION平台将与其共享向您提供相应产品及服务所必需的信息；<br>\
						3）为了与第三方开展联合推广活动，CHAMPION平台可能向第三方广告商、应用程序开发者、开放平台或其他合作伙伴提供汇总后的信息、匿名化后的信息或者其他不会识别到您个人身份的信息；<br>\
						4）为了维护您及交易各方的合法权益，在协助处理与您有关的交易纠纷或争议时，CHAMPION平台会向您的交易相对方或存在利害关系的第三方提供解决交易纠纷或争议所必需的信息；<br>\
						5）根据法律法规的规定及商业惯例，CHAMPION平台需要接受投资人、第三方的审计或尽职调査时，可能向其提供您的相关信息；<br>\
						6）根据法律法规的规定或行政机关、司法机构等有权机关要求，CHAMPION平台会向其提供您的相关信息；<br>\
						7）为提供CHAMPION的相关服务，可能会与CHAMPION的供应商、服务提供商、顾问或代理人共享您的个人信息，以提供更好的客户服务和用户体验。比如您参加抽奖，我们需要向物流服务提供商提供您的个人信息，以便发送奖品；<br>\
						8）其他经您同意或授权可以向第三方提供您的个人信息的情况。<br>\
						您同意免除上述个人信息的接收和/或使用方在按照本政策所述情形下进行信息披露和使用而导致的或可能导致的所有索赔、责任和损失。\
					</p>\
					<h4 class='content-sy-b'>5.【个人信息收集、使用和对外提供的例外】</h4>\
					<p>\
						您充分知晓并接受，以下情形中，CHAMPION平台收集、使用和对外提供您的个人信息无需征得您的授权同意：<br>\
						1）与国家安全、国防安全有关的；<br>\
						2）与公共安全、公共卫生、重大公共利益有关的；<br>\
						3）与犯罪侦查、起诉、审判和判决执行等有关的，或公安、检察院、法院、市场监督、商务等有权机关要求提供的；<br>\
						4）出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；<br>\
						5）所收集的个人信息是个人信息主体自行向社会公众公开的；<br>\
						6）从合法公开披露的信息中收集的您的个人信息的，如合法的新闻报道、政府信息公开等渠道；<br>\
						7）根据您的要求签订合同所必需的；<br>\
						8）用于维护所提供的服务与/或产品的安全稳定运行所必需的，例如发现、处置服务与/或产品的故障；<br>\
						9）为合法的新闻报道所必需的；<br>\
						10）学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；<br>\
						11）法律法规规定的其他情形。\
					</p>\
					<h4 class='content-sy-b'> 6.【个人信息的安全保护措施】</h4>\
					<p>\
						1）CHAMPION平台及关联方将采用严格的安全制度以及行业通行的安全技术和程序，对您的个人信息进行保管、储存、传输、加密处理，来确保您的个人信息不被丢失、泄露或滥用。<br>\
						2）CHAMPION仅在本隐私政策目的所必须期间和法律法规要求的时限内存储您的个人信息。<br>\
						3）如CHAMPION停止运营，我们将及时停止继续收集您个人信息的活动，将停止运营的通知以逐一送达或公告的形式通知您，并对我们存储的个人信息进行删除或匿名化处理。<br>\
					</p>\
					<h4 class='content-sy-b'> 7.【个人信息的查询、更正及删除】</h4>\
					<p>\
						您可以通过CHAMPION网站查询和更正您的个人信息。以下情况发生时，您有权要求CHAMPION删除您的个人信息：<br>\
						1）我们没有征求您的明确同意，收集了您的个人信息。<br>\
						2）我们处理您的个人信息违反了法律法规要求。<br>\
						3）我们违反了与您的约定来使用和处理您的个人信息。<br>\
						4）您注销了账号、卸载或者不再使用我们的产品或服务。<br>\
						5）我们停止对您提供服务。<br>\
						收到您要求删除您的个人信息的通知后，我们会在15个工作日内给予答复。当我们从服务器中删除您的个人信息后，我们可能不会立即从备份系统中删除相应的数据，但会在备份更新的时候删除这些信息。<br>\
						您可以登录网站提交申请注销您的账户。请您注意，如果您选择注销账户，那么您的账号将不可使用且相关账号信息将被删除，您将无法再登录该账号并使用必须登录才能使用的功能（但不会影响您使用无需账号登录即可使用的服务和功能）。<br>\
						当您注销账户后，除法律法规要求我们保存相关信息的情况外，我们将停止为您提供相应的产品（或服务），并在15个工作日内删除或匿名化您的个人信息。\
					</p>\
					<h4 class='content-sy-b'> 8.【未成年人信息保护】</h4>\
					<p>\
						如果没有父母或监护人的同意，未成年人不得创建自己的用户账户。如您为未成年人的，建议您请您的父母或监护人仔细阅读本隐私权政策，并在征得您的父母或监护人同意的前提下使用CHAMPION平台的服务或向CHAMPION平台提供信息。<br>\
						对于经父母或监护人同意使用CHAMPION平台的产品或服务而收集未成年人个人信息的情况，CHAMPION平台只会在法律法规允许、父母或监护人明确同意或者保护未成年人所必要的情况下使用、共享、转让或披露此信息。\
					</p>\
					<h4 class='content-sy-b'>9.【隐私权免责声明】</h4>\
					<p>您的交易相对方、您访问的第三方网站经营者、您使用的第三方服务提供者和通过我们获取您的个人信息的第三方，可能有自己的隐私权保护政策以及获取您个人信息的方法和措施，这些第三方的隐私权保护政策、获取个人信息的方法和措施将不会受到我们的控制。虽然我们将与可能接触到您的个人信息的我们的合作方等第三方签署保密协议并尽合理的努力督促其履行保密义务，但我们无法保证第三方一定会按照我们的要求采取保密措施，我们亦不对第三方的行为及后果承担任何责任。</p>\
					<h4 class='content-sy-b'>10.【更新】</h4>\
					<p> 未经您明确同意，CHAMPION平台不会限制您按照本政策所应享有的权利。随着CHAMPION平台服务的不断提升，本政策的内容也可能会不时更新。更新后的政策一旦在CHAMPION平台上正式实施即有效代替原来的隐私权政策。</p>\
					<h4 class='content-sy-b'>11.【联络方式】</h4>\
					<p>\
						您可以通过以下方式与CHAMPION平台联系，CHAMPION平台将尽快回复您的请求：<br>\
						1）如对本政策内容有任何疑问、意见或建议，您可以拨打400-083-5105的客服热线与CHAMPION平台联系；<br>\
						2）如发现个人信息可能被泄露或需要更正个人信息、注销个人账户的，您可以通过拨打400-861-0500处理；<br>\
						3）如果您对CHAMPION平台的回复不满意，特别是您认为CHAMPION平台的个人信息处理行为损害了您的合法权益，您还可以通过向被告住所地有管辖权的法院提起诉讼来寻求解决方案。\
					</p>",
					serviceAgreement: "<h3>CHAMPION平台用户服务协议</h3>\
					<div class='content-sy-f'>\
						<p>协议生效时间：&nbsp;&nbsp;2019年04月05日</p>\
						<p>版本号：&nbsp;&nbsp;V 2.0</p>\
					</div>\
					<p class='content-sy-b'>\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尊敬的用户，在您访问、浏览或使用CHAMPION网站(http://www.championcargroup.com)、APP应用程序（以下统称“CHAMPION平台”）及相关服务时，表明您已审慎阅读、充分理解本协议项下所有条款并同意接受本协议的约束，保证遵守所有适用的法律法规。<br>\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CHAMPION平台可能会根据需要修订或者更新本协议及其相关补充和附件、平台规则、单项服务规则等文件。您应经常访问本页面以了解当前条款，如果您不接受相关修订和更新，请立即停止使用CHAMPION平台提供的服务；如您继续使用CHAMPION平台提供的服务，即表示您已经充分接受该修订或更新。\
					</p>\
					<h4 class='content-sy-b'>1. 服务条款的确认和接纳</h4>\
					<p>\
						1.1 本协议是由北京CHAMPION旧机动车经纪有限公司（下称“CHAMPION公司”）与您签订的用户服务协议，约定由CHAMPION公司提供基于CHAMPION平台相关服务以及双方应遵守的协议条款。如CHAMPION平台的下属网站有所增加，则增加的网站作为CHAMPION平台提供的网络服务的一部分，仍将适用本协议的规定。CHAMPION平台的各项内容及服务由CHAMPION公司、关联方、CHAMPION的合伙人及合作方提供。<br>\
						1.2 您确认，在您注册、登录及浏览CHAMPION平台前，您应当具备中华人民共和国法律规定的与您行为相适应的民事行为能力，并具有进行相关交易的资格。若您不具备前述与您行为相适应的民事行为能力，则您及您的监护人应依照法律规定承担因此而导致的一切后果。此外，您还需确保您不是任何国家、国际组织或者地域实施的限制、制裁或其他法律、规则限制的对象，否则您可能无法正常注册和登录CHAMPION平台，无法正常使用CHAMPION平台提供的服务。\
					</p>\
					<h4 class='content-sy-b'>2. 账户注册及使用</h4>\
					<h5>2.1【账户获得】</h5>\
					<p>\
						2.1.1当您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序后，您可获得CHAMPION平台账户并成为CHAMPION平台用户。<br>\
						2.1.2您一经注册CHAMPION平台帐号，除非子频道要求单独开通权限，您有权利用该帐号使用CHAMPION平台各个频道的单项服务，当您使用CHAMPION平台各单项服务时，您的使用行为视为其对该单项服务的服务条款以及CHAMPION平台在该单项服务中发出的各类公告的同意。\
					</p>\
					<h5>2.2【账户使用】</h5>\
					<p>\
						2.2.1您有权设置、更改账号密码，并通过用户名和密码登录。<br>\
						2.2.2由于您的CHAMPION平台账户关联您的个人信息及CHAMPION平台商业信息，您的CHAMPION平台账户仅限您本人使用。未经CHAMPION平台同意，您直接或间接授权第三方使用您CHAMPION平台账户或获取您账户项下信息的行为无效。\
					</p>\
					<h5>2.3【账户安全】</h5>\
					<p>\
						2.3.1您的账户为您自行设置并由您保管，CHAMPION平台任何时候不会主动要求您提供您的账户密码。因此，建议您务必保管好您的账户。<br>\
						2.3.2账户因您主动泄露或因您遭受他人攻击、诈骗等行为导致的损失及后果，CHAMPION平台并不承担责任，您应通过司法、行政等救济途径向侵权行为人追偿。除CHAMPION平台存在过错外，您应对您账户项下的所有行为结果包括但不限于签署各类协议、发布信息、提出交易需求及披露信息等）负责。<br>\
						2.3.3如发现任何未经授权使用您账户登录CHAMPION平台或其他可能导致您账户遭窃、遗失的情况，建议您立即通知CHAMPION平台。您理解CHAMPION平台对您的任何请求采取行动均需要合理时间，且CHAMPION平台根据您请求而采取的行动可能无法避免或阻止侵害后果的形成或扩大。\
					</p>\
					<h5>2.4【账户注销】</h5>\
					<p>\
						如您不再需要注册账户的，您可以拨打400-861-0500或按照网站的提示申请注销账户，CHAMPION平台收到您的注销申请后，会及时为您办理账户注销事宜。账户注销后您账户内的全部信息将清空。请您在申请注销账户前自行保存好相关信息。\
					</p>\
					<h4 class='content-sy-b'>3.信息管理</h4>\
					<p>\
						3.1 【信息真实】在使用CHAMPION平台服务时，您应当按CHAMPION平台的要求和提示准确完整地提供您的信息和交易相关信息（包括但不限于您的姓名、联系方式、车辆信息等），以便CHAMPION平台与您联系并提供相应服务。您了解并同意，您有义务保证您提供的所有信息的真实性及有效性，因您提供的相关信息不准确、虚假等情形所致的不利后果，由您自行承担，与CHAMPION平台无关。\
					</p>\
					<h5>3.2 【信息授权】</h5>\
					<p>\
						3.2.1为保证交易安全并向您提供更优质的服务，您了解并同意不可撤销地授权CHAMPION平台对于您的信息进行第三方信息认证，CHAMPION平台、查询服务提供机构及其指定的第三方可获取、查询、留存、整理及加工您的认证信息，但该认证信息仅用于通过CHAMPION平台进行的交易及相关的服务。<br>\
						3.2.2对于您提供、发布及在使用CHAMPION平台服务中形成的除个人信息外的文字、图片、视频、音频等非个人信息，在法律规定的保护期限内您免费授予CHAMPION平台、CHAMPION公司及其关联公司获得全球范围内排他的许可使用权利及再授权给其他第三方使用并可以自身名义对第三方侵权行为取证及提起诉讼的权利。您同意CHAMPION平台及其关联公司存储、使用、复制、修订、编辑、发布、展示、翻译、分发您的非个人信息或制作其派生作品，并以已知或日后开发的形式、媒体或技术将上述信息纳入其它作品内。<br>\
						3.2.3为方便您使用CHAMPION平台等其他相关服务，您授权CHAMPION平台将您在账户注册和使用CHAMPION平台服务过程中提供、形成的信息传递给CHAMPION平台等其他相关服务提供者，或从CHAMPION平台等其他相关服务提供者获取您在注册、使用相关服务期间提供、形成的信息。\
					</p>\
					<p>\
						3.3 【违规信息处理】您提交的任何信息等资料中不得出现违法和不良信息，经CHAMPION平台确认，如存在上述情况，CHAMPION平台有权不经通知单方采取限期改正、暂停使用、注销登记、中止/终止提供服务、收回账号、对于包含违规信息的内容屏蔽或断开链接等措施。CHAMPION平台对您提交的所有信息予以审核通过并不代表CHAMPION平台对其予以任何批准、许可、授权、同意、支持或承诺，您应当自行承担其法律责任。\
					</p>\
					<p>3.4 【信息纠正】您有义务及时核实您提供的信息的真实性、准确性。在您浏览、使用CHAMPION平台时，如您发现CHAMPION平台上公示的信息与您提供的信息或其他与您相关的信息不一致时，您须及时联系CHAMPION公司予以纠正，CHAMPION平台对于信息展示的失误不免除您提供真实信息的义务和责任。</p>\
					<h4 class='content-sy-b'>4. 服务内容</h4>\
					<p>\
						4.1 CHAMPION平台根据公示的协议或规则、您参与的服务项目及您与CHAMPION公司（及或关联方、CHAMPION的合伙人、合作方）订立的任何形式的协议或条款向您提供服务。<br>\
						4.2 除非本服务协议另有其它明示规定，CHAMPION平台所推出的新产品、新功能、新服务，均受到本协议之规范。<br>\
						4.3鉴于网络服务的特殊性，您同意CHAMPION平台有权不经事先通知，随时变更、中断或终止部分或全部的网络服务。CHAMPION平台对网络服务的及时性、安全性、准确性、不中断性不作任何担保。<br>\
					</p>\
					<h4 class='content-sy-b'>5. 用户信息获取及保护</h4>\
					<p>\
						5.1CHAMPION平台非常重视您的个人信息保护，在您使用CHAMPION平台提供的服务时，您同意CHAMPION平台按照公示的《用户隐私权政策》收集、存储、使用、共享、披露和保护您的个人信息。<br>\
						5.2非个人信息的保证与授权<br>\
						5.2.1【信息的发布】您声明并保证，您对您在网站所发布的信息拥有相应、合法的权利。否则，CHAMPION平台可对您发布的信息依法或依本协议进行删除或屏蔽。<br>\
						5.2.2【禁止性信息】您应当确保您所发布的信息不包含以下内容：<br>\
						<span>\
						1）违反国家法律法规禁止性规定的；<br>\
						2）政治宣传、封建迷信、淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的；<br>\
						3）欺诈、虚假、不准确或存在误导性的；<br>\
						4）侵犯他人知识产权或涉及第三方商业秘密及其他专有权利的；<br>\
						5）侮辱、诽谤、恐吓、涉及他人隐私等侵害他人合法权益的；<br>\
						6）存在可能破坏、篡改、删除、影响CHAMPION平台任何系统正常运行或未经授权秘密获取CHAMPION平台及其他用户的数据、个人资料的病毒、木马、爬虫等恶意软件、程序代码的；<br>\
						7）其他违背社会公共利益或公共道德或依据相关CHAMPION平台协议、规则的规定不适合在CHAMPION平台上发布的。\
						</span>\
					</p>\
					<h4 class='content-sy-b'>6. 【责任限制】</h4>\
					<p>\
						1.因以下情况造成网络服务在合理时间内的中断，CHAMPION平台无需为此承担任何责任：<br>\
						1)	CHAMPION平台需要定期或不定期地对提供网络服务的平台或相关的设备进行检修或者维护，CHAMPION平台保留不经事先通知为维修保养、升级或其它目的暂停本服务任何部分的权利。 <br>\
						2)	因台风、地震、洪水、雷电或恐怖袭击等不可抗力原因； <br>\
						3)	用户的电脑软硬件和通信线路、供电线路出现故障的； <br>\
						4)	因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、电力故障、银行原因、第三方服务瑕疵或政府行为等原因。\
					</p>\
					<p>\
						2.您理解并接受对于CHAMPION公司向您提供的下列产品或服务的质量缺陷本身及其引发的任何损失（如有），CHAMPION公司无需承担任何责任:  <br>\
						1)	CHAMPION平台向您免费提供的各项产品或服务； <br>\
						2)	CHAMPION平台向您赠送的任何产品或服务。\
					</p>\
					<p>\
						3.CHAMPION平台所载的信息，包括但不限于文本、图片、数据、观点、网页或链接，虽然竭力准确和详尽，但CHAMPION公司并不就其所包含的信息和内容的准确、完整、充分和可靠性做任何承诺，也不对这些信息和内容的错误或遗漏承担责任，也不对这些信息和内容作出任何明示或默示的包括但不限于没有侵犯第三方合法权益的保证。\
					</p>\
					<h4 class='content-sy-b'>7. 通知</h4>\
					<h5>7.1您的有效联系方式包括：</h5>\
					<p>\
						1）您在注册成为CHAMPION平台用户，并接受CHAMPION平台服务时，您应该向CHAMPION平台提供真实有效的联系方式（包括您的电子邮件地址、联系电话、联系地址等），对于联系方式发生变更的，您有义务及时更新有关信息，并保持可被联系的状态。<br>\
						2）您在注册CHAMPION平台用户时生成的用于登陆CHAMPION平台接收系统通知或其他即时信息的用户账号（包括子账号），也作为您的有效联系方式。<br>\
						3）CHAMPION平台将向您的上述联系方式的其中之一或其中若干向您送达各类通知，而此类通知的内容可能对您的权利义务产生重大的有利或不利影响，请您务必及时关注。\
					</p>\
					<h5>7.2 通知的送达</h5>\
					<p>\
						1）CHAMPION平台通过上述联系方式向您发出通知，其中以电子的方式发出的书面通知，包括但不限于在CHAMPION平台公告，向您提供的联系电话发送手机短信，向您提供的电子邮件地址发送电子邮件，向您的账号发送系统消息，在发送成功后即视为送达；以纸质载体发出的书面通知，按照提供联系地址交邮后的第五个自然日即视为送达。<br>\
						2）对于在CHAMPION平台上因交易活动引起的任何纠纷，您同意司法机关、行政机关可以通过手机短信、电子邮件等现代通讯方式或邮寄方式向您送达法律相关文书。您指定接收法律文书的手机号码、电子邮箱或CHAMPION平台账号等联系方式为您在CHAMPION平台注册、更新时提供的手机号码、电子邮箱联系方式等，司法机关或行政机关向上述联系方式发出法律文书即视为送达。您指定的邮寄地址为您的法定联系地址或您提供的有效联系地址。<br>\
						3）您同意司法机关或行政机关可采取以上一种或多种送达方式向您达法律文书，司法机关或行政机关采取多种方式向您送达法律文书，送达时间以上述送达方式中最先送达的为准。<br>\
						4）您同意上述送达方式适用于各个行政司法程序阶段。<br>\
						5）你应当保证所提供的联系方式是准确、有效的，并进行实时更新。如果因提供的联系方式不确切，或不及时告知变更后的联系方式，使法律文书无法送达或未及时送达，由您自行承担由此可能产生的法律后果。\
					</p>\
					<h4 class='content-sy-b'>8. 协议的终止</h4>\
					<p>\
						8.1【用户发起的终止】您有权通过以下任一方式终止本协议：<br>\
						<span>\
						1）您通过网站提示的功能注销您的账户的；<br>\
						2）变更事项生效前您停止使用并明示不愿接受变更事项的；<br>\
						3）您明示不愿继续使用CHAMPION平台服务，且符合CHAMPION平台终止条件的。\
						</span>\
					</p>\
					<p>\
						8.2【CHAMPION平台发起的终止】出现以下情况时，CHAMPION平台可以本协议第6条的所列的方式通知您终止本协议：<br>\
						<span>\
						1）您违反本协议约定，CHAMPION平台依据违约条款终止本协议的；<br>\
						2）您盗用他人账户、发布虚假不实信息、违禁信息、骗取他人财物、售假、扰乱市场秩序、采取不正当手段谋利等行为，CHAMPION平台依据CHAMPION平台规则对您的账户予以查封的；<br>\
						3）您的账户被CHAMPION平台依据本协议回收的；<br>\
						4）您在CHAMPION平台有欺诈、侵犯他人合法权益或其他严重违法违约行为的；<br>\
						5）其它应当终止服务的情况。\
						</span>\
					</p>\
					<p>\
						8.3  协议终止后的处理<br>\
						8.3.1【用户信息披露】本协议终止后，除法律有明确规定外，CHAMPION平台无义务向您或您指定的第三方披露您账户中的任何信息。<br>\
						8.3.2 【权利保留】本协议终止后，CHAMPION平台仍享有下列权利：<br>\
						<span>\
						1）继续保存您留存于CHAMPION平台的本协议第5条所列的各类信息；<br>\
						2）对于您过往的违约行为，CHAMPION平台仍可依据本协议向您追究违约责任。\
						</span>\
					</p>\
					<h4 class='content-sy-b'>9. 法律适用、管辖与其他</h4>\
					<p>9.1【法律适用】本协议之订立、生效、解释、修订、补充、终止、执行与争议解决均适用中华人民共和国大陆地区法律；如法律无相关规定的，参照商业惯例及/或行业惯例。</p>\
					<p>9.2【管辖】您因使用CHAMPION平台服务所产生及与CHAMPION平台服务有关的争议，由CHAMPION平台与您协商解决。协商不成时，任何一方均可向CHAMPION公司所在地有管辖权的人民法院提起诉讼。</p>\
					<p>9.3【可分性】本协议任一条款被视为废止、无效或不可执行，该条应视为可分的且并不影响本协议其余条款的有效性及可执行性。</p>",
					person: {
						hello: '你好',
						toadd: '<span>无手机号信息，去添加 ></span>',
						sa: '切换账号',
						lo: '退出登录',
						pcinfo: '完善个人信息',
						sellapply: '卖车申请',
						updateps: '修改密码',
						barecord: '值购记录',
						av: '分期申请',
						preorder: '预约车辆',
						coll: '我的收藏'
					},
					proveInfo: {
						nick: '昵称',
						nickc: '输入您的昵称',
						phone: '手机号',
						phonec: '输入手机区号，例如+86',
						gender: '性别',
						male: '男',
						female: '女',
						birthday: '生日',
						birthdayc: '选择日期',
						submit: '提交',
						reset: '重置'
					},
					sellApply: {
						data: []
					},
					barginRecord: {
						data: []
					},
					updatePs: {
						op: '旧密码',
						opc: '请输入旧密码',
						np: '新密码',
						npc: '请输入新密码',
						npcc: '请再次输入新密码',
						update: '更新'
					},
					installmentRecord: {
						data: []
					},
					collectionList: [],
					collectionRe: '提示',
					collectionRec: '您尚未收藏车辆'
			}
			
		}// 设置地区信息
	})