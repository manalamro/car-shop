import { useMemo ,useState} from "react";
import { useParams } from "react-router-dom";


const useSpicificCar = (cars) => {
    const params = useParams();
    const [car, setCar] = useState(null);

     useMemo(() => {
        const currentCar = cars.find((c) => c.id == params.id) || null;
       return setCar(currentCar);
      }, [params.id, cars]);
    
      return [car];

};

export default useSpicificCar;
