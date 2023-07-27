import { useState } from 'react';

const AddRestaurantMenuItem = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(null);

    const handleAddMore = (e) => {
        e.preventDefault();
        // Create a new menu item object
        const newItem = {
            itemName,
            price,
            image: image ? URL.createObjectURL(image) : null, // Store the image URL if an image was selected
        };
        // Add the new item to the menuItems array
        setMenuItems([...menuItems, newItem]);
        // Clear the form fields after submission
        setItemName('');
        setPrice(0);
        setImage(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(menuItems)
    };

    return (
        <div className="p-4 w-3/4 mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Image Upload Field */}
                <label className="block text-lg font-bold mb-2">Upload Image:</label>
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    accept="image/*"
                    className="border rounded-md p-2"
                />

                {/* Name Field */}
                <label className="block text-lg font-bold mb-2">Name:</label>
                <input
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder="Enter item name"
                    className="w-full p-2 border rounded-md"
                />

                {/* Price Field */}
                <label className="block text-lg font-bold mb-2">Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                    placeholder="Enter price (e.g., 12.99)"
                    className="w-full p-2 border rounded-md"
                />

                <div className="buttons flex md:flex-row flex-col justify-center space-y-5 md:space-y-0 md:space-x-5 items-center">
                    {/* Submit button */}
                    <button type="button" onClick={handleAddMore} className="bg-green-500 text-white p-2 rounded-md">
                        Add More
                    </button>

                    {/* Add More button */}
                    <button type="submit" onClick={handleSubmit} className="bg-red-500 text-white p-2 rounded-md">
                        submit
                    </button>
                </div>
            </form>

            {/* Display the added menu items */}
            {menuItems.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Added Menu Items:</h2>
                    <ul className="list-disc ml-4">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <strong>{item.itemName}</strong> - ${item.price}
                                {item.image && <img src={item.image} alt={item.itemName} className="ml-2 w-24 h-20 " />}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AddRestaurantMenuItem;
