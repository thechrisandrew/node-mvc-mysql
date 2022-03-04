const item = require("./../models/item");

module.exports = {
	index: async (req, res) => {
		try {
			const result = await item.getAllItems();
			res.send(result);
		} catch (err) {
			console.log(err);
			res.send("Something went wrong!");
		}
	},

	create: async (req, res) => {
		// dummy data
		const data = {
			itemName: "Cheetos",
			itemDesc: "",
			itemStock: "20",
			itemPrice: "6100",
		};

		try {
			const result = await item.create(data);
			res.send(result);
		} catch (err) {
			console.log(err);
			res.send("Something went wrong!");
		}
	},
};
