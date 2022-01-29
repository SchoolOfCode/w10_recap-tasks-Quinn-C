import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import {Text} from '@chakra-ui/react'


function ArticleParagraph({article}){
    return(
        <div>
            {article.paragraphs.map((paragraph) => (
                <Text color='gray.500' isTruncatedkey={paragraph.id}>{paragraph.text}</Text>
            ))}
            <br></br>
            <br></br>
        </div>
    )
}
export default ArticleParagraph;