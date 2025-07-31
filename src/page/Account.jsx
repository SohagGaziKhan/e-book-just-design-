import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiShoppingBag,
  FiSettings,
  FiLogOut,
  FiEdit,
  FiLock,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Account = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  // Sample user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Book Street, Library City, 10001",
    password: "********",
  });

  // Sample orders data
  const orders = [
    {
      id: "ORD-12345",
      date: "2023-05-15",
      status: "Delivered",
      total: 42.97,
      items: [
        { title: "The Silent Patient", quantity: 1, price: 12.99 },
        { title: "Educated", quantity: 2, price: 14.99 },
      ],
    },
    {
      id: "ORD-12344",
      date: "2023-04-10",
      status: "Shipped",
      total: 28.98,
      items: [
        { title: "The Alchemist", quantity: 1, price: 9.99 },
        { title: "Dune", quantity: 1, price: 16.99 },
      ],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically send the updated data to your backend
    console.log("Updated user:", user);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-4 h-fit">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-indigo-100 p-3 rounded-full">
              <FiUser className="text-indigo-600 text-xl" />
            </div>
            <div>
              <h2 className="font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-600">Member since 2022</p>
            </div>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center space-x-2 w-full p-3 rounded-lg ${
                activeTab === "profile"
                  ? "bg-indigo-50 text-indigo-600"
                  : "hover:bg-gray-50"
              }`}
            >
              <FiUser className="text-lg" />
              <span>Profile</span>
            </button>

            <button
              onClick={() => setActiveTab("orders")}
              className={`flex items-center space-x-2 w-full p-3 rounded-lg ${
                activeTab === "orders"
                  ? "bg-indigo-50 text-indigo-600"
                  : "hover:bg-gray-50"
              }`}
            >
              <FiShoppingBag className="text-lg" />
              <span>My Orders</span>
              <span className="ml-auto bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                {orders.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`flex items-center space-x-2 w-full p-3 rounded-lg ${
                activeTab === "settings"
                  ? "bg-indigo-50 text-indigo-600"
                  : "hover:bg-gray-50"
              }`}
            >
              <FiSettings className="text-lg" />
              <span>Account Settings</span>
            </button>

            <Link
              to="/logout"
              className="flex items-center space-x-2 w-full p-3 rounded-lg hover:bg-gray-50
               text-red-500"
            >
              <FiLogOut className="text-lg" />
              <span>Logout</span>
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Profile Information</h2>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800"
                  >
                    <FiEdit className="text-lg" />
                    <span>Edit Profile</span>
                  </button>
                )}
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500
                         focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500
                         focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={user.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500
                         focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={user.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500
                         focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <FiUser className="text-xl text-gray-500 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-700">Full Name</h3>
                      <p className="text-gray-600">{user.name}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <FiMail className="text-xl text-gray-500 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-700">
                        Email Address
                      </h3>
                      <p className="text-gray-600">{user.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <FiPhone className="text-xl text-gray-500 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-700">
                        Phone Number
                      </h3>
                      <p className="text-gray-600">{user.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <FiMapPin className="text-xl text-gray-500 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-700">
                        Shipping Address
                      </h3>
                      <p className="text-gray-600">{user.address}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Order History</h2>

              {orders.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">
                    You haven't placed any orders yet.
                  </p>
                  <Link
                    to="/shop"
                    className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg
                     hover:bg-indigo-700"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="border rounded-lg overflow-hidden"
                    >
                      <div className="bg-gray-50 px-4 py-3 flex justify-between items-center border-b">
                        <div>
                          <span className="font-medium">Order #{order.id}</span>
                          <span className="text-sm text-gray-500 ml-3">
                            {order.date}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {order.status}
                          </span>
                          <span className="font-medium">
                            ${order.total.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        {order.items.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between py-2"
                          >
                            <div>
                              <p className="font-medium">{item.title}</p>
                              <p className="text-sm text-gray-500">
                                Qty: {item.quantity}
                              </p>
                            </div>
                            <p className="font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        ))}

                        <div className="flex justify-end mt-4">
                          <Link
                            to={`/order/${order.id}`}
                            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                          >
                            View Order Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>

              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <FiLock className="text-xl text-indigo-600" />
                    <h3 className="font-semibold">Change Password</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500
                         focus:border-indigo-500"
                        placeholder="Enter current password"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500
                         focus:border-indigo-500"
                        placeholder="Enter new password"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500
                         focus:border-indigo-500"
                        placeholder="Confirm new password"
                      />
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg
                       hover:bg-indigo-700"
                      >
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <FiMail className="text-xl text-indigo-600" />
                    <h3 className="font-semibold">Email Preferences</h3>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        className="rounded text-indigo-600"
                        defaultChecked
                      />
                      <span>Receive promotional emails</span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        className="rounded text-indigo-600"
                        defaultChecked
                      />
                      <span>Receive order updates</span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        className="rounded text-indigo-600"
                        defaultChecked
                      />
                      <span>Receive newsletter</span>
                    </label>

                    <div className="flex justify-end pt-2">
                      <button
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg
                       hover:bg-indigo-700"
                      >
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;

// Please Account Page All Code Copy my github account please if like this
// video then please subscribe please
