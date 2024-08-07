
// 'use client';

// import styled from 'styled-components';
// import { useContext, useEffect, useState } from 'react';
// import { redirect, useRouter } from 'next/navigation';
// import axios from 'axios';
// import {toast} from 'react-hot-toast';
// import { UserContext } from '@/app/context/usercontext';
// import { FaBox, FaHeart, FaLock, FaMoon, FaSave, FaSignOutAlt, FaSun, FaUser } from 'react-icons/fa';
// import { FaDeleteLeft, FaHouse } from 'react-icons/fa6';
// import Model from '@/app/components/Modal';
// import Navbar from '@/app/components/Navbar';
// import Footer from '@/app/components/Footer';
// import Loading from '@/app/loading';
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2rem;
//   background-color:#333333 ;
//   min-height: 100vh;
// `;

// const Header = styled.header`
//   width: 100%;
//   background-color:#ffffff;
//   color: #1a1a1a;
//   font-size:smaller;
//   padding: 1rem 2rem;
//   text-align: center;
//   margin-bottom: 2rem;
//   border-radius: 8px;
// `;

// const Main = styled.main`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   max-width: 1200px;
//   background: #ffffff;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 4px 4px 6px rgba(0, 0, 0, 1);
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 2rem;
// `;

// const Button = styled.button`
//   background-color: #1a1a1a;
//   color: #ffffff;
//   border: none;
//   border-radius: 4px;
//   padding: 0.5rem 1rem;
//   margin: 0 0.5rem;
//   cursor: pointer;

//   &:hover {
//     background-color: #005bb5;
//   }
// `;

// const ProfileSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   margin-bottom: 2rem;
//   text-align: center;
// `;

// const ProfilePicture = styled.img`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   margin-bottom: 1rem;
//   border: 4px solid #1a1a1a;
//   cursor: pointer;
// `;

// const ProfileDetails = styled.div`
//   text-align: center;
//   color:#1a1a1a;
//   align-items:center;
//   border:3px solid #1a1a1a;
//   padding:5px;
//   border-radius:10px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem;
//   margin-bottom: 1rem;
//   border: 2px solid #1a1a1a;
//   border-radius: 10px;
//   box-sizing: border-box;
// `;

// const RecentActivitiesSection = styled.section`
//   width: 100%;
//   color :#1a1a1a;
//   margin-bottom: 2rem;
// `;

// const SectionHeader = styled.h2`
//   margin-bottom: 1rem;
//   color: #1a1a1a;
// `;

// const ActivitiesList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const Activity = styled.li`
//   padding: 0.5rem 0;
//   border-bottom: 1px solid #ccc;
//   display: flex;
//   cursor:pointer;
//   align-items: center;
//   &:last-child {
//     border-bottom: none;
//   }
// `;

// const ActivityIcon = styled.span`
//   margin-right: 0.5rem;
//   color: #1a1a1a;
// `;

// const SettingsSection = styled.section`
// color :#1a1a1a;
//   width: 100%;
// `;

// const SettingsList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const SettingItem = styled.li`
//   padding: 0.5rem 0;
//   border-bottom: 1px solid #ccc;
//   display: flex;
//   align-items: center;
//   cursor: pointer;

//   &:last-child {
//     border-bottom: none;
//   }

//   &:hover {
//     color: #005bb5;
//   }
// `;

// const SettingIcon = styled.span`
//   margin-right: 0.5rem;
//   color: #1a1a1a;
// `;

// const ImagePreviewContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.8);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
// `;

// const ImagePreview = styled.img`
//   max-width: 90%;
//   max-height: 90%;
//   border-radius:50px;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   background: rgba(0, 0, 0, 0.5);
//   border: none;
//   color: white;
//   font-size: 1.5rem;
//   cursor: pointer;
// `;

// const FileInput = styled.input`
//   display: none;
// `;
// const P =styled.p`
// font-weight:500;
// color:#1a1a1a;
// border:2px solid #1a1a1a;
// padding:5px;
// border-radius:10px;
// `;
// const ProfilePage = ({params}) => {
//   const [view, setView] = useState('view'); // 'view' or 'update'
//   const [isPreviewOpen, setIsPreviewOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [newprofile, setProfileImage] = useState('https://picsum.photos/200'); // Default profile image\
//   const [showModel,setShowModel] =useState(false)
//   const router = useRouter();
//   const context = useContext(UserContext)
//   if(!context){
//     return null
//   }
//   function addresshandle(){
//     router.push('/pages/address')
//   }
//   const {user,setIsLoggedIn,isLoggedIn,setUser,loading,setLoading,theme,setTheme} =context
//   const handleViewProfile = () => setView('view');
//   const handleUpdateProfile = () => setView('update');
//   const handleChangePassword = () => router.push('/pages/changepassword');
//   const handleDeleteAccount = () => setShowModel(true)
//   const handleConfirmDelete = () => {
//     setShowModel(false);
//     setLoading(true)
//     axios.delete('/api/users/deleteuser')
//     .then(res=>{
//       console.log(res);
//       toast.success("User deleted success")
//       router.push('/pages/home')
//       setUser(false)
//       setIsLoggedIn(false)
//       setLoading(false)
//     })
//     .catch(err=>{
//       console.log(err);
//       toast.error("deletion error")
//       setLoading(false)
//     })
//   };
    
    
//   const handleLogout =()=>{
//     setLoading(true)
//     axios.post('/api/users/logout')
//     .then(res=>{
//       console.log(res);
//         router.push('/pages/home')
//         toast.success("Logout success")
//        setUser(false)
//        setIsLoggedIn(false)
//        setLoading(false)
//     })
//     .catch(err=>{
//       console.log(err);
//       toast.error("Logout failed")
//     })
//   }
//   const handleImageClick = () => document.getElementById('profile-image-input').click();
//   const handleClosePreview = () => setIsPreviewOpen(false);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//         setSelectedImage(reader.result);
//         setIsPreviewOpen(true);
//         toast.success("Now Click on cross and save changes")
//       };
//       reader.readAsDataURL(file);
      
