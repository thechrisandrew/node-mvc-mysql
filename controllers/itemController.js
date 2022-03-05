// list, detail, create
const item = require("./../models/item");

module.exports = {
	// Display list of all Items.
	item_list: async (req, res) => {
		try {
			const result = await item.getAllItems();
			res.send(result);
		} catch (err) {
			console.log(err);
			res.send("Something went wrong!");
		}
	},
	// Display detail for a specific Item.
	item_detail: (req, res) => {
		res.send("NOT IMPLEMENTED: Item detail: " + req.params.id);
	},
	// Handle Item create on POST.
	item_create_post: async (req, res) => {
		// res.send("NOT IMPLEMENTED: Item create POST");
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
	// Handle Item delete on POST.
	item_delete_post: (req, res) => {
		res.send("NOT IMPLEMENTED: Item delete POST");
	},

	// Handle Item update on POST.
	item_update_post: (req, res) => {
		res.send("NOT IMPLEMENTED: Item update POST");
	},
};
