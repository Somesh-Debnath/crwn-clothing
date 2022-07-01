import React from 'react'
import CollectionPreview from '../../components/preview-collection/collection-preview.component'
import { selectCollectionItems } from '../../redux/shop/shop.selector'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
// class ShopPage extends React.Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//         collections: SHOP_DATA
//       }
//   }
//   render() {
//     const { collections } = this.state
//     return (
//       <div className='shop-page'>
//         {collections.map(({ id, ...otherCollectionProps }) => (
//           <CollectionPreview key={id} {...otherCollectionProps} />
//         ))}

//       </div>
//     )
//   }
// }

// export default ShopPage
const ShopPage=({collections})=>{
  return (
           <div className='shop-page'>
             {collections.map(({ id, ...otherCollectionProps }) => (
               <CollectionPreview key={id} {...otherCollectionProps} />
             ))}
    
           </div>
         )
       }
  const mapStateToProps=createStructuredSelector({
    collections:selectCollectionItems
  })

  export default connect(mapStateToProps)(ShopPage)