//     }
//   };
// const [newemail,setNewEmail] =useState()
// const [newusername,setNewUsername] =useState()
// const handleSave = async (e) => {
//   e.preventDefault();
//   try {
//     setLoading(true)
//     const response = await axios.post('/api/users/updateprofile', {newusername,newemail,newprofile})
//     console.log(response);
//     toast.success("Profile updated successfully");
//     router.push('/');
//     setLoading(false)
//     location.reload()
//   } catch (error) {
//     console.log(error);
//     toast.error("Profile update error");
//     setLoading(false)
//   }
// };
// if(loading){
//   return <Loading/>
// }

// const viewimg =()=>{
//   setIsPreviewOpen(true)
//   setProfileImage(user.profile)
//   setSelectedImage(user.profile)
// }


// function orderss(){
//   router.push('/pages/orders')
// }
//   return (
//     <>
//     <Navbar/>
//     <br/><br/>
//     <Container >
//       <Header >
//         <h1>Dashboard</h1>
//       </Header>
//       <Main >
//         <ButtonContainer>
//           <Button onClick={handleViewProfile}>View Profile</Button>
//           <Button onClick={handleUpdateProfile}>Update Profile</Button>
//         </ButtonContainer>

//         {view === 'view' ? (
//           <ProfileSection>
//             <ProfilePicture
//               src={user? user.profile :newprofile}
//               alt="Profile Picture"
//               onClick={viewimg}
//             />
//             <ProfileDetails>

//               <P>ID <br/> {params.id}</P>
//               <P>Name <br/> {user ? user.username : "John doe"} </P>
//               <P>Email <br/> { user ? user.email : 'john.doe@example.com'}</P>
             
//             </ProfileDetails>
//           </ProfileSection>
//         ) : (
//           <ProfileSection>
//             <ProfilePicture
//               src={ user ? user.profile :newprofile}
//               alt="Profile Picture"
//               onClick={handleImageClick}
//             />
//             <ProfileDetails>
//               <Input type="text" placeholder="Name" name='newusername' defaultValue={user.username} onChange={(e)=>setNewUsername(e.target.value)}/>
//               <Input type="email" placeholder="Email" name='newemail' defaultValue={user.email} onChange={(e)=>setNewEmail(e.target.value)}/>
//               <Button onClick={handleSave}>Save Changes</Button>
//             </ProfileDetails>
//           </ProfileSection>
//         )}

//         <RecentActivitiesSection>
//           <SectionHeader>Track</SectionHeader>
//           <ActivitiesList>
//             <Activity onClick={orderss}>
//               <ActivityIcon><FaBox/></ActivityIcon>
//               Orders
//             </Activity>
//             <Activity onClick={addresshandle}> 
//               <ActivityIcon ><FaHouse/></ActivityIcon>
//               Address
//             </Activity>
//           </ActivitiesList>
//         </RecentActivitiesSection>


//         {/* <div className='search'><button className='themebtns' onClick={themechange}>{btn.text}</button></div> */}

//         <SettingsSection>
//           <SectionHeader>Settings</SectionHeader>
//           <SettingsList>
//             <SettingItem onClick={handleChangePassword}>
//               <SettingIcon><FaLock/></SettingIcon>
//               Change Password
//             </SettingItem>
//             <SettingItem onClick={handleDeleteAccount}>
//               <SettingIcon><FaDeleteLeft/></SettingIcon>
//               Delete Account
//             </SettingItem>
//             <SettingItem onClick={handleLogout}>
//               <SettingIcon><FaSignOutAlt/></SettingIcon>
//               Logout
//             </SettingItem>
//           </SettingsList>
//         </SettingsSection>
//       </Main>

//       {isPreviewOpen && (
//         <ImagePreviewContainer onClick={handleClosePreview}>
//           <CloseButton onClick={handleClosePreview}>&times;</CloseButton>
//           <ImagePreview src={selectedImage} alt="You do not have profile add one" />
//         </ImagePreviewContainer>
//       )}

//       <FileInput
//         id="profile-image-input"
//         type="file"
//         name='newprofile'
//         accept="image/*"
//         onChange={handleImageUpload}
//       />
//     </Container>

