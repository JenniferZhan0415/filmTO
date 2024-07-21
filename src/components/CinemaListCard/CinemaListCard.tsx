
import "./CinemaListCard.scss"

interface CinemaProps {
  key: number;
  name: string;
  website: string;
  address: string;
  description: string;
}

// export default function CinemaListCard(props: CinemaProps): JSX.Element {
//   return (
//     <div className="cinemas">
//       <h3 className="cinemas__title">{props.name}</h3>
//       {/* <p>{website}</p>
//       <p>{address}</p>
//       <p>{description}</p> */}
//     </div>
//   );
// }

// export default function CinemaListCard({name, website, address, description}: CinemaProps): JSX.Element {
//   return (
//     <div className="cinemas">
//       <h3 className="cinemas__title">{name}</h3>
//       {/* <p>{website}</p>
//       <p>{address}</p>
//       <p>{description}</p> */}
//     </div>
//   );
// }

const CinemaListCard: React.FC<CinemaProps> = ({ name, website, address, description }) => {
    return (
      <div className="cinemas">
        <h3 className="cinemas__title">{name}</h3>
        {/* <p>{website}</p>
        <p>{address}</p>
        <p>{description}</p> */}
      </div>
    );
  };
  
  export default CinemaListCard;