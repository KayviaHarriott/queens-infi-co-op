import QueenIcon_SVG from "../components/icons/queen_icon.svg";
import example1 from "/examples/example1.png"
import example2 from "/examples/example2.png"
import example3 from "/examples/example3.png"
import example4 from "/examples/example4.png"

export const Examples = () => {
  return (
    <div className="flex">
      <div className="text-[14px] flex whitespace-nowrap gap-8 overflow-x-auto w-full max-w-full">
        {[
          {
            picture: example1,
            alt: "",
            caption: (
              <div>
                <p>
                  Each row can only have one{" "}
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
                </p>
              </div>
            ),
          },
          {
            picture: example2,
            alt: "",
            caption: (
              <div>
                <p>
                  Each column can also only have one{" "}
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
                </p>
              </div>
            ),
          },
          {
            picture: example3,
            alt: "",
            caption: (
              <div>
                <p>
                  Each color region can also only have one{" "}
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
                </p>
              </div>
            ),
          },
          {
            picture: example4,
            alt: "",
            caption: (
              <div>
                <p>
                  Two{" "}
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
                  />{" "}
                  cannot touch each other, not even diagonally
                </p>
              </div>
            ),
          },
        ].map((example, index) => (
          <div key={index}>
            <img style={{width: "200px"}} src={example.picture} alt="" />
            <div className="w-[200px] flex text-wrap">{example.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
