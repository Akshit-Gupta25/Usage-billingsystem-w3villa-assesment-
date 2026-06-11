

function ResourceCard({resource , onBook }) { 

    return ( 
        <div style = {{
            border : "1px solid #ddd ",
            padding : "16px",
            borderRadius : "8px"
        }} >
            <h3>{resource.name}</h3>
            <p>
                {resource.availableSlots}/
                {resource.totalSlots}

            </p>
            <p>
                Price : Rs. {resource.price}
            </p>
            <button
                disabled = {resource.availableSlots === 0}
                onClick ={() => onBook(resource)} >
                    Book
            </button>
        </div>
    );
}

export default ResourceCard;