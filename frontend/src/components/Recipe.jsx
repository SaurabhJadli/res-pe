import Markdown from 'react-markdown'

export default function Recipe(props) {
    return (
        <section className='suggested-recipe-container p-4'>
            <h2>Chef&apos;s Recommends:</h2>
            <Markdown>
                {props.recipe}
            </Markdown>
        </section>
    )
}