import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const MyProfile = () => {
  const { setUser, user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    photoURL: '',
    email: ''
  });

  const [originalData, setOriginalData] = useState({
    name: '',
    photoURL: '',
    email: ''
  });

  // User ডাটা লোড হলে স্টেট আপডেট হবে
  useEffect(() => {
    if (user) {
      setFormData({
        name: user?.displayName || '',
        photoURL: user?.photoURL || '',
        email: user?.email || ''
      });
      setOriginalData({
        name: user?.displayName || '',
        photoURL: user?.photoURL || '',
        email: user?.email || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsUpdating(true);

    // Validate inputs
    if (!formData.name.trim()) {
      setError('Name is required');
      setIsUpdating(false);
      return;
    }

    if (formData.photoURL && !isValidUrl(formData.photoURL)) {
      setError('Please enter a valid URL for the photo');
      setIsUpdating(false);
      return;
    }

    try {
      // Firebase update logic
      await updateProfile(auth.currentUser, {
        displayName: formData.name.trim(),
        photoURL: formData.photoURL.trim() || null
      });

      // Context আপডেট করা হচ্ছে যাতে সব জায়গায় নতুন নাম/ছবি দেখায়
      setUser({ 
        ...user, 
        displayName: formData.name.trim(), 
        photoURL: formData.photoURL.trim() || null 
      });
      
      setIsEditing(false);
      setSuccess('Profile updated successfully!');
      setOriginalData({
        name: formData.name.trim(),
        photoURL: formData.photoURL.trim() || '',
        email: formData.email
      });
      
      // Auto-clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(error.message || "Failed to update profile. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancel = () => {
    // Reset form to original user data
    setFormData(originalData);
    setIsEditing(false);
    setError('');
    setSuccess('');
  };

  const handleEditClick = () => {
    // Set original data before editing
    setOriginalData(formData);
    setIsEditing(true);
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const placeholderPhoto = 'https://via.placeholder.com/150';

  return (
    <div className="flex flex-col items-center mt-10 mb-10 px-4">
      <div className="avatar mb-5">
        <div className="w-32 h-32 rounded-full ring-4 ring-blue-400 overflow-hidden shadow-lg">
          <img
            src={formData.photoURL || placeholderPhoto}
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = placeholderPhoto;
            }}
          />
        </div>
      </div>

      {/* Success and Error Messages */}
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg w-full max-w-md text-center">
          {success}
        </div>
      )}
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg w-full max-w-md text-center">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">My Profile</h2>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-600 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            readOnly={!isEditing}
            onChange={handleChange}
            className={`p-2 rounded-lg border focus:outline-none focus:ring-2 ${
              isEditing 
                ? 'border-blue-400 bg-white focus:ring-blue-300' 
                : 'border-gray-200 bg-gray-100'
            }`}
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-600 mb-1">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            value={formData.photoURL}
            readOnly={!isEditing}
            onChange={handleChange}
            className={`p-2 rounded-lg border focus:outline-none focus:ring-2 ${
              isEditing 
                ? 'border-blue-400 bg-white focus:ring-blue-300' 
                : 'border-gray-200 bg-gray-100'
            }`}
            placeholder="Enter photo URL (optional)"
          />
          {isEditing && (
            <p className="text-xs text-gray-500 mt-1">
              Leave empty to remove profile photo
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-600 mb-1">Email</label>
          <input
            type="email"
            value={formData.email}
            readOnly
            className="p-2 rounded-lg border border-gray-200 bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div className="flex justify-center gap-4 mt-2">
          {!isEditing ? (
            <button
              type="button"
              onClick={handleEditClick}
              className="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-200"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={handleUpdate}
                disabled={isUpdating}
                className={`px-6 py-2 rounded-lg text-white font-semibold transition duration-200 ${
                  isUpdating 
                    ? 'bg-green-400 cursor-not-allowed' 
                    : 'bg-green-500 hover:bg-green-600'
                }`}
              >
                {isUpdating ? 'Updating...' : 'Update'}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                disabled={isUpdating}
                className="px-6 py-2 rounded-lg bg-gray-300 text-gray-700 font-semibold hover:bg-gray-400 transition duration-200 disabled:opacity-50"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default MyProfile;