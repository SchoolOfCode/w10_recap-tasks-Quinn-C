import { Box } from '@chakra-ui/react';
function Comment({comment}){
    return(
        <div className="comment">
            <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            >
            {comment.name} says:
            </Box>
            <Box>
                {comment.text}
            </Box>
        </div>
)
}
export default Comment;