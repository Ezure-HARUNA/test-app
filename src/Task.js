import React, { Fragment, useState } from 'react'
import {
  ListItemText,
  ListItem,
  ListItemSecondaryAction,
  Divider,
  List
} from '@material-ui/core'
import styled from 'styled-components'
import { firestore } from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import {useGetWant} from './helpers/useGetWant'

const Contents = styled.div`
  & {
    flex: 1;
    border-top: 1px solid #ddd;
    margin-top: 10px;
    padding: 10px;
  }
`

const EmptyMessage = styled.div`
  & {
    font-size: 18px;
    color: #aaa;
    padding: 10px;
  }
`

const Text = styled(ListItemText)`
  && {
    opacity: ${({ completed }) => (completed ? '0.9' : '1.0')};
    text-decoration: ${({ completed }) =>
      completed ? 'line-through' : 'none'};
  }
`

const Task = () => {

  const [wants, setWants] = useState([])
  const [getWant, loading] = useGetWant()

  //以下２行コメントアウト
  // const query = firestore().collection('wants').orderBy('updatedAt', 'text')

  // const [wants = [], loading] = useCollectionData(query, { idField: 'id' })

  return (
    <div>
       {wants.length === 0 ? (
        <EmptyMessage>No wants...</EmptyMessage>
      ) : (
        <List>
          {wants.map(want => (
            <Fragment key={`${want.docId}--fragment`}>
              <ListItem key={`${want.docId}--list`}>
                {/* <Checkbox
                  checked={want.isComplete}
                  onClick={() => {
                    update({
                      docId: want.docId,
                      text: want.text,
                      isComplete: !want.isComplete,
                    })
                  }}
                /> */}
                <Text primary={want.text} completed={want.isComplete} />
                <ListItemSecondaryAction>
                  {/* <Button
                    color="default"
                    onClick={() => {
                      remove({ docId: want.docId })
                    }}
                  >
                    Delete
                  </Button> */}
                </ListItemSecondaryAction>
              </ListItem>
              <Divider key={`${want.docId}--divider`} />
            </Fragment>
          ))}
        </List>
      )}
    </div>
  )
}

//   return (
//     <Contents>
//       {wants.length === 0 ? (
//         <EmptyMessage>No wants...</EmptyMessage>
//       ) : (
//         <List>
//           {wants.map(want => (
//             <Fragment key={`${want.docId}--fragment`}>
//               <ListItem key={`${want.docId}--list`}>
//                 {/* <Checkbox
//                   checked={want.isComplete}
//                   onClick={() => {
//                     update({
//                       docId: want.docId,
//                       text: want.text,
//                       isComplete: !want.isComplete,
//                     })
//                   }}
//                 /> */}
//                 <Text primary={want.text} completed={want.isComplete} />
//                 <ListItemSecondaryAction>
//                   {/* <Button
//                     color="default"
//                     onClick={() => {
//                       remove({ docId: want.docId })
//                     }}
//                   >
//                     Delete
//                   </Button> */}
//                 </ListItemSecondaryAction>
//               </ListItem>
//               <Divider key={`${want.docId}--divider`} />
//             </Fragment>
//           ))}
//         </List>
//       )}
//     </Contents>
//   )
// }

export default Task