//     <Model 
//         show={showModel} 
//         onClose={() => setShowModel(false)} 
//         onConfirm={handleConfirmDelete} 
//       />
//       <Footer/>
//       </>
//   );
// };

// export default ProfilePage;



'use client';

import styled from 'styled-components';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { UserContext } from '@/app/context/usercontext';
// import { FaBox, FaHouse, FaLock, FaCross, FaDeleteLeft } from 'react-icons/fa';
import Model from '@/app/components/Modal';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Loading from '@/app/loading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #333333;
  min-height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  background-color: #ffffff;
  color: #1a1a1a;
  font-size: smaller;
  padding: 1rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 8px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #1a1a1a;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 4px solid #1a1a1a;
  cursor: pointer;
`;

const ProfileDetails = styled.div`
  text-align: center;
  color: #1a1a1a;
  align-items: center;
  border: 3px solid #1a1a1a;
  padding: 5px;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 2px solid #1a1a1a;
  border-radius: 10px;
  box-sizing: border-box;
`;

const RecentActivitiesSection = styled.section`
  width: 100%;
  color: #1a1a1a;
  margin-bottom: 2rem;
`;

const SectionHeader = styled.h2`
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const ActivitiesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Activity = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  cursor: pointer;
  align-items: center;
  &:last-child {
    border-bottom: none;
  }
`;

const ActivityIcon = styled.span`
  margin-right: 0.5rem;
  color: #1a1a1a;
`;

const SettingsSection = styled.section`
  color: #1a1a1a;
  width: 100%;
`;

const SettingsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SettingItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #005bb5;
  }
`;

const SettingIcon = styled.span`
  margin-right: 0.5rem;
  color: #1a1a1a;
`;

const ImagePreviewContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ImagePreview = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 50px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

const P = styled.p`
  font-weight: 500;
  color: #1a1a1a;
  border: 2px solid #1a1a1a;
  padding: 5px;
  border-radius: 10px;
`;

const ProfilePage = ({ params }) => {
  const [view, setView] = useState('view'); // 'view' or 'update'
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newProfile, setProfileImage] = useState('https://picsum.photos/200'); // Default profile image
  const [showModel, setShowModel] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  
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
      <Container>
        <Header>
          <h1>Dashboard</h1>
        </Header>
        <Main>
          <ButtonContainer>
            <Button onClick={handleViewProfile}>View Profile</Button>
            <Button onClick={handleUpdateProfile}>Update Profile</Button>
          </ButtonContainer>

          {view === 'view' ? (
            <ProfileSection>
              <ProfilePicture
                src={user ? user.profile : newProfile}
                alt="Profile Picture"
                onClick={viewImg}
              />
              <ProfileDetails>
                <P>ID <br /> {params.id}</P>
                <P>Name <br /> {user ? user.username : "John Doe"} </P>
                <P>Email <br /> {user ? user.email : 'john.doe@example.com'}</P>
              </ProfileDetails>
            </ProfileSection>
          ) : (
            <ProfileSection>
              <ProfilePicture
                src={user ? user.profile : newProfile}
                alt="Profile Picture"
                onClick={handleImageClick}
              />
              <ProfileDetails>
                <Input type="text" placeholder="Name" defaultValue={user.username} onChange={(e) => setNewUsername(e.target.value)} />
                <Input type="email" placeholder="Email" defaultValue={user.email} onChange={(e) => setNewEmail(e.target.value)} />
                <Button onClick={handleSave}>Save Changes</Button>
              </ProfileDetails>
            </ProfileSection>
          )}

          <RecentActivitiesSection>
            <SectionHeader>Track</SectionHeader>
            <ActivitiesList>
              <Activity onClick={ordersHandle}>
{/*                 <ActivityIcon><FaBox /></ActivityIcon> */}
                Orders
              </Activity>
              <Activity onClick={addressHandle}>
{/*                 <ActivityIcon><FaHouse /></ActivityIcon> */}
                Address
              </Activity>
            </ActivitiesList>
          </RecentActivitiesSection>

          <SettingsSection>
            <SectionHeader>Settings</SectionHeader>
            <SettingsList>
              <SettingItem onClick={handleChangePassword}>
{/*                 <SettingIcon><FaLock /></SettingIcon> */}
                Change Password
              </SettingItem>
              <SettingItem onClick={handleDeleteAccount}>
{/*                 <SettingIcon><FaCross /></SettingIcon> */}
                Delete Account
              </SettingItem>
              <SettingItem onClick={handleLogout}>
{/*                 <SettingIcon><FaSignOutAlt /></SettingIcon> */}
                Logout
              </SettingItem>
            </SettingsList>
          </SettingsSection>
        </Main>

        {isPreviewOpen && (
          <ImagePreviewContainer onClick={handleClosePreview}>
            <CloseButton onClick={handleClosePreview}>&times;</CloseButton>
            <ImagePreview src={selectedImage} alt="Profile Preview" />
          </ImagePreviewContainer>
        )}

        <FileInput
          id="profile-image-input"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </Container>

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
