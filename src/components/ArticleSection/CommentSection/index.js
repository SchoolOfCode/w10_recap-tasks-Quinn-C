import Comment from "./Comment";
import { Box } from '@chakra-ui/react'


function CommentSection({article}){  
    return(
        <section>
            {article.comments.map((comment) => {
                    return (
                        <div>
                            
                            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' >
                                <Comment key={comment.id} comment={comment} />
                            </Box>
                        </div>
                    
                    );
                })}
        </section>
    )

}
export default CommentSection;