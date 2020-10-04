const Joi = require('joi');
const BaseController = require('../controllers/BaseController');
const RequestHandler = require('../utils/RequestHandler');
const Logger = require('../utils/logger');
const logger = new Logger();
const requestHandler = new RequestHandler(logger);

class UsersController extends BaseController {
	
	static async listUsers(req, res) {
		try {
			const result = await super.getList(req, 'Users');
			return requestHandler.sendSuccess(res, 'User Data Extracted')({ result });
		} catch (error) {
			return requestHandler.sendError(req, res, error);
		}
	}

	static async getUserById(req, res) {
		try {
			const reqParam = req.params.id;
			const schema = {
				id: Joi.number().integer().min(1),
			};
			const { error } = Joi.validate({ id: reqParam }, schema);
			requestHandler.validateJoi(error, 400, 'bad Request', 'invalid User Id');

			const result = await super.getById(req, 'Users');
			return requestHandler.sendSuccess(res, 'User Data Extracted')({ result });
		} catch (error) {
			return requestHandler.sendError(req, res, error);
		}
	}

	static async getFriends(req, res) {
		try {
			const options = {
				where: { user_id: Number(req.params.id), relation: "friend"},
				include: ['user']
			};
			var friends = await super.getByCustomOptions(req, 'FriendRelations', options);
			return requestHandler.sendSuccess(res, 'Friends Extracted')({ friends });
		} catch (err) {
			return requestHandler.sendError(req, res, err);
		}
	}  
}

module.exports = UsersController;
