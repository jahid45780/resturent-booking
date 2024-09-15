import { RiseLoader } from "react-spinners";

const Loader = () => {
    return (
        <div  className=" flex justify-center items-center mt-14" >
            <RiseLoader
           
              size={30}
              color="#8ABA51"
            />
        </div>
    );
};

export default Loader;