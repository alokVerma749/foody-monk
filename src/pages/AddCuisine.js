import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const AddCuisine = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    // const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("image", image);

            await axios.post("https://foody-monk-2.onrender.com/admin/cuisine", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            history.push("/admin"); // Redirect to admin page after successfully adding the cuisine
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-2xl font-bold mb-4">Add Cuisine</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />
                </div>
                <button onClick={handleSubmit} type="submit" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200">Add Cuisine</button>
            </form>
        </div>
    );
};

export default AddCuisine;
