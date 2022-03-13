import React from 'react'
import { RiFileCopyFill } from 'react-icons/ri';
import { AiOutlineFork, AiOutlineEye } from "react-icons/ai";

const ListCard = ({item}) => {

	const handleClone = (url) => {
		navigator.clipboard.writeText(url);
		alert(`${url} copied`);
	}

  return (
	<div
	className='todo-row'
	
  >
	  <div>
	  <div onClick={() => console.log('klck')}>
	 {item.name}
	 <div style={{marginTop: 10, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
		 <AiOutlineFork style={{marginRight: 4}}/>
		 {item.forks} 
		 <AiOutlineEye style={{marginRight: 4, marginLeft: 4}}/>
		 {item.watchers} 

	 </div>
	</div>
	  </div>
	<div className='icons'>
	  <RiFileCopyFill
		onClick={() => handleClone(item.clone_url)}
		className='delete-icon'
	  />
	</div>
  </div>
  )
}

export default ListCard