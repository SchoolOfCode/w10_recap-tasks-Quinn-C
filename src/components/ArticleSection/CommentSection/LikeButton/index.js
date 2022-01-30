import { Button} from '@chakra-ui/react';
import React, {useState} from 'react';

function LikeButton(){
    const[likeTimes, setLikeTimes]=useState(0);
    function handleClick(){
    setLikeTimes(likeTimes+1);}
    
    return(
        <div>
        <Button colorScheme='blue' onClick={handleClick}>{`Like 👍 ${likeTimes}`}</Button>
    </div>
        
    )
}
export default LikeButton;