import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import {Text} from '@chakra-ui/react'


function ArticleParagraph({article}){
    return(
        <div>
            {article.paragraphs.map((paragraph) => (
                <Text key={paragraph.id}>{paragraph.text}</Text>
            ))}
        </div>
    )
}
export default ArticleParagraph;