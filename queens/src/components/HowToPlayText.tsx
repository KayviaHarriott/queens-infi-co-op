import CrossIcon_SVG from "../components/icons/cross_icon.svg";
import QueenIcon_SVG from "../components/icons/queen_icon.svg";

export const HowToPlayText = () => {
  return (
    <div className="text-[14px]">
      <p>
        1. Your goal is to have exactly one{" "}
        <img
          style={{
            width: "14px",
            height: "14px",
            display: "inline-block",
            marginRight: "8px",
            verticalAlign: "middle",
          }}
          src={QueenIcon_SVG}
          alt={"Queen"}
        />
        in each row, column, and color region.
      </p>
      <p>
        2. Tap once to place <img
          style={{
            width: "14px",
            height: "14px",
            display: "inline-block",
            marginRight: "8px",
            verticalAlign: "middle",
          }}
          src={CrossIcon_SVG}
          alt={"Cross"}
        /> and tap twice for <img
        style={{
          width: "14px",
          height: "14px",
          display: "inline-block",
          marginRight: "8px",
          verticalAlign: "middle",
        }}
        src={QueenIcon_SVG}
        alt={"Queen"}
      />. Use <img
      style={{
        width: "14px",
        height: "14px",
        display: "inline-block",
        marginRight: "8px",
        verticalAlign: "middle",
      }}
      src={CrossIcon_SVG}
      alt={"Cross"}
    /> to mark where <img
      style={{
        width: "14px",
        height: "14px",
        display: "inline-block",
        marginRight: "8px",
        verticalAlign: "middle",
      }}
      src={QueenIcon_SVG}
      alt={"Queen"}
    />
        cannot be placed.
      </p>
      <p>
        3. Two <img
          style={{
            width: "14px",
            height: "14px",
            display: "inline-block",
            marginRight: "8px",
            verticalAlign: "middle",
          }}
          src={QueenIcon_SVG}
          alt={"Queen"}
        /> cannot touch each other, not even diagonally.
      </p>
    </div>
  );
};
