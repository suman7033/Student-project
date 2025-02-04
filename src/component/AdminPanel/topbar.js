import React from 'react';
import MenuIcon from "../img/MenuIcon.png";
import SettingIcon from "../img/SettingIcon.png";
import NotificationIcon from "../img/NotificationIcon.png";
import ProfileManIcon from "../img/ProfileManIcon.png";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../Redux/sidebarSlice';
import { Link } from 'react-router-dom';
//import MenuIcon from '@mui/icons-material/Menu';

const Topbar = () => {
  const dispatch = useDispatch();
  const admissionFormTitle = useSelector((state) => state.sidebar.admissionFormTitle || 'Dashboard');
  const addNewAdmissionTitle = useSelector((state) => state.sidebar.addNewAdmissionTitle);
  const activeSection = useSelector((state) => state.sidebar.activeSection);  // Access active section from Redux

  // Set background color based on the active section
  const bgColor = activeSection === 'Dashboard' ? 'bg-white' : 'bg-[#637D9B]';
  const textColor= activeSection === 'Dashboard' ? 'text-black' : 'text-white';
  return (
    <div className={`w-full h-16 rounded-r-md shadow-sm border ${bgColor}`}>
      {/* Left side (Menu + Dashboard label) */}
      <div className='flex my-2'>
        <div className='px-4 flex items-center'>
          <img
            className="cursor-pointer"
            src={MenuIcon}
            alt="Menu Icon"
            onClick={() => dispatch(toggleSidebar())}  // Trigger sidebar toggle when clicked
          />
          <label className={` w-40 font-semibold text-xl ${textColor} mx-2`}>{admissionFormTitle}</label>
        </div>
        {addNewAdmissionTitle && (
          <Link to="/admission_form" className='flex ml-[34rem] cursor-pointer justify-center items-center mt-1 rounded-md w-48 bg-white text-gray-500'>{addNewAdmissionTitle}</Link>  // Show addNewAdmissionTitle if available
        )}
        {/* Right side (Settings, Notification, Profile icons) */}
        <div className='flex items-center ml-auto'>
          <img className="mx-5 cursor-pointer" src={SettingIcon} alt="Settings Icon" />
          <img className="mx-5 cursor-pointer" src={NotificationIcon} alt="Notification Icon" />
          <img className="mx-5 cursor-pointer" src={ProfileManIcon} alt="Profile Icon" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
