import { useEffect, useState } from "react";
import useAuth from "../../ReactHooks/useAuth";
import useAxiosSecure from "../../ReactHooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageMyFoods = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(`/foods/${user?.email}`);
      setFoods(data);
    };
    getData();
  }, [user]);
  console.log(foods);
  return (
    <div>
      <h3 className="text-center text-3xl font-semibold py-10">My All Foods</h3>
      <div className="min-h-[calc(100vh-400px)] mt-10 ">
        <div className="overflow-x-auto">
          <table className="table table-auto border">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Food Name</th>
                <th>Donator Email</th>
                {/* <th>Rating</th> */}
                <th>Donator Name</th>
                <th className="text-center">Food Quantity</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="py-5">
              {foods.map((item, idx) => (
                <tr key={item._id} className="bg-base-200 my-5 py-10">
                  <th>{idx + 1}</th>
                  <td>{item.foodName}</td>
                  <td>{item.donatorEmail}</td>
                  {/* <td>{item.rating}</td> */}
                  <td>{item.donatorName}</td>
                  <td className="text-center">{item.foodQuantity}</td>
                  {/* <Link to={`/item/${item._id}`}>
                  <td className="text-blue-600 underline">View Details</td>
                </Link> */}
                  <td>
                    <Link>
                      <td className="text-blue-600 underline">Update</td>
                    </Link>
                  </td>
                  <td>
                    <Link>
                      <td className="text-blue-600 underline">Delete</td>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMyFoods;
