import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { backendurl } from "../../Servicepage";
import axios from "axios";

function Addnewproduct() {
    const navigate = useNavigate();
    
    const [insdata, setdata] = useState({
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
        stock: 0,
        rating: {
            rate: 0,
            count: 0
        }
    });
    const [loading, setLoading] = useState(false);


    // Handle input change, including nested 'rating' object
    const updateinput = (e) => {
        const { name, value } = e.target;

        if (name === 'rate' || name === 'count') {
            setdata((prev) => ({
                ...prev,
                rating: {
                    ...prev.rating,
                    [name]: Number(value) // Ensure rate and count are numbers
                }
            }));
        } else {
            setdata((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };


    // Function to handle image upload to the backend
const uploadImageToBackend = async (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file); // Append the image file to the form data

    try {
        const response = await axios.post(`${backendurl}/upload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        const imageUrl = response.data.imageUrl;
        setdata((prev) => ({ ...prev, image: imageUrl }));
        toast.success("Image uploaded successfully!");
    } catch (error) {
        console.error('Error uploading image:', error);
        toast.error("Image upload failed.");
    } finally {
        setLoading(false);
    }
};

   

    const registorpage = async () => {
        const { title, price, description, category, image, stock, rating } = insdata;

        // Basic validation
        if (title.length >= 3 && price > 0 && description.length >= 5 && category.length >= 3 && image.length >= 5) {
            try {
                const response = await fetch(`${backendurl}/addproduct`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        title,
                        price,
                        description,
                        category,
                        image,
                        stock,
                        rating      
                    })
                });

                const resData = await response.json();

                // Check for success status (201)
                if (response.status === 201) {
                    toast.success("Product added successfully!");
                    navigate("/adminlogin/Landingpage/Myproduct");
                } else {
                    toast.error(resData.message || "Failed to add product");
                }

            } catch (error) {
                toast.error("Error adding product!");
                console.error(error);
            }
        } else {
            toast.error("All fields are required, and title must be at least 3 characters long.");
        }
    };

    return (
        <>
            <form>
                <div className="container-fluid d-flex flex-column full-height bg-custom">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 ">
                            <div className="card-chart card" style={{ backgroundColor: '#27293d', padding: '30px 20px' }}>
                                <div className="card-header">
                                    <h3 className="text-center text-light">Please fill this form</h3>
                                </div>
                                <div className="card-body">

                                     {/* File input for image upload */}
                                     <label className="sr-only text-light">Upload Image</label>
                                    <input type="file" className="form-control" onChange={(e) => uploadImageToBackend(e.target.files[0])} />

                                    <label className="sr-only text-light">Title</label>
                                    <input type="text" className="form-control" placeholder="Title" name='title' value={insdata.title} onChange={updateinput} />

                                    <label className="sr-only text-light">Price</label>
                                    <input type="number" className="form-control" placeholder="Price" name='price' value={insdata.price} onChange={updateinput} />

                                    <label className="sr-only text-light">Description</label>
                                    <input type="text" className="form-control" placeholder="Description" name='description' value={insdata.description} onChange={updateinput} />

                                    <label className="sr-only text-light">Category</label>
                                    <input type="text" className="form-control" placeholder="Category" name='category' value={insdata.category} onChange={updateinput} />

                                   

                                    <label className="sr-only text-light">Stock</label>
                                    <input type="number" className="form-control" placeholder="Stock" name='stock' value={insdata.stock} onChange={updateinput} />

                                    <label className="sr-only text-light">Rating (Rate)</label>
                                    <input type="number" className="form-control" placeholder="Rating (Rate)" name='rate' value={insdata.rating.rate} onChange={updateinput} />

                                    <label className="sr-only text-light">Rating (Count)</label>
                                    <input type="number" className="form-control" placeholder="Rating (Count)" name='count' value={insdata.rating.count} onChange={updateinput} />
                                </div>

                                <div className="card-footer text-center ">
                                    <input type='button' value="Add New Product" className='btn btn-outline-success' onClick={registorpage} disabled={loading} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Addnewproduct;
