import { WrapperContainer } from "./Container";
import { CopyPasteContainer } from "./CopyPaste";
import { Text } from "./PageTitle";

export const StepBuilder = ({ data }) => {
  return data?.map((item, index) => (
    <WrapperContainer key={index}>
      <Text text={`${index + 1}. ${item.label}`} />
      <ul className="secondary-font">
        {item.steps.map((el, indexElItem) => (
          <li key={indexElItem}>
            {el.label} -{" "}
            {typeof el.description === "string" ? (
              el.description
            ) : Array.isArray(el.description) ? (
              <ul>
                {el.description.map((ul, indexItem) => (
                  <li key={indexItem}>{ul}</li>
                ))}
              </ul>
            ) : (
              ""
            )}
            <CopyPasteContainer
              id={index + el.codeType}
              content={el.code}
              type={el.codeType}
            />
          </li>
        ))}
      </ul>
    </WrapperContainer>
  ));
};
