import Relai from "./Relai";
import "./fitting.css";

const FittingRoom = () => {
  return (
    <div>
      <div class="ft">
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="col"></div>
              <div class="col">
                <Relai />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="md">
              <img src="./model.png" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FittingRoom;
