// @route   GET api/v1/bootcamps
// @desc    Get all bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'Get all bootcamps'
    });
}

// @route   GET api/v1/bootcamps/:id
// @desc    Get single bootcamp
// @access  Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Get single bootcamp ${req.params.id}`
    });
}

// @route   POST api/v1/bootcamp
// @desc    Create bootcamp
// @access  Private
exports.createBootcamp = (req, res, next) => {
    res.status(201).json({
        success: true,
        msg: 'Create bootcamps'
    });
}

// @route   PUT api/v1/bootcamp/:id
// @desc    Update bootcamp
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Update bootcamp ${req.params.id}`
    });
}

// @route   DELETE api/v1/bootcamp/:id
// @desc    Delete bootcamp
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Delete bootcamp ${req.params.id}`
    });
}
