import { useEffect, useState } from "react";
import useAuth from "../../ReactHooks/useAuth";
import useAxiosSecure from "../../ReactHooks/useAxiosSecure";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

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
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log("User want to");
        try {
          const { data } = await axiosSecure.delete(`/food/${id}`);
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Item has been deleted.",
              icon: "success",
            });
            const remaining = foods.filter((f) => f._id !== id);
            setFoods(remaining);
          }
        } catch (err) {
          toast.error(err.message);
        }
      }
    });

    // try {
    //   const { data } = await axiosSecure.delete(`/food/${id}`);
    //   console.log(data);
    //   toast.success("Deleted Succefully");
    //   const remaining = foods.filter((j) => j._id !== id);
    //   setFoods(remaining);
    // } catch (err) {
    //   toast.error(err.message);
    // }
  };
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
                    <Link to={`/updateFood/${item._id}`}>
                      <td className="text-blue-600 underline">Update</td>
                    </Link>
                  </td>
                  <td>
                    <Link onClick={() => handleDelete(item._id)}>
                      <td className="text-blue-600 underline">Delete</td>
                    </Link>
                  </td>
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

export default ManageMyFoods;
