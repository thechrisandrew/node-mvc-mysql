// Notes: get, getById, create, update, destroy ???
const pool = require("./../helpers/database");

module.exports = {
	getAllItems: function () {
		return new Promise((resolve, reject) => {
			pool.getConnection(function (err, conn) {
				if (err) console.log("error");
				else
					conn.query("SELECT * FROM Items", function (err, result, fields) {
						pool.releaseConnection(conn);
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
					});
			});
		});
	},
	create: function (data) {
		return new Promise((resolve, reject) => {
			pool.getConnection(function (err, conn) {
				if (err) console.log("error");
				else
					conn.query(
						`INSERT INTO Items (itemName, itemDesc, itemStock, itemPrice) VALUES (?,?,?,?)`,
						[data.itemName, data.itemDesc, data.itemStock, data.itemPrice],
						function (err, result) {
							pool.releaseConnection(conn);
							if (err) {
								reject(err);
							} else {
								resolve("Inserted item to db successfully");
							}
						}
					);
			});
		});
	},
};
