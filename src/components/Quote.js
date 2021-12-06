import '../css/index.css';

export const Quote = ({data}) => {
    
    return (
        
        <div className='quote'>
            <div className='anime' title={data.anime}>
                {data.anime}
            </div>
            <blockquote title={data.quote}>
                {data.quote}
            </blockquote>
            <div className='character' title={data.character}>
                {data.character}
             </div>  
        </div>     
    )
}

