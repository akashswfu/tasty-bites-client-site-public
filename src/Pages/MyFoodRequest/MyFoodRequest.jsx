import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../ReactHooks/useAxiosSecure";
import useAuth from "../../ReactHooks/useAuth";
import { Toaster } from "react-hot-toast";

const MyFoodRequest = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(`/foodsReq/${user?.email}`);
      setFoods(data);
    };
    getData();
  }, [user]);
  const {
    foodName,
    foodImage,
    donatorEmail,
    donatorName,
    requestDate,
    pickupLocation,
    deadline,
    additionalNotes,
    amount,
  } = foods;

  return (
    <div>
      <h3 className="text-center text-3xl font-semibold py-10">
        My Foods Request
      </h3>
      <div className="min-h-[calc(100vh-400px)] mt-10 ">
        <div className="overflow-x-auto">
          <table className="table table-auto border">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Donator Name</th>
                <th>Pickup Location</th>
                <th>Expire Date</th>
                <th>Request Date</th>
                <th>Donation Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="py-5">
              {foods.map((item, idx) => (
                <tr key={item._id} className="bg-base-200 my-5 py-10">
                  <th>{idx + 1}</th>
                  <td>{item.foodName}</td>
                  <td>{item.pickupLocation}</td>
                  <td>{item.deadline}</td>
                  <td>{item.requestDate}</td>
                  <td>{item.amount}</td>
                  <td className="text-green-500">Requested</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default MyFoodRequest;
