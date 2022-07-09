import { useParams } from "react-router-dom";

const HouseDetail = () => {
  const param = useParams();
  return (
    <div>
      <h1>House {param.houseID}</h1>
    </div>
  );
};

export default HouseDetail;
