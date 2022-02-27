const Bootcamp = require('../models/Bootcamp');
// @route   GET api/v1/bootcamps
// @desc    Get all bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps
        })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// @route   GET api/v1/bootcamps/:id
// @desc    Get single bootcamp
// @access  Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if (!bootcamp) {
            return res.status(404).json({
                success: false,
                error: 'Bootcamp not found'
            });
        }
        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// @route   POST api/v1/bootcamp
// @desc    Create bootcamp
// @access  Private
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// @route   PUT api/v1/bootcamp/:id
// @desc    Update bootcamp
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!bootcamp) {
            return res.status(400).json({ success: false, message: 'Bootcamp not Updated!' })
        }
        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// @route   DELETE api/v1/bootcamp/:id
// @desc    Delete bootcamp
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            return res.status(404).json({ success: false, message: 'Bootcamp not found!' });
        }
        bootcamp.remove();
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
