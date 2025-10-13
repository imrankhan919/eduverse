import { User, Package, MessageSquare, Mail, Phone, Send, Edit, Trash2, Eye } from 'lucide-react';
import { useSelector } from 'react-redux';

const MyProfile = () => {

    const { user } = useSelector(state => state.auth)


    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-400">
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-8">
                    {/* My Details Section */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 px-8 py-6">
                            <h2 className="text-3xl font-bold text-white">My Details</h2>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-8">
                                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                                    <User className="w-12 h-12 text-white" />
                                </div>
                                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <User className="w-5 h-5 text-purple-600" />
                                            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Name</p>
                                        </div>
                                        <p className="text-xl font-bold text-gray-900">{user.name}</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Mail className="w-5 h-5 text-purple-600" />
                                            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Email</p>
                                        </div>
                                        <p className="text-xl font-bold text-gray-900">{user.email}</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Phone className="w-5 h-5 text-purple-600" />
                                            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Phone</p>
                                        </div>
                                        <p className="text-xl font-bold text-gray-900">+91 {user.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add Listing Section */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 px-8 py-6">
                            <div className="flex items-center gap-3">
                                <Package className="w-8 h-8 text-white" />
                                <h2 className="text-3xl font-bold text-white">Add New Listing</h2>
                            </div>
                        </div>
                        <div className="p-8">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                                        <input
                                            type="text"
                                            placeholder="Enter listing title"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors">
                                            <option>Select category</option>
                                            <option>Electronics</option>
                                            <option>Books</option>
                                            <option>Furniture</option>
                                            <option>Clothing</option>
                                            <option>Services</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Price</label>
                                        <input
                                            type="number"
                                            placeholder="Enter price"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Condition</label>
                                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors">
                                            <option>Select condition</option>
                                            <option>Brand New</option>
                                            <option>Like New</option>
                                            <option>Good</option>
                                            <option>Fair</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Describe your item or service"
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Images</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-500 transition-colors cursor-pointer">
                                        <Package className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                        <p className="text-gray-600 font-medium">Click to upload images</p>
                                        <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Publish Listing
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* My Listings Section */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 px-8 py-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Package className="w-8 h-8 text-white" />
                                    <h2 className="text-3xl font-bold text-white">My Listings</h2>
                                </div>
                                <span className="bg-white text-purple-600 font-bold px-4 py-2 rounded-full">3 Active</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Listing 1 */}
                                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl overflow-hidden border-2 border-transparent hover:border-pink-300 transition-all hover:shadow-lg">
                                    <div className="h-48 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                                        <Package className="w-16 h-16 text-purple-600" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900">MacBook Pro 2021</h3>
                                            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">Active</span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3">Electronics • Like New</p>
                                        <p className="text-2xl font-bold text-purple-600 mb-4">₹75,000</p>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                            <Eye className="w-4 h-4" />
                                            <span>145 views</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                                                <Edit className="w-4 h-4" />
                                                Edit
                                            </button>
                                            <button className="bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-xl font-semibold transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Listing 2 */}
                                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl overflow-hidden border-2 border-transparent hover:border-purple-300 transition-all hover:shadow-lg">
                                    <div className="h-48 bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center">
                                        <Package className="w-16 h-16 text-blue-600" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900">Study Table</h3>
                                            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">Active</span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3">Furniture • Good</p>
                                        <p className="text-2xl font-bold text-purple-600 mb-4">₹3,500</p>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                            <Eye className="w-4 h-4" />
                                            <span>89 views</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                                                <Edit className="w-4 h-4" />
                                                Edit
                                            </button>
                                            <button className="bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-xl font-semibold transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Listing 3 */}
                                <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl overflow-hidden border-2 border-transparent hover:border-blue-300 transition-all hover:shadow-lg">
                                    <div className="h-48 bg-gradient-to-br from-blue-200 to-pink-200 flex items-center justify-center">
                                        <Package className="w-16 h-16 text-pink-600" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900">Physics Textbook</h3>
                                            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">Active</span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3">Books • Like New</p>
                                        <p className="text-2xl font-bold text-purple-600 mb-4">₹450</p>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                            <Eye className="w-4 h-4" />
                                            <span>67 views</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                                                <Edit className="w-4 h-4" />
                                                Edit
                                            </button>
                                            <button className="bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-xl font-semibold transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* My Messages Section */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 px-8 py-6">
                            <div className="flex items-center gap-3">
                                <MessageSquare className="w-8 h-8 text-white" />
                                <h2 className="text-3xl font-bold text-white">My Messages</h2>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="space-y-4">
                                {/* Message 1 */}
                                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-purple-300">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                                                <User className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg">Rahul Sharma</h3>
                                                <p className="text-sm text-gray-600">2 hours ago</p>
                                            </div>
                                        </div>
                                        <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">New</span>
                                    </div>
                                    <p className="text-gray-700 mb-3">Hi! Is the laptop still available? I'm interested in buying it.</p>
                                    <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2">
                                        <Send className="w-4 h-4" />
                                        Reply
                                    </button>
                                </div>

                                {/* Message 2 */}
                                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-purple-300">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                                                <User className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg">Priya Verma</h3>
                                                <p className="text-sm text-gray-600">5 hours ago</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-3">Thanks for the quick response! When can we meet?</p>
                                    <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2">
                                        <Send className="w-4 h-4" />
                                        Reply
                                    </button>
                                </div>

                                {/* Message 3 */}
                                <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-purple-300">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-pink-600 rounded-full flex items-center justify-center">
                                                <User className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg">Amit Patel</h3>
                                                <p className="text-sm text-gray-600">1 day ago</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-3">Can you send more pictures of the book?</p>
                                    <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2">
                                        <Send className="w-4 h-4" />
                                        Reply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MyProfile
