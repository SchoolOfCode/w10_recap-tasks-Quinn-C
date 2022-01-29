import { Button} from '@chakra-ui/react';

function LikeButton({handleClick, likeTimes}){
    return(
        <div>
            <Button colorScheme='blue' onClick={handleClick}>{`Like 👍 ${likeTimes}`}</Button>
        </div>
        
    )
}
export default LikeButton;