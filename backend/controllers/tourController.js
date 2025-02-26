
// import  parse  from 'json5';
import Tour from '../models/Tour.js'

// create new tour

export const createTour = async (req, res) => {

    const newTour = new Tour(req.body)
    try {
        
        const savedTour = await newTour.save();
        res
        .status(200)
        .json({
            success: true, 
            message: 'Successfully created', 
            data:savedTour,
        })

    } catch (err) {
        res.status(500).json({success: false, message: 'faild to create. Try again', data:savedTour})
    }
}

// update tour

export const updateTour = async (req, res) => {

    const id = req.params.id

    try {
        const updatedtour = await Tour.findByIdAndUpdate(id, {

        })

        res
        .status(200)
        .json({
            success: true, 
            message: 'Successfully updated', 
            data: tour,
        });


    } catch (err) {

        res
        .status(404)
        .json({
            success: false, 
            message: 'not found', 
        });
    }
};

export const deleteTour = async(req, res) => {

    const id = req.params.id;

    try {
        await Tour.findByIdAndDelete(id)

        res.status(200).json({

            success: true,
            message: "Successfully deleted",
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "failed to delete"
        });
    }
};

export const getSingleTour = async(req, res) => {

    const id = req.params.id;

    try {
        const tour = await Tour.findById(id);

        res.status(200).json ({
            success: true,
            message: "Successfully deleted",
            data: tour
        });

    } catch (err) {
        res.status(404).json({
            success: false,
            message: "failed to delete",
        });
    }
};



// get All tour

export const getAllTour = async (req, res) => {

    const page = parseInt(req.query.page);
    console.log(page);

    try {

    const tours = await Tour.find({});
    res.status(200).json({ success: true, message: "Successfull",  data: tours });

    } 
    catch (err) {

        res.status(404).json({
            success: false,
            message: "not found"
        });
    }
};

export const getFeaturedTours = async (req, res) => {

    const page = parseInt(req.query.page);
    console.log(page);

    try {

    const tours = await Tour.find({});
    res.status(200).json({ success: true, message: "Successfull",  data: tours });

    } 
    catch (err) {

        res.status(404).json({
            success: false,
            message: "not found"
        });
    }
};