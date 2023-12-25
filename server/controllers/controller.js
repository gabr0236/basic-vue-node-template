import {SomeResource} from "../database/someModel.js";

const getAll = (req, res) => {
	console.log('🥸');
	res.status(200);
	res.send(`Getting all of 'some resource'`);
};

const getById = (req, res) => {
	res.status(200);
	res.send(`Getting resource with id: ${req.params.id}, of 'some resource'`);
};

const create = async (req, res) => {
	const { name, color, nicknames } = req.body;

    console.log(name);

	const someResource = new SomeResource({ name, color, nicknames});

	await someResource.save();
	
    res.status(200).json(model);
};

export { getAll, getById, create };
