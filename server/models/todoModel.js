const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
    {
        title: String,
        content: String,
        user: { type: mongoose.Schema.Types.ObjectId },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
