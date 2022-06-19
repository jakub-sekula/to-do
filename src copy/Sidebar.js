import {BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo, FaFileAudio } from 'react-icons/fa';


const Sidebar = () => {

    const titles = ['matt','is','a','scrat']
    
    return(
        <div className='fixed top-0 left-0 h-screen w-16 bg-slate-900 flex flex-col text-white shadow'>
           <SidebarIcon icon={<FaFire size='28' /> }/>
           <SidebarIcon icon={<BsPlus size='28' /> }/>
           <SidebarIcon icon={<BsFillLightningFill size='28' /> }/>
           <SidebarIcon icon={<FaFileAudio size='28' /> }/>
           <List titles={titles} />
        </div>
    )
}

const SidebarIcon = ({icon = <FaFire size='28' />, text='tooltip'}) => {
    return(
<div className='sidebar-icon group'>
    {icon}

    <span class='sidebar-tooltip group-hover:scale-100'>
        {text}
    </span>
</div>
    );
}

const List = ({titles}) => {

    return titles.map((title) => {return <SidebarIcon icon={<FaPoo size='28'/>} text={title} />})

}

export default Sidebar;