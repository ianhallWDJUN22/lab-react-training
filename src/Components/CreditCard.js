import VisaLogo from '../assets/images/visa.png'
import MasterCardLogo from '../assets/images/master-card.svg'

function CreditCard(props) {
   let divStyle = { 
                
                    backgroundColor: `${props.bgColor}`,
                    color: `${props.color}`,
                    borderRadius: "10px",
                    width: "370px",
                    height: "200px",
                    margin: "10px"

                  }
    return (
       <div className="creditCards" style={divStyle}>
            <img src={props.type === 'Visa' ? VisaLogo : MasterCardLogo} alt="Card Logo" />
            <div>{props.number}</div>
            <div>{props.expirationMonth}</div>
            <div>{props.expirationYear}</div>
            <div>{props.bank}</div>
            <div>{props.owner}</div>
            
        </div>
    )
};

export default CreditCard;