import { Container, WrapperContainer } from "./Container";

export const CopyPaste = ({ id }) => {
  const copyToClipboard = () => {
    if (!id) return;
    // Get the input field
    var copyText = document.getElementById(id);
    const textarea = document.createElement("textarea");
    textarea.value = copyText.textContent;
    document.body.appendChild(textarea);
    // Select the text field
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };
  return (
    <div className="copy-icon" title="Copy/Paste" onClick={copyToClipboard} />
  );
};

export const CopyPasteContainer = ({ id, type, content }) => {
  return content ? (
    <WrapperContainer className="md-bg" styleProps={{ borderRadius: "5px" }}>
      <Container
        className="p-xs"
        styleProps={{
          justifyContent: "space-between",
          paddingRight: "1rem",
        }}
      >
        {type ? <i>{type}</i> : ""}
        <CopyPaste id={id} />
      </Container>
      <pre className="code-block" id={id}>
        {content}
      </pre>
    </WrapperContainer>
  ) : (
    ""
  );
};
