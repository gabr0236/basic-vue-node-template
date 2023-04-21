import mongoose from 'mongoose';

const someResourceSchema = new mongoose.Schema({
	name: String,
	color: String,
	nicknames: Array,
});

const SomeResource = mongoose.model('SomeResource', someResourceSchema);

export { SomeResource };
