import React, { useState } from "react";
import axios from "axios";
import { URL } from "../../utils/constants";

const AddCuisine = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(URL + "admin/cuisine", formData, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            });
        } catch (error) {
            console.log(error);
        }
        setFormData({
            name: "",
            description: "",
            image: ""
        });
    };

    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 text-gray-800">
            <h1 className="text-3xl font-semibold text-center text-red-700">Add Cuisine</h1>
            <div className="mt-10 p-4 bg-white shadow-md">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Cusine Name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={formData.name}
                            onChange={(e) => setFormData({
                                ...formData,
                                name: e.target.value
                            })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            placeholder="Write About Cuisine!"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            rows="4"
                            value={formData.description}
                            onChange={(e) => setFormData({
                                ...formData,
                                description: e.target.value
                            })}
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            value={formData.image}
                            onChange={(e) => setFormData({
                                ...formData,
                                image: e.target.value
                            })}
                        />
                    </div>
                    <button type="submit" className="w-fit block mx-auto bg-green-600 text-white py-2 px-4 mt-5 rounded-md hover:bg-red-600 hover:shadow hover:shadow-red-800 transition ease-linear duration-200">Add Cuisine</button>
                </form>
            </div>
        </div>
    );
};

export default AddCuisine;
