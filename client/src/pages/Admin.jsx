// UI Only — Admin dashboard page

import { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarAdmin from '../components/SidebarAdmin';
import StatsCard from '../components/StatsCard';
import { mockProducts } from '../data/mockProducts';
import { mockEvents } from '../data/mockEvents';
import { formatPrice, formatDate } from '../utils/format';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editModal, setEditModal] = useState(null);

  const DashboardView = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900 mb-2">Dashboard Overview</h1>
        <p className="text-slate-600">Welcome back, Admin! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Products"
          value={mockProducts.length}
          change={12}
          gradient="from-purple-600 to-pink-500"
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          }
        />
        <StatsCard
          title="Total Events"
          value={mockEvents.length}
          change={8}
          gradient="from-pink-500 to-cyan-400"
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
        />
        <StatsCard
          title="Active Users"
          value="2.4K"
          change={15}
          gradient="from-cyan-400 to-purple-600"
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          }
        />
        <StatsCard
          title="Total Revenue"
          value="₹3.2L"
          change={-3}
          gradient="from-purple-600 to-cyan-400"
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { type: 'product', text: 'New product listed: iPhone 12', time: '2 hours ago', color: 'purple' },
            { type: 'event', text: 'TechFest 2025 updated', time: '5 hours ago', color: 'pink' },
            { type: 'user', text: 'New user registration: Rahul S.', time: '1 day ago', color: 'cyan' },
            { type: 'product', text: 'Product sold: Gaming Laptop', time: '1 day ago', color: 'purple' },
            { type: 'event', text: 'New event created: Music Night', time: '2 days ago', color: 'pink' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 hover:bg-slate-50 rounded-lg transition-colors">
              <div className={`w-2 h-2 rounded-full bg-${activity.color}-500`} />
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">{activity.text}</p>
              </div>
              <p className="text-xs text-slate-500">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Analytics Chart</h2>
        <div className="h-64 bg-slate-100 rounded-xl flex items-center justify-center">
          <div className="text-center text-slate-400">
            <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p className="font-medium">Chart Placeholder</p>
            <p className="text-sm">Analytics visualization would go here</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ProductsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Manage Products</h1>
          <p className="text-slate-600">View and manage all marketplace listings</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
          + Add Product
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Seller
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {mockProducts.slice(0, 8).map((product) => (
                <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img src={product.image} alt={product.title} className="w-12 h-12 rounded-lg object-cover mr-3" />
                      <div>
                        <p className="font-medium text-slate-900">{product.title}</p>
                        <p className="text-sm text-slate-500 line-clamp-1">{product.shortDesc}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">{formatPrice(product.price)}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{product.seller.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{formatDate(product.createdAt)}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditModal({ type: 'product', item: product })}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Edit"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <Link
                        to={`/product/${product.id}`}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                        aria-label="View"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </Link>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500" aria-label="Delete">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const EventsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Manage Events</h1>
          <p className="text-slate-600">View and manage all campus events</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
          + Add Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <img src={event.thumbnail} alt={event.title} className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="font-bold text-slate-900 text-lg mb-2 line-clamp-1">{event.title}</h3>
              <p className="text-sm text-slate-600 mb-3">{formatDate(event.date)}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-slate-600">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  {event.attendeesCount}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditModal({ type: 'event', item: event })}
                    className="px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Edit
                  </button>
                  <Link
                    to={`/event/${event.id}`}
                    className="px-3 py-1.5 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    View
                  </Link>
                  <button className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const UsersView = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-slate-900 mb-2">Users Management</h1>
        <p className="text-slate-600">View and manage registered users</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="space-y-4">
          {['Rahul Sharma', 'Priya Patel', 'Arjun Mehta', 'Sneha Roy', 'Vikram Singh'].map((name, index) => (
            <div key={index} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold mr-4">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{name}</p>
                  <p className="text-sm text-slate-500">{name.toLowerCase().replace(' ', '.')}@college.edu</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Edit
                </button>
                <button className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500">
                  Suspend
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <SidebarAdmin activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 p-6 lg:p-8">
        {activeTab === 'dashboard' && <DashboardView />}
        {activeTab === 'products' && <ProductsView />}
        {activeTab === 'events' && <EventsView />}
        {activeTab === 'users' && <UsersView />}
      </div>

      {editModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900">
                Edit {editModal.type === 'product' ? 'Product' : 'Event'}
              </h3>
              <button
                onClick={() => setEditModal(null)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-slate-600 mb-6">
              Edit functionality (UI Only). In a real app, this would show a form to edit the item.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  alert('Changes saved! (UI Only)');
                  setEditModal(null);
                }}
                className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditModal(null)}
                className="flex-1 py-3 border-2 border-slate-300 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
