import React from 'react'

const AddCuisne = () => {
    const handleAddCuisine = async () => {
        console.log('clicked');
    }
    return (
        <>
            <button onClick={handleAddCuisine} className="w-fit bg-green-600 m-5 p-3 mx-auto block">Add Cuisine</button>
        </>
    )
}

export default AddCuisne