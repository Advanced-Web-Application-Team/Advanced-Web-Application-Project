
const Layout = require("../models/LayoutModel");
const asyncHandler = require("express-async-handler");

//@desc     Add layout
//@route    /layout
//@access   Private

exports.addLayout = asyncHandler(async (req, res, next) => {

    let userId = req.user.id;

    let {name, listOfCharts, layoutType, idForLink} = req.body;

    if (name.length === 0) {
        res.status(400)
        throw new Error("Name of layout is missing. Please fill the name for layout!");
    };

    if (listOfCharts.length === 0) {
        res.status(400)
        throw new Error("There are no selected charts. Please select")
    };

    let createdLayout = await Layout.create({
        userId: userId,
        name: name,
        listOfCharts: listOfCharts, 
        layoutType: layoutType,
        idForLink: idForLink
    });

    res.status(200).json(createdLayout);

});