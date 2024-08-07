
'use client';

import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { UserContext } from '@/app/context/usercontext';
import Model from '@/app/components/Modal';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Loading from '@/app/loading';
import '@/app/styles/profile.css'; // Import the CSS file

const ProfilePage = ({ params }) => {
  const [view, setView] = useState('view'); // 'view' or 'update'
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newProfile, setProfileImage] = useState('https://picsum.photos/200'); // Default profile image
  const [showModel, setShowModel] = useState(false);
  const [newEmail, setNewEmail] = useState();
  const [newUsername, setNewUsername] = useState();
  
  const router = useRouter();
  const context = useContext(UserContext);

  if (!context) {
    return null; // Ensure context is available
  }

  const { user, setIsLoggedIn, isLoggedIn, setUser, loading, setLoading } = context;

  if (loading) {
    return <Loading />;
  }

  const handleViewProfile = () => setView('view');
  const handleUpdateProfile = () => setView('update');
  const handleChangePassword = () => router.push('/pages/changepassword');
  const handleDeleteAccount = () => setShowModel(true);

  const handleConfirmDelete = () => {
    setShowModel(false);
    setLoading(true);
    axios.delete(`/api/users/deleteuser`)
      .then(res => {
        console.log(res);
        toast.success("User deleted successfully");
        router.push('/pages/home');
        setUser(false);
        setIsLoggedIn(false);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        toast.error("Deletion error");
        setLoading(false);
      });
  };

  const handleLogout = () => {
    setLoading(true);
    axios.post(`/api/users/logout`)
      .then(res => {
        console.log(res);
        router.push('/pages/home');
        toast.success("Logout successful");
        setUser(false);
        setIsLoggedIn(false);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        toast.error("Logout failed");
        setLoading(false);
      });
  };

  const handleImageClick = () => document.getElementById('profile-image-input').click();
  const handleClosePreview = () => setIsPreviewOpen(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setSelectedImage(reader.result);
        setIsPreviewOpen(true);
        toast.success("Now click on cross to save changes");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`/api/users/updateprofile`, { newUsername, newEmail, newProfile });
      console.log(response);
      toast.success("Profile updated successfully");
      router.push('/');
      setLoading(false);
      location.reload()
    } catch (error) {
      console.log(error);
      toast.error("Profile update error");
      setLoading(false);
    }
  };

  const viewImg = () => {
    setIsPreviewOpen(true);
    setProfileImage(user.profile);
    setSelectedImage(user.profile);
  };

  const addressHandle = () => router.push('/pages/address');
  const ordersHandle = () => router.push('/pages/orders');

  return (
    <>
      <Navbar />
      <br /><br />
      <div className="container">
        <header className="header">
          <h1>Dashboard</h1>
        </header>
        <main className="main">
          <div className="button-containers">
            <button className="buttons" onClick={handleViewProfile}>View Profile</button>
            <button className="buttons" onClick={handleUpdateProfile}>Update Profile</button>
          </div>

          {view === 'view' ? (
            <section className="profile-section">
              <img
                className="profile-picture"
                src={user ? user.profile : newProfile}
                alt="Profile Picture"
                onClick={viewImg}
              />
              <div className="profile-details">
                <p className="p">ID <br /> {params.id}</p>
                <p className="p">Name <br /> {user ? user.username : "John Doe"} </p>
                <p className="p">Email <br /> {user ? user.email : 'john.doe@example.com'}</p>
              </div>
            </section>
          ) : (
            <section className="profile-section">
              <img
                className="profile-picture"
                src={user ? user.profile : newProfile}
                alt="Profile Picture"
                onClick={handleImageClick}
              />
              <div className="profile-details">
                <input className="input" type="text" placeholder="Name" defaultValue={user.username} onChange={(e) => setNewUsername(e.target.value)} />
                <input className="input" type="email" placeholder="Email" defaultValue={user.email} onChange={(e) => setNewEmail(e.target.value)} />
                <button className="buttons" onClick={handleSave}>Save Changes</button>
              </div>
            </section>
          )}

          <section className="recent-activities-section">
            <h2 className="section-header">Track</h2>
            <ul className="activities-list">
              <li className="activity" onClick={ordersHandle}>
                <span className="activity-icon">🎁</span>
                Orders
              </li>
              <li className="activity" onClick={addressHandle}>
                <span className="activity-icon">🏠</span>
                Address
              </li>
            </ul>
          </section>

          <section className="settings-section">
            <h2 className="section-header">Settings</h2>
            <ul className="settings-list">
              <li className="setting-item" onClick={handleChangePassword}>
                <span className="setting-icon">🔒</span>
                Change Password
              </li>
              <li className="setting-item" onClick={handleDeleteAccount}>
                <span className="setting-icon">🗑️</span>
                Delete Account
              </li>
              <li className="setting-item" onClick={handleLogout}>
                <span className="setting-icon">🔓</span>
                Logout
              </li>
            </ul>
          </section>
        </main>

        {isPreviewOpen && (
          <div className="image-preview-container" onClick={handleClosePreview}>
            <button className="close-button" onClick={handleClosePreview}>&times;</button>
            <img className="image-preview" src={selectedImage} alt="Profile Preview" />
          </div>
        )}

        <input
          id="profile-image-input"
          className="file-input"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>

      <Model 
        show={showModel} 
        onClose={() => setShowModel(false)} 
        onConfirm={handleConfirmDelete} 
      />
      <Footer />
    </>
  );
};

export default ProfilePage;
