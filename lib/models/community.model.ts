import mongoose, { mongo } from "mongoose";

const communitySchema = new mongoose.Schema({
	id: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	bio: String,
	image: String,
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	threads: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Threads",
		},
	],
	members: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
});

const Community =
	mongoose.models.Community || mongoose.model("Community", communitySchema);

export default Community;
