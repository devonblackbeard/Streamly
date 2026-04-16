import React, { useEffect, useState } from "react";
// import {
//   FaArrowCircleLeft,
//   FaArrowRight,
//   FaChevronRight,
// } from "react-icons/fa";

const Sidebar = () => {
  const [subscriptions, setSubscriptions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5210/api/subscriptions")
      .then((res) => res.json())
      .then((data) => {
        console.log("Subscription data:", data);
        // You can set this data to state if you want to display it
        setSubscriptions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching subscription data:", err);
      });
  }, []);

  return (
    <div className="p-3">
      <div>
        <div className="mb-2 fw-bold">
          Subscriptions
        </div>
        {subscriptions?.length > 0 ? (
          <ul>
            {subscriptions.map((sub) => (
              <li key={sub.id}>{sub.name}</li>
            ))}
          </ul>
        ) : (
          <p className="small">No subscriptions found.</p>
        )}
      </div>
      {/* <div className="mt-3">
        You
      </div> */}
    </div>
  );
};

export default Sidebar;
