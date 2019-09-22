let cupSticker = new Upgrade(
	"Sticker for your cup", //Name
	"cupSticker", //ID... Needs to be the same as the objectName
	"money", //Type of upgrade (money, meth, sellMeth)
	"Stickers indicate the beauty of an expensive cup. You'll gain more money", //Description
	0.25, //Price
	0, //Level
	0.01, //Money/Meth per click
	0, //Money/Meth per second
	0
);

let dog = new Upgrade(
	"Get a dog", //Name
	"dog", //ID... Needs to be the same as the objectName
	"money", //Type of upgrade (money, meth, sellMeth)
	"Everyone loves dogs. Buy cute puppys to gain more money without clicking. Much wow!",  //Description
	10, //Price
	0, //Level
	0.01, //Money/Meth per click
	0.05, //Money/Meth per second
	0
);

let trash = new Upgrade(
	"Clean up", //Name
	"trash", //ID... Needs to be the same as the objectName
	"money", //Type of upgrade (money, meth, sellMeth)
	"Clean up yourself and the spot you chill in! Dirty potato.", //Description
	25, //Price
	0, //Level
	0.01, //Money/Meth per click
	0.10, //Money/Meth per second
	0
);

let human = new Upgrade(
	"Human", //Name
	"human", //ID... Needs to be the same as the objectName
	"money", //Type of upgrade (money, meth, sellMeth)
	"Why beg for money alone? just recrute some people.", //Description
	50, //Price
	0, //Level
	0, //Money/Meth per click
	0.30, //Money/Meth per second
	0
);

let paypal = new Upgrade(
	"Paypal account", //Name
	"paypal", //ID... Needs to be the same as the objectName
	"money", //Type of upgrade (money, meth, sellMeth)
	"Hire people to open several PayPal accounts for you. This is not a tax fraud, lol.", //Description
	100, //Price
	0, //Level
	0, //Money/Meth per click
	0.80, //Money/Meth per second
	0
);

let bribe = new Upgrade(
	"Bribe someone", //Name
	"bribe", //ID... Needs to be the same as the objectName
	"money", //Type of upgrade (money, meth, sellMeth)
	"Bribing is the newest trend. Bribe homeless people to either work for you or just leave.", //Description
	400, //Price
	0, //Level
	0.05, //Money/Meth per click
	1.50, //Money/Meth per second
	0
);

let basicEquipment = new Upgrade(
	"Get some basic equipment", //Name
	"basicEquipment", //ID... Needs to be the same as the objectName
	"meth", //Type of upgrade (money, meth, sellMeth)
	"Get yourself a some very basic equipment and start making the worst meth on earth. Increases the meth value by 10$ (one time only)", //Description
	1000, //Price
	0, //Level
	0, //Money/Meth per click
	0.5, //Money/Meth per second
	10 //Increase meth value
);

let chemistEquipment = new Upgrade(
	"Buy some equipment from a chemist store", //Name
	"chemistEquipment", //ID... Needs to be the same as the objectName
	"meth", //Type of upgrade (money, meth, sellMeth)
	"Now that you have some more money, you can afford some propper equipment to cook your meth. Increases the meth value by 5$ (one time only)", //Description
	4000, //Price
	0, //Level
	0, //Money/Meth per click
	1, //Money/Meth per second
	5 //Increase meth value
);

let tanks = new Upgrade(
	"Really big tanks for cooking", //Name
	"tanks", //ID... Needs to be the same as the objectName
	"meth", //Type of upgrade (money, meth, sellMeth)
	"This doesn't make your work cleaner, but it will improve your ouput drastically", //Description
	25000, //Price
	0, //Level
	0, //Money/Meth per click
	10, //Money/Meth per second
	0 //Increase meth value
);

let garage = new Upgrade(
	"Buy a garage for cooking", //Name
	"garage", //ID... Needs to be the same as the objectName
	"meth", //Type of upgrade (money, meth, sellMeth)
	"Buy your own little spot to cook. You have more place now and can produce more", //Description
	100000, //Price
	0, //Level
	0, //Money/Meth per click
	25, //Money/Meth per second
	5 //Increase meth value
);

let sellYourself = new Upgrade(
	"Sell this stuff yourself", //Name
	"sellYourself", //ID... Needs to be the same as the objectName
	"sellMeth", //Type of upgrade (money, meth, sellMeth)
	"For now you're a loner, so sell the meth alone.", //Description
	500, //Price
	0, //Level
	0, //Money/Meth per click
	0.2, //Money/Meth per second
	0
);

let dealer = new Upgrade(
	"Hire a dealer", //Name
	"dealer", //ID... Needs to be the same as the objectName
	"sellMeth", //Type of upgrade (money, meth, sellMeth)
	"Get your first dealers. They aren't the best, but a good starting point. Because you basically buy them, you don't have to worry about giving them money for there work. Increases the meth value by 2$ (one time only)", //Description
	2500, //Price
	0, //Level
	0, //Money/Meth per click
	1, //Money/Meth per second
	2
);

let masterDealer = new Upgrade(
	"Hire a boss dealer", //Name
	"masterDealer", //ID... Needs to be the same as the objectName
	"sellMeth", //Type of upgrade (money, meth, sellMeth)
	"Hire some well known dealers in this scene. They bring their own teams, means they're doing the dirty work. Increases the meth value by 5$ (one time only)", //Description
	10000, //Price
	0, //Level
	0, //Money/Meth per click
	4, //Money/Meth per second
	5
);

let promoter = new Upgrade(
	"Hire a undercover promoter", //Name
	"promoter", //ID... Needs to be the same as the objectName
	"sellMeth", //Type of upgrade (money, meth, sellMeth)
	"Hire someone who promotes your stuff in the scene. This will rise the selling prices and production value. Increases the meth value by 2.50$ (one time only)", //Description
	40000, //Price
	0, //Level
	0, //Money/Meth per click
	10, //Money/Meth per second
	2.50
);

let cute = new oneTimeUpgrade(
	"Be Cute", //Name
	"cute", //ID
	"Be the cutest one around and get more money that way. (Lol, with a ribbon in your hair, of course) Get 10% more money per second and 50% more money per click(only works on your current stats)", //Description
	25, //Price
	1, //Meth per second multiplier
	1, //Meth price increase
	1.1, //Money per second multiplier
	1.5 //Money per click multiplier
);

let cleanup = new oneTimeUpgrade(
	"Cleanup your place", //Name
	"cleanup", //ID
	"Clean up your place, that way no one avoids you. Get 25% more money per second and 25% more money per click(only works on your current stats)", //Description
	100, //Price
	1, //Meth per second multiplier
	1, //Meth price increase
	1.25, //Money per second multiplier
	1.25 //Money per click multiplier
);
