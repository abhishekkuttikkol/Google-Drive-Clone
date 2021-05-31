import React from 'react'
import NewFile from './NewFile'
import './SideBar.css'
import SideBarItems from './SideBarItems'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';

function SideBar() {
    return (
        <div className='sidebar'>
            <NewFile/>
            <div className="sidebar_itemsContainer">
                <SideBarItems arrow icon={(<InsertDriveFileIcon/>)} label={'My Drive'} />
                <SideBarItems arrow icon={(<ImportantDevicesIcon/>)} label={'Computers'} />
                <SideBarItems  icon={(<PeopleAltIcon/>)} label={'Shared with me'} />
                <SideBarItems  icon={(<QueryBuilderIcon/>)} label={'Recent'} />
                <SideBarItems  icon={(<StarBorderIcon/>)} label={'Starred'} />
                <SideBarItems  icon={(<DeleteOutlineOutlinedIcon/>)} label={'Bin'} />
                <hr/>
                <SideBarItems icon={(<CloudOutlinedIcon/>)} label={ 'Storage'}/>
            </div>
        </div>
    )
}

export default SideBar
