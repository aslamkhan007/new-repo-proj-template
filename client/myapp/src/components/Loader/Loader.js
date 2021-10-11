import { useHistory } from "react-router";
export const Loader = (data1) => {
    const history  = useHistory();

  return (
    
      <div class="loader">

          Loading...
         {/* if(data1){
             history.push("/login")
         } */}
      </div>
    
  );
};
