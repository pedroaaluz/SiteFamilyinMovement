import './card.css'

export default (props) =>{

    return(
        <>
            <div className="card-body">
                <img className='card-img' src={props.img} alt="error"/>
                <p className="card-title">{props.title}</p>
                <p className="card-description">{props.description}</p>
            </div>
        </>
    );

}