import { TailSpin } from "react-loader-spinner";

function Loader() {
    return (
       
            <TailSpin
                height={80}
                width={80}
                color="#A854F7"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                visible={true}
            />
    );
}

export default Loader;