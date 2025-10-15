import React, { useState } from 'react'

const AddEvent = () => {


    const [formData, setFormData] = useState({
        eventName: "",
        eventDescription: "",
        eventDate: "",
        eventImage: "",
        status: "",
        location: "",
        availableSeats: "",
        organizer: "",
        price: ""
    })


    const { eventName, eventDescription, eventDate, eventImage, status, location, availableSeats, organizer, price } = formData

    const handleChange = (e) => {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })

    }

    const handleAddEvent = (e) => {
        e.preventDefault()
        console.log(formData)
    }


    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-black text-slate-900 mb-2">Add Event</h1>
                <p className="text-slate-600">Add New Events Here</p>
            </div>

            <form onSubmit={handleAddEvent} className='border border-gray-300 p-4 rounded-md w-full'>
                <input name='eventName' value={eventName} onChange={handleChange} className='border border-gray-300 rounded-md p-1.5 w-full my-2' type="text" placeholder='Enter Event Title' />
                <textarea name='eventDescription' value={eventDescription} onChange={handleChange} className='border border-gray-300 rounded-md p-1.5 w-full my-2' type="text" placeholder='Enter Event Description'></textarea>
                <input name='eventDate' value={eventDate} onChange={handleChange} className='border border-gray-300 rounded-md p-1.5 w-full my-2' type="date" placeholder='Enter Event Date' />
                <input name='eventImage' value={eventImage} onChange={handleChange} className='border border-gray-300 rounded-md p-1.5 w-full my-2' type="text" placeholder='Enter Event Image URL' />
                <select name='status' value={status} onChange={handleChange} className='border border-gray-300 rounded-md p-1.5 w-full my-2'>
                    <option value="upcoming">Upcoming</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                    <option value="postponed">Postponed</option>
                </select>
                <input name='location' value={location} onChange={handleChange} className='border border-gray-300 rounded-md p-1.5 w-full my-2' type="text" placeholder='Enter Event Location' />
                <input name='availableSeats' value={availableSeats} onChange={handleChange} className='border border-gray-300 rounded-md p-1.5 w-full my-2' type="number" placeholder='Enter Events Available Seats' />
                <input name='organizer' value={organizer} onChange={handleChange} className='border border-gray-300 rounded-md p-1.5 w-full my-2' type="text" placeholder='Enter Event Organizer' />
                <input name='price' value={price} onChange={handleChange} className='border border-gray-300 rounded-md p-1.5 w-full my-2' type="number" placeholder='Enter Event Ticket Price' />
                <button type='submit' className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    + Add Event
                </button>
            </form>

        </div>
    )
}

export default AddEvent
