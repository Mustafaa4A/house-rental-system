import { Link, Outlet } from "react-router-dom";

const HousesList = () => {
  const list = [
    { id: 1, name: "House 1" },
    { id: 2, name: "House 2" },
    { id: 3, name: "House 3" },
    { id: 4, name: "House 4" },
    { id: 5, name: "House 5" },
    { id: 6, name: "House 6" },
  ];
  return (
    <div>
      {list.map((house) => (
        <h1>
          <Link to={`/houses-list/${house.id}`} key={house.id}>
            {house.name}
          </Link>
        </h1>
      ))}
      <Outlet />
    </div>
  );
};

export default HousesList;
