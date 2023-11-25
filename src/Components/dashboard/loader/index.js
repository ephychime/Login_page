import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
return (
    <div>
        <ColorRing
          colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
          height={30}
          width={30}
          position="absolute"
          timeout={1500}
          />
    </div>
)
};

export default Loader