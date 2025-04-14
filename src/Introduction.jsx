import "./style/Introduction.scss";
import Video from "./Video";

const Introduction = function () {
  return (
    <div className="intro">
      <div className="intro-description">
        <p>
          Tworzymy kartki okolicznościowe inspirowane sztuką klasyczną –
          spokojne, przemyślane, bliskie codziennym chwilom. Sięgamy po obrazy
          dawnych mistrzów, by zatrzymać w nich coś z nastroju tamtych czasów i
          połączyć z prostym gestem pamięci. Wierzymy, że piękno nie musi być
          głośne. Nasze kartki są dla tych, którzy cenią detale, subtelność i
          rzeczy robione z uważnością. Na drobne okazje i ważne momenty – żeby
          powiedzieć coś więcej niż tylko kilka słów.
        </p>
      </div>

      <Video />
    </div>
  );
};

export default Introduction;
