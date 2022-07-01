import react from 'react'
import { connect } from 'react-redux';
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect';
import { selectsDirectorySections } from '../../redux/directory/directory.selector';

const Directory=({ sections })=>{
    return (
      <div className='directory-menu'>
          {sections.map(({id, ...otherSectionProps})=>(
             <MenuItem key={id} {...otherSectionProps} />
          ))}
      </div>
    )
  };
  const mapStateToProps=createStructuredSelector({
    sections:selectsDirectorySections
  })
export default connect(mapStateToProps)(Directory)