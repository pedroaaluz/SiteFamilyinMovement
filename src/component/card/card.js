import './card.scss'

function card(props) {

    return(
        <>
            <div className="card-body">
                <img className='card-img' src={props.img} alt='erro'/>
                <p className="card-title">{props.title}</p>
                <p className="card-description">{props.description}</p>
            </div>
        </>
    );

}

export default card;