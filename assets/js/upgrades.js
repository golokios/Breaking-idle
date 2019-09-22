let cupSticker = new Upgrade(
	"Sticker for your cup", //Name
	"cupSticker", //ID... Needs to be the same as the objectName
	"money", //Type of upgrade (money, meth, sellMeth)
	"Your cup will look sooo awesome. People will just throw money at you from now on", //Description
	0.25, //Price
	0, //Level
	0.01, //Money/Meth per click
	0 //Money/Meth per second
);

let dog = new Upgrade(
	"Get a dog", //Name
	"dog", //ID... Needs to be the same as the objectName
	"money", //Type of upgrade (money, meth, sellMeth)
	"People love dogs. That's why you should have as many as possible to get more money without working",  //Description
	10, //Price
	0, //Level
	0, //Money/Meth per click
	0.05 //Money/Meth per second
);

let human = new Upgrade(
	"Human", //Name
	"human", //ID... Needs to be the same as the objectName
	"money", //Type of upgrade (money, meth, sellMeth)
	"Why beg for money alone? just recrute some people.", //Description
	50, //Price
	0, //Level
	0, //Money/Meth per click
	0.20 //Money/Meth per second
);

let paypal = new Upgrade(
	"Paypal account", //Name
	"paypal", //ID... Needs to be the same as the objectName
	"money", //Type of upgrade (money, meth, sellMeth)
	"Because you are to stupid and never used a PC befor, yo can pay someone to make a paypal account for you, so you can beg online", //Description
	150, //Price
	0, //Level
	0, //Money/Meth per click
	0.50 //Money/Meth per second
);

let bribe = new Upgrade(
	"Bribe someone", //Name
	"bribe", //ID... Needs to be the same as the objectName
	"money", //Type of upgrade (money, meth, sellMeth)
	"Bribe some other homeless people in your area to leave, so you can make more money", //Description
	500, //Price
	0, //Level
	0, //Money/Meth per click
	1 //Money/Meth per second
);

let testTube = new Upgrade(
	"Test tube", //Name
	"testTube", //ID... Needs to be the same as the objectName
	"meth", //Type of upgrade (money, meth, sellMeth)
	"Get yourself a Test tube and start making the worst meth on earth", //Description
	1500, //Price
	0, //Level
	0.05, //Money/Meth per click
	0.25 //Money/Meth per second
);

let sellYourself = new Upgrade(
	"Sell this stuff yourself", //Name
	"sellYourself", //ID... Needs to be the same as the objectName
	"sellMeth", //Type of upgrade (money, meth, sellMeth)
	"Because nobody trusts you yet, you will have to sell your meth alone", //Description
	750, //Price
	0, //Level
	0, //Money/Meth per click
	0.05 //Money/Meth per second
);
