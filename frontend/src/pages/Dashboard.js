import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";
import { getAll } from "../actions/goalAction";

function Dashboard({ auth, goals, isLoading }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //console.log(auth, goals);
  useEffect(() => {
    // if (errors) {
    //   console.log(errors);
    // }
    if (!auth) {
       navigate("/login");
    }
    dispatch(getAll());
  }, [auth,navigate,dispatch]);
  

    return (
      <>
        <section className="heading">
          <h1>Welcome {auth && auth.name}</h1>
          <p>Goals Dashboard</p>
        </section>
        <GoalForm />
        <section className="content">
          {goals.length > 0 ? (
            <div className="goals">
              {goals.map(goal => {
                return <GoalItem goal={goal} key={goal._id} />;
              })}
            </div>
          ) : (
            <h3>You have not set any goals</h3>
          )}
        </section>
      </>
    );

}

export default Dashboard